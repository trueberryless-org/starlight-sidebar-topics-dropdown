import type { Props } from "@astrojs/starlight/props";

import type { StarlightSidebarTopicsDropdownSharedConfig } from "./config";
import { isStarlightEntryWithTopic, type StarlightEntry } from "./content";
import { getLocaleFromSlug, getLocalizedSlug } from "./i18n";
import { arePathnamesEqual, stripLeadingAndTrailingSlashes } from "./pathname";

const absoluteLinkRegex = /^https?:\/\//;

export function getCurrentTopic(
  config: StarlightSidebarTopicsDropdownSharedConfig,
  sidebar: SidebarEntry[],
  currentSlug: string,
  entry: StarlightEntry
): Topic | undefined {
  // If the current page has a topic ID, use it to find the topic.
  const topicId = getTopicIdFromEntry(entry);
  if (topicId) return getTopicById(config, sidebar, topicId);

  // Start by checking if the current page is a topic root.
  const topicFromSlug = getTopicFromSlug(config, sidebar, currentSlug);
  if (topicFromSlug) return topicFromSlug;

  // Otherwise, find the current topic by looking for the current page in the sidebar.
  const currentSidebarTopic = getCurrentSidebarTopic(sidebar);
  if (!currentSidebarTopic) return;

  const currentTopicConfig =
    config[Number.parseInt(currentSidebarTopic.label, 10)];
  if (!currentTopicConfig) return;

  const sidebarHasGroups =
    currentSidebarTopic.entries.length !== 1 ||
    currentSidebarTopic.entries[0]?.label !== "";

  return {
    config: currentTopicConfig,
    sidebar: currentSidebarTopic.entries,
    sidebarHasGroups,
  };
}

export function isTopicFirstPage(
  sidebar: SidebarEntry[],
  currentSlug: string
): boolean {
  const currentSidebarTopic = getCurrentSidebarTopic(sidebar);
  if (!currentSidebarTopic) return false;

  const firstPage = getSidebarFirstPage(currentSidebarTopic.entries);
  if (!firstPage) return false;

  return arePathnamesEqual(
    stripLeadingAndTrailingSlashes(firstPage.href),
    currentSlug
  );
}

export function isTopicLastPage(
  sidebar: SidebarEntry[],
  currentSlug: string
): boolean {
  const currentSidebarTopic = getCurrentSidebarTopic(sidebar);
  if (!currentSidebarTopic) return false;

  const lastPage = getSidebarLastPage(currentSidebarTopic.entries);
  if (!lastPage) return false;

  return arePathnamesEqual(
    stripLeadingAndTrailingSlashes(lastPage.href),
    currentSlug
  );
}

function getSidebarFirstPage(sidebar: SidebarEntry[]) {
  const entry = sidebar[0];
  if (!entry) return;
  if (entry.type === "link") return entry;

  return getSidebarFirstPage(entry.entries);
}

function getSidebarLastPage(sidebar: SidebarEntry[]) {
  const entry = sidebar.at(-1);
  if (!entry) return;
  if (entry.type === "link") return entry;

  return getSidebarLastPage(entry.entries);
}

function getTopicFromSlug(
  config: StarlightSidebarTopicsDropdownSharedConfig,
  sidebar: SidebarEntry[],
  slug: string
): Topic | undefined {
  let topicConfig: Topic["config"] | undefined;
  let topicSidebar: Topic["sidebar"] | undefined;
  let sidebarHasGroups = false;

  // Start by checking if the current page is a topic homepage.
  let groupTopicIndex = -1;
  const slugLocale = getLocaleFromSlug(slug);

  for (const topic of config) {
    if (topic.type === "group") groupTopicIndex++;

    if (
      !absoluteLinkRegex.test(topic.link) &&
      arePathnamesEqual(
        getLocalizedSlug(
          stripLeadingAndTrailingSlashes(topic.link),
          slugLocale
        ),
        slug
      ) &&
      groupTopicIndex !== -1
    ) {
      const sidebarTopic = sidebar[groupTopicIndex];

      if (sidebarTopic?.type === "group") {
        topicConfig = topic;
        topicSidebar = sidebarTopic.entries;
        sidebarHasGroups =
          sidebarTopic.entries.length !== 1 ||
          sidebarTopic.entries[0]?.label !== "";
      }

      break;
    }
  }

  if (!topicConfig || !topicSidebar) return;

  return { config: topicConfig, sidebar: topicSidebar, sidebarHasGroups };
}

function getTopicById(
  config: StarlightSidebarTopicsDropdownSharedConfig,
  sidebar: SidebarEntry[],
  id: string
): Topic | undefined {
  let topicConfig: Topic["config"] | undefined;
  let topicSidebar: Topic["sidebar"] | undefined;
  let sidebarHasGroups = false;
  let groupTopicIndex = -1;
  for (const topic of config) {
    if (topic.type === "group") groupTopicIndex++;
    if (topic.type === "group" && topic.id === id) {
      const sidebarTopic = sidebar[groupTopicIndex];
      if (sidebarTopic?.type === "group") {
        topicConfig = topic;
        topicSidebar = sidebarTopic.entries;
        sidebarHasGroups =
          sidebarTopic.entries.length !== 1 ||
          sidebarTopic.entries[0]?.label !== "";
      }
      break;
    }
  }
  if (!topicConfig || !topicSidebar) return;
  return { config: topicConfig, sidebar: topicSidebar, sidebarHasGroups };
}

function getCurrentSidebarTopic(
  sidebar: SidebarEntry[]
): SidebarTopic | undefined {
  let currentSidebarTopic: SidebarTopic | undefined;

  for (const topic of sidebar) {
    if (topic.type === "link") continue;

    const currentSidebarEntry = getCurrentSidebarEntry(topic.entries);

    if (currentSidebarEntry) {
      currentSidebarTopic = topic;
      break;
    }
  }

  return currentSidebarTopic;
}

function getCurrentSidebarEntry(
  sidebar: SidebarEntry[]
): SidebarEntry | undefined {
  return sidebar.find((entry) => {
    if (entry.type === "link") {
      return entry.isCurrent;
    }

    return getCurrentSidebarEntry(entry.entries);
  });
}

function getTopicIdFromEntry(entry: StarlightEntry): string | undefined {
  return isStarlightEntryWithTopic(entry) ? entry.data.topic : undefined;
}

type SidebarEntry = Props["sidebar"][number];

interface SidebarTopic {
  label: string;
  entries: SidebarEntry[];
}

export interface Topic {
  config: StarlightSidebarTopicsDropdownSharedConfig[number];
  sidebar: SidebarEntry[];
  sidebarHasGroups: boolean;
}

import { throwPluginError } from "./error";

type SidebarTopicsData = App.Locals["starlightSidebarTopics"];

export type SidebarTopic = SidebarTopicsData["topics"][number];

export interface TopicsDropdown {
  currentTopic: SidebarTopic;
  topics: SidebarTopic[];
}

export function getTopicsDropdown(
  locals: App.Locals
): TopicsDropdown | undefined {
  return resolveTopicsDropdown(
    locals.starlightRoute.hasSidebar,
    getSidebarTopicsData(locals)
  );
}

export function getSidebarTopicsData(locals: App.Locals): SidebarTopicsData {
  if (!("starlightSidebarTopics" in locals)) {
    throwPluginError(
      "The Starlight Sidebar Topics Dropdown component requires the Starlight Sidebar Topics plugin.",
      "Install the `starlight-sidebar-topics` package and add the plugin to the `plugins` array of your Starlight configuration. Follow the getting started guide at https://starlight-sidebar-topics.netlify.app/docs/getting-started/ for more information."
    );
  }

  return locals.starlightSidebarTopics;
}

export function resolveTopicsDropdown(
  hasSidebar: boolean,
  { isPageWithTopic, topics }: SidebarTopicsData
): TopicsDropdown | undefined {
  if (!hasSidebar || !isPageWithTopic) return;

  const currentTopic = topics.find((topic) => topic.isCurrent);
  if (!currentTopic) return;

  return { currentTopic, topics };
}

export function getTopicLinkAttributes({ attrs }: SidebarTopic) {
  const { class: className, ...attributes } = attrs ?? {};

  return { attributes, className };
}

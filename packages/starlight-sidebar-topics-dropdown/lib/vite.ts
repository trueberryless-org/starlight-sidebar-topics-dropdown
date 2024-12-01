import type { ViteUserConfig } from "astro";

import type {
  StarlightSidebarTopicsDropdownConfig,
  StarlightSidebarTopicsDropdownSharedConfig,
} from "./config";

const moduleId = "virtual:starlight-sidebar-topics-dropdown/config";

export function vitePluginStarlightSidebarTopicsDropdown(
  config: StarlightSidebarTopicsDropdownConfig
): VitePlugin {
  const resolvedModuleId = `\0${moduleId}`;

  const sharedConfig: StarlightSidebarTopicsDropdownSharedConfig = config.map(
    (topic) => {
      if (!("items" in topic)) return { ...topic, type: "link" };
      const { items, ...topicWithoutItems } = topic;
      return { ...topicWithoutItems, type: "group" };
    }
  );

  const moduleContent = `export default ${JSON.stringify(sharedConfig)}`;

  return {
    name: "vite-plugin-starlight-sidebar-topics-dropdown",
    load(id) {
      return id === resolvedModuleId ? moduleContent : undefined;
    },
    resolveId(id) {
      return id === moduleId ? resolvedModuleId : undefined;
    },
  };
}

type VitePlugin = NonNullable<ViteUserConfig["plugins"]>[number];

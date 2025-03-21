import type { StarlightPlugin } from "@astrojs/starlight/types";

import { overrideStarlightComponent } from "./libs/starlight";

export default function starlightSidebarTopicsDropdownPlugin(): StarlightPlugin {
  return {
    name: "starlight-sidebar-topics-dropdown-plugin",
    hooks: {
      "config:setup"({
        command,
        config: starlightConfig,
        logger,
        updateConfig,
      }) {
        if (command !== "dev" && command !== "build") return;

        updateConfig({
          components: {
            ...starlightConfig.components,
            ...overrideStarlightComponent(
              starlightConfig.components,
              logger,
              "Sidebar",
              "Sidebar"
            ),
          },
          customCss: [
            "starlight-sidebar-topics-dropdown/top-level-items.css",
            ...(starlightConfig.customCss || []),
          ],
        });
      },
    },
  };
}

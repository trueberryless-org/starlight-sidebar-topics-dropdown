import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightSidebarTopicsDropdown from "starlight-sidebar-topics-dropdown";
import starlightLinksValidator from "starlight-links-validator";
import starlightPluginsDocsComponents from "@trueberryless-org/starlight-plugins-docs-components";
import starlightPluginShowLatestVersion from "starlight-plugin-show-latest-version";
import starlightSidebarTopics from "starlight-sidebar-topics";

import node from "@astrojs/node";

export default defineConfig({
  integrations: [
    starlight({
      title: "Starlight Sidebar Topics Dropdown",
      logo: {
        light: "./src/assets/logo-white.png",
        dark: "./src/assets/logo-dark.png",
        replacesTitle: true,
      },
      customCss: ["./src/styles/custom.css"],
      editLink: {
        baseUrl:
          "https://github.com/trueberryless-org/starlight-sidebar-topics-dropdown/edit/main/docs/",
      },
      plugins: [
        starlightSidebarTopicsDropdown(),
        starlightSidebarTopics([
          {
            label: "Documentation",
            link: "/docs/getting-started/",
            icon: "open-book",
            items: [
              {
                label: "Start Here",
                items: ["docs/getting-started", "docs/configuration"],
              },
              { label: "Guides", autogenerate: { directory: "docs/guides" } },
              {
                label: "Resources",
                items: [
                  {
                    label: "Showcase",
                    link: "/resources/sites/",
                  },
                  {
                    label: "Plugins",
                    link: "/resources/plugins/",
                  },
                  {
                    label: "Content from HiDeoo",
                    link: "/resources/hideoo/",
                  },
                ],
              },
            ],
          },
          {
            id: "demo",
            label: {
              en: "Demo",
              fr: "Démo",
            },
            link: "/demo/",
            icon: "puzzle",
            items: [
              { label: "API", autogenerate: { directory: "demo/api" } },
              {
                label: "Components",
                autogenerate: { directory: "demo/components" },
              },
              {
                label: "Commands",
                autogenerate: { directory: "demo/commands" },
                collapsed: true,
              },
            ],
            badge: {
              text: {
                en: "Stub",
                fr: "Ébauche",
              },
              variant: "caution",
            },
          },
          {
            id: "unnested-sidebar",
            label: "Unnested Sidebar",
            link: "/unnested-sidebar/",
            icon: "right-caret",
            items: [
              { slug: "unnested-sidebar" },
              { slug: "unnested-sidebar/lorem-ipsum" },
              {
                label: "Lorem ipsum",
                items: [{ slug: "unnested-sidebar/group/lorem-ipsum" }],
              },
              { slug: "unnested-sidebar/lorem-ipsum-2" },
            ],
          },
          {
            label: "Starlight Docs",
            link: "https://starlight.astro.build/",
            icon: "starlight",
          },
        ]),
        starlightLinksValidator(),
        starlightPluginsDocsComponents({
          pluginName: "starlight-sidebar-topics-dropdown",
          showcaseProps: {
            entries: [
              {
                title: "TanaFlows Documentation",
                thumbnail: "./src/assets/tanaflows-docs.png",
                href: "https://docs.ghostfam.com/",
                description: "Professional multilingual theme for ghost CMS",
              },
            ],
          },
        }),
        starlightPluginShowLatestVersion({
          source: {
            type: "npm",
            slug: "starlight-sidebar-topics-dropdown",
          },
          showInSiteTitle: "deferred",
        }),
      ],
      social: {
        github:
          "https://github.com/trueberryless-org/starlight-sidebar-topics-dropdown",
      },
    }),
  ],
  adapter: node({
    mode: "standalone",
  }),
});

import starlight from "@astrojs/starlight";
import starlightPluginsDocsComponents from "@trueberryless-org/starlight-plugins-docs-components";
import { defineConfig } from "astro/config";
import starlightLinksValidator from "starlight-links-validator";
import starlightSidebarTopics from "starlight-sidebar-topics";

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
      components: {
        Sidebar: "./src/components/Sidebar.astro",
      },
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        ar: {
          label: "العربية",
          dir: "rtl",
        },
      },
      plugins: [
        starlightSidebarTopics([
          {
            label: "Documentation",
            link: "/docs/getting-started/",
            icon: "open-book",
            items: [
              {
                label: "Start Here",
                items: ["docs/getting-started"],
              },
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
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/trueberryless-org/starlight-sidebar-topics-dropdown",
        },
      ],
    }),
  ],
});

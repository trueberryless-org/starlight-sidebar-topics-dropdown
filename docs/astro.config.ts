import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightSidebarTopicsDropdown from "starlight-sidebar-topics-dropdown";
import starlightLinksValidator from "starlight-links-validator";

export default defineConfig({
    integrations: [
        starlight({
            customCss: ["./src/styles/custom.css"],
            editLink: {
                baseUrl:
                    "https://github.com/trueberryless-org/starlight-sidebar-topics-dropdown/edit/main/docs/",
            },
            plugins: [
                starlightSidebarTopicsDropdown([
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
                            { label: "Resources", items: ["docs/resources/starlight"] },
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
                            { label: "Components", autogenerate: { directory: "demo/components" } },
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
                        label: "Showcase",
                        link: "/showcase/websites/",
                        icon: "star",
                        items: [
                            { label: "Showcase", items: ["showcase/websites", "showcase/plugins"] },
                            { label: "Shoutouts", link: "/showcase/shoutouts" },
                        ],
                    },
                    {
                        label: "Starlight Docs",
                        link: "https://starlight.astro.build/",
                        icon: "starlight",
                    },
                ]),
                starlightLinksValidator(),
            ],
            social: {
                github: "https://github.com/trueberryless-org/starlight-sidebar-topics-dropdown",
            },
            title: "Starlight Sidebar Topics Dropdown",
        }),
    ],
});

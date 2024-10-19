import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightSidebarTopicsDropdown from "starlight-sidebar-topics-dropdown";

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
                        label: "Start Here",
                        link: "/getting-started/",
                        icon: "open-book",
                        items: [{ slug: "getting-started" }],
                    },
                ]),
            ],
            social: {
                github: "https://github.com/trueberryless-org/starlight-sidebar-topics-dropdown",
            },
            title: "Starlight Sidebar Topics Dropdown",
        }),
    ],
});

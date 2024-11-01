import { defineCollection } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";
import { topicSchema } from "starlight-sidebar-topics-dropdown/schema";

export const collections = {
    docs: defineCollection({ schema: docsSchema({ extend: topicSchema }) }),
};

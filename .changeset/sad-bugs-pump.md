---
"starlight-sidebar-topics-dropdown": minor
---

⚠️ **BREAKING CHANGE:** This plugin now uses the [Starlight Sidebar Topics](https://starlight-sidebar-topics.netlify.app/) plugin as a peer dependency. Please follow the upgrade guide below to migrate to the new version.

1. Install the [Starlight Sidebar Topics](https://starlight-sidebar-topics.netlify.app/) plugin:

   ```sh
   npm i starlight-sidebar-topics
   ```

2. Update the `starlight-sidebar-topics-dropdown` plugin in your `astro.config.mjs` (use the `starlight-sidebar-topics` plugin instead):

   ```diff lang="js"
   // astro.config.mjs
   -import starlightSidebarTopicsDropdown from "starlight-sidebar-topics-dropdown";
   +import starlightSidebarTopics from "starlight-sidebar-topics";
   ```

3. Exchange the `starlight-sidebar-topics-dropdown` plugin with the `starlight-sidebar-topics` plugin and add a manual override for the `Sidebar` component where you can use the dropdown component from the `starlight-sidebar-topics-dropdown` plugin:

   ```diff lang="js"
   // astro.config.mjs
   export default defineConfig({
     integrations: [
       starlight({
         plugins: [
   -        starlightSidebarTopicsDropdown([
   +        starlightSidebarTopics([
             {
               label: 'Guides',
               link: '/guides/',
               icon: 'open-book',
               items: ['guides/getting-started', 'guides/manual-setup'],
             },
             {
               label: 'Reference',
               link: '/reference/',
               icon: 'information',
               items: ['reference/api', 'reference/components'],
             },
           ]),
         ],
   +      components: {
   +        Sidebar: "starlight-sidebar-topics-dropdown/TopicsDropdownSidebarOverride.astro",
   +      },
       }),
     ],
   });
   ```

4. Update the schema import in `src/content.config.ts`:

   ```diff lang="ts"
   // src/content.config.ts
   -import { topicSchema } from "starlight-sidebar-topics-dropdown/schema";
   +import { topicSchema } from "starlight-sidebar-topics/schema";
   ```

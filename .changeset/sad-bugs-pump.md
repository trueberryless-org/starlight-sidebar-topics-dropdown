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
             // Your Starlight Sidebar Topics configuration here (unchanged).
           ]),
         ],
   +      components: {
   +        Sidebar: './src/components/Sidebar.astro',
   +      },
       }),
     ],
   });
   ```

4. Create an Astro component to replace the default Starlight `<Sidebar>` component with which will render the topic list dropdown menu and [re-use the default Starlight sidebar](https://starlight.astro.build/guides/overriding-components/#reuse-a-built-in-component):

   ```astro
   ---
   // src/components/Sidebar.astro
   import Default from '@astrojs/starlight/components/Sidebar.astro';
   import TopicsDropdown from 'starlight-sidebar-topics-dropdown/TopicsDropdown.astro';
   ---

   {/* Render the topics dropdown menu. */}
   <TopicsDropdown />
   {/* Render the default sidebar. */}
   <Default><slot /></Default>
   ```

5. Update the schema import in `src/content.config.ts`:

   ```diff lang="ts"
   // src/content.config.ts
   -import { topicSchema } from "starlight-sidebar-topics-dropdown/schema";
   +import { topicSchema } from "starlight-sidebar-topics/schema";
   ```

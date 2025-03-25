# starlight-sidebar-topics-dropdown

## 0.5.1

### Patch Changes

- [`3a59211`](https://github.com/trueberryless-org/starlight-sidebar-topics-dropdown/commit/3a59211f9e3ad4f73186f73a8d9dbe3d7d1b0d6c) Thanks [@trueberryless](https://github.com/trueberryless)! - Update keywords and description

## 0.5.0

### Minor Changes

- [#40](https://github.com/trueberryless-org/starlight-sidebar-topics-dropdown/pull/40) [`acf6f15`](https://github.com/trueberryless-org/starlight-sidebar-topics-dropdown/commit/acf6f156d4e8eaa00b2205dbb89befbd5dea27c7) Thanks [@trueberryless](https://github.com/trueberryless)! - ⚠️ **BREAKING CHANGE:** This plugin now uses the [Starlight Sidebar Topics](https://starlight-sidebar-topics.netlify.app/) plugin as a peer dependency. Please follow the upgrade guide below to migrate to the new version.

  1. Install the [Starlight Sidebar Topics](https://starlight-sidebar-topics.netlify.app/) plugin:

     ```sh
     npm i starlight-sidebar-topics
     ```

  2. Update the `starlight-sidebar-topics-dropdown` component in your `astro.config.mjs` (use the `starlight-sidebar-topics` plugin instead):

     ```diff lang="js"
     // astro.config.mjs
     -import starlightSidebarTopicsDropdown from "starlight-sidebar-topics-dropdown";
     +import starlightSidebarTopics from "starlight-sidebar-topics";
     ```

  3. Exchange the `starlight-sidebar-topics-dropdown` component with the `starlight-sidebar-topics` plugin and add a manual override for the `Sidebar` component where you can use the dropdown component from the `starlight-sidebar-topics-dropdown` component:

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
     import Default from "@astrojs/starlight/components/Sidebar.astro";
     import TopicsDropdown from "starlight-sidebar-topics-dropdown/TopicsDropdown.astro";
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

## 0.4.1

### Patch Changes

- [`01024d4`](https://github.com/trueberryless-org/starlight-sidebar-topics-dropdown/commit/01024d471326097f20087ac401bd1df4d9a8cd22) Thanks [@trueberryless](https://github.com/trueberryless)! - Small fixes and docs changes

## 0.4.0

### Minor Changes

- [#31](https://github.com/trueberryless-org/starlight-sidebar-topics-dropdown/pull/31) [`3193771`](https://github.com/trueberryless-org/starlight-sidebar-topics-dropdown/commit/31937716171b020f414ece6783c17181fbd5fdcf) Thanks [@trueberryless](https://github.com/trueberryless)! - ⚠️ **BREAKING CHANGE:** The Starlight Sidebar Topics Dropdown plugin no longer provides the same ["Unnested Sidebar" configuration](https://starlight-sidebar-topics-dropdown.trueberryless.org/docs/guides/unnested-sidebar/) like before. Please adapt your `astro.config.mjs` with the up-to-date guide on [how to configure a "Unnested Sidebar"](https://starlight-sidebar-topics-dropdown.trueberryless.org/docs/guides/unnested-sidebar/#configure-an-unnested-sidebar).

- [#31](https://github.com/trueberryless-org/starlight-sidebar-topics-dropdown/pull/31) [`db10526`](https://github.com/trueberryless-org/starlight-sidebar-topics-dropdown/commit/db10526d49aab3ac8619159d40968dbc4748c9a0) Thanks [@trueberryless](https://github.com/trueberryless)! - ⚠️ **BREAKING CHANGE:** The minimum supported version of Starlight is now version `0.32.0`.

  Please use the `@astrojs/upgrade` command to upgrade your project:

  ```sh
  npx @astrojs/upgrade
  ```

- [#31](https://github.com/trueberryless-org/starlight-sidebar-topics-dropdown/pull/31) [`db10526`](https://github.com/trueberryless-org/starlight-sidebar-topics-dropdown/commit/db10526d49aab3ac8619159d40968dbc4748c9a0) Thanks [@trueberryless](https://github.com/trueberryless)! - ⚠️ **BREAKING CHANGE:** The Starlight Sidebar Topics Dropdown plugin no longer [overrides](https://starlight.astro.build/guides/overriding-components/) the [`<Pagination>` component](https://starlight.astro.build/reference/overrides/#pagination). If you were manually rendering `starlight-sidebar-topics-dropdown/overrides/Pagination.astro` in a custom override, you can now remove it.

## 0.3.0

### Minor Changes

- [#16](https://github.com/trueberryless-org/starlight-sidebar-topics-dropdown/pull/16) [`9edb5dc`](https://github.com/trueberryless-org/starlight-sidebar-topics-dropdown/commit/9edb5dca0215df684c4471ed7e1fe878617be91a) Thanks [@trueberryless](https://github.com/trueberryless)! - Adds support for Astro v5, drops support for Astro v4.

  ⚠️ **BREAKING CHANGE:** The minimum supported version of Starlight is now `0.30.0`.

  Please follow the [upgrade guide](https://github.com/withastro/starlight/releases/tag/%40astrojs/starlight%400.30.0) to update your project.

  Note that the [`legacy.collections` flag](https://docs.astro.build/en/reference/legacy-flags/#collections) is not supported by this plugin and you should update your collections to use Astro's new Content Layer API.

### Patch Changes

- [#18](https://github.com/trueberryless-org/starlight-sidebar-topics-dropdown/pull/18) [`2039e9a`](https://github.com/trueberryless-org/starlight-sidebar-topics-dropdown/commit/2039e9a60659b5628c7406952bde0d453e38aeda) Thanks [@trueberryless](https://github.com/trueberryless)! - Add Unnested Sidebar configuration

## 0.2.2

### Patch Changes

- [#11](https://github.com/trueberryless-org/starlight-sidebar-topics-dropdown/pull/11) [`88b99c5`](https://github.com/trueberryless-org/starlight-sidebar-topics-dropdown/commit/88b99c5efda810aa7a614752af18dd01af7fc1e0) Thanks [@trueberryless](https://github.com/trueberryless)! - Improves missing topic error messages by including the slug of the relevant page

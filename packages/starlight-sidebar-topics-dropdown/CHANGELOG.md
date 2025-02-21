# starlight-sidebar-topics-dropdown

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

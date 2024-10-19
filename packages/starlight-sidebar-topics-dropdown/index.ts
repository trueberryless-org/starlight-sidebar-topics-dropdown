import type { StarlightPlugin } from '@astrojs/starlight/types'

export default function starlightSidebarTopicsDropdown(): StarlightPlugin {
  return {
    name: 'starlight-sidebar-topics-dropdown',
    hooks: {
      setup({ logger }) {
        /**
         * This is the entry point of your Starlight plugin.
         * The `setup` hook is called when Starlight is initialized (during the Astro `astro:config:setup` integration
         * hook).
         * To learn more about the Starlight plugin API and all available options in this hook, check the Starlight
         * plugins reference.
         *
         * @see https://starlight.astro.build/reference/plugins/
         */
        logger.info('Hello from the starlight-sidebar-topics-dropdown plugin!')
      },
    },
  }
}

import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightSidebarTopicsDropdown from 'starlight-sidebar-topics-dropdown'

export default defineConfig({
  integrations: [
    starlight({
      editLink: {
        baseUrl: 'https://github.com/trueberryless-org/starlight-sidebar-topics-dropdown/edit/main/docs/',
      },
      plugins: [starlightSidebarTopicsDropdown()],
      sidebar: [
        {
          label: 'Start Here',
          items: [{ slug: 'getting-started' }],
        },
      ],
      social: {
        github: 'https://github.com/trueberryless-org/starlight-sidebar-topics-dropdown',
      },
      title: 'starlight-sidebar-topics-dropdown',
    }),
  ],
})

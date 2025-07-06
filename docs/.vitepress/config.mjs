import { defineConfig } from 'vitepress'
import footnote from 'markdown-it-footnote'
import anchor from 'markdown-it-anchor'
import container from 'markdown-it-container'
import taskLists from 'markdown-it-task-lists'

export default defineConfig({
  title: 'Skyblock Guide/Wiki by Fury',
  description: 'A Progression guide/wiki for Fakepixel Skyblock',
  base: '/',

  markdown: {
    config(md) {
      md.use(footnote)
      md.use(anchor)
      md.use(container, 'info')
      md.use(taskLists)
    },
    // Ensures images like <img ...> render inline
    image: {
      lazyLoading: false // Optional: load all images eagerly (for emoji-sized ones)
    }
  },

  themeConfig: {
    nav: [
      { text: 'Guide', link: '/main' },
      { text: 'Contact', link: '/contacts' }
    ],
    sidebar: {
      '/stages/': [
        {
          text: 'Progression Stages',
          items: [
            { text: 'Early Game', link: '/stages/early-game' },
            { text: 'Early-Mid Game', link: '/stages/early-mid-game' },
            { text: 'Mid Game', link: '/stages/mid-game' },
            { text: 'Mid-Late Game', link: '/stages/mid-late-game' },
            { text: 'Late Game', link: '/stages/late-game' },
            { text: 'End Game', link: '/stages/end-game' }
          ]
        }
      ],
      '/skills/': [
        {
          text: 'Skill Guides',
          items: [
            { text: 'Combat', link: '/skills/Combat' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/UnTamed-Fury/phub' }
    ]
  }
})

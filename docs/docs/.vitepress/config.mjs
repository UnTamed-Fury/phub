import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fakepixel Skyblock Guide',
  description: 'Step-by-step progression for Fakepixel Skyblock',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/stages/early-game' },
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
          items: [{ text: 'Combat', link: '/skills/Combat' }]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/UnTamed-Fury/phub' }
    ]
  }
})

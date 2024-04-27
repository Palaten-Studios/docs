import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { description } from '../../package'

export default defineUserConfig({
  bundler: viteBundler(),
  head: [
    ['meta', { name: 'theme-color', content: '#694209' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  theme: defaultTheme({
    colorMode: 'dark',
    colorModeSwitch: false,
    navbar: [
        {
          text: 'Guide',
          link: '/guide/',
        },
        {
          text: 'Frontline',
          link: '/frontline/',
        },
        {
            text: 'LOTSR',
            link: '/lotsr/',
        }
      ],
    sidebar: {
        '/guide/': 
      [
        {
          text: 'Guide',
          collapsable: true,
          children: [
            {
                text: 'Create Account',
                link: 'create-account'
            },
            {
                text: 'Game Launcher',
                link: 'game-launcher'
            },
            {
                text: 'Discord Server',
                link: 'discord-server'
            },
            {
                text: 'Website',
                link: 'website'
            },
            {
                text: 'Social Media',
                link: 'social-media'
            }     
          ],
        },
      ]
    }
  }),

  lang: 'en-US',
  title: 'Palaten Docs',
  description: description
})
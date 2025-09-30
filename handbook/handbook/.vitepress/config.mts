import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  appearance: 'force-dark',
  head: [['link', { rel: 'icon', href: '/logo.svg' }]],
  title: "Velquorin",
  description: "The Velquorin handbook",
  base: '/handbook/',
  outDir: '../../dist/handbook',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/branding/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Introduction', link: '/intro/introduction' },
      { text: 'Downloads', link: 'https://github.com/velquorin/client/releases' },
      { text: 'Attributions', link: 'https://github.com/velquorin/client?tab=readme-ov-file#credits--attributions' }
    ],

    sidebar: [
      {
        text: 'Getting started',
        items: [
          { text: 'Welcome & overview', link: '/intro/introduction' },
          { text: 'Installation guide', link: '/intro/installation' },
          { text: 'First launch & onboarding', link: '/intro/onboarding' }
        ]
      },
      {
        text: 'Core features',
        items: [
          { text: 'Navigating the UI', link: '/basics/ui-navigation' },
          { text: 'Widgets & HUD elements', link: '/basics/widgets' },
          { text: 'Waypoints system', link: '/basics/waypoints' },
          { text: 'Configuration management', link: '/basics/managing-config' }
        ]
      },
      {
        text: 'Advanced usage',
        items: [
          { text: 'Formatting pattern & syntax', link: '/advanced/formatting-and-patterns' },
          { text: 'Direct configuration via file', link: '/advanced/direct-configuration' }
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: 'Glossary', link: '/reference/glossary' },
          { text: 'Supported integrations', link: '/reference/integrations' },
          { text: 'Compatibility with other mods', link: '/reference/compatibility' },
          { text: 'Troubleshooting & frequently asked questions', link: '/reference/faq-and-troubleshooting' }
        ]
      },
      {
        text: 'Appendix',
        items: [
          { text: 'Configuration examples', link: 'https://github.com/clemenside/velquorin-examples' },
          { text: 'Credits & attributions', link: 'https://github.com/velquorin/client?tab=readme-ov-file#credits--attributions' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/velquorin/client' }
    ],

    footer: {
      message: 'Licensed under GPL 3.0. Website, handbook and examples are in public domain. Not affiliated with Mojang or Microsoft.',
      copyright: '© Clemenside, 2025.'
    }
  }
})

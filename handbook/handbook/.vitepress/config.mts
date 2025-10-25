import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  appearance: 'force-dark',
  head: [['link', { rel: 'icon', href: '/logo.svg' }]],
  title: "Velquorin",
  description: "The Velquorin handbook",
  base: '/handbook/',
  outDir: '../../dist/handbook',
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    ru: {
      label: 'Русский',
      lang: 'ru',
        themeConfig: {
          // https://vitepress.dev/reference/default-theme-config
          logo: '/branding/logo.svg',
          nav: [
            { text: 'Введение', link: '/ru/intro/introduction' },
            { text: 'Загрузки', link: 'https://github.com/velquorin/client/releases' },
            { text: 'Аттрибуции', link: 'https://github.com/velquorin/client?tab=readme-ov-file#credits--attributions' }
          ],

          sidebar: [
            {
              text: 'Начало',
              items: [
                { text: 'Знакомство', link: '/ru/intro/introduction' },
                { text: 'Установка', link: '/ru/intro/installation' },
                { text: 'Первый запуск', link: '/ru/intro/onboarding' }
              ]
            },
            {
              text: 'Основные функции',
              items: [
                { text: 'Навигация по интерфейсу', link: '/ru/basics/ui-navigation' },
                { text: 'Виджеты', link: '/ru/basics/widgets' },
                { text: 'Система меток', link: '/ru/basics/waypoints' },
                { text: 'Управление конфигурацией', link: '/ru/basics/managing-config' }
              ]
            },
            {
              text: 'Продвинутое использование',
              items: [
                { text: 'Шаблон форматирования и синтаксис', link: '/ru/advanced/formatting-and-patterns' },
                { text: 'Прямая настройка через файл', link: '/ru/advanced/direct-configuration' }
              ]
            },
            {
              text: 'Справка',
              items: [
                { text: 'Словарь терминов', link: '/ru/reference/glossary' },
                { text: 'Интеграции с другими модами', link: '/ru/reference/integrations' },
                { text: 'Совместимость с другими модами', link: '/ru/reference/compatibility' },
                { text: 'Ответы на частые вопросы и устранение неполадок', link: '/ru/reference/faq-and-troubleshooting' },
                { text: 'Системные требования и производительность', link: '/ru/reference/performance-hardware-requirements' }
              ]
            },
            {
              text: 'Приложение',
              items: [
                { text: 'Примеры конфигураций', link: 'https://github.com/velquorin/examples' },
                { text: 'Аттрибуции', link: 'https://github.com/velquorin/client?tab=readme-ov-file#credits--attributions' }
              ]
            },
          ],

          socialLinks: [
            { icon: 'github', link: 'https://github.com/velquorin/client' }
          ],

          footer: {
            message: 'Лицензировано под GPL 3.0. Вебсайт, справочник и примеры выпущены в общественное достояние. Не является оффициальным продуктом Mojang или Microsoft.',
            copyright: '© Clemenside, 2025.'
          }
        }
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/branding/logo.svg',
    nav: [
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
          { text: 'Troubleshooting & frequently asked questions', link: '/reference/faq-and-troubleshooting' },
          { text: 'Performance & hardware requirements', link: '/reference/performance-hardware-requirements' },
          { text: 'Internals', link: '/reference/development' }
        ]
      },
      {
        text: 'Appendix',
        items: [
          { text: 'Configuration examples', link: 'https://github.com/velquorin/examples' },
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

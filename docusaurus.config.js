// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Adafel Network',
  tagline: '',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.adafel.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Adafel', // Usually your GitHub org/user name.
  projectName: 'Adafel-docs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            '#',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/adafel-social-card.png',
      navbar: {
        title: 'Adafel',
        logo: {
          alt: 'Adafel',
          src: '/img/logo.svg',
        },
        items: [
          {
            href: 'https://github.com/adafel-official/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Get Started',
                to: '/getting-started',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/adafel-official',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/9zrUWmdg',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/AdafelNetwork',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/adafel-official/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Adafel, Inc. Built with Adafel.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Azure Linux OSS Essentials',
  tagline: 'Exploring OSS Solutions with Linux and Azure',
  favicon: 'img/azure.svg',

  // Set the production url of your site here
  url: 'https://jcode116.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'jcode116', // Usually your GitHub org/user name.
  projectName: 'jcode116.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
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
        blog: {
          showReadingTime: true,
          blogSidebarCount: 0
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
      // Default to Dark Mode
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      // Replace with your project's social card
      image: 'img/aloe-social-card.png',
      navbar: {
        title: 'ALOE',
        logo: {
          alt: 'My Site Logo',
          src: 'img/azure.svg',
        },
        items: [
            // Remove or comment out the Docs item
          //{
            //type: 'docSidebar',
            //sidebarId: 'tutorialSidebar',
            //position: 'left',
            //label: 'Tutorial',
          //},
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/jcode116/jcode116.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

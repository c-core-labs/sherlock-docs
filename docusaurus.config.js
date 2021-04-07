module.exports = {
  title: 'Sherlock Docs',
  tagline: 'Document all the things! 🐙',
  url: 'https://sherlock-docs.c-core.app',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'C-CORE', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Sherlock Docs',
      logo: {
        alt: 'C-CORE logo',
        src: 'img/logo.png',
      },
      links: [
        {
          to: 'docs/sherlock/sherlock-implement',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/c-core-labs/docs/',
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
              label: 'Architecture document',
              to: 'docs/sherlock/sherlock-architecture',
            },
            {
              label: 'Implementation plan',
              to: 'docs/sherlock/sherlock-implement',
            },
            {
              label: 'Open Source Contributions',
              to: 'docs/open-source/contributions',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub: C-CORE',
              href: 'https://github.com/c-core-labs/Sherlock-Frontend',
            },
            {
              label: 'Gitter: STAC',
              href: 'https://gitter.im/SpatioTemporal-Asset-Catalog/Lobby',
            },
            {
              label: 'Special thanks: Arturo STAC API',
              href: 'https://github.com/stac-utils/stac-fastapi',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/c-core-labs',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/ccore1975',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} C-CORE <a class="footer__link-item" href="https://v2.docusaurus.io/" target="_blank">Built with Docusaurus</a>.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
          'https://github.com/c-core-labs/docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    require.resolve('docusurus-lunr-search')
  ],
  themes: [
    '@docusaurus/theme-live-codeblock',
  ]
};

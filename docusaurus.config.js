module.exports = {
  title: 'MTR中文维基百科',
  tagline: 'Minecraft Transit Railway Wiki',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'MTRBBS', // Usually your GitHub org/user name.
  projectName: 'MTRWiki', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'MTRWiki',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/Cmbself/MTRWiki',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'MTR',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/jonafanho/Minecraft-Transit-Railway',
            },
            {
              label: 'CurseForge',
              href: 'https://www.curseforge.com/minecraft/mc-mods/minecraft-transit-railway',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: '(Official)MTRBBS',
              href: 'https://www.mtrbbs.top/forum.php',
            },
            {
              label: 'MTRCommunity',
              href: 'http://www.mtrbbs.com.cn',
            },
            {
              label: 'MC百科',
              href: 'https://www.mcmod.cn/class/2157.html',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '爱发电',
              href: 'https://afdian.net/@minecraft_mtr',
            },
            {
              label: 'Crowdin',
              href: 'https://crowdin.com/project/minecraft-transit-railway/invite/public?show_welcome&d=44cce0a5ea9df7e9dcca6aec205589371331568',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MTRWiki. Made with ❤.本站点与MTR官方没有从属关系`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/Cmbself/MTRWiki/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/Cmbself/MTRWiki/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

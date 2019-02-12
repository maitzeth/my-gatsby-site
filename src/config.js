module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  siteTitle: 'André Iván', // Navigation and Site Title
  siteTitleAlt: 'André Iván - Web Developer Portfolio', // Alternative Site title for SEO
  siteHeadline: 'Creating marvelous art & blazginly fast websites', // Headline for schema.org JSONLD
  siteTitleShort: 'André', // short_name for manifest
  siteUrl: 'https://andremz.me', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Minimalistic bright portfolio with full-width grid and large images',
  author: 'Maitzeth', // Author for schema.org JSONLD

  userTwitter: '@maitzeth', // Twitter Username
  ogSiteName: 'andreivan.vielmagil.5', // Facebook Site Name
  ogLanguage: 'en_US',
  googleAnalyticsID: 'UA-68658728-1',
  theme: {
    primaryColor: 'whitesmoke',
    secondaryColor: '#191919',
    redColor: '#990100',
    whiteColor: '#fff',
    blackColor: '#000',
    breakpoints: {
      xs: '576px',
      s: '768px',
      m: '992px',
      l: '1200px',
    }
  },
  social: [
    { id: 1, icon: 'facebook', title: 'Facebook', url: 'http://facebook.co' },
    { id: 2, icon: 'twitter', title: 'Twitter', url: 'http://twitter.com' },
    { id: 3, icon: 'instagram', title: 'Instagram', url: 'http://instagram.com' },
    { id: 4, icon: 'github', title: 'Github', url: 'http://github.com' }
  ],
}

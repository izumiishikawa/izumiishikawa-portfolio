/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://izumiishikawa.com",
  generateRobotsTxt: false,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/api/*", "/404"],
  transform: async (config, path) => {
    const priorityMap = {
      "/": 1.0,
      "/about": 0.9,
      "/projects": 0.9,
      "/blog": 0.8,
      "/contact": 0.7,
    };

    const changefreqMap = {
      "/": "daily",
      "/blog": "daily",
    };

    return {
      loc: path,
      changefreq: changefreqMap[path] || config.changefreq,
      priority: priorityMap[path] || config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};

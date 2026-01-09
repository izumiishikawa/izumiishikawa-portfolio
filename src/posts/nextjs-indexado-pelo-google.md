---
tags: "development, frontend, next.js"
title: "My Next.js site isn't being indexed by Google!! Here's what you can do"
subtitle: "You hosted your Next.js project but it's not showing up in Google search results? Here's why and some possible solutions:"
image: "https://images.prismic.io/techloset/Z1_3cpbqstJ98iN__a-complete-guide-to-next-js-a-react-js-framework.webp?auto=format%2Ccompress&fit=max&w=3840"
description: "If your Next.js project isn't being indexed by Google's search engine, this article is for you!"
date: "November 1, 2022"
readTime: "5"
---

This past week, while I was hosting this portfolio website where you're reading this article, I came across a problem that gave me a slight headache, since I'm completely inexperienced when it comes to marketing and web traffic.

**The site wasn't showing up in Google search results**

I needed to solve this problem as quickly as possible! Luckily, due to prior knowledge in computer networks, I already had a good idea of what the problem was about... a **sitemap**. But let's start from the beginning.

------------------------------------------

## How does Google find my site on the web?

When you do a search on Google, those responsible for finding and indexing each page you see are bots/robots called *Web Crawlers*. They search for links throughout the internet that lead to valid pages, read the content, categorize and index each one of them in the search engine. And that's how Google normally finds your page!

Often when you host a website on the internet, the hosting service itself does the work of getting your page indexed on Google, making it easier for Crawlers to find it. However, in my case when I hosted my Next.js site on Vercel, this didn't happen.

### Google doesn't know I exist

Due to various problems throughout the Crawlers' functioning process, sometimes they simply may not find my site on the internet, meaning Google will never index my page if it's never even found by the Crawlers.

For these specific cases, the Google team itself developed an online tool called [Google Search Console tool.](https://search.google.com/search-console) that helps us solve this problem by manually informing Google of the URL where our project is hosted and all its routes and subroutes. For this, we'll need a very special file called *sitemap.xml*.

------------------------------------------

## What is a sitemap?

As the name says, a sitemap is a kind of map that will help Crawlers find a website's routes and pages. It's a list with all URLs of a domain.

To create a sitemap for our NextJS project, we'll use a library called [next-sitemap](https://github.com/iamvishnusankar/next-sitemap), so just add it to your project using your preferred JavaScript package manager. In my case, I'll use yarn.

```
yarn add next-sitemap
```

With the dependency installed, to start building our sitemap, we need to create a configuration file in our project's root directory. This file should be named: __next-sitemap.config.js__. Inside the file, write the following lines of code:

``` js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://yoursite.com',
  generateRobotsTxt: true, // (the robots.txt file is optional)
  // ...other options
}
```

Note that the library will automatically load environment variables from the `.env` file!
This is the basic configuration file for the dependency. For other options and more advanced configurations, please check their project on github 👉️ [next-sitemap](https://github.com/iamvishnusankar/next-sitemap)

With the configuration file ready, we must now tell our build processor to create our sitemap file during our project's build. For this, add the following lines to your `package.json`:

``` json
{
  "build": "next build",
  "postbuild": "next-sitemap"
}
```

After everything is done, when you run the project's production build, your sitemap will be generated at the url `https://yoursite.com/sitemap.xml` or `sitemap-0.xml`. Now let's move to the next step.

------------------------------------------

## Informing Google about the sitemap

Now with our sitemap generated, let's inform Google about it and thus help the Crawlers find us in the vastness of the internet! For this, as mentioned earlier, we'll use the [Google Search Console tool.](https://search.google.com/search-console)

Opening the site for the first time, register your domain on Google's servers by informing your URL to the tool.

![Informing URL][1]

After gaining access to the application's settings panel, navigate to the sitemaps functionality using the navigation menu on the left. Now on this page, all you need to do is inform the URL of your sitemap and Google does all the rest!

![Adding Sitemap][2]

Your sitemap may take up to a few days to be analyzed and recognized by Google, so be patient! But after its confirmation, your project will start being indexed by the search engine!!

[1]: https://i.imgur.com/UtC3aP6.png
[2]: https://i.imgur.com/HTO3mHl.png
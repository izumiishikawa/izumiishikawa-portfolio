import fs from "fs";
import matter from "gray-matter";
import hljs from "highlight.js";
import Markdown from "markdown-to-jsx";
import Head from "next/head";
import { useRouter } from "next/router";
import path from "path";
import React, { useEffect } from "react";
import SEO from "../../components/SEO";
import { AiFillCalendar, BsBook } from "../../styles/Icons";
import {
  CardContainer,
  Container,
  Divider,
  ImageComp,
  ImageWrapper,
  LeftContainer,
  MiddleContainer,
  MoreArticles,
  PostContent,
  PostData,
  PostImage,
  PostSubTitle,
  PostTitle,
  RightContainer,
  TagContainer,
  TagTitle,
  TagWrapper,
} from "../../styles/pages/Blog";

function Card(props) {
  const myLoader = () => {
    return props.image;
  };

  return (
    <CardContainer onClick={props.onClick}>
      <ImageWrapper>
        <ImageComp loader={myLoader} alt={props.title} src={props.image} />
      </ImageWrapper>
      <b
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {props.title}
      </b>
      <sub
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 1,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {props.description}
      </sub>
    </CardContainer>
  );
}

function Tag(props) {
  return (
    <TagContainer>
      <TagTitle>#{props.title}</TagTitle>
    </TagContainer>
  );
}

// Parse date string to ISO format
function parseDate(dateStr) {
  try {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) {
      return new Date().toISOString();
    }
    return date.toISOString();
  } catch {
    return new Date().toISOString();
  }
}

function Blog({ data, content, posts, slug }) {
  useEffect(() => {
    hljs.initHighlighting();
  }, []);

  const router = useRouter();
  const categories = data.tags ? data.tags.split(",").map(t => t.trim()) : [];
  const publishedTime = parseDate(data.date);
  const wordCount = content ? content.split(/\s+/).length : 0;

  return (
    <Container>
      <SEO
        title={data.title}
        description={data.description || data.subtitle}
        image={data.image}
        type="article"
        article={{
          publishedTime: publishedTime,
          author: "Izumi Ishikawa",
          tags: categories,
        }}
      />

      {/* Article Schema */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: data.title,
              description: data.description || data.subtitle,
              image: data.image?.startsWith("http")
                ? data.image
                : `https://izumiishikawa.com${data.image}`,
              datePublished: publishedTime,
              dateModified: publishedTime,
              author: {
                "@type": "Person",
                name: "Izumi Ishikawa",
                url: "https://izumiishikawa.com",
              },
              publisher: {
                "@type": "Person",
                name: "Izumi Ishikawa",
                logo: {
                  "@type": "ImageObject",
                  url: "https://izumiishikawa.com/static/favicon.ico",
                },
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `https://izumiishikawa.com/blog/${slug}`,
              },
              wordCount: wordCount,
              articleSection: categories[0] || "Technology",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://izumiishikawa.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Blog",
                  item: "https://izumiishikawa.com/blog",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: data.title,
                  item: `https://izumiishikawa.com/blog/${slug}`,
                },
              ],
            }),
          }}
        />
      </Head>

      <LeftContainer></LeftContainer>
      <MiddleContainer>
        <PostData>
          <span>
            <sub>
              {" "}
              <AiFillCalendar />
              {data.date}
            </sub>
            <p>·</p>
            <sub>
              <BsBook />
              {data.readTime} min read
            </sub>
          </span>
          <Divider />
          <PostTitle>{data.title}</PostTitle>
          <PostSubTitle>{data.subtitle}</PostSubTitle>
        </PostData>
        <PostImage alt={data.title} src={data.image} />
        <TagWrapper>
          {categories.map((category) => {
            return <Tag key={category} title={category} />;
          })}
        </TagWrapper>
        <PostContent>
          <Markdown>{content}</Markdown>
        </PostContent>
      </MiddleContainer>
      <RightContainer>
        <p>more articles</p>
        <MoreArticles>
          {posts.map((post, index) => {
            for (let i = 0; i < 3; i++) {
              if (post.data.title !== data.title) {
                return (
                  <Card
                    key={index}
                    image={post.data.image}
                    title={post.data.title}
                    description={post.data.description}
                    onClick={() => router.push(`/blog/${post.slug}`)}
                  />
                );
              }
            }
          })}
        </MoreArticles>
      </RightContainer>
    </Container>
  );
}

export const getStaticProps = async (context) => {
  const files = fs.readdirSync(path.join("src/posts"));
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownMetaData = fs.readFileSync(
      path.join("src/posts", filename),
      "utf-8"
    );

    const { data } = matter(markdownMetaData);

    return {
      slug,
      data,
    };
  });

  const { id } = context.params;

  const data_post = fs.readFileSync(
    path.join("src/posts", `${id}.md`),
    "utf-8"
  );

  const { data } = matter(data_post);
  const { content } = matter(data_post);

  return {
    props: {
      content,
      data,
      posts,
      slug: id,
    },
  };
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("src/posts"));

  const paths = files.map((post) => ({
    params: {
      id: post.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default Blog;

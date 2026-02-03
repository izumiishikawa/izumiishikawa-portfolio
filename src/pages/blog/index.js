import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import { useRouter } from "next/router";
import path from "path";
import Tilt from "react-parallax-tilt";
import { Zoom } from "react-reveal";
import PageTitle from "../../components/PageTitle";
import PostCard from "../../components/PostCard";
import SEO from "../../components/SEO";
import { Container, MainWrapper } from "../../styles/pages/BlogMain";

export default function Blog({ posts }) {
  const router = useRouter();

  return (
    <Container>
      <SEO
        title="Blog"
        description="Insights and articles about UI/UX design, web and mobile development, freelancing, and building digital products with focus on usability and performance."
      />

      {/* Structured Data */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: "Blog - Izumi Ishikawa",
              description: "Articles about UI/UX design and full-stack development",
              url: "https://izumiishikawa.com/blog",
              isPartOf: {
                "@type": "WebSite",
                url: "https://izumiishikawa.com",
              },
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
              ],
            }),
          }}
        />
      </Head>

      <PageTitle
        title="blog"
        stretchedLetter="b"
        overlayTitle="tutorials | documentation | life"
      />
      <MainWrapper>
        <Zoom>
          {posts.map((post, index) => {
            return (
              <Tilt
                tiltReverse={true}
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                gyroscope={true}
                key={index}
              >
                <PostCard
                  date={post.data.date}
                  title={post.data.title}
                  image={post.data.image}
                  description={post.data.description}
                  categories={post.data.tags}
                  onClick={() => router.push(`/blog/${post.slug}`)}
                />
              </Tilt>
            );
          })}
        </Zoom>
      </MainWrapper>
    </Container>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("src/posts"));
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownMetaData = fs.readFileSync(
      path.join("src/posts", filename),
      "utf-8",
    );

    const { data } = matter(markdownMetaData);

    return {
      slug,
      data,
    };
  });

  return {
    props: {
      posts,
    },
  };
};

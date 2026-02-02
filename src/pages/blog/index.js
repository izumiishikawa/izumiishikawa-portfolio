import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import { useRouter } from "next/router";
import path from "path";
import Tilt from "react-parallax-tilt";
import { Zoom } from "react-reveal";
import PageTitle from "../../components/PageTitle";
import PostCard from "../../components/PostCard";
import { Container, MainWrapper } from "../../styles/pages/BlogMain";

export default function Blog({ posts }) {
  const router = useRouter();

  return (
    <Container>
      <Head>
        <title>Ishikawa Izumi | Blog</title>
        <meta
          name="description"
          content="Insights and articles about UI/UX design, web and mobile development, freelancing, and building digital products with focus on usability and performance."
        ></meta>
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

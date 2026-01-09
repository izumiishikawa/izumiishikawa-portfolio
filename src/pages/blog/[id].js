import React, { useEffect, useState } from "react";
import fs from "fs";
import path from "path";
import {
  Container,
  LeftContainer,
  RightContainer,
  PostData,
  PostTitle,
  PostSubTitle,
  PostImage,
  PostContent,
  Divider,
  MiddleContainer,
  CardContainer,
  ImageWrapper,
  ImageComp,
  MoreArticles,
  TagWrapper,
  TagContainer,
  TagTitle,
} from "../../styles/pages/Blog";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import { AiFillCalendar, BsBook } from "../../styles/Icons";
import hljs from "highlight.js";
import Head from "next/head";
import { useRouter } from "next/router";

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

function Blog({ data, content, posts }) {
  useEffect(() => {
    hljs.initHighlighting();
  }, []);

  const router = useRouter();
  var categories = data.tags.split(",");

  return (
    <Container>
      <Head>
        <title>{data.title}</title>
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

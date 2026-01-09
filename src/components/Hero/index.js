import React from "react";
import background from "/public/static/assets/background.gif";
import {
  Container,
  Title,
  SubTitle,
  Letter,
  Wrapper,
  About,
  Background,
  ViewButton,
  ContactButton,
  HeroFooter,
  Main,
} from "./styles";
import { Fade, Flip, Zoom } from "react-reveal";
import { BsEye, BsChat } from "../../styles/Icons";
import { useRouter } from "next/router";
import Head from "next/head";

function Hero() {
  const router = useRouter();

  return (
    <Container>
      <Background image={background} />
      <Head>
        <title>Moon Coded — Freelancer UI/UX Designer</title>
      </Head>
      <Wrapper>
        <Main>
          <Fade top>
            <Title>
              <Letter className="stretch">I</Letter>
              <Letter>Z</Letter>
              <Letter>U</Letter>
              <Letter className="stretch">M</Letter>
              <Letter>I</Letter>
            </Title>
          </Fade>
          <Fade top delay={100}>
            <SubTitle>
              <Letter className="coded">D</Letter>
              <Letter className="stretch coded">E</Letter>
              <Letter className="stretch coded">V</Letter>
            </SubTitle>
          </Fade>
          <Flip top delay={600}>
            <About style={{marginTop: 20}}>
              Full-stack <span>developer</span> and UI/UX Designer
            </About>
          </Flip>
        </Main>
        <HeroFooter>
          <Fade left delay={800}>
            <ViewButton onClick={() => router.push("/about")}>
              <BsEye /> See more about me
            </ViewButton>
          </Fade>
          <Fade right delay={800}>
            <ContactButton onClick={() => router.push("/projects")}>
              <BsChat /> My Work
            </ContactButton>
          </Fade>
        </HeroFooter>
      </Wrapper>
    </Container>
  );
}

export default Hero;

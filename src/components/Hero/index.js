import { useRouter } from "next/router";
import { Fade, Flip } from "react-reveal";
import { BsChat, BsEye } from "../../styles/Icons";
import {
  About,
  Background,
  ContactButton,
  Container,
  HeroFooter,
  Letter,
  Main,
  SubTitle,
  Title,
  ViewButton,
  Wrapper,
} from "./styles";
import background from "/public/static/assets/background.gif";

function Hero() {
  const router = useRouter();

  return (
    <Container>
      <Background image={background} />

      <section
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0,0,0,0)",
          whiteSpace: "nowrap",
          border: 0,
        }}
        aria-hidden="false"
      >
        <h1>Izumi Ishikawa</h1>
        <h2>Freelancer UI/UX Designer and Full-Stack Developer</h2>
        <p>
          Izumi Ishikawa is a freelancer UI/UX Designer and Full-Stack Developer
          based in Ireland. Izumi Ishikawa designs and develops modern websites
          and mobile applications focused on usability, performance, and
          business results.
        </p>
      </section>

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
            <About style={{ marginTop: 20 }}>
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

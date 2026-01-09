import React, { useState } from "react";
import {
  Container,
  ProjectWrapper,
  AppDetails,
  Thumbnail,
  DateContainer,
  ThumbnailWrapper,
  ProjectsMain,
  StoreBadge,
  StoreRow,
} from "../../styles/pages/Projects";
import PageTitle from "../../components/PageTitle";
import { useRouter } from "next/router";
import Head from "next/head";

function Projects() {
  const router = useRouter();

  const projects = [
    {
      id: 1,
      date: "JANUARY, 2025",
      title: "Levelite: Habits and Tasks RPG",
      shortDescription: "Gamified productivity platform with RPG mechanics",
      fullDescription:
        "Revolutionary task management application that transforms daily habits into an engaging RPG experience. Features include character progression, quest systems, and achievement rewards to boost user motivation and productivity.",
      image: "/static/assets/levelite_banner.png",
      url: "https://play.google.com/store/apps/details?id=com.satsukiizumi.leveliteapp",
      featured: true,
    },
    {
      id: 2,
      date: "APRIL, 2023",
      title: "Leticia Therapist",
      shortDescription: "Professional mental health services landing page",
      fullDescription:
        "Complete digital presence solution for a therapy practice, featuring appointment scheduling, service showcase, and patient testimonials. Designed to create trust and accessibility while maintaining professional aesthetics.",
      image: "/static/assets/leticia.webp",
      url: "https://leticiakarolin.vercel.app/",
    },
    {
      id: 3,
      date: "MAY, 2024",
      title: "Carlos Advogados",
      shortDescription: "Corporate law firm digital experience",
      fullDescription:
        "Sophisticated website for a premier law firm, incorporating case management portal, attorney profiles, and client resources. Built with focus on credibility, professionalism, and seamless user experience.",
      image: "/static/assets/carlos.png",
      url: "https://carlosadvogados.vercel.app",
    },
    {
      id: 4,
      date: "JULY, 2023",
      title: "SouJunior",
      shortDescription:
        "Professional networking platform for junior developers",
      fullDescription:
        "Contributed to a comprehensive LinkedIn-style platform designed specifically for junior developers. Implemented features for profile building, job matching, and community networking to help early-career professionals connect and grow.",
      image: "/static/projects/soujunior.jpeg",
      url: "https://www.soujunior.tech",
    },
    {
      id: 5,
      date: "NOVEMBER, 2022",
      title: "Cartuchos Online",
      shortDescription: "E-commerce platform for printing supplies",
      fullDescription:
        "Modern e-commerce solution specializing in printer cartridges and supplies. Features include smart product filtering, bulk ordering capabilities, and streamlined checkout process designed to maximize conversions.",
      image: "/static/projects/cartuchos.jpeg",
      url: "https://cartuchosonline.netlify.app",
    },
    {
      id: 6,
      date: "FEBRUARY, 2023",
      title: "LOGZZ",
      shortDescription: "Logistics management platform redesign",
      fullDescription:
        "Redesigned authentication flow and contributed to various platform features for a logistics management system. Focus on improving user onboarding experience and streamlining daily operational workflows.",
      image: "/static/projects/logzz.jpeg",
      url: "https://app.logzz.com.br",
    },
    {
      id: 7,
      date: "SEPTEMBER, 2023",
      title: "COINZZ",
      shortDescription: "Complete cryptocurrency marketplace design",
      fullDescription:
        "End-to-end UI/UX design for a cryptocurrency trading marketplace. Delivered complete design system including trading interface, wallet management, transaction history, and real-time market analytics dashboard.",
      image: "/static/projects/coinzz.png",
      url: "https://app.coinzz.com.br/login",
    },
  ];

  const ProjectCard = ({ project, featured = false }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <ProjectWrapper
        className={isHovered ? "hovered" : ""}
        style={featured ? { maxWidth: "100%", marginTop: 60, height: 400 } : {}}
        onClick={() => window.open(project.url, "_blank")}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {featured && (
          <StoreRow>
            <StoreBadge>
              <img src="/static/assets/playstore.png" />
              Play Store
            </StoreBadge>
            <StoreBadge>
              <img src="/static/assets/appstore.png" />
              App Store
            </StoreBadge>
          </StoreRow>
        )}
        <ThumbnailWrapper>
          <AppDetails>
            <DateContainer>
              <div className="line"></div>
              <span>{project.date}</span>
              <div className="line"></div>
            </DateContainer>

            <h1>{project.title}</h1>
            <h2 className="short-desc">{project.shortDescription}</h2>
            <p className="full-desc">{project.fullDescription}</p>
          </AppDetails>

          <Thumbnail src={project.image} className="thumb" />
        </ThumbnailWrapper>
      </ProjectWrapper>
    );
  };

  const featuredProject = projects[0];
  const regularProjects = projects.slice(1);

  return (
    <Container>
      <PageTitle
        title="projects"
        stretchedLetter="r"
        overlayTitle="Contributions | Freelances"
      />

      <Head>
        <title>Ishikawa Izumi - Projects</title>
      </Head>

      <ProjectCard project={featuredProject} featured={true} />

      <ProjectsMain>
        {regularProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectsMain>
    </Container>
  );
}

export default Projects;

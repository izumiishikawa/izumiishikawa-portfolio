import React, { useState, useEffect } from "react";
import {
  Container,
  ProjectWrapper,
  AppDetails,
  Thumbnail,
  DateContainer,
  ThumbnailWrapper,
  ProjectsMain,
} from "../../styles/pages/Projects";
import PageTitle from "../../components/PageTitle";
import { useRouter } from "next/router";

function Projects() {
  const router = useRouter();

  const projects = [
    {
      id: 1,
      date: "APRIL, 2023",
      title: "Levelite: Habits and Tasks RPG",
      shortDescription: "Gamified productivity platform with RPG mechanics",
      fullDescription: "Revolutionary task management application that transforms daily habits into an engaging RPG experience. Features include character progression, quest systems, and achievement rewards to boost user motivation and productivity.",
      image: "/static/assets/levelite.png",
      url: "https://dribbble.com/shots/22022766-Marketplace",
      featured: true
    },
    {
      id: 2,
      date: "APRIL, 2023",
      title: "Leticia Therapist",
      shortDescription: "Professional mental health services landing page",
      fullDescription: "Complete digital presence solution for a therapy practice, featuring appointment scheduling, service showcase, and patient testimonials. Designed to create trust and accessibility while maintaining professional aesthetics.",
      image: "/static/assets/leticia.webp",
      url: "https://dribbble.com/shots/22022766-Marketplace"
    },
    {
      id: 3,
      date: "MAY, 2023",
      title: "Carlos Advogados",
      shortDescription: "Corporate law firm digital experience",
      fullDescription: "Sophisticated website for a premier law firm, incorporating case management portal, attorney profiles, and client resources. Built with focus on credibility, professionalism, and seamless user experience.",
      image: "/static/assets/carlos.png",
      url: "https://n-project-pi.vercel.app"
    },
    {
      id: 4,
      date: "JULY, 2023",
      title: "SouJunior",
      shortDescription: "Professional networking platform for junior developers",
      fullDescription: "Contributed to a comprehensive LinkedIn-style platform designed specifically for junior developers. Implemented features for profile building, job matching, and community networking to help early-career professionals connect and grow.",
      image: "/static/projects/soujunior.jpeg",
      url: "https://www.soujunior.tech"
    },
    {
      id: 5,
      date: "NOVEMBER, 2022",
      title: "Cartuchos Online",
      shortDescription: "E-commerce platform for printing supplies",
      fullDescription: "Modern e-commerce solution specializing in printer cartridges and supplies. Features include smart product filtering, bulk ordering capabilities, and streamlined checkout process designed to maximize conversions.",
      image: "/static/projects/cartuchos.jpeg",
      url: "https://cartuchosonline.netlify.app"
    },
    {
      id: 6,
      date: "FEBRUARY, 2023",
      title: "LOGZZ",
      shortDescription: "Logistics management platform redesign",
      fullDescription: "Redesigned authentication flow and contributed to various platform features for a logistics management system. Focus on improving user onboarding experience and streamlining daily operational workflows.",
      image: "/static/projects/logzz.jpeg",
      url: "https://app.logzz.com.br"
    },
    {
      id: 7,
      date: "FEBRUARY, 2023",
      title: "COINZZ",
      shortDescription: "Complete cryptocurrency marketplace design",
      fullDescription: "End-to-end UI/UX design for a cryptocurrency trading marketplace. Delivered complete design system including trading interface, wallet management, transaction history, and real-time market analytics dashboard.",
      image: "/static/projects/coinzz.png",
      url: "https://app.logzz.com.br"
    }
  ];

  const ProjectCard = ({ project, featured = false }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <ProjectWrapper
        style={featured ? { maxWidth: "100%", marginTop: 60, height: 400 } : {}}
        onClick={() => window.open(project.url, "_blank")}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <ThumbnailWrapper>
          <AppDetails>
            <div 
              className="content-wrapper"
              style={{
                transform: isHovered ? 'translateY(-20px)' : 'translateY(0)',
                transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            >
              <DateContainer>
                <div 
                  className="line"
                  style={{
                    width: isHovered ? '50px' : '30px',
                    transition: 'width 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  }}
                ></div>
                <span>{project.date}</span>
                <div 
                  className="line"
                  style={{
                    width: isHovered ? '50px' : '30px',
                    transition: 'width 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  }}
                ></div>
              </DateContainer>
              
              <h1
                style={{
                  transform: isHovered ? 'scale(1.03)' : 'scale(1)',
                  transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  transformOrigin: 'left center',
                }}
              >
                {project.title}
              </h1>
              
              <h2
                style={{
                  opacity: isHovered ? 0 : 1,
                  transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
                  maxHeight: isHovered ? 0 : '100px',
                  marginBottom: isHovered ? 0 : '8px',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                {project.shortDescription}
              </h2>
              
              <p 
                className="expanded-description"
                style={{
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
                  maxHeight: isHovered ? '200px' : 0,
                  transition: 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.2s, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s, max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                {project.fullDescription}
              </p>
            </div>
          </AppDetails>
          
          <Thumbnail 
            src={project.image} 
            className="thumb"
            style={{
              transform: isHovered ? 'scale(1.08)' : 'scale(1)',
              filter: isHovered ? 'brightness(0.6) saturate(1.1)' : 'brightness(0.85) saturate(1)',
              transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          />
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
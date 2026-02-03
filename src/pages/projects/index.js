import Head from "next/head";
import Tilt from "react-parallax-tilt";
import EntraptaEyes from "../../components/EntraptaEyes";
import PageTitle from "../../components/PageTitle";
import SEO from "../../components/SEO";
import {
  AppDetails,
  Container,
  DateContainer,
  EntraptaWrapper,
  ImageWrapper,
  Overlay,
  ProjectsMain,
  ProjectWrapper,
  StoreBadge,
  StoreRow,
  Thumbnail,
} from "../../styles/pages/Projects";

function Projects() {
  const projects = [
    {
      id: 1,
      date: "JANUARY, 2025",
      title: "Levelite: Habits and Tasks RPG",
      description:
        "Built the entire app from scratch — UI/UX design, frontend with React Native, backend with Node.js and MongoDB. Deployed to both stores.",
      image: "/static/assets/levelite_banner.png",
      url: "https://play.google.com/store/apps/details?id=com.satsukiizumi.leveliteapp",
      featured: true,
    },
    {
      id: 2,
      date: "APRIL, 2023",
      title: "Leticia Therapist",
      description:
        "Designed and developed a landing page that improved client conversions by 85% through better UX and clear call-to-actions.",
      image: "/static/assets/leticia.webp",
      url: "https://leticiakarolin.vercel.app/",
    },
    {
      id: 3,
      date: "MAY, 2024",
      title: "Carlos Advogados",
      description:
        "Built a professional landing page that significantly improved client conversions through modern design and optimized user flow.",
      image: "/static/assets/carlos.png",
      url: "https://carlosadvogados.vercel.app",
    },
    {
      id: 4,
      date: "JULY, 2023",
      title: "SouJunior",
      description:
        "Led frontend development for the MVP, implementing core features and improving load performance through code splitting.",
      image: "/static/projects/soujunior.jpeg",
      url: "https://www.soujunior.tech",
    },
    {
      id: 5,
      date: "NOVEMBER, 2022",
      title: "Cartuchos Online",
      description:
        "Designed and developed a landing page for a printing supplies store with focus on product showcase and contact conversion.",
      image: "/static/projects/cartuchos.jpeg",
      url: "https://cartuchosonline.netlify.app",
    },
    {
      id: 6,
      date: "FEBRUARY, 2023",
      title: "LOGZZ",
      description:
        "Redesigned the authentication flow and improved the dashboard UX, making daily operations more intuitive for users.",
      image: "/static/projects/logzz.jpeg",
      url: "https://logzz.com.br/",
    },
    {
      id: 7,
      date: "SEPTEMBER, 2023",
      title: "COINZZ",
      description:
        "Created the complete design system and UI/UX for the trading platform, including trading interface and wallet management.",
      image: "/static/projects/coinzz.png",
      url: "https://coinzz.com.br/",
    },
  ];

  const ProjectCard = ({ project, featured = false }) => {
    const cardContent = (
      <ProjectWrapper
        className={featured ? "featured" : ""}
        onClick={() => window.open(project.url, "_blank")}
      >
        {featured && (
          <StoreRow>
            <StoreBadge>
              <img src="/static/assets/playstore.png" alt="Play Store" />
              Play Store
            </StoreBadge>
            <StoreBadge>
              <img src="/static/assets/appstore.png" alt="App Store" />
              App Store
            </StoreBadge>
          </StoreRow>
        )}
        <ImageWrapper>
          <Thumbnail src={project.image} />
          <Overlay />
          <EntraptaWrapper>
            <EntraptaEyes />
          </EntraptaWrapper>
        </ImageWrapper>
        <AppDetails>
          <DateContainer>
            <div className="line"></div>
            <span>{project.date}</span>
            <div className="line"></div>
          </DateContainer>
          <h1>{project.title}</h1>
          <p className="description">{project.description}</p>
        </AppDetails>
      </ProjectWrapper>
    );

    return (
      <Tilt
        tiltReverse={true}
        tiltMaxAngleX={featured ? 3 : 5}
        tiltMaxAngleY={featured ? 3 : 5}
        gyroscope={true}
        style={featured ? { width: "100%" } : { height: "100%" }}
      >
        {cardContent}
      </Tilt>
    );
  };

  const featuredProject = projects[0];
  const regularProjects = projects.slice(1);

  return (
    <Container>
      <SEO
        title="Projects"
        description="Selected UI/UX and full-stack projects including websites and mobile apps, focused on clean design, usability, performance, and real business results."
      />

      {/* Structured Data */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Projects by Izumi Ishikawa",
              description: "Portfolio of UI/UX design and development projects",
              itemListElement: projects.map((project, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": "CreativeWork",
                  name: project.title,
                  description: project.description,
                  url: project.url,
                  image: project.image.startsWith("http")
                    ? project.image
                    : `https://izumiishikawa.com${project.image}`,
                  creator: {
                    "@type": "Person",
                    name: "Izumi Ishikawa",
                  },
                },
              })),
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
                  name: "Projects",
                  item: "https://izumiishikawa.com/projects",
                },
              ],
            }),
          }}
        />
      </Head>

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

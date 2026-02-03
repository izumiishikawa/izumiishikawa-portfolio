import { motion } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  FaAngular,
  FaAws,
  FaDocker,
  FaFigma,
  FaGitAlt,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiExpress,
  SiGraphql,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiRedis,
  SiSass,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import PageTitle from "../../components/PageTitle";
import SEO from "../../components/SEO";
import {
  AboutMe,
  AboutMeParagraph,
  AboutMeTitle,
  CompanyHeader,
  CompanyInfo,
  CompanyLogo,
  CompanyName,
  Container,
  CVButton,
  CVContainer,
  Description,
  Duration,
  ExperienceCard,
  ExperienceContainer,
  ExperienceGrid,
  FirstColumn,
  FirstRow,
  NameTitle,
  PictureContainer,
  SecundaryColumn,
  ServicesParagraph,
  TechBadge,
  TechP,
  TechsContainer,
  TechStack,
  TitleContainer,
} from "../../styles/pages/About";

function About() {
  const router = useRouter();

  const experiences = [
    {
      id: 1,
      company: "N Soluções",
      logo: "/static/assets/nsolve.png",
      duration: "Full Stack Developer / Tech Lead",
      description:
        "Led full-stack development for multiple enterprise clients including Coinzz and Logzz, architecting scalable solutions and mentoring development teams across diverse projects.",
      technologies: ["React", "Next.js", "Python", "TypeScript", "PostgreSQL"],
      techIcons: [
        <FaReact key="react" />,
        <SiNextdotjs key="next" />,
        <FaPython key="python" />,
        <SiTypescript key="ts" />,
        <SiPostgresql key="postgresql" />,
      ],
    },
    {
      id: 2,
      company: "Sou Junior",
      logo: "/static/assets/soujunior_logo.jpg",
      duration: "Front-end Developer",
      description:
        "Collaborated with a cross-functional team to build and launch the MVP and production version of Sou Junior startup, delivering a modern and accessible user experience.",
      technologies: ["React", "SCSS", "Figma", "Tailwind"],
      techIcons: [
        <FaReact key="react" />,
        <SiSass key="scss" />,
        <FaFigma key="figma" />,
        <SiTailwindcss key="tailwind" />,
      ],
    },
    {
      id: 3,
      company: "Grão Direto",
      logo: "/static/assets/grao.png",
      duration: "Full Stack Developer",
      description:
        "Engineered the web platform for Grão Direto, one of Brazil's leading agritech applications, enabling farmers to connect directly with buyers and optimize their operations.",
      technologies: ["Angular", "React", "Next.js", "Nest.js"],
      techIcons: [
        <FaAngular key="angular" />,
        <FaReact key="react" />,
        <SiNextdotjs key="next" />,
        <SiNestjs key="nestjs" />,
      ],
    },
    {
      id: 4,
      company: "Levelite",
      logo: "/static/assets/levelite_logo.png",
      duration: "CTO / Full Stack Developer",
      description:
        "Founded and built a mobile startup from the ground up, handling end-to-end development including MVP design, backend architecture, cloud infrastructure on AWS, and successful deployment to Google Play and App Store.",
      technologies: ["React Native", "MongoDB", "TypeScript", "Node.js", "AWS"],
      techIcons: [
        <FaReact key="react-native" />,
        <SiMongodb key="mongodb" />,
        <SiTypescript key="ts" />,
        <FaNodeJs key="node" />,
        <FaAws key="aws" />,
      ],
    },
  ];

  const techStack = [
    {
      name: "JavaScript ES6+",
      icon: <IoLogoJavascript />,
      category: "Frontend",
    },
    { name: "TypeScript", icon: <SiTypescript />, category: "Frontend" },
    { name: "React.js", icon: <FaReact />, category: "Frontend" },
    { name: "Next.js", icon: <SiNextdotjs />, category: "Frontend" },
    { name: "Angular", icon: <FaAngular />, category: "Frontend" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, category: "Frontend" },
    { name: "SASS/SCSS", icon: <SiSass />, category: "Frontend" },

    { name: "Node.js", icon: <FaNodeJs />, category: "Backend" },
    { name: "Python", icon: <FaPython />, category: "Backend" },
    { name: "Nest.js", icon: <SiNestjs />, category: "Backend" },
    { name: "Express.js", icon: <SiExpress />, category: "Backend" },

    { name: "PostgreSQL", icon: <SiPostgresql />, category: "Database" },
    { name: "MongoDB", icon: <SiMongodb />, category: "Database" },
    { name: "Redis", icon: <SiRedis />, category: "Database" },
    { name: "Prisma", icon: <SiPrisma />, category: "Database" },

    { name: "AWS", icon: <FaAws />, category: "Cloud & DevOps" },
    { name: "Docker", icon: <FaDocker />, category: "Cloud & DevOps" },
    { name: "Git", icon: <FaGitAlt />, category: "Cloud & DevOps" },
    { name: "GraphQL", icon: <SiGraphql />, category: "API" },
  ];

  const categories = ["Frontend", "Backend", "Database", "Cloud & DevOps"];

  return (
    <Container>
      <SEO
        title="About Me"
        description="Learn about Izumi Ishikawa - a freelancer UI/UX Designer and Full-Stack Developer based in Ireland. Explore my tech stack, professional experience, and skills."
      />

      {/* BreadcrumbList Schema */}
      <Head>
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
                  name: "About",
                  item: "https://izumiishikawa.com/about",
                },
              ],
            }),
          }}
        />
      </Head>

      <PageTitle
        title="about"
        stretchedLetter="b"
        overlayTitle="techs | experiences | skills"
      />
      <AboutMe>
        <FirstRow>
          <PictureContainer src="/static/assets/pfp.jpeg" />
          <FirstColumn>
            <AboutMeTitle>Hello 👋</AboutMeTitle>
            <NameTitle>I'm Izumi</NameTitle>
            <AboutMeTitle>
              A <span className="colored">full-stack</span> Software Developer /
              UI - UX Designer.
            </AboutMeTitle>
            <AboutMeParagraph>
              I am a Full-Stack developer and UI/UX Designer passionate about
              bringing digital products to life. My goal is to transform
              innovative ideas into functional and engaging experiences. I focus
              particularly on developing dynamic and responsive interfaces, as
              well as creating performant and SEO-optimized websites to ensure
              my clients' projects stand out online.
            </AboutMeParagraph>
            <ExperienceContainer>
              <div className="line"></div>
              <span>Past Experiences</span>
            </ExperienceContainer>
            <CVContainer>
              <p>Want to know more about my education and experience.</p>
              <CVButton
                onClick={() =>
                  router.push("/static/files/curriculum_vitae.pdf")
                }
              >
                <span>Download CV</span>
              </CVButton>
            </CVContainer>
          </FirstColumn>
        </FirstRow>

        <SecundaryColumn>
          <TitleContainer>
            <NameTitle>Professional Journey</NameTitle>
          </TitleContainer>
          <ServicesParagraph>
            As a freelancer and contributor, I have been able to make valuable
            contributions to noteworthy projects, leveraging my knowledge and
            skills to drive their success. My diverse background has equipped me
            to tackle complex challenges across different industries.
          </ServicesParagraph>

          <ExperienceContainer>
            <div className="line"></div>
            <span>Where I've Worked</span>
          </ExperienceContainer>

          <ExperienceGrid>
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={exp.id}
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
              >
                <CompanyHeader>
                  <CompanyLogo src={exp.logo} alt={exp.company} />
                  <CompanyInfo>
                    <CompanyName>{exp.company}</CompanyName>
                    <Duration>{exp.duration}</Duration>
                  </CompanyInfo>
                </CompanyHeader>

                <Description>{exp.description}</Description>

                <TechStack>
                  {exp.technologies.map((tech, idx) => (
                    <TechBadge key={idx}>
                      {exp.techIcons[idx]}
                      <span>{tech}</span>
                    </TechBadge>
                  ))}
                </TechStack>
              </ExperienceCard>
            ))}
          </ExperienceGrid>

          <ExperienceContainer style={{ marginTop: "50px" }}>
            <div className="line"></div>
            <span>My Tech Stack</span>
          </ExperienceContainer>

          <TechsContainer>
            {categories.map((category) => (
              <div key={category} style={{ marginBottom: "30px" }}>
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    marginBottom: "15px",
                    color: "var(--mainText)",
                  }}
                >
                  {category}
                </h3>
                <div
                  className="card"
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fill, minmax(150px, 1fr))",
                    gap: "15px",
                  }}
                >
                  {techStack
                    .filter((tech) => tech.category === category)
                    .map((tech, index) => (
                      <TechP
                        key={index}
                        as={motion.div}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.05,
                        }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech.icon}
                        <span>{tech.name}</span>
                      </TechP>
                    ))}
                </div>
              </div>
            ))}
          </TechsContainer>
        </SecundaryColumn>
      </AboutMe>
    </Container>
  );
}

export default About;

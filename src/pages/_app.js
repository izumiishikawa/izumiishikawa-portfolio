import Head from "next/head";
import { useRouter } from "next/router";
import nookies from "nookies";
import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import CustomCursor from "../components/CustomCursor";
import Header from "../components/Header";
import "../styles/dracula.css";
import GlobalStyle from "../styles/global";
import dark from "../styles/themes/dark";
import light from "../styles/themes/light";
import lines from "/public/static/assets/back.png";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState(dark);

  useEffect(() => {
    const { theme } = nookies.get("theme");

    if (theme) {
      nookies.set(
        { sameSite: true },
        "theme",
        JSON.stringify(theme === `"dark"` ? "dark" : "light"),
      );
    } else {
      nookies.set(
        { maxAge: 30 * 24 * 60 * 60, sameSite: true },
        "theme",
        JSON.stringify("dark"),
      );
    }

    setTheme(theme === `"dark"` ? dark : light);
  }, [theme]);

  const toggleTheme = () => {
    const { theme } = nookies.get("theme");

    if (theme) {
      nookies.set(
        { sameSite: true },
        "theme",
        JSON.stringify(theme === `"dark"` ? "light" : "dark"),
      );
    } else {
      nookies.set(
        { maxAge: 30 * 24 * 60 * 60, sameSite: true },
        "theme",
        JSON.stringify("dark"),
      );
    }

    setTheme(theme === `"dark"` ? light : dark);
  };

  useEffect(() => {
    let timer;

    const handleStart = () => {
      timer = setTimeout(() => {
        setLoading(true);
      }, 300);
    };

    const handleComplete = () => {
      if (timer) {
        clearTimeout(timer);
      }

      setTimeout(() => {
        if (loading) {
          setLoading(false);
        }
      }, 1000);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);

      if (timer) {
        clearTimeout(timer);
      }

      setTimeout(() => {
        if (loading) {
          setLoading(false);
        }
      }, 1000);
    };
  });

  return (
    <ThemeProvider theme={theme}>
      <Head>
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />

        {/* Default title */}
        <title>
          Freelancer UI/UX Designer & Full-Stack Developer | Izumi Ishikawa
        </title>

        {/* Default meta description */}
        <meta
          name="description"
          content="Izumi Ishikawa is a freelancer UI/UX Designer and Full-Stack Developer building modern, user-focused websites and applications for startups and businesses."
        />

        {/* Default canonical */}
        <link rel="canonical" href="https://izumiishikawa.com/" />

        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://izumiishikawa.com/#website",
              name: "Izumi Ishikawa Portfolio",
              url: "https://izumiishikawa.com",
              description: "Portfolio of Izumi Ishikawa - Freelancer UI/UX Designer and Full-Stack Developer",
              author: {
                "@id": "https://izumiishikawa.com/#person",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://izumiishikawa.com/blog?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* Person Schema - Enhanced */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://izumiishikawa.com/#person",
              name: "Izumi Ishikawa",
              givenName: "Izumi",
              familyName: "Ishikawa",
              url: "https://izumiishikawa.com",
              image: "https://izumiishikawa.com/static/assets/pfp.jpeg",
              jobTitle: "UI/UX Designer & Full-Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "IE",
                addressLocality: "Ireland",
              },
              sameAs: [
                "https://www.linkedin.com/in/izumiishikawa",
                "https://github.com/izumiishikawa",
                "https://dribbble.com/izumiishikawa",
              ],
              knowsAbout: [
                "UI/UX Design",
                "React",
                "Next.js",
                "Node.js",
                "TypeScript",
                "Full-Stack Development",
                "Mobile App Development",
                "Web Development",
              ],
            }),
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://izumiishikawa.com/#organization",
              name: "Izumi Ishikawa",
              url: "https://izumiishikawa.com",
              logo: {
                "@type": "ImageObject",
                url: "https://izumiishikawa.com/static/favicon.ico",
              },
              founder: {
                "@id": "https://izumiishikawa.com/#person",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                url: "https://izumiishikawa.com/contact",
              },
            }),
          }}
        />
      </Head>

      <Lines image={lines} />

      <CustomCursor />
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export const Lines = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: transparent url(${(props) => props.image.src});
  background-repeat: space;
  background-size: 80vh;
  background-repeat: repeat-y;
  background-position: 0px 80px;
  opacity: 0.01;
  visibility: visible;
  z-index: -1;
  top: 0;
  left: 50px;
  overflow: hidden;
`;

export const Dots = styled.div`
  position: fixed;
  width: 300vw;
  height: 300vh;
  left: -100%;
  background-image: radial-gradient(
    ${(props) => props.theme.colors.mainText} 3px,
    transparent 0
  );
  background-size: 30px 30px;
  background-position: -10px -10px;
  opacity: 0.01;
  transform: rotate(60deg);
`;

export const CanvasContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  visibility: visible;
  background-color: transparent;
  opacity: 0.1;
  z-index: -1;
`;

export async function getServerSideProps(ctx) {
  const cookies = nookies.get(ctx);

  nookies.set(ctx, "theme", JSON.stringify("dark"), {
    maxAge: 30 * 24 * 60 * 60,
    path: "/",
  });

  return { cookies };
}

export default MyApp;

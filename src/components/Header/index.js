import React, { useContext, useEffect, useState } from "react";
import {
  Container,
  Title,
  HeaderMenu,
  SocialMedias,
  EntraptaWrapper,
  ContainerEye,
  Eyes,
  Light,
  Wrapper,
  MobileHeader,
  DesktopHeader,
  Menu,
  MobileContainer,
  BackText
} from "./styles";
import {
  BsGithub,
  BsDribbble,
  BsLinkedin,
} from "../../styles/Icons";
import { useRouter } from "next/router";
import { ThemeContext } from "styled-components";
import nookies from "nookies";
import ThemeSwitcher from "../ThemeSwitcher";
import { Sling as Hamburger } from "hamburger-react";

function Header(props) {
  const router = useRouter();
  const [fixed, setFixed] = useState(false);
  const { title } = useContext(ThemeContext);
  const [theme, setTheme] = useState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const { theme } = nookies.get("theme");
    setTheme(theme);
  }, [theme]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const setHeaderFixed = () => {
        setFixed(window.scrollY >= 1);
      };

      window.addEventListener("scroll", setHeaderFixed);
      return () => window.removeEventListener("scroll", setHeaderFixed);
    }
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const handleNavigation = (path) => {
    router.push(path);
    setOpen(false);
  };

  return (
    <Container active={fixed} open={open}>
      <Wrapper>
        <Title onClick={() => router.push("/")}>
          <EntraptaWrapper>
            <ContainerEye>
              <Eyes>
                <Light />
              </Eyes>
              <Eyes>
                <Light />
              </Eyes>
            </ContainerEye>
          </EntraptaWrapper>
          <BackText className="back-text">
            Back home
          </BackText>
        </Title>
        <DesktopHeader>
          <HeaderMenu>
            <ul>
              <li onClick={() => router.push("/about")}>
                <span>01. </span> About
              </li>
              <li onClick={() => router.push("/projects")}>
                <span>02. </span> Projects
              </li>
              <li onClick={() => router.push("/blog")}>
                <span>03. </span> Blog
              </li>
              <li onClick={() => router.push("/contact")}>
                <span>04. </span> Contact
              </li>
            </ul>
            <ThemeSwitcher onClick={props.toggleTheme} checked={title} />
            <SocialMedias>
              <BsGithub
                onClick={() =>
                  window.open("https://github.com/izumiishikawa", "_blank").focus()
                }
                size={17}
              />
              <BsLinkedin
                onClick={() =>
                  window
                    .open("https://www.linkedin.com/in/mooncoded/", "_blank")
                    .focus()
                }
                size={17}
              />
              <BsDribbble
                onClick={() =>
                  window.open("https://dribbble.com/twilightmoonhex", "_blank").focus()
                }
                size={17}
              />
            </SocialMedias>
          </HeaderMenu>
        </DesktopHeader>
        <MobileContainer>
          <Menu className="menu">
            <Hamburger toggled={open} toggle={setOpen} />
          </Menu>
          {open && (
            <MobileHeader>
              <ul>
                <li 
                  onClick={() => handleNavigation("/about")}
                  style={{ animationDelay: '0.1s' }}
                >
                  <span>01. </span> About
                </li>
                <li 
                  onClick={() => handleNavigation("/projects")}
                  style={{ animationDelay: '0.2s' }}
                >
                  <span>02. </span> Projects
                </li>
                <li 
                  onClick={() => handleNavigation("/blog")}
                  style={{ animationDelay: '0.3s' }}
                >
                  <span>03. </span> Blog
                </li>
                <li 
                  onClick={() => handleNavigation("/contact")}
                  style={{ animationDelay: '0.4s' }}
                >
                  <span>04. </span> Contact
                </li>
              </ul>
              <SocialMedias style={{ animationDelay: '0.5s' }}>
                <BsGithub
                  onClick={() =>
                    window
                      .open("https://github.com/izumiishikawa", "_blank")
                      .focus()
                  }
                  size={17}
                />
                <BsLinkedin
                  onClick={() =>
                    window
                      .open(
                        "https://www.linkedin.com/in/mooncoded/",
                        "_blank"
                      )
                      .focus()
                  }
                  size={17}
                />
                <BsDribbble
                  onClick={() =>
                    window
                      .open("https://dribbble.com/twilightmoonhex", "_blank")
                      .focus()
                  }
                  size={17}
                />
                <ThemeSwitcher onClick={props.toggleTheme} checked={title} />
              </SocialMedias>
            </MobileHeader>
          )}
        </MobileContainer>
      </Wrapper>
    </Container>
  );
}

export default Header;
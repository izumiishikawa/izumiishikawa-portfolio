// About.styled.js - com responsividade padronizada
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90vw;
  height: 100%;
  gap: 50px;
  padding: 130px 0;
  margin: 0 auto;

  .colored {
    background: linear-gradient(
      to right,
      ${(props) => props.theme.colors.primary},
      ${(props) => props.theme.colors.primary}
    );
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    cursor: pointer;
    transition: 0.3s;
  }

  @media (max-width: 768px) {
    gap: 30px;
    width: 92%;
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    gap: 40px;
    width: 90%;
  }
`;

export const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.mainText};
  text-align: center;
  gap: 30px;
  max-width: 1100px;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    gap: 25px;

    h1 {
      font-size: 1.3rem;
      margin-bottom: 15px;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    gap: 28px;

    h1 {
      font-size: 1.4rem;
      margin-bottom: 18px;
    }
  }
`;

export const PictureContainer = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  width: 600px;
  height: 600px;
  margin-bottom: 20px;
  position: relative;
  cursor: pointer;
  border-radius: 25px;
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  will-change: transform;

  :hover {
    transform: translate(10px, -10px);

    ::before {
      left: -25px;
      top: 25px;
    }
  }

  ::before {
    content: "";
    width: 100%;
    height: 100%;
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    position: absolute;
    border-radius: 25px;
    left: -15px;
    top: 15px;
    z-index: -1;
    border: 2px solid ${(props) => props.theme.colors.mainText};
  }

  @media (max-width: 768px) {
    width: 90%;
    height: 350px;
    margin-bottom: 15px;
    border-radius: 20px;

    :hover {
      transform: translate(5px, -5px);

      ::before {
        left: -15px;
        top: 15px;
      }
    }

    ::before {
      border-radius: 20px;
      left: -10px;
      top: 10px;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    width: 100%;
    height: 450px;
    margin-bottom: 18px;
    border-radius: 22px;

    :hover {
      transform: translate(8px, -8px);

      ::before {
        left: -20px;
        top: 20px;
      }
    }

    ::before {
      border-radius: 22px;
      left: -12px;
      top: 12px;
    }
  }
`;

export const FirstRow = styled.div`
  margin: 0 auto;
  height: auto;
  padding: 50px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 50px;
  max-width: 1950px;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 30px 0;
    gap: 30px;
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    padding: 40px 0;
    gap: 40px;
  }
`;

export const SecundaryColumn = styled.div`
  margin: 0 auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 1950px;
  width: 100%;

  @media (max-width: 1100px) {
    text-align: center;
    align-items: center;
  }
`;

export const TitleContainer = styled.div`
  text-align: left;
  width: 100%;
  margin-bottom: 20px;

  @media (max-width: 1100px) {
    text-align: center;
  }

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    margin-bottom: 18px;
  }
`;

export const ServicesParagraph = styled.div`
  text-align: left;
  width: 100%;
  max-width: 800px;
  color: ${(props) => props.theme.colors.mainText};
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 1.7;

  @media (max-width: 1100px) {
    width: 90%;
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
    width: 100%;
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    font-size: 1.05rem;
    line-height: 1.65;
    width: 95%;
  }
`;

export const AboutMeTitle = styled.div`
  font-size: 1.3rem;
  font-weight: 900;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    font-size: 1.2rem;
  }
`;

export const TechsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  padding: 0px;
  margin: 20px 0px 0px;
  overflow: hidden;
  list-style: none;

  .card {
    padding: 25px;
    border-radius: 25px;
    background: ${(props) =>
      props.theme.title === "light-theme"
        ? "rgba(0, 0, 0, 0.03)"
        : "rgba(255, 255, 255, 0.05)"};
    border: 2px solid
      ${(props) =>
        props.theme.title === "light-theme"
          ? "rgba(0, 0, 0, 0.1)"
          : "rgba(255, 255, 255, 0.1)"};
  }

  @media (max-width: 1100px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(120px, 180px));
    gap: 12px 15px;
    margin: 15px 0px 0px;
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    grid-template-columns: repeat(2, minmax(130px, 190px));
    gap: 13px 18px;
    margin: 18px 0px 0px;
  }
`;

export const TechP = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  cursor: pointer;

  @media (max-width: 1100px) {
    justify-content: center;
  }

  svg {
    color: ${(props) => props.theme.colors.primary};
    font-size: 1.5rem;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  &:hover {
    transform: translateX(5px);

    svg {
      transform: scale(1.2) rotate(5deg);
    }
  }

  @media (max-width: 768px) {
    gap: 10px;
    font-size: 0.9rem;

    svg {
      font-size: 1.3rem;
    }

    &:hover {
      transform: translateX(3px);
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    gap: 11px;
    font-size: 0.95rem;

    svg {
      font-size: 1.4rem;
    }

    &:hover {
      transform: translateX(4px);
    }
  }
`;

export const AboutMeParagraph = styled.div`
  font-size: 1.1rem;
  margin-top: 20px;
  color: ${(props) => props.theme.colors.mainText};
  font-weight: 500;
  width: 90%;
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-top: 15px;
    width: 100%;
    line-height: 1.6;
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    font-size: 1.05rem;
    margin-top: 18px;
    width: 95%;
    line-height: 1.65;
  }
`;

export const NameTitle = styled.div`
  font-size: 5rem;
  font-weight: 900;
  font-family: Arial, Helvetica, sans-serif;

  span {
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 3px ${(props) => props.theme.colors.mainText};
  }

  @media (max-width: 768px) {
    font-size: 3rem;

    span {
      -webkit-text-stroke: 2px ${(props) => props.theme.colors.mainText};
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    font-size: 4rem;

    span {
      -webkit-text-stroke: 2.5px ${(props) => props.theme.colors.mainText};
    }
  }
`;

export const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  text-align: left;

  @media (max-width: 1100px) {
    max-width: 100%;
    text-align: center;
    align-items: center;
  }
`;

export const CVContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  p {
    color: ${(props) => props.theme.colors.mainText};
    font-size: 1.1rem;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    margin-top: 15px;

    p {
      font-size: 1rem;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    margin-top: 18px;

    p {
      font-size: 1.05rem;
    }
  }
`;

export const ExperienceContainer = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;

  .line {
    width: 100px;
    height: 2px;
    background-color: ${(props) => props.theme.colors.mainText};
    transition: width 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  span {
    font-weight: 700;
    font-size: 1rem;
    white-space: nowrap;
  }

  &:hover {
    .line {
      width: 150px;
    }
  }

  @media (max-width: 1100px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    margin-top: 25px;
    gap: 12px;
    justify-content: center;

    .line {
      width: 60px;
    }

    span {
      font-size: 0.9rem;
    }

    &:hover {
      .line {
        width: 90px;
      }
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    margin-top: 28px;
    gap: 13px;
    justify-content: center;

    .line {
      width: 80px;
    }

    span {
      font-size: 0.95rem;
    }

    &:hover {
      .line {
        width: 120px;
      }
    }
  }
`;

export const CVButton = styled.button`
  width: 100%;
  max-width: 450px;
  align-self: flex-start;
  position: relative;
  padding: 20px 15px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  margin-top: 15px;
  border-radius: 25px;
  background-color: transparent;
  display: inline-block;
  cursor: pointer;
  font-weight: 500;
  color: ${(props) => props.theme.colors.primary};
  transition: all 0.3s ease;
  gap: 5px;
  overflow: hidden;

  :after {
    position: absolute;
    content: "";
    width: 100%;
    height: 0;
    top: 0;
    left: 0;
    z-index: -1;
    background: linear-gradient(
      45deg,
      ${(props) => props.theme.colors.primary},
      ${(props) => props.theme.colors.secundary}
    );
    transition: all 0.3s ease;
  }

  span {
    font-size: 1.2rem;
    position: relative;
    z-index: 1;
  }

  :hover {
    span {
      color: #fff !important;
    }
  }

  :hover:after {
    top: auto;
    bottom: 0;
    height: 100%;
  }

  @media (max-width: 1100px) {
    align-self: center;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 15px 12px;
    margin-top: 12px;
    border-radius: 20px;

    span {
      font-size: 1rem;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    max-width: 400px;
    padding: 18px 14px;
    margin-top: 13px;
    border-radius: 22px;

    span {
      font-size: 1.1rem;
    }
  }
`;

export const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
  width: 100%;
  margin-top: 30px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 768px) {
    gap: 20px;
    margin-top: 25px;
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    gap: 22px;
    margin-top: 28px;
  }
`;

export const ExperienceCard = styled.div`
  background: ${(props) =>
    props.theme.title === "light-theme"
      ? "rgba(0, 0, 0, 0.03)"
      : "rgba(255, 255, 255, 0.05)"};
  border: 2px solid
    ${(props) =>
      props.theme.title === "light-theme"
        ? "rgba(0, 0, 0, 0.1)"
        : "rgba(255, 255, 255, 0.1)"};
  border-radius: 25px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    border-radius: 20px;
    padding: 20px;
    gap: 15px;
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    border-radius: 22px;
    padding: 22px;
    gap: 16px;
  }
`;

export const CompanyHeader = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 15px;

  @media (max-width: 768px) {
    gap: 12px;
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    gap: 13px;
  }
`;

export const CompanyLogo = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  object-fit: cover;
  border: 2px solid
    ${(props) =>
      props.theme.title === "light-theme"
        ? "rgba(0, 0, 0, 0.1)"
        : "rgba(255, 255, 255, 0.1)"};
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    border-radius: 10px;
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    width: 55px;
    height: 55px;
    border-radius: 11px;
  }
`;

export const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;

  @media (max-width: 768px) {
    gap: 3px;
  }
`;

export const CompanyName = styled.h3`
  font-size: 1.4rem;
  font-weight: 900;
  color: ${(props) => props.theme.colors.mainText};
  margin: 0;
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    font-size: 1.3rem;
  }
`;

export const Duration = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  text-align: left;
  color: ${(props) => props.theme.colors.mainText};
  opacity: 0.8;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    font-size: 0.85rem;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  text-align: left;
  color: ${(props) => props.theme.colors.mainText};
  margin: 0;
  font-weight: 500;
  opacity: 0.85;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    font-size: 0.95rem;
    line-height: 1.55;
  }
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;

  @media (max-width: 768px) {
    gap: 6px;
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    gap: 7px;
  }
`;

export const TechBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 3px 20px;
  background: ${(props) =>
    props.theme.title === "light-theme"
      ? "rgba(0, 0, 0, 0.05)"
      : "rgba(255, 255, 255, 0.08)"};
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.mainText};
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);

  svg {
    color: ${(props) => props.theme.colors.primary};
    font-size: 1.1rem;
  }

  &:hover {
    background: ${(props) => props.theme.colors.primary};
    color: #fff;
    transform: translateY(-2px);

    svg {
      color: #fff;
    }
  }

  @media (max-width: 768px) {
    gap: 5px;
    padding: 6px 14px;
    border-radius: 999px;
    font-size: 0.75rem;

    svg {
      font-size: 1rem;
    }

    &:hover {
      transform: translateY(-1px);
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    gap: 5px;
    padding: 7px 16px;
    border-radius: 999px;
    font-size: 0.8rem;

    svg {
      font-size: 1.05rem;
    }

    &:hover {
      transform: translateY(-1.5px);
    }
  }
`;

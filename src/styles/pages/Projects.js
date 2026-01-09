import styled from "styled-components";

export const Container = styled.div`
  padding: 130px 0;
  margin: 0 auto;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1100px;

  .left {
    margin-left: 10rem;
    align-self: flex-start;
  }

  .case-title {
    padding-top: 60px;
    margin-bottom: 4rem;
  }

  .divider {
    width: 90%;
    height: 2px;
    background-color: rgba(0, 0, 0, 0.03);
    margin: 20px 0;
  }

  @media only screen and (max-width: 768px) {
    width: 92%;

    .left {
      margin-left: 0;
      align-self: center;
    }

    .case-title {
      padding-top: 40px;
      margin-bottom: 3rem;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    width: 90%;

    .case-title {
      padding-top: 50px;
      margin-bottom: 3rem;
    }

    .left {
      margin-left: 0;
      align-self: center;
    }
  }
`;

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 12px;

  .line {
    height: 2px;
    width: 30px;
    background-color: rgba(255, 255, 255, 0.8);
    transition: width 0.3s ease;
  }

  span {
    font-weight: 900;
    font-size: 0.85rem;
    letter-spacing: 1.5px;
    color: rgba(255, 255, 255, 0.9);
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    gap: 12px;
    margin-bottom: 10px;

    span {
      font-size: 0.75rem;
      letter-spacing: 1.2px;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    gap: 13px;
    margin-bottom: 11px;

    span {
      font-size: 0.8rem;
      letter-spacing: 1.3px;
    }
  }
`;

export const ThumbnailWrapper = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
  overflow: hidden;
  border-radius: 25px !important;

  @media (max-width: 768px) {
    border-radius: 20px !important;
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    border-radius: 22px !important;
  }
`;

export const ProjectWrapper = styled.div`
  width: 100%;
  cursor: pointer;
  position: relative;
  height: 350px;
  border-radius: 25px !important;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  will-change: transform;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  }

  &.hovered {
    ${DateContainer} .line {
      width: 50px;
    }
  }

  @media (max-width: 768px) {
    height: 320px;
    border-radius: 20px !important;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 28px rgba(0, 0, 0, 0.18);
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    height: 340px;
    border-radius: 22px !important;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 14px 32px rgba(0, 0, 0, 0.19);
    }
  }
`;

export const Thumbnail = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
  border-radius: 25px !important;
  transition: transform 0.3s ease, filter 0.3s ease;
  will-change: transform;
  filter: brightness(0.85);

  ${ProjectWrapper}.hovered & {
    transform: scale(1.05);
    filter: brightness(0.7);
  }

  @media (max-width: 768px) {
    border-radius: 20px !important;
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    border-radius: 22px !important;
  }
`;

export const AppDetails = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: start;
  justify-content: end;
  color: #fff;
  z-index: 2;
  padding: 30px;
  position: absolute;
  height: 100%;
  width: 100%;
  min-width: 70%;
  border-radius: 25px !important;
  top: 0;
  left: 0;
  opacity: 1;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.95) 0%,
    rgba(0, 0, 0, 0.7) 35%,
    rgba(0, 0, 0, 0.3) 70%,
    transparent 100%
  );
  pointer-events: none;

  .app-title {
    display: flex;
    flex-direction: row;
    gap: 15px;
    align-items: center;
    font-size: 1.2rem;
  }

  h1 {
    font-size: 2rem;
    text-transform: capitalize;
    font-weight: 900;
    font-family: Arial, Helvetica, sans-serif;
    margin: 8px 0;
    line-height: 1.2;
    text-shadow: 0 4px 15px rgba(0, 0, 0, 0.6);
    transition: transform 0.3s ease;
    will-change: transform;

    ${ProjectWrapper}.hovered & {
      transform: scale(1.02);
    }
  }

  h2.short-desc {
    font-size: 1.15rem;
    font-weight: 500;
    line-height: 1.5;
    margin: 0;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
    opacity: 1;
    max-height: 100px;
    overflow: hidden;
    transition: opacity 0.2s ease, max-height 0.3s ease;

    ${ProjectWrapper}.hovered & {
      opacity: 0;
      max-height: 0;
    }
  }

  p.full-desc {
    font-size: 0.95rem;
    font-weight: 400;
    line-height: 1.7;
    margin-top: 8px;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    transition: opacity 0.3s ease, max-height 0.3s ease;

    ${ProjectWrapper}.hovered & {
      opacity: 1;
      max-height: 200px;
    }
  }

  h4 {
    font-weight: 500;
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    padding: 25px;
    min-width: 0% !important;
    border-radius: 20px !important;
    text-align: left;
    justify-content: end;
    align-items: start;

    .app-title {
      flex-direction: column;
      gap: 12px;
      font-size: 1.1rem;
    }

    h1 {
      font-size: 1.5rem;
      margin: 6px 0;
    }

    h2.short-desc {
      font-size: 0.95rem;
      line-height: 1.4;
    }

    p.full-desc {
      font-size: 0.85rem;
      line-height: 1.6;
      margin-top: 6px;
    }

    h4 {
      margin-top: 15px;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    padding: 28px;
    min-width: 0% !important;
    border-radius: 22px !important;

    .app-title {
      flex-direction: column;
      gap: 13px;
      font-size: 1.15rem;
    }

    h1 {
      font-size: 1.75rem;
      margin: 7px 0;
    }

    h2.short-desc {
      font-size: 1.05rem;
      line-height: 1.45;
    }

    p.full-desc {
      font-size: 0.9rem;
      line-height: 1.65;
      margin-top: 7px;
    }

    h4 {
      margin-top: 18px;
    }
  }
`;

export const Logo = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
  will-change: transform;

  ${ProjectWrapper}:hover & {
    transform: scale(1.05) rotate(1deg);
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    border-radius: 15px;

    ${ProjectWrapper}:hover & {
      transform: scale(1.03);
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    width: 70px;
    height: 70px;
    border-radius: 18px;

    ${ProjectWrapper}:hover & {
      transform: scale(1.04);
    }
  }
`;

export const InBuildBtn = styled.div`
  padding: 12px 25px;
  background-color: #565663;
  border-radius: 20px;
  width: fit-content;
  cursor: pointer;
  transition: all 0.3s ease;
  will-change: transform, background-color;

  &:hover {
    background-color: #6a6a7a;
    transform: translateY(-2px);
    box-shadow: 0 5px 12px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    border-radius: 15px;
    font-size: 0.9rem;

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.18);
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    padding: 11px 22px;
    border-radius: 18px;

    &:hover {
      transform: translateY(-1.5px);
      box-shadow: 0 4.5px 11px rgba(0, 0, 0, 0.19);
    }
  }
`;

export const StacksRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 768px) {
    gap: 8px;
    justify-content: flex-start;
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    gap: 9px;
  }
`;

export const ProjectsMain = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-top: 20px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 20px;
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    grid-template-columns: 1fr;
    gap: 25px;
    margin-top: 20px;
  }
`;

export const StoreRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  position: absolute;
  z-index: 2;
  top: 20px;
  left: 20px;
`;

export const StoreBadge = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 3px 16px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 100px;
  font-weight: 900;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  img {
    width: 20px;
    height: 20px;
  }
`;

export const ProjectStatus = styled.div`
  width: 250px;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.mainText};
  position: absolute;
  left: -80px;
  bottom: 30px;
  font-weight: 900;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  will-change: transform;

  ${ProjectWrapper}:hover & {
    transform: translateX(10px);
  }

  @media (max-width: 768px) {
    left: 25px;
    bottom: 25px;
    width: calc(100% - 50px);
    padding: 15px;
    border-radius: 8px;

    ${ProjectWrapper}:hover & {
      transform: translateX(0);
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    left: 25px;
    bottom: 28px;
    width: calc(100% - 50px);
    padding: 18px;
    border-radius: 9px;

    ${ProjectWrapper}:hover & {
      transform: translateX(5px);
    }
  }
`;

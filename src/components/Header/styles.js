import styled, { css, keyframes } from "styled-components";


const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const lightMove = keyframes`
  0%, 35% {
    margin-top: -110px;
  }
  50%, 80% {
    margin-top: -50px;
  }
  100% {
    margin-top: 40px;
  }
`;

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Container = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-right: 15px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 999;
  color: ${(props) => props.theme.colors.mainText};
  width: 90vw;

  ${(props) =>
    props.theme.title == "dark-theme"
      ? css`
          background: rgba(42, 43, 56, 0.5);
          border: 0.1rem solid rgba(255, 255, 255, 0.1);
          -webkit-backdrop-filter: blur(104px);
          backdrop-filter: blur(104px);
          border-radius: 8px;
        `
      : css`
          background: rgba(255, 255, 255, 0.25);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.18);
        `}

  ${(props) =>
    props.open &&
    css`
      width: 100vw;
      margin-top: 0px;
      border-radius: 0;
    `}

  img {
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;

  :hover {
    .back-text {
      opacity: 1;
      transform: translateX(0px);
    }
  }
`;

export const HeaderMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
  align-items: center;

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    font-weight: 900;
    font-size: 16px;
    gap: 20px;
    align-items: center;

    li {
      cursor: pointer;
      position: relative;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      padding: 6px;
      display: flex;
      flex-direction: row;
      align-items: center;

      span {
        font-size: 10px;
        font-weight: 900;
        margin-right: 3px;
        color: ${(props) => props.theme.colors.primary};
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      :before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        height: 3px;
        width: 0%;
        border-radius: 20px;
        background: linear-gradient(
          to right,
          ${(props) => props.theme.colors.primary},
          ${(props) => props.theme.colors.secundary}
        );
        transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      }

      :hover:before {
        width: 100%;
      }

      :hover {
        transform: translateY(-2px);
      }
    }
  }
`;

export const SocialMedias = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
  justify-content: center;

  svg {
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    :hover {
      filter: drop-shadow(0 0 2px ${(props) => props.theme.colors.primary});
      fill: ${(props) => props.theme.colors.primary};
      transform: scale(1.2);
    }
  }
`;

export const ThemeSwitcher = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
`;

export const EntraptaWrapper = styled.div`
  display: flex;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  :hover {
    transform: scale(1.05);
  }
`;

export const ContainerEye = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  background-color: #171122;
  border: 3px solid white;
  height: 60px;
  padding: 4.5px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  gap: 7px;
  transform: scale(0.6);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Eyes = styled.div`
  position: relative;
  width: 18px;
  height: 18px;
  background-color: ${(props) => props.theme.colors.entraptaGlasses};
  border-radius: 100%;
  opacity: 1;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  filter: drop-shadow(0 0 5px ${(props) => props.theme.colors.entraptaGlasses});
  margin: 7px 0;
  z-index: 1;
`;

export const Light = styled.div`
  display: flex;
  width: 11px;
  height: 160px;
  background-color: ${(props) => props.theme.colors.entraptaGlassesLight};
  transform: rotate(45deg);
  margin: -10px;
  animation: ${lightMove} 2s infinite cubic-bezier(0.4, 0, 0.2, 1);
  animation-fill-mode: forwards;

  ::after {
    content: "";
    width: 3px;
    height: 200px;
    background-color: ${(props) => props.theme.colors.entraptaGlassesLight};
    margin: 0 -5px;
    animation: ${lightMove} 2s infinite cubic-bezier(0.4, 0, 0.2, 1);
    animation-fill-mode: forwards;
  }
`;

export const MobileContainer = styled.div`
  display: none;

  @media (max-width: 750px) {
    display: flex;
  }
`;

export const MobileHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  gap: 40px;
  top: 0;
  left: 0;
  animation: ${fadeIn} 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation-fill-mode: both;
  
  ${(props) =>
    props.theme.title == "dark-theme"
      ? css`
          background: rgba(23, 17, 34, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        `
      : css`
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        `}

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    font-weight: 500;
    font-size: 3em;
    gap: 20px;
    align-items: center;

    li {
      cursor: pointer;
      position: relative;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      padding: 6px;
      animation: ${slideDown} 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      animation-fill-mode: both;

      span {
        font-size: 1.5rem;
        font-weight: 900;
        margin-right: 3px;
        color: ${(props) => props.theme.colors.primary};
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      :before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        height: 3px;
        width: 0%;
        border-radius: 20px;
        background: linear-gradient(
          to right,
          ${(props) => props.theme.colors.primary},
          ${(props) => props.theme.colors.secundary}
        );
        transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      }

      :hover:before {
        width: 100%;
      }

      :active {
        transform: scale(0.95);
      }
    }
  }
`;

export const DesktopHeader = styled.div`
  @media (max-width: 750px) {
    display: none;
  }
`;

export const Menu = styled.div`
  display: none;
  z-index: 2999;

  @media (max-width: 750px) {
    display: flex;
  }
`;

export const BackText = styled.div`
  font-weight: 900;
  opacity: 0;
  transform: translateX(20px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`;
import styled from "styled-components";

export const Container = styled.div`
  padding: 130px 0;
  margin: 0 auto;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1100px;

  @media only screen and (max-width: 768px) {
    width: 92%;
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    width: 90%;
  }
`;

export const ProjectWrapper = styled.div`
  width: 100%;
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  overflow: hidden;
  background: ${(props) => props.theme.colors.secondaryBackground};
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &.featured {
    margin-top: 60px;
  }

  &:hover {
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    border-radius: 16px;

    &.featured {
      margin-top: 40px;
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;

  ${ProjectWrapper}.featured & {
    height: 300px;
  }

  @media (max-width: 768px) {
    height: 180px;

    ${ProjectWrapper}.featured & {
      height: 220px;
    }
  }
`;

export const Thumbnail = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
  transition: transform 0.3s ease;

  ${ProjectWrapper}:hover & {
    transform: scale(1.05);
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0;
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  ${ProjectWrapper}:hover & {
    opacity: 0.7;
  }
`;

export const EntraptaWrapper = styled.div`
  display: flex;
  position: absolute;
  left: 50%;
  top: 50%;
  gap: 0.5rem;
  opacity: 0;
  transform: translate(-50%, -50%);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  ${ProjectWrapper}:hover & {
    opacity: 1;
  }
`;

export const AppDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  color: ${(props) => props.theme.colors.mainText};

  h1 {
    font-size: 1.4rem;
    font-weight: 700;
    margin: 8px 0;
    line-height: 1.3;
  }

  p.description {
    font-size: 0.95rem;
    font-weight: 400;
    line-height: 1.6;
    margin-top: 8px;
    opacity: 0.8;
  }

  ${ProjectWrapper}.featured & {
    h1 {
      font-size: 1.8rem;
    }

    p.description {
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    padding: 20px;

    h1 {
      font-size: 1.2rem;
    }

    p.description {
      font-size: 0.9rem;
    }

    ${ProjectWrapper}.featured & {
      h1 {
        font-size: 1.4rem;
      }

      p.description {
        font-size: 0.95rem;
      }
    }
  }
`;

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${(props) => props.theme.colors.mainText};
  text-transform: uppercase;

  .line {
    height: 1px;
    width: 20px;
    background-color: ${(props) => props.theme.colors.mainText};
    opacity: 0.4;
  }

  span {
    font-weight: 600;
    font-size: 0.75rem;
    letter-spacing: 1.5px;
    opacity: 0.6;
  }

  @media (max-width: 768px) {
    gap: 10px;

    span {
      font-size: 0.7rem;
    }
  }
`;

export const ProjectsMain = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-top: 30px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 20px;
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    grid-template-columns: 1fr;
    gap: 25px;
    margin-top: 25px;
  }
`;

export const StoreRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  position: absolute;
  z-index: 3;
  top: 16px;
  left: 16px;
`;

export const StoreBadge = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 100px;
  font-weight: 600;
  font-size: 0.8rem;
  color: white;

  img {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 768px) {
    padding: 5px 12px;
    font-size: 0.75rem;

    img {
      width: 16px;
      height: 16px;
    }
  }
`;

export const ThumbnailWrapper = styled.div``;
export const Logo = styled.img``;
export const InBuildBtn = styled.div``;
export const StacksRow = styled.div``;
export const ProjectStatus = styled.div``;

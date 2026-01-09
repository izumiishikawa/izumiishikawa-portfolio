import styled from "styled-components";
import Image from "next/image";

const spacing = {
  xs: '0.5rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '3rem',
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 380px;
  margin: ${spacing.xs};
  cursor: pointer;
  border-radius: ${spacing.md};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  :hover {
    transform: translateY(-8px);
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin: ${spacing.sm} 0;
  }

  @media (max-width: 480px) {
    margin: ${spacing.xs} 0;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${spacing.md};
  border-radius: ${spacing.xs};
  height: auto;
  gap: ${spacing.sm};

  h2 {
    font-size: 1.5rem;
    word-wrap: break-word;
    font-weight: 900;
    color: ${(props) => props.theme.colors.mainText};
    line-height: 1.3;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    margin: 0;
    color: ${(props) => props.theme.colors.mainText};
    line-height: 1.6;
    font-size: 0.95rem;

    @media (max-width: 768px) {
      font-size: 0.9rem;
      -webkit-line-clamp: 2;
    }
  }
`;

export const Date = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 600;
  align-self: flex-start;
  opacity: 0.7;
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.mainText};
  gap: ${spacing.xs};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

export const Title = styled.b`
  width: auto;
  font-size: 0.65rem;
  letter-spacing: 0.5px;
`;

export const TagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.mainText};
  color: ${(props) => props.theme.colors.mainText};
  padding: 3px 16px;
  border-radius: 100px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;

  :hover {
    background-color: ${(props) => props.theme.colors.mainText};
    color: ${(props) => props.theme.colors.reverseColor};
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    padding: 3px 16px;
  }
`;

export const TagWrapper = styled.div`
  display: flex;
  gap: ${spacing.xs};
  flex-wrap: wrap;
  margin: 0;
`;

export const ImageWrapper = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 220px;
  border-radius: ${spacing.md};
  overflow: hidden;

  @media (max-width: 768px) {
    height: 200px;
  }

  @media (max-width: 480px) {
    height: 180px;
  }
`;

export const ImageComp = styled(Image)`
  border-radius: ${spacing.md};
  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: ${spacing.md};
  background-color: rgba(0, 0, 0, 0.7);

  ${Container}:hover & {
    opacity: 0.7;
  }
`;

export const EntraptaWrapper = styled.div`
  display: flex;
  position: absolute;
  left: 50%;
  top: 50%;
  gap: ${spacing.xs};
  opacity: 0;
  transform: translate(-50%, -50%);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  ${Container}:hover & {
    opacity: 1;
  }
`;
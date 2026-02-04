import { DateContainer } from "../../styles/pages/Projects";
import EntraptaEyes from "../EntraptaEyes";
import {
  Container,
  EntraptaWrapper,
  ImageComp,
  ImageWrapper,
  Info,
  Overlay,
  TagContainer,
  Title,
} from "./styles";

function PostCard(props) {
  var categories = props.categories.split(",");

  const myLoader = () => {
    return props.image;
  };

  return (
    <Container onClick={props.onClick}>
      <ImageWrapper>
        <ImageComp
          loader={myLoader}
          alt={props.title}
          src={props.image}
          layout="fill"
        />
        <Overlay />
        <EntraptaWrapper>
          <EntraptaEyes />
        </EntraptaWrapper>
      </ImageWrapper>
      <Info>
        <DateContainer>
          <div className="line"></div>
          <span>{props.date}</span>
          <div className="line"></div>
        </DateContainer>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </Info>
    </Container>
  );
}

function Tag(props) {
  return (
    <TagContainer>
      <Title>#{props.title}</Title>
    </TagContainer>
  );
}

export default PostCard;

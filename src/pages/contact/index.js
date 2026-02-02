import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useMemo } from "react";
import PageTitle from "../../components/PageTitle";
import {
  Column,
  Container,
  Form,
  Input,
  InputData,
  Main,
  Row,
  SubmitButton,
  TextArea,
} from "../../styles/pages/Contact";

function Contact() {
  const Map = useMemo(() =>
    dynamic(() => import("../../components/Map"), { ssr: false }),
  );

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_50wnttx",
        "template_11m1mqp",
        e.target,
        "Dh4W84gR2oYOZQnbC",
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
    e.target.reset();
    e.preventDefault();
  };

  return (
    <Container>
      <Head>
        <title>Ishikawa Izumi | Contact Me</title>
        <meta
          name="description"
          content="Get in touch to discuss UI/UX design or full-stack development projects. Available for freelance work, collaborations, and new opportunities."
        ></meta>
      </Head>
      <Main>
        <PageTitle
          title="contact"
          stretchedLetter="n"
          overlayTitle="freelance | questions | prices"
        />
        <Form onSubmit={sendEmail}>
          <Row>
            <InputData
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Input
                type="text"
                name="username"
                placeholder="Your name"
                required
              ></Input>
              <div className="underline"></div>
            </InputData>
            <InputData
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <Input
                type="email"
                name="email"
                placeholder="Email"
                required
              ></Input>
              <div className="underline"></div>
            </InputData>
          </Row>
          <Column>
            <InputData
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              name="subject"
              className="full-fill"
            >
              <Input type="text" placeholder="Subject" required></Input>
              <div className="underline"></div>
            </InputData>
            <InputData
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="full-fill"
            >
              <TextArea
                name="message"
                placeholder="Message"
                required
              ></TextArea>
            </InputData>
            <SubmitButton type="submit">
              <span>Submit</span>
            </SubmitButton>
          </Column>
        </Form>
      </Main>
    </Container>
  );
}

export default Contact;

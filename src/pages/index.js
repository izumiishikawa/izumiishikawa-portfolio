import React from "react";
import Hero from "../components/Hero";
import SEO from "../components/SEO";

function Home() {
  return (
    <>
      <SEO
        description="Izumi Ishikawa is a freelancer UI/UX Designer and Full-Stack Developer building modern, user-focused websites and applications for startups and businesses."
      />
      <Hero />
    </>
  );
}

export default Home;

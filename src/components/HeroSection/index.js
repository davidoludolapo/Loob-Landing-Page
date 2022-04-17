import React, { useState } from "react";
import Video from "../../videos/movie3.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { Button } from "../ButtonElement";

function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <HeroContainer id="home">
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroH1>Make Smart Financial Decisions With Us</HeroH1>
          <HeroP>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
            delectus, neque, maiores totam adipisci inventore labore officia
            beatae possimus nobis, quas vero quae doloremque corporis.
            Laboriosam
          </HeroP>
          <HeroBtnWrapper>
            <Button
              to="signup"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="false"
              dark="true"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80} 
            >
              Get Started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
}

export default HeroSection;

import React, {useState} from 'react';
import Video from "../Videos/video.mp4";
import {Button} from '../ButtonElement';
import { Link } from "react-router-dom";
import { 
    HeroContainer,
    HeroBg, 
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements';

const HeroSection = () => {
const [hover, setHover] = useState(false)

const onHover = () => {
    setHover(!hover)
}

  return (
    <HeroContainer>
    <HeroBg>
        <VideoBg autoPlay loop muted src={Video}
         type='video/mp4'/>

    </HeroBg>
     <HeroContent>
     <HeroH1>Welcome to Dribbly.</HeroH1>
        <HeroP>
        Sign up for a new account today and see a new world.
        
        </HeroP>
        <HeroBtnWrapper>
          <Link to="/login">
            <button to = 'Signup' onMouseEnter = {onHover} onMouseLeave = {onHover} onClick={()=>{
                console.log("LOL")
            }}>
            Get Started{hover ? <ArrowForward/> : <ArrowRight/>}
            </button>
            </Link>
         
        </HeroBtnWrapper>
     </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
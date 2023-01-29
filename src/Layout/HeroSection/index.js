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
     <HeroH1 >Welcome to Dribbly.</HeroH1>
        <HeroP >
       A platform to showcase your art and designs to the world.
        </HeroP>
        <HeroBtnWrapper>
          <div className='get-started'>
          <Link to="/signup">
            <button to = 'Signup' className='btn-1' onMouseEnter = {onHover} onMouseLeave = {onHover} onClick={()=>{
            }}>
            Get Started{hover ? <ArrowForward/> : <ArrowRight/>}
            </button>
            </Link>
            <Link to="/yourprojects">
            <button to = 'Signin' className='btn-1' onMouseEnter = {onHover} onMouseLeave = {onHover} onClick={()=>{
            }}>
            Sign In{hover ? <ArrowForward/> : <ArrowRight/>}
            </button>
            </Link>
            </div>
        </HeroBtnWrapper>
     </HeroContent>
    </HeroContainer>
  )
}
export default HeroSection
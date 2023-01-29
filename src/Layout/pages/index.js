import React, {useState} from 'react'
import HeroSection from '../HeroSection';
// import InfoSection from '../components/InfoSection';
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

  return (
    <>
        <Sidebar isOpen={isOpen} toggle =
        {toggle} />
        
        <Navbar toggle={toggle} />
        <HeroSection />
        {/* <InfoSection/> */}
    </>
  )
}

export default Home;
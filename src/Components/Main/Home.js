import React,{useEffect,useState} from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { Flask, GamePad, Glasses, Headphones, LaptopCode, SmileIcon } from "../Icons/Icons";
import "./Home.css";
import Image from "../../assets/images/Coding-bro.svg"
import About from "../../assets/images/Personal data-pana.svg"
import Title from "../Title/Title";
import Skills from "../Skills/Skills";
gsap.registerPlugin(ScrollTrigger)
const Home = () => {

    const animation =()=>{
        let tl = gsap.timeline({defaults:{duration:1}})
        gsap.from(".name",{y:-70,stagger:.6,opacity:0,duration:1.2,ease:"bounce"});
        gsap.from(".title",{x:-70,stagger:.6,opacity:0,duration:1.2,ease:"bounce"});
        tl.from(".hero-img",{scale:0.1,stagger:.1,opacity:0,duration:.9,delay:.8});
        gsap.from(".design-icon",{duration:2.6,opacity:0,y:()=>Math.random()*400-200,stagger:0.25,repeat:Infinity,yoyo:true,delay:2});
        gsap.from(".personal-info",{duration:3,y:'100',opacity:0,ease:'ease-in',scrollTrigger:{
            trigger:'personal-info',
            start:'top -88%',
            end:'bottom 60%',
            toggleActions:'restart complete reverse reset'
        }})
    }
    useEffect(()=>{
    animation()
    })





    // STATE

    
const [skill]   = useState([
    {
    skillname:"HTML",
    strength:100,
    },
    {
    skillname:"CSS",
    strength:96,
    },
    {
    skillname:"JAVASCRIPT",
    strength:94.5,
    },
    {
    skillname:"REACT JS",
    strength:89.6,
    },
    {
    skillname:"UNIT TESTING",
    strength:50,
    },
    {
    skillname:"RESPONSIVE DESIGN",
    strength:98,
    },
    {
    skillname:"CRITICAL THINKING",
    strength:98,
    },


]);


  return (
    <div className="Home">
     <div className="hero">
         <div className="row">
             <div className="col-1">
                    <h2 className="name">Hi There, I'm Ebubechi </h2>
                    <h3 className="title">I'm  A Web Developer <span><SmileIcon/></span></h3>
             </div>
             <div className="col-2">
        <img className="hero-img"  src={Image} alt="hero" />
             </div>
         </div>
     </div>


     <div className="about-section">
         <Title>My Info</Title>
         <div className="row  personal-info">

       <div className="col-3">
                 <img src={About} alt="about-img" />
             </div>

             <div className="col-2">
                 <p><SmileIcon/>  My name is Ebubechi Ihediwa.
                     I'm a Web Developer, I specialize in responsive web design, unique and user friendly applications.
                     Building fast and scalable applications for my clients with the best technologies in the market.  <SmileIcon/>
                 </p>
             </div>

           
         </div>

         <div className="design-icons">
            <GamePad className="design-icon" />
            <LaptopCode className="design-icon" />
            <Glasses className="design-icon"/>
            <Flask className="design-icon"/>
            <Headphones className="design-icon" />
            </div>


            <div className="skill-container">
            <Title>Skills</Title>
            <div className="skillset">
            {skill.map(i=>(
                <Skills key={i.skillname} skillname={i.skillname} strength={i.strength} />
            ))}
                </div>
                </div>


<div className="my-technologies-wrapper">
    <div className="my-tehnologies">

    </div>
</div>
     </div>
    </div>
  );
};

export default Home;

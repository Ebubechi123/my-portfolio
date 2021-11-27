import React,{useState,useEffect} from 'react';
import "./Skills.css";
import Title from "../Title/Title";

const Skills = ({skillname,strength}) => {

   
    const [count,setCount] = useState(0);
    const Load=()=>{
        if(count==strength){
            console.log("Loaded")
        }

        else{
            console.log(count)
           console.log( count +strength);
        }
    }


    useEffect(()=>{
        Load();
    })
    return ( 
        <>
<div className="skills">
<div className="skill-percent">
         <h5>{strength}%</h5>
        </div>
      <div className="skill-name">
            <h5>{skillname}</h5>
        </div>
      </div>
{/* <g clip-path="url(#f)"><rect x="395" y="58" width="118" height="118" rx="10" fill="#30C8C9"></rect> <path stroke="#2250F4" stroke-width="3" d="M422.489 39.37 470.6 87.48l-48.111 48.112-48.112-48.112z"></path> <path stroke="#2250F4" stroke-width="3" d="M422.489 54.34 455.63 87.48l-33.141 33.142-33.142-33.142z"></path> <path stroke="#2250F4" stroke-width="3" d="m422.489 70.633 16.847 16.847-16.847 16.847-16.847-16.847z"></path> <path stroke="#2250F4" stroke-width="3" d="m422.49 25.218 62.262 62.263-62.263 62.263-62.263-62.263z"></path> <path stroke="#2250F4" stroke-width="3" d="m422.489 11.077 76.404 76.404-76.404 76.403-76.404-76.403z"></path> <path stroke="#2250F4" stroke-width="3" d="m422.489-4.176 91.658 91.658-91.658 91.658-91.658-91.658z"></path> <path stroke="#2250F4" stroke-width="3" d="m422.49-19.159 106.639 106.64-106.64 106.639L315.85 87.48z"></path> <path stroke="#2250F4" stroke-width="3" d="M422.489-34.933 544.902 87.48 422.49 209.894 300.075 87.481z"></path> <path stroke="#2250F4" stroke-width="3" d="M422.49-50.633 560.602 87.481 422.49 225.595 284.375 87.481z"></path></g> */}
        </>
     );
}
 
export default Skills;
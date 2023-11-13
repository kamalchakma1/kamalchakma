import Box from "../Box/Box"
import style from "./Skill.module.css"
import html from "../../images/html.png"
import css from "../../images/css-3.png"
import js from "../../images/js.png"
import react from "../../images/physics.png"
import nodejs from "../../images/nodejs.png"
import git from "../../images/git.png"
import github from "../../images/github.png"
import materialUI from "../../images/mui.png"
import mongodb from "../../images/mongodb-logo-240.png"
const Skills=({buttonColors})=>{
    const skills={
        title:'Skills',
        verticleWidth: '20vh',
        hrLineWidth: '18vw',
        hrLineTop:'160px',
        hrLineLeft:'20.5%',
        buttonColors: buttonColors,
        left:'26%'

    }
    const skillSet=[html,css,js,react,materialUI,nodejs,mongodb,git,github]   
    return(
        <div className={style.skillMain}>        
              <Box  data={skills}  skillSet={skillSet} />        
        </div>
    )
}
export default Skills
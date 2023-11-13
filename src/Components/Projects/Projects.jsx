import Box from "../Box/Box"
import projectImg from "../../images/user.jpg"
import style from "./Projects.module.css"
import dmws from "../../images/dmws.png"
const Projects=({buttonColors})=>{

    const projects={
            title: `Projects`,
            buttonColors: buttonColors,
            left:'16%'
    }
    const projectDetails=[
        {
            id:1,
            name:'Dhamma Metta Welfare Society',
            projectImg: dmws,
            projectDesc: 'An NGO website where they want to show their works.Technology that I have used to developed it is react,material UI and successfully deploed.',
            githubLink:'',
            projectLink:'http://dmwsociety.org/',
        },
     
        
    ]
    return(
        <div className={style.projectMain}>
        <Box data={projects} projectDetails={projectDetails}/>
        </div>
    )
}
export default Projects
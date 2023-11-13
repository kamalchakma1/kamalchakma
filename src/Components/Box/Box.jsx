import style from "./Box.module.css"
import Button from "../Button/Button"
import { Typography } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
const About=(props)=>{
  const skills=props.skillSet
  const projectDetails=props.projectDetails

    return(
        <div className={style.MainContainer}>

          {/* About me hr line */}
          <div className={style.hrLineContainer}>
            <hr className={style.hr1}/>
            <div className={style.hrLineContainer__btn}>
              {props.data.title?<Button title={props.data.title} bgColor={props.data.buttonColors} left={props.data.left}/>:null}             
            </div>
          </div>
          {/* Pic,Desc,skills,experience,projects */}
          <div className={style.desc}> 

            {/* ABOUT SECTION */}
             
             {
              props.data.title.toLowerCase()==='about me'?(
                <div className={style.desc__pic}>
                    {props.data.userImg ? <img src={props.data.userImg} alt="kamal_pic"/>: '' } 
                </div>
              ):null
             }
          
             {/* Vertical Line for large screen */}
             <hr className={style.hrLine} 
             style={{width:props.data.hrLineWidth,top: props.data.hrLineTop,left: props.data.hrLineLeft}}
              
             />
             {
              props.data.title.toLowerCase()==='about me'?(
                <div className={style.desc__para}>                
                <article>
                <br/>
                  <Typography variant="h6">
                    {props.data.aboutHeader?props.data.aboutHeader:null}
                  </Typography>
                  <br/>
                  <Typography variant="body2" className={style.desc__para__body2}>
                    {props.data.aboutDesc?props.data.aboutDesc:null}
                  </Typography>               
                </article>
               </div>
              ):null
             } 

                {/* SKILLS SECTION*/}
                {
                  props.data.title.toLowerCase()==='skill'||props.data.title.toLowerCase()==='skills'?(
                 <div className={style.desc__skills}> 
                  {/* skills */}    
                    {
                     skills.map((skill,key)=>{
                      return (
                        <div  className={style.desc__skill} key={key}>
                           <img src={skill} alt="skill_logo"/>
                        </div>)
                    })
                  }
                </div> 
                  ):null
                }
               

                {/* EXPERIENCE SECTION */}
                {
                  props.data.title.toLowerCase()==='experience'||props.data.title.toLowerCase()==='experiences'?(
                    <div className={style.experience}>
                      <div className={style.experience__details}>
                        <Typography variant="h5" className={style.experience__details__jobTitle}>{props.data.role} - {props.data.company}</Typography>
                        <Typography variant="subtitle1" className={style.experience__details__jobPeriod}>{props.data.period}</Typography>
                      </div>                  
                        <Typography variant="body2" className={style.experience__bodyText}>{ props.data.jobDesc}</Typography>
                    </div>
                  ):null
                }
               

                {/* PROJECTS SECTION  */}
                {
                 props.data.title.toLowerCase()==='projects'||props.data.title.toLowerCase()==='project'||props.data.title.toLowerCase()===`project's`?(
                  <div className={style.projects}>
                  {
                    projectDetails.map((project,key)=>{
                      return(
                        <div className={style.projects__project} key={project.id}>
                             {/* Project Image */}
                             <img src={project.projectImg} alt={project.name}/>
                             {/* Project details */}
                             <div className={style.projects__project__para}>                              
                                {/* Project Description */}
                              <div className={style.projects__project__para__details}>
                                {/* Project Title */}
                               <Typography variant="h6">{project.name}</Typography>
                               <Typography variant="body2">{project.projectDesc}</Typography>
                                    {/* Links */}
                                  <div className={style.projects__project__para__details__links}>
                                    { project.projectLink ? (<a href={project.projectLink} target="_blank"><LaunchIcon/></a>): null }                                    
                                    { project.githubLink ? ( <a href={project.githubLink} target="_blank"><GitHubIcon/></a> ):null }                                     
                                  </div>                     
                              </div>
                           </div>
                        </div>
                      )
                    })
                  }
                </div>

                 ):null
                }
          
          </div>
        </div>
    )
}
export default About
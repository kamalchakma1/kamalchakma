import style from "./Box.module.css"
import Button from "../Button/Button"
import { Typography } from "@mui/material"
const About=({userImage,desc,skills,projects,buttonTitle,header})=>{
    return(
        <div className={style.aboutMainContainer}>
          {/* About me hr line */}
          <div className={style.hrLineContainer}>
            <hr className={style.hr1}/>
            <div className={style.hrLineContainer__btn}>
              {buttonTitle?<Button title={buttonTitle}/>:null}             
            </div>
          </div>
          {/* Pic,Desc,skills,experience,projects */}
          <div className={style.desc}> 
               {/* User Image  */}
             <div className={style.desc__pic}>
              {/* {userImage ? <img src={userImage} alt="kamal_pic"/>: '' }  */}
             </div>
             {/* Vertical Line for large screen */}
             <hr className={style.hrLine}/>
             {/* Contetent of the box */}
             <div className={style.desc__para}>
              <br/>
              <article>
                <Typography variant="h6">
                  {header?header:null}
                </Typography>
                {/* Skills */}
                {/* If skills are there then only run it
                //  Map thorough skills- which is array
                */}
                {/* <div className={style.desc__skills}> */}
                  {/* skills */}
                  {/* <div  className={style.desc__skill}>
                    <img src={userImage} alt="skill_logo"/>
                  </div>
                  <div  className={style.desc__skill}>
                    <img src={userImage} alt="skill_logo"/>
                  </div>
                  <div  className={style.desc__skill}>
                    <img src={userImage} alt="skill_logo"/>
                  </div>
                  <div  className={style.desc__skill}>
                    <img src={userImage} alt="skill_logo"/>
                  </div>
                  <div  className={style.desc__skill}>
                    <img src={userImage} alt="skill_logo"/>
                  </div>
                </div> */}

                {/* EXPERIENCE */}
                <div className={style.experience}>
                  <div className={style.experience__details}>
                      <Typography variant="h5">Role - Company Name</Typography>
                      <Typography variant="subtitle1">Feb - 1995</Typography>
                  </div>                  
                  <Typography variant="body2" className={style.experience__bodyText}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                  </Typography>
                </div>
                <br/>
                <Typography variant="body2" className={style.desc__para__body2}>
                  {desc?desc:null}
                </Typography>
               
              </article>
             </div>
          </div>
        </div>
    )
}
export default About
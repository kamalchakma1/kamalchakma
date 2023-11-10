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
          {/* Pic and Desc */}
          <div className={style.desc}>
            
             <div className={style.desc__pic}>
              {userImage ? <img src={userImage} alt="kamal_pic"/>: '' } 
             </div>
             <hr className={style.hrLine}/>
             <div className={style.desc__para}>
              <br/>
              <article>
                <Typography variant="h6">
                  {header?header:null}
                </Typography>
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
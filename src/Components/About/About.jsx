import style from "./About.module.css"
import Button from "../Button/Button"
import { Typography } from "@mui/material"
const About=()=>{
    return(
        <div className={style.aboutMainContainer}>
          {/* About me hr line */}
          <div className={style.hrLineContainer}>
            <hr className={style.hr1}/>
            <div className={style.hrLineContainer__btn}>
             <Button title={'About Me'}/>
            </div>
          </div>
          {/* Pic and Desc */}
          <div className={style.desc}>
             <div className={style.desc__pic}>pic</div>
             <div className={style.desc__para}>
              <article>
                <Typography variant="h6">Hi There</Typography>
                <Typography variant="body2" className={style.desc__para__body2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </Typography>
              </article>
             </div>
          </div>
        </div>
    )
}
export default About
import style from "./Contact.module.css"
import { Typography } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Button from "../Button/Button"
const Contact=({buttonColors,iconColors})=>{

    return(
        <div className={style.contactMainContainer}>
            <div className={style.title}>
                <Typography variant="h5" className={style.header}>Let's connect</Typography>
            </div>
            <div className={style.socialIcons}  >
               <a href="mailto:mr.kamalchakma@gmail.com"><Button title={'Say Hello'} bgColor={buttonColors}/></a>
               <a href="https://github.com/kamalchakma1" target="_blank" style={iconColors}><GitHubIcon/></a> 
               <a href="https://www.linkedin.com/in/kamalkantichakma/" target="_blank" style={iconColors}><LinkedInIcon/></a>
            </div>
           <Typography variant="body2" className={style.codedBy}>Coded by Me</Typography>
        </div>
    )
}
export default Contact
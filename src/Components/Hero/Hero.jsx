import { Typography} from "@mui/material"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import style from "./Hero.module.css"
import Button from "../Button/Button"

const Hero=()=>{
    function scrollDownFun(){
        window.scroll({
            top: 700,
            behavior: 'smooth'
        })
    }
    return(
        <div className={style.mainContainer}>
           <Typography variant="h5"> Hi! I'm Kamal,</Typography>
           <Typography variant="h5">A Software Developer</Typography>
           <div className={style.mainContainer__btn}>
            <Button title={'HIRE ME'}/>
           </div>
           <div className={style.mainContainer__scroll} onClick={scrollDownFun}>
            <Typography variant="body2" className={style.body2}>Scroll</Typography>
            <ArrowDownwardIcon />
           </div>
          
        </div>
    )
}
export default Hero
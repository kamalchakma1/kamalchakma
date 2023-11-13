import style from "./Nav.module.css"
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';
import kamal_resume from "../../assets/Kamal Resume Updated.pdf"
const Nav=({onClick,isClick})=>{

  // Color for Resume Title
   const fonColor={
    color:isClick ? '#fff' :'#000'
   }
   
    return(
        // Navbar Main Container
        <div className={style.nav_main_container}>
            {/* Logo */}
            <div className={style.nav_main_container__logo}>
                <h3>{"<KamalChakma/>"}</h3>
            </div>
            {/* Dark Mode and Resume */}
            <div className={style.nav_main_container__menu}>
               <div className={style.nav_main_container__menu__dark_mode} onClick={onClick}>                       
                 {
                   isClick ? <Brightness4OutlinedIcon style={{fontSize:"1rem"}}/> : <LightModeOutlinedIcon style={{fontSize:"1rem"}}/>
                 }
               </div> 
               <div className={style.nav_main_container__menu__items}>
                 <span><a href={kamal_resume} download={'kamal_resume'} style={fonColor}>RESUME</a> </span> 
               </div>              
            </div>    
        </div>
    )
}
export default Nav
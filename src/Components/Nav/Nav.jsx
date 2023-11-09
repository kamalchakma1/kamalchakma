import style from "./Nav.module.css"
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { useState } from "react";
const Nav=()=>{

    const [darkMode,setDarkMode] = useState(false);
    
    // Dark Mode Function
    function darkModeFun(){
        alert('Dark Mode hit')
    }
    return(
        <div className={style.nav_main_container}>
            <div className={style.nav_main_container__logo}>
                <h3>{"<KamalChakma/>"}</h3>
            </div>
            <div className={style.nav_main_container__menu}>
            <div className={style.nav_main_container__menu__dark_mode} onClick={darkModeFun}>
              <LightModeOutlinedIcon style={{fontSize:"1rem"}}/>
            </div> 
            <div className={style.nav_main_container__menu__items}>
              <span>RESUME </span> 
              <span> | </span> 
              <span> MENU</span>
            </div>
           
            </div>    
        </div>
    )
}
export default Nav
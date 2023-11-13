import style from "./Button.module.css"
const Button =({title,bgColor,left})=>{
    const buttonStyle={
        backgroundColor: bgColor.backgroundColor,
        color: bgColor.color,
        marginLeft:left
    }
    return(
        <div className={style.buttonContainer} >
           <button className={style.buttonContainer__button} style={buttonStyle}>{title}</button>
        </div>
    )
}
export default Button
import style from "./Button.module.css"
const Button =({title})=>{
    return(
        <div className={style.buttonContainer}>
           <button className={style.buttonContainer__button}>{title}</button>
        </div>
    )
}
export default Button
import Box from "../Box/Box"
import style from "./Experience.module.css"
const Experience=({buttonColors})=>{
    const experience={
        title: 'Experience',
        company: 'Access Automation',
        role: 'Trainee Engineer',
        period: 'Feb 23 - Present',
        jobDesc: `Working as a full stack developer where my role is to build and maintain front-end as well as backend along with my team and also helping IoT team for font-end.Working with team I have learn lot of great things.Since my joining we have successfully delivered long pending projects within few months and learn lot of things along the way.
        `,
        hrLineWidth:'14vw',
        hrLineTop:'143px',
        hrLineLeft:' 22.5%',
        buttonColors: buttonColors
    }
    return(
        <div className={style.experienceMain}>
          <Box data={experience}/>
        </div>
    )
}
export default Experience
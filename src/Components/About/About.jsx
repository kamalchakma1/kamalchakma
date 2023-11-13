
import userImg from "../../images/1670237395012.jpeg"
import Box from "../Box/Box"

const About=({buttonColors})=>{
   const about={
    title:'About Me',
    userImg:userImg,
    aboutHeader: 'Hi,',
    aboutDesc: `My name is Kamal Kanti Chakma, an aspiring Full-Stack developer from NorthEast,India.Studied Computer Science in Bachelor from Dr.Babashaheb Marathwada Unviversity,Auragabad,Maharashtra.I love to help peoples and society through technology that bring value to the life of peoples and society.Currently working in Access Automation based in Bengaluru.Domain that I like to work is Web Develoment where I am using below few technologies but I am not limiting myself to it only. I am like an empty glass, always ready to be fill with new technologies.`,
    buttonColors: buttonColors
   }
    return(
        <>
        <Box data={about}   />
        </>
    )
}
export default About
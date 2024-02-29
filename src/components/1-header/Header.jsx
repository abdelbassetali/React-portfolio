import { useEffect, useState } from "react";
import './header.css'
const Header = () => {

    const [show, setsshow] = useState(false)
    const [theme, settheme] = useState(localStorage.getItem("mode") ?? "black")

    useEffect(() => {
        if (theme === "light") {
            document.body.classList.remove("black")
            document.body.classList.add("light")
        } else {
            document.body.classList.remove("light")
            document.body.classList.add("black")
        }

    }, [theme]);
    return (
        <header className=" flex">

            <button onClick={() => {
                setsshow(true)
            }} className="menu icon-menu flex"> </button>
            <div className="logo"> Logo</div>


            <nav>
                <ul className="flex naav">
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Skills</a></li>
                    <li><a href="">Projects</a></li>
                </ul>
            </nav>
            <ul className="social-icon  flex ">
                <a className="aa" href="#"><img className="icon-linkedin ss " src='' alt="" /></a>
                <a className="aa" href="#"><img className="icon-facebook2 ss" src='' alt="" /></a>
                <a className="aa" href="#"><img className="icon-instagram ss" src='' alt="" /></a>
            </ul>
            <ul className="flex  icon-menuese ">
                {/* <li><a className="icon-linkedin icons" href=""></a></li>
                <li><a className="icon-facebook2 icons" href=""></a></li>
                <li><a className="icon-instagram icons" href=""> </a></li> */}
                <button className="connectt">Let’s Connect</button>
            </ul>
            <button onClick={() => {

                localStorage.setItem("mode", theme === "black" ? "light" : "black")
                settheme(localStorage.getItem("mode"))
            }} className="mode flex">
{
    theme==="black" ?(<span className="icon-moon-o"></span>) 
    :(<span className="icon-sun"></span>)
    
}            </button>
            {show && (
                <div className=" fixed" >
                    <ul className="model">
                        <li>
                            <button className="icon-cross" onClick={() => { setsshow(false) }} />
                        </li>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Skills</a></li>
                        <li><a href="">Projects</a></li>
                        <li className="con" ><a className="icon-linkedin  " href=""></a></li>
                        <li className="con"><a className="icon-facebook2  " href=""></a></li>
                        <li className="con"><a className="icon-instagram  " href=""> </a></li>
                    </ul>

                </div>
            )

            }

        </header>
    )
}
export default Header;

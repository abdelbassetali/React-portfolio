import React from "react";
import './footer.css'

const Footer = () => {
    return (

        
        <footer className="flex foot">
            <p className="alaa">Logo</p>
            <ul className="right-foot flex">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Skils</a></li>
                <li><a href="">Project</a></li>
            </ul>

            <div className="left-foot ">
                <span className="icon-linkedin LL "></span>
                <span className="icon-facebook2 ww "></span>
                <span className="icon-instagram ww"></span>
                <p className="p-footer">--Copy Right 2024 All Right Here By ABD ElBasset Aly--</p>
            </div>
        </footer>

    )
}
export default Footer;
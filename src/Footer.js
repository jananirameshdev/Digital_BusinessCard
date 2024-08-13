import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
function Footer() {
    return (
        <div className="footers">
            <br />
            <div className="icon_box">
                <FaTwitter />
            </div>
            <div className="icon_box">
                <FaFacebook />
            </div>
            <div className="icon_box">
                <FaInstagram />
            </div>
            <div className="icon_box">
                <FaGithub />
            </div>
        </div>
    )
}
export default Footer;
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "@react-email/components";
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
                <Link href="https://github.com/jananirameshdev"> <FaGithub /></Link>
            </div>
        </div>
    )
}
export default Footer;
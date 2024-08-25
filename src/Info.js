import About from "./About";
import Interest from "./Interests";
import Footer from "./Footer";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { Link } from "@react-email/components";
function Info() {
    return (
        <div className="container">
            <img src="https://i.pinimg.com/736x/ce/88/c7/ce88c71c7f0baba12057a1c01fc161fb.jpg" alt="pic" className="pic" />
            <div className="name">
                Janani Ramesh
            </div>
            <div className="profession">
                FrontEnd Developer
            </div>
            <div className="website">
                https://businesscard13.netlify.app/
            </div>
            <div className="buttons">
                <Link href="mailto:jananiramesh.dev@gmail.com"> <button className="email"> <FaEnvelope /> <div className="envelope">Email</div></button></Link>
                <Link href="https://www.linkedin.com/in/janani-ramesh-85b1022ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" ><button className="linkedIn"><FaLinkedin /><div className="linked">LinkedIn</div></button></Link>
            </div>
            <About />
            <Interest />
            <Footer />
        </div>
    )
}
export default Info;
import About from "./About";
import Interest from "./Interests";
import Footer from "./Footer";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
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
                janani.website
            </div>
            <div className="buttons">
                <button className="email"> <FaEnvelope /> <div className="envelope">Email</div></button>
                <button className="linkedIn"><FaLinkedin /><div className="linked">LinkedIn</div></button>
            </div>
            <About />
            <Interest />
            <Footer />
        </div>
    )
}
export default Info;
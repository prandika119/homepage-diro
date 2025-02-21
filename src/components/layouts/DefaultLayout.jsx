import { Outlet } from "react-router-dom";
import Navbar from "../Navbar"
import Footer from "../Footer";

const DefaultLayout = () => {
    return (
        <div>
            {/* navbar section */}
            <nav>
                <Navbar />
            </nav>

            {/* main content */}
            <main>
                <Outlet/>
            </main>

            {/* footer */}
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default DefaultLayout;
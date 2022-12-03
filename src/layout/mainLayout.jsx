import "../style/layout/mainLayout.css";
import { Outlet, NavLink } from "react-router-dom"
import { useGlobal } from "../context/context";
import logo from "../assets/logo.svg";
import Loading from "../pages/loading";
const MainLayout = () => {
    let { loading } = useGlobal();

    if (loading) {
        return <Loading />
    }
    else {
        return (
            <>
                <nav className="mainNavbar" >
                    <div className="logoContainer">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="navItemContainer">
                        <div className="navItem">
                            <NavLink to="/" className="navLink">Home</NavLink>
                        </div>
                        <div className="navItem">
                            <NavLink to="/about" className="navLink">About</NavLink>
                        </div>
                    </div>
                </nav>
                <Outlet />
            </>
        )
    }

}

export default MainLayout;

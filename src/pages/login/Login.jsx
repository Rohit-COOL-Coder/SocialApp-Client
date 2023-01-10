import { Link } from "react-router-dom";
import "./login.scss"

function Login(props) {
    return (
        <div className="login">
            <div className="login-wrapper">
                <div className="login-left">
                    <div className="left-background-animation">
                    <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_yqyt4zdn.json"  background="transparent"  speed="1" style={{width:"300px", height: "300px"}}  loop autoplay></lottie-player>
                    </div>
                    <div className="login-left-info">
                        {/* <h2 className="login-left-heading">Hello world.</h2> */}
                        {/* <p className="login-left-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, cumque dignissimos! Accusantium, eaque! Beatae dicta eaque iste laboriosam, voluptatum commodi.</p> */}
                        <span className="login-left-title">Don't you have an account?</span>
                        <Link to="/register" className="btn-link">
                        <button className="login-left-button">Register</button>
                        </Link>
                    </div>
                </div>
                <hr className="login-divider"/>
                <div className="login-right">
                    <div className="login-right-description">
                    <div className="login-right-logo">
                    <lottie-player src="https://assets9.lottiefiles.com/private_files/lf30_iraugwwv.json"  background="transparent"  speed="1"  style={{width:"100px", height: "100px"}}   loop  autoplay></lottie-player>
                    {/* <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_2nfmti0q.json"  background="transparent"  speed="1" style={{width:"100px", height: "100px"}}  loop  autoplay></lottie-player> */}
                    </div>
                    <span className="login-right-title">Login</span>
                    </div>
                    <div className="login-right-input">
                        <input type="text" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                    </div>
                    <button className="login-right-button">Login</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
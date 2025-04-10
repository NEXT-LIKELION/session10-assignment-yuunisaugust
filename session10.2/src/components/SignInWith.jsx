import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import "./SignInWith.css";


function SignInWith() {
    return (
        <div
            className="sign-in-with"
            style={{
                display: "flex",
                // flexDirection: "column",
                gap: "12px", // 버튼 간 간격
                marginTop: "3px",
            }}
        >
            <button type="button" className="social-button google">
                <span className="icon" style={{ marginRight: "8px" }}>
                    <FcGoogle size={20} />
                </span>{" "}
                Sign in with Google
            </button>

            <button type="button" className="social-button facebook">
                <span className="icon" style={{ marginRight: "8px" }}>
                    <FaFacebookF size={20} color="#1877F2" />
                </span>{" "}
                Sign in with Facebook
            </button>
        </div>

    );
}

export default SignInWith;

import React from "react";
import SignInHeader from "./SignInHeader";
import SignInInputs from "./SignInInputs";
import RememberMeCheckbox from "./RememberMeCheckbox";
import SignInButton from "./SignInButton";
import FindPassword from "./FindPassword";
import SignInWith from "./SignInWith";
import "./SignInForm.css";

function SignInForm() {
    return (
        <form
            className="sign-in-form"
            
        >
            <SignInHeader />
            <SignInInputs />
            <RememberMeCheckbox />
            <SignInButton />
            <FindPassword />
            <SignInWith />
        </form>
    );
}

export default SignInForm;

import React from "react";

function PasswordInput() {
    return (
        <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
        </div>
    );
}

export default PasswordInput;

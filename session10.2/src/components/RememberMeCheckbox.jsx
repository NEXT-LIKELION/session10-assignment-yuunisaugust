import React from "react";

function RememberMeCheckbox() {
    return (
        <div className="remember-me"
        style={{
            display: "flex",
            alignItems: "center", // 체크박스 + 텍스트 세로 정렬
            gap: "8px",
            marginTop: "8px",
        }}>
            <input type="checkbox" id="remember" name="remember"
            style={{
                
                width: "20px",    // 기본보다 큼
                height: "20px",
                cursor: "pointer",
                color: '#fafafa',
            }} />
            <label htmlFor="remember">Remember me</label>
        </div>
    );
}

export default RememberMeCheckbox;

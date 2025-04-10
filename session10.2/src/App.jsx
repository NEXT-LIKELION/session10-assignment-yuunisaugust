import React from 'react';
import SignInForm from './components/SignInForm';
import "./App.css";

// App.jsx
function App() {
  return (
      <div className="container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#f5f5f5",
      }}>
          <SignInForm />
      </div>
  );
}

export default App;
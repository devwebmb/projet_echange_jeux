import React from "react";
import ConnectNavbar from "../components/connect/ConnectNavbar";
import SignupForm from "../components/connect/SignupForm";

export default function Signup() {
  return (
    <div className="signup">
      <ConnectNavbar />
      <SignupForm />
    </div>
  );
}

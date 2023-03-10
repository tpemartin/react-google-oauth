import React, { useEffect } from 'react';
import jwtDecode from "jwt-decode";

export function SignIn() {

  useEffect(() => {
    initializeGoogle()
  })

  return (
    <div id="google-login" style={{display: "none"}}></div>

  )
}

function initializeGoogle() {
    const clientId = document.querySelector('meta[name="google-signin-client_id"]').content
    const btnLogin = document.getElementById("google-login");
    window.onload= () => {
      window.google.accounts.id.initialize({
      client_id: clientId,
      callback: handleCredentialResponse
    })
    window.google.accounts.id.renderButton(
      document.getElementById("google-login"),
      { theme: "outline", size: "large" }  // customization attributes
    )
    btnLogin.style.display = null;
    //window.google.accounts.id.prompt(); // also display the One Tap dialog
    }
  }

function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    console.log(jwtDecode(response.credential))
}
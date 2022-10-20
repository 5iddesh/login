import { useEffect } from "react";
import "../signup/loginBox.css";
import Form from "./Form";
import Links from "./Links";
// import Temp from "./temp"

export default function Login1() {
  function handleCallback(response) {
    console.log("id" + response.credential);
  }
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "485338847539-71f7e3sig6g58b95emcpkiegoqluq5hl.apps.googleusercontent.com",
      callback: handleCallback
    });

    google.accounts.id.renderButton(document.querySelector("#google-sign-in"),
    {theme:'contained', size: 'large'});
  }, []);


  return (
    <div className="parent">
      <div className="image" style={{ paddingBottom: "50px" }}></div>
      <div>
        <Form />
        {/* <Temp /> */}
        <Links />
      </div>
    </div>
  );
}

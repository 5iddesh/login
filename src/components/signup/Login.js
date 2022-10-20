import { useEffect } from "react";
import LoginBox from "./LoginBox";

export default function Login() {

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

    google.accounts.id.renderButton(document.querySelector("#google-sign-up"),
    {theme:'contained', size: 'large'});
  }, []);

  return (
    <div>
      <LoginBox />
    </div>
  );
}

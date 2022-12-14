import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function Links() {
  return (
    <div className="links" style={{ textAlign: "center", paddingBottom: "50px" }}>
      <p>
        don't have an account?
        <Link to="/" className="login-link">
          signup
        </Link>
      </p>
      <b>OR</b>
      <div className="link-btns">
        {/* <Button
          className="google-sign-in"
          variant="outlined"
          startIcon={<FcGoogle />}
        >
          Sign up with Google
        </Button> */}
      
        <Button id="google-sign-in" className="google-sign-in" style={{zIndex: "100"}}></Button>
        
        <Button variant="outlined" startIcon={<GitHubIcon />}>
          Sign up with Github
        </Button>
      </div>
    </div>
  );
}

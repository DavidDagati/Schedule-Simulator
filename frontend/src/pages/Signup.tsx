import { Button, TextField, Link as UI_Link } from "@mui/material";
import { Link } from "react-router-dom";


export default function Signup() {
  return (
    <>
        <h1>Signup</h1>
        <div className="flex flex-col gap-5">
            <TextField id="username" label="Username" variant="outlined" />
            <TextField id="password" label="Password" variant="outlined" />
            <Button className="flex-shrink" variant='contained'>Create Account</Button>
            <Link to="/login"><UI_Link>Go to login</UI_Link></Link>
        </div>

    </>
  );
}
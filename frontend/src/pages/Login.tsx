import { Button, TextField, Link as UI_Link } from "@mui/material";
import { Link } from "react-router-dom";


export default function Login() {
  return (
    <>
        <h1>Login</h1>
        <div className="flex flex-col gap-5">
            <TextField id="username" label="Username" variant="outlined" />
            <TextField id="password" label="Password" variant="outlined" />
            <Button className="flex-shrink" variant='contained'>Login</Button>
            <Link to="/signup"><UI_Link>Create an account</UI_Link></Link>
        </div>
    </>
  );
}
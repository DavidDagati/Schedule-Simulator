import { Button, TextField, Link as UI_Link } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

//Currently just an admin login
export default function Login() {
  const [input, setInput] = useState<String>('')

  return (
    <>
        <h1>Admin Login</h1>
        <div className="flex flex-col gap-5">
            {/* <TextField id="username" label="Username" variant="outlined" /> */}
            <TextField type='password' id="password" label="Password" onChange={e => setInput(e.target.value)} variant="outlined" />
            <Link to={"/admin"} state={input}><Button className="flex-shrink" variant='contained'>Login</Button></Link>
            {/* <Link to="/signup"><UI_Link>Create an account</UI_Link></Link> */}
        </div>
    </>
  );
}
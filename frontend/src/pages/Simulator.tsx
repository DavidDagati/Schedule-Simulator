import { InputLabel, MenuItem, Select, Button, FormControl } from "@mui/material";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

//TODO: Replace MenuItems with real program data
export default function Simulator() {
  const [input, setInput] = useState('')
  const programs: Array<String> = useLoaderData()

  return (
    <>
        <h1>Simulator</h1>
        <FormControl>
        {/* <div className="flex flex-col gap-4 items-center justify-center"> */}
          <InputLabel id="program-select">Select Program</InputLabel>
          <Select
            labelId="program-select"
            id="program-select-1"
            label="Program"
            autoWidth
            onChange={e => setInput(e.target.value as any)}
          >
            <MenuItem value="program1ID">Program 1</MenuItem>
            <MenuItem value="program2ID">Program 2</MenuItem>
            <MenuItem value="program3ID">Program 3</MenuItem>
          </Select>
          <Link to={'/results'} state={{programId: input}}><Button variant="contained">Go!</Button></Link>
        {/* </div> */}
        </FormControl> 
    </>
  );
}
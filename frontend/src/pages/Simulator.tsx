import { InputLabel, MenuItem, Select, Button, FormControl } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Program } from "../types/types";

//TODO: Use react router loader
export default function Simulator() {
  const [input, setInput] = useState('')
  const [programs, setPrograms] = useState<Program[]>([])

  //Fetch programs
  useEffect(() => {
    async function fetchData() {
      const res = await fetch('http://localhost:8000/program')
      setPrograms(await res.json() as Program[])
    }
    fetchData()
  }, [])

  if (programs.length == 0) {
    return <h1>Loading...</h1>
  }

  return (
    <>
        <h1>Simulator</h1>
        <FormControl fullWidth>
          <div className="flex flex-col gap-4 justify-center">
            <InputLabel id="program-select">Select Program</InputLabel>
            <Select
              labelId="program-select"
              id="program-select-1"
              label="Program"
              onChange={e => setInput(e.target.value as any)}
            >
              {programs.map((program) => (
                <MenuItem value={program._id}>{program.name}</MenuItem>
              ))}
            </Select>
            <Link to={'/results'} state={{programId: input}}><Button variant="contained">Go!</Button></Link>
          </div>
        </FormControl> 
    </>
  );
}
import { InputLabel, MenuItem, Select, Button, FormControl } from "@mui/material";

//TODO: Replace MenuItems with real program data
export default function Simulator() {
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
          >
            <MenuItem value="program 1">Program 1</MenuItem>
            <MenuItem value="program 2">Program 2</MenuItem>
            <MenuItem value="program 3">Program 3</MenuItem>
          </Select>
          <Button variant="contained">Go!</Button>
        {/* </div> */}
        </FormControl> 
    </>
  );
}
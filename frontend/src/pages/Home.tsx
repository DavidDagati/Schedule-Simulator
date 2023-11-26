import { Link } from 'react-router-dom'
import '../App.css'
import { Button } from '@mui/material'

function Home() {

  return (
    <>
      <h1>Student Schedule Simulator</h1>
      <Button variant='contained'><Link className='button-link' to="/login">Get Started</Link></Button>
    </>
  )
}

export default Home

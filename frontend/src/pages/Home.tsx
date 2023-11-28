import { Link } from 'react-router-dom'
import '../App.css'
import { Button } from '@mui/material'

function Home() {

  return (
    <>
      <h1>Student Schedule Simulator</h1>
      <div className='flex justify-center gap-5'>
        <Button variant='contained'><Link className='button-link' to="/simulate">Get Started</Link></Button>
        <Button variant='outlined'><Link className='button-link' to="/login">Admin Login</Link></Button>
      </div>
    </>
  )
}

export default Home

import { Link } from 'react-router-dom'
import CreateEmployee from '../../components/CreateEmployee'

function Home () {
  return (
    <div className='home'>
      <Link to='/Employees'> View Current Employees </Link>
      <h2> Create Employee </h2>
      <CreateEmployee />
    </div>
  )
}

export default Home
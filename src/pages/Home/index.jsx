import { Link } from 'react-router-dom'
import CreateEmployee from '../../components/CreateEmployee'

function Home() {
  return (
    <div className='home'>
      <div className="text-center">
        <Link className="btn btn-primary col-5" role="button" to="/list-employees">
          {' '}
          View Current Employees
        </Link>
      </div>
      <h2 className="col-lg-5  col-md-9 mx-auto pt-3">Create Employee</h2>
      <CreateEmployee />
    </div>
  )
}

export default Home
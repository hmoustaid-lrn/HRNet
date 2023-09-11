
import { Link } from 'react-router-dom'

import { useSelector } from "react-redux"



import DataTable from "../../components/DataTable"


function ListEmployees() {

  const employees = useSelector((state) => state.employees.list)

  function loading() {
    return <h2>🌀 Loading...</h2>
  }

  return (
    
    <main className="col-lg-10 col-md-9 mx-auto">
      <div className="container mb-2 py-2 border rounded">
        <h2 className="current-employees">Current Employees</h2>
        <DataTable loading={loading} data={employees} />
      </div>
      <div className="text-center">
        <Link className="home-button" to="/">
          <button type="button" className="btn btn-primary">
            {' '}
            Home
          </button>
        </Link>
      </div>
    </main>
  )
}

export default ListEmployees
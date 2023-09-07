import { columns } from '../../utils/tools'
import { useState, useEffect, lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'


function ListEmployees() {
  const DataTable = lazy(() => import('react-data-table-component'))
  const [data, setData] = useState([])

  useEffect(() => {
    recupereData()
  }, [])


  function recupereData() {
    const employees = JSON.parse(localStorage.getItem('employees'))
    setData(employees)
  }

  const filteredItems = data?.filter(
    item => ((item.firstName)) ||
      (item.lastName) ||
      (item.department) ||
      (item.dateOfBirth) ||
      (item.startDate) ||
      (item.state) ||
      (item.city) ||
      (item.street) ||
      (item.zipCode)
  )



  function loading() {
    return <h2>🌀 Loading...</h2>
  }

  return (

    <main className="col-lg-10 col-md-9 mx-auto">
      <div className="container mb-2 py-2 border rounded">
        <h2 className="current-employees">Current Employees</h2>
        <Suspense fallback={loading()}>
          <DataTable
            columns={columns}
            data={filteredItems}
            pagination
            paginationRowsPerPageOptions={[10, 25, 50, 100]}
            subHeader
            persistTableHead
            noDataComponent='No matching records found'
            responsive
          />
        </Suspense>
      </div>
      <div className="text-center">
        <Link className="dataTablehomeBtn" to="/">
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
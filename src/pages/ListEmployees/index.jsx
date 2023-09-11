import { columns } from '../../utils/tableColumns'
import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'

import { useSelector} from "react-redux"



import DataTableExtensions from "react-data-table-component-extensions";


function ListEmployees() {

  const DataTable = lazy(() => import('react-data-table-component'))

  const employees = useSelector((state) => state.employees.list)


  function loading() {
    return <h2>🌀 Loading...</h2>
  }


  return (

    <main className="col-lg-10 col-md-9 mx-auto">
      <div className="container mb-2 py-2 border rounded">
        <h2 className="current-employees">Current Employees</h2>
        <Suspense fallback={loading()}>
        <DataTableExtensions
            columns={columns}
            data={employees}
            print={false}
            export={false}
          >
          <DataTable
            pagination
            paginationRowsPerPageOptions={[10, 25, 50, 100]}
            subHeader
            persistTableHead
            highlightOnHover
            noDataComponent='No matching records found'
            responsive
          />
          </ DataTableExtensions>
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
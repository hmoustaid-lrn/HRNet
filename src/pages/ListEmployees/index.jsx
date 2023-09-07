import { columns } from '../../utils/tableColumns'
import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from "react-redux"

import { useState} from "react";

import { deleteEmployeeAction } from "../../state/employees";




function ListEmployees() {
  const DataTable = lazy(() => import('react-data-table-component'))
  const employees = useSelector((state) => state.employees.list)

  const dispatch = useDispatch();


  const filteredItems = employees?.filter(
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

  const [toggleCleared, setToggleCleared] = useState(false);


  const handleDeleteRowSelected = ({ selectedRows }) => {
    if (selectedRows.length !== 0) {
      const deleteEmployees = window.confirm(`Are you sure you want to delete:\r ${selectedRows.map(r => r.firstName)}?`)
      if(deleteEmployees){
        setToggleCleared(!toggleCleared)
        dispatch(deleteEmployeeAction(selectedRows))
      }
    }
    
  };


  return (

    <main className="col-lg-10 col-md-9 mx-auto">
      <div className="container mb-2 py-2 border rounded">
        <h2 className="current-employees">Current Employees</h2>
        <Suspense fallback={loading()}>
          <DataTable
            columns={columns}
            data={filteredItems}
            selectableRows
            onSelectedRowsChange={handleDeleteRowSelected}
            clearSelectedRows={toggleCleared}
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
import { columns } from '../../utils/tools'
import { useState, useEffect, lazy, Suspense } from 'react'


/**
 * Function Table retourne
 * un tableau récapitulant les informations des employés
 * @returns component
 */
function ListEmployees() {
  const DataTable = lazy(() => import('react-data-table-component'))
  const [data, setData] = useState([])

  useEffect(() => {
    recupereData()
  }, [])

  /**
   * Function recupereData recupère les données
   * des employés enregistré dans le localStorage
   */
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



  const renderLoader = () => (
    <div className='loading'>
      <div id='prim' />
      <div id='sec' />
      <div id='cinq' />
      <div id='quat' />
    </div>
  )

  return (
    <div className='table'>
      <Suspense fallback={renderLoader()}>
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
  )
}

export default ListEmployees
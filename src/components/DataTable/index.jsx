import DataTableExtensions from "react-data-table-component-extensions";
import { columns } from '../../utils/tableColumns'
import { lazy, Suspense } from 'react'

export default function DataTable(props){

    const DataTable = lazy(() => import('react-data-table-component'))

    return(
        <Suspense fallback={props.loading}>
          <DataTableExtensions
            columns={columns}
            data={props.data}
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
          </DataTableExtensions>
        </Suspense>
    )
}
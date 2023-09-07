export const columns =
[
  {
    name: 'First Name',
    selector: row => row.firstName,
    sortable: true
  },
  {
    name: 'Last Name',
    selector: row => row.lastName,
    sortable: true
  },
  {
    name: 'Start Date',
    selector: row => row.startDate,
    sortable: true,
    sortFunction: sortStartDate
  },
  {
    name: 'Department',
    selector: row => row.department,
    sortable: true
  },
  {
    name: 'Birth Date',
    selector: row => row.dateOfBirth,
    sortable: true,
    sortFunction: sortBirthDate
  },
  {
    name: 'Street',
    selector: row => row.street,
    sortable: true
  },
  {
    name: 'City',
    selector: row => row.city,
    sortable: true
  },
  {
    name: 'State',
    selector: row => row.state,
    sortable: true
  },
  {
    name: 'Zip Code',
    selector: row => row.zipCode,
    sortable: true
  }
]

export function sortStartDate (rowA, rowB) {
    const a = new Date(rowA.startDate)
    const b = new Date(rowB.startDate)
  
    if (a > b) {
      return 1
    }
    if (b > a) {
      return -1
    }
    return 0
  }
  

  export function sortBirthDate (rowA, rowB) {
    const a = new Date(rowA.dateOfBirth)
    const b = new Date(rowB.dateOfBirth)
  
    if (a > b) {
      return 1
    }
    if (b > a) {
      return -1
    }
    return 0
  }
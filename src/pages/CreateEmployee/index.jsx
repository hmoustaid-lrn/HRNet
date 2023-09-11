import { states, departments } from '../../utils/data'
import SelectOptions from '../../utils/SelectOptions'
import { useState } from 'react'

import {useDispatch} from "react-redux";

import { addEmployeeAction } from "../../state/employees";

import { Modal } from 'hmstd-react-modal'



function CreateEmployee() {

  const dispatch = useDispatch();


  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    startDate: '',
    department: '',
    dateOfBirth: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
  })

  const [validEmployee, setIsValidEmployee] = useState(false)

  const handleFormSubmit = (e) => {
    e.preventDefault()

    const newEmployee = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      startDate: formData.startDate,
      department: formData.department,
      dateOfBirth: formData.dateOfBirth,
      street: formData.street,
      city: formData.city,
      state: formData.state,
      zipCode: formData.zipCode,
    }
    

    dispatch(addEmployeeAction(newEmployee))

    setIsValidEmployee(true)

    const form = e.target
    form.reset()

  }

  const handleFieldChange = (e) => {
    e.preventDefault()

    const fieldName = e.target.getAttribute('name')
    const fieldValue = e.target.value

    const newFormData = { ...formData }
    newFormData[fieldName] = fieldValue

    setFormData(newFormData)
  }

  const handleModal = () => {
    setIsValidEmployee(false)
  }

  return (

    <form id="create-employee" className='col-lg-5 col-md-9 mx-auto' onSubmit={handleFormSubmit}>

      <div className="form-group form-floating mb-3">
        <input type="text" className="form-control" id="first-name" name="firstName" onChange={handleFieldChange} required />
        <label htmlFor="first-name" className="col-sm-3 col-form-label">First Name</label>
      </div>

      <div className="form-group form-floating mb-3">
        <input type="text" className="form-control" id="last-name" name="lastName" onChange={handleFieldChange} required />
        <label htmlFor="last-name" className="col-sm-3 col-form-label">Last Name</label>
      </div>

      <div className="form-group form-floating mb-3">
        <input type="date" className="form-control date" id="date-of-birth" placeholder="jj/mm/aaaa" name="dateOfBirth" onChange={handleFieldChange} required />
        <label htmlFor="date-of-birth" className="col-sm-3 col-form-label">Date of Birth</label>
      </div>

      <div className="form-group form-floating mb-3">
        <input type="date" className="form-control" id="start-date" placeholder="jj/mm/aaaa" name="startDate" onChange={handleFieldChange} required />
        <label htmlFor="start-date" className="col-sm-3 col-form-label">Start Date</label>
      </div>

      <div className="container mb-2 py-2 border rounded">
        <h3>Address</h3>
        <div className="form-group form-floating mb-3">
          <input type="text" className="form-control" id="street" placeholder="Street" name="street" onChange={handleFieldChange} required />
          <label htmlFor="street" className="col-sm-3 col-form-label">Street</label>
        </div>
        <div className="form-group form-floating mb-3">
          <input type="text" className="form-control" id="city" placeholder="City" name="city" onChange={handleFieldChange} required />
          <label htmlFor="city" className="col-sm-3 col-form-label">City</label>
        </div>

        <div className="form-group form-floating mb-3">
          <select className="form-select" id="state" name="state" defaultValue={'N/A'} onChange={handleFieldChange}>
            <SelectOptions options={states} title="state" />
          </select>
          <label htmlFor="state" className="col-sm-3 col-form-label">State</label>
        </div>

        <div className="form-group form-floating mb-3">
          <input type="text" className="form-control" id="zip" placeholder="Zip" name="zipCode" onChange={handleFieldChange} required />
          <label htmlFor="zip" className="col-sm-3 col-form-label">Zip</label>
        </div>
      </div>

      <div className="form-group form-floating mb-3">
        <select className="form-select" id="department" name="department" defaultValue={'N/A'} onChange={handleFieldChange}>
          <SelectOptions options={departments} title="departments" />
        </select>
        <label htmlFor="departemnt" className="col-sm-3 col-form-label">Department</label>
      </div>

      <div className="text-center">
        <button type="submit" className="btn btn-primary mt-2 col-3">Save</button>
      </div>

      {validEmployee ? (<Modal text="Employee Created !" handleClick={handleModal} buttonText="Close"/>) : ('')}

    </form>
  )
}

export default CreateEmployee
import Field from '../Field'
import { Dropdown } from 'dropdown-onceuponatime'
import { states, departments } from '../../util/data'
import ModalForm from '../ModalForm'


function CreateEmployee () {
  return (
    <div className='form'>
      <Field nom='First Name' type='text' />
      <Field nom='Last Name' type='text' />
      <Field nom='Date of Birth' type='date' />
      <Field nom='Start Date' type='date' />
      <fieldset>
        <legend> Address </legend>
        <Field nom='Street' type='text' />
        <Field nom='City' type='text' />
        <Dropdown label='State' name='state' obj={states} field1='name' field2='abbreviation' />
        <Field nom='Zip Code' type='number' />
      </fieldset>
      <Dropdown label='Department' name='department' obj={departments} field1='name' />
      <ModalForm />
    </div>
  )
}

export default CreateEmployee
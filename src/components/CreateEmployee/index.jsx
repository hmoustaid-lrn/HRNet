import { states, departments } from '../../utils/data'
import SelectOptions from '../../utils/SelectOptions'

function CreateEmployee() {
  return (
    <form id="create-employee" className='col-lg-5 col-md-9 mx-auto'>

      <div className="form-group form-floating mb-3">
        <input type="text" className="form-control" id="first-name" name="firstName" required />
        <label htmlFor="first-name" className="col-sm-3 col-form-label">First Name</label>
      </div>

      <div className="form-group form-floating mb-3">
        <input type="text" className="form-control" id="last-name" name="lastName" required />
        <label htmlFor="last-name" className="col-sm-3 col-form-label">Last Name</label>
      </div>

      <div className="form-group form-floating mb-3">
        <input type="date" className="form-control date" id="date-of-birth" placeholder="jj/mm/aaaa" name="dateOfBirth" required />
        <label htmlFor="date-of-birth" className="col-sm-3 col-form-label">Date of Birth</label>
      </div>

      <div className="form-group form-floating mb-3">
        <input type="date" className="form-control" id="start-date" placeholder="jj/mm/aaaa" name="startDate" required />
        <label htmlFor="start-date" className="col-sm-3 col-form-label">Start Date</label>
      </div>

      <div className="container mb-2 py-2 border rounded">
        <h3>Address</h3>
        <div className="form-group form-floating mb-3">
          <input type="text" className="form-control" id="street" placeholder="Street" name="street" required />
          <label htmlFor="street" className="col-sm-3 col-form-label">Street</label>
        </div>
        <div className="form-group form-floating mb-3">
          <input type="text" className="form-control" id="city" placeholder="City" name="city" required />
          <label htmlFor="city" className="col-sm-3 col-form-label">City</label>
        </div>

        <div className="form-group form-floating mb-3">
          <select className="form-select" id="state" defaultValue={'N/A'}>
            <SelectOptions options={states} title="state" />
          </select>
          <label htmlFor="state" className="col-sm-3 col-form-label">State</label>
        </div>

        <div className="form-group form-floating mb-3">
          <input type="text" className="form-control" id="zip" placeholder="Zip" name="zipCode" required />
          <label htmlFor="zip" className="col-sm-3 col-form-label">Zip</label>
        </div>
      </div>

      <div className="form-group form-floating mb-3">
        <select className="form-select" id="department" defaultValue={'N/A'} >
          <SelectOptions options={departments} title="departments" />
        </select>
        <label htmlFor="departemnt" className="col-sm-3 col-form-label">Department</label>
      </div>

      <div className="text-center">
        <button type="submit" className="btn btn-primary mt-2 col-3">Save</button>
      </div>
    </form>
  )
}

export default CreateEmployee
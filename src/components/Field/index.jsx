import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


function Field ({ nom, type }) {
  let nomFormat = nom.replaceAll(' ', '-')
  nomFormat = nomFormat.toLowerCase()
  const [startDate, setStartDate] = useState(new Date())
  return (
    <div className='champ'>
      <label htmlFor={nomFormat}> {nom} </label>
      {type === 'date'
        ? <DatePicker id={nomFormat} selected={startDate} onChange={(date = Date) => setStartDate(date)} />
        : <input id={nomFormat} type={type} min={0} />}
    </div>
  )
}

export default Field
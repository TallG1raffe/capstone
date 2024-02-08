import './App.css'
import { useEffect, useState } from 'react';
import { Response } from './Response';

export function App() {

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(inputs);
    const postURL = "http://localhost:3000/api/responses/"
    fetch(postURL, {
      method: 'POST',
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    })
    .then(() => {
      alert('POSTED')
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Name</h2>
        <input
          type="text"
          name="employee_name"
          value={inputs.employee_name || ""}
          onChange={handleChange}
        />
        <h2>Department</h2>
        <input
          type="text"
          name="department"
          value={inputs.department || ""}
          onChange={handleChange}
        />
        <h2>Feedback</h2>
        <textarea
          type="text"
          name="feedback"
          value={inputs.feedback || ""}
          onChange={handleChange}
          rows={4}
          cols={40} />
        <br />
        <input type="submit" />
      </form>
      <Response />
    </>
  )
}
import { useState } from 'react';
import { Face } from './Face';

export function Form() {

  const postURL1 = "/predict/feedback"
  const postURL2 = "/api/responses/"
  const [inputs, setInputs] = useState({});
  const [sentiment, setSentiment] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
    fetch(postURL1, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    })
    .then(res => res.json())
    .then((data) => {
      setSentiment(data.sentiment)
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch(postURL1, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    })
    .then(res => res.json())
    .then((data) => {
      setSentiment(data.sentiment)
      return {...inputs, "sentiment":data.sentiment}
    })
    .then((info) => fetch(postURL2, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    }))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Name</h2>
        <input
          type="text"
          name="employee_name"
          autocomplete="off"
          value={inputs.employee_name || ""}
          onChange={handleChange}
        />
        <h2>Department</h2>
        <input
          type="text"
          name="department"
          autocomplete="off"
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
      <Face sentiment={sentiment} />
    </>
  )
}
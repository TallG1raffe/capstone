import './App.css'
import { useState } from 'react';

export function App() {

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Name</h2>
        <input
          type="text"
          name="name"
          value={inputs.name || ""}
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
          name="content"
          value={inputs.content || ""}
          onChange={handleChange}
          rows={4}
          cols={40} />
        <br />
        <input type="submit" />
      </form>
    </>
  )
}
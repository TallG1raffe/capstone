import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import { Form } from './Form';
import { Response } from './Response';

export function App() {

  const departments = ['Customer Service', 'Engineering', 'Finance', 'Human Resources', 'IT', 'Marketing', 'Operations', 'Research and Development', 'Sales']

  return (
    <>
      {departments.map(department =>
      <>
        <Link to={`responses/${department}`}>
          <button key={department}>{department}</button>
        </Link>
      </>)}
      <Routes>
        <Route path="/" element={<Form />}></Route>
        <Route path="/responses/:id" element={<Response />}></Route>
      </Routes>
    </>
  )
}
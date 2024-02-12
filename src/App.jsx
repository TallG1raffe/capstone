import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import { Login } from './Login';
import { Form } from './Form';
import { Response } from './Response';

export function App() {

  const departments = ['Customer Service', 'Engineering', 'Finance', 'Human Resources', 'IT', 'Marketing', 'Operations', 'Research and Development', 'Sales']

  return (
    <>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<>
            <nav>
              {departments.map(department =>
                <>
                  <Link to={`responses/${department}`}>
                    <button key={department}>{department}</button>
                  </Link>
                </>)}
            </nav>
            <Form /></>} >
          </Route>
          <Route path="/responses/:id" element={<Response />}></Route>
        </Routes>
      </div >
    </>
  )
}
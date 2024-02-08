import { useEffect, useState } from 'react';

export function Response() {
  const [responses, setResponses] = useState([]);
  useEffect(() => {
    fetch("/api/responses").then(res => res.json()).then(res => setResponses(res))
  }, []);

  return (
    <ul>
      {responses.map(response =>
        <>
          <li>{response.employee_name}</li>
          <li>{response.department}</li>
          <li>{response.feedback}</li>
        </>
      )}
    </ul>
  )
}
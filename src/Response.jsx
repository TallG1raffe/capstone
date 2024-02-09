import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import { Card } from './Card'

export function Response() {

  let { id } = useParams();
  const [responses, setResponses] = useState([]);
  useEffect(() => {
    fetch(`/api/responses/${id}`).then(res => res.json()).then(res => setResponses(res))
  }, []);

  return (
    <>
      <Card feedbacks={responses} />
    </>
  )
}
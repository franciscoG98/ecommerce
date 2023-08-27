import React, { useEffect, useState } from 'react'

function index() {

  const [message, setMessage] = useState("Loading...")
  const [people, setPeople] = useState([])


  useEffect(() => {
    fetch('http://localhost:8080/api/home').then(
      response => response.json()
    ).then( data => {
      data && setMessage(data.message)
      data && setPeople(data.people)
    })
  }, [])

  return (
    <main>
      <div>{message}</div>

      {people.map((p, i) => (
        <div key={i}>{p}</div>
      ))}
    </main>
  )
}

export default index
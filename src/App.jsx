import { useEffect, useState } from "react"
import { getCandidateByEmail } from "./services/candidateService"

function App() {

  const [candidate, setCandidate] = useState(undefined)

  const [error, setError] = useState(null)

  useEffect(() => {

    getCandidateByEmail(import.meta.env.VITE_EMAIL)
      .then(data => setCandidate(data))
      .catch(error => setError(error))

  }, [])

  return (
    <h1>This is a React App.</h1>
  )
}

export default App

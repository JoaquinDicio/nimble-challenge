import { useEffect, useState } from "react"
import { getCandidateByEmail } from "./services/candidateService"
import { getJobs } from "./services/jobService"
import JobList from "./components/JobList"

function App() {

  const [candidate, setCandidate] = useState(undefined)

  const [jobs, setJobs] = useState(null)

  const [error, setError] = useState(null)

  useEffect(() => {

    getCandidateByEmail(import.meta.env.VITE_EMAIL)
      .then(data => setCandidate(data))
      .catch(error => setError(error))

    getJobs()
      .then(data => setJobs(data))
      .catch(error => setError(error))

  }, [])

  return (
    <div>
      <h1>Open Positions</h1>
      {
        jobs?.length > 0 ?
          <JobList jobs={jobs} candidate={candidate} /> :
          <i>No jobs available.</i>
      }
    </div>
  );
}

export default App

import { useEffect, useState } from "react"
import { getCandidateByEmail } from "./services/candidateService"
import { getJobs } from "./services/jobService"
import JobList from "./components/JobList"

function App() {

  const [candidate, setCandidate] = useState(undefined)
  const [jobs, setJobs] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    loadData()
  }, [])

  async function loadData() {
    try {
      setLoading(true)

      const candidate = await getCandidateByEmail(import.meta.env.VITE_EMAIL)
      setCandidate(candidate)

      const jobs = await getJobs()
      setJobs(jobs)

    } catch (error) {

      setError(error)

    } finally {

      setLoading(false)

    }
  }

  if (loading) return <div className="loading">
    <i>Looking for positions...</i>
  </div>

  if (error) return <i>{error.message || "Error loading data"}</i>;

  return (
    <div>
      <h1>Open Positions</h1>
      {
        jobs?.length > 0 ?
          <JobList jobs={jobs} candidate={candidate} /> :
          <i>No positions available.</i>
      }
    </div>
  );
}

export default App

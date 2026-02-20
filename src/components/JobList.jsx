import JobItem from "./JobItem";

export default function JobList({ jobs, candidate }) {
  return (
    <ul>
      {jobs.map(job => (
        <JobItem
          key={job.id}
          job={job}
          candidate={candidate}
        />
      ))}
    </ul>
  );
}
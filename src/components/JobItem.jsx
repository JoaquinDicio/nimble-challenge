export default function JobItem ({job, candidate}){
    
    return <li>
        {job.title}
        <button>Apply</button>
    </li>
}
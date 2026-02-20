import api from "./api";

export async function getJobs() {

    try {

        const response = await api.get('/api/jobs/get-list')

        return response.data

    } catch (error) {

        const msg = error.response?.data?.error || 'Error fetching jobs'

        throw new Error(msg)

    }

}

export async function applyToJob({ uuid, jobId, candidateId, repoUrl, applicationId }) {
    try {
        
        const res = await api.post("/api/candidate/apply-to-job", {
            uuid,
            jobId,
            candidateId,
            applicationId,
            repoUrl,
        });

        return res.data;

    } catch (error) {
        console.log(error.response.data)

        const msg = error.response?.data?.error || "Error applying to job";

        throw new Error(msg);
    
    }
}
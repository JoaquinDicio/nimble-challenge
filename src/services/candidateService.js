import api from "./api";

export async function getCandidateByEmail(email) {

    try {

        const response = await api.get('api/candidate/get-by-email', { params: { email } })

        return response.data

    } catch (error) {

        const msg = error.response?.data?.error || 'Error fetching candidate, check your email'
        
        throw new Error (msg)

    }

}
import api from "./api";

export async function getCandidateByEmail(email) {

    try {

        const response = await api.get('api/candidate/get-by-email', { params: { email } })

        return response.data

    } catch (error) {

        const msg = error.response?.data?.message || error.message || 'Error fetching candidate'
        
        throw new Error (msg)

    }

}
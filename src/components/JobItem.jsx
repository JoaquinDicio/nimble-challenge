import { useState } from "react";
import { applyToJob } from "../services/jobService";

export default function JobItem({ job, candidate }) {
    const [repoUrl, setRepoUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);

    async function handleSubmit() {

        if (!repoUrl.trim()) {

            setMessage({ type: "error", text: "Repo URL is required" });

            return;

        }

        try {
            setLoading(true);

            setMessage(null);

            await applyToJob({
                uuid: candidate.uuid,
                candidateId: candidate.candidateId,
                applicationId: candidate.applicationId,
                jobId: job.id,
                repoUrl,
            });

            setMessage({ type: "success", text: "Application sent successfully!" });

            setRepoUrl("");

        } catch (error) {

            setMessage({
                type: "error",
                text: error.message || "Failed to apply",
            });

        } finally {

            setLoading(false);

        }
    }

    return (
        <li className="flex job-item">
            <h3>{job.title}</h3>

            <div className="flex">
                <input
                    type="text"
                    className="w-full"
                    placeholder="https://github.com/tu-user/tu-repo"
                    value={repoUrl}
                    onChange={(e) => setRepoUrl(e.target.value)}
                />

                <button className="button-primary" onClick={handleSubmit} disabled={loading}>
                    {loading ? "Submitting..." : "Submit"}
                </button>
            </div>

            {message && (
                <p
                    style={{
                        marginTop: 8,
                        color: message.type === "error" ? "red" : "green",
                    }}
                >
                    {message.text}
                </p>
            )}
        </li>
    );
}
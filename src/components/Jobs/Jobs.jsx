import Job from './Job';
import jobsData from '../../data/jobs';


function Jobs() {
    return (
        <main className="jobs">
            {jobsData.map(job => (
                <Job 
                    key={job.id}
                    className={job.className}
                    title={job.title}
                    contractType={job.contractType}
                    country={job.country}
                    city={job.city}
                />
            ))}
        </main>
    )
};

export default Jobs;
import React, { useEffect, useState } from "react";
import Jobscard from "../shared/JobsCard";

const HotJobs = () => {
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  if (jobs === null) {
    return <div>...loading</div>;
  }

  return (
    <div>
      <h1 className="text-4xl text-center mt-8 mb-14">Hot Jobs of the Day</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-14">
        {jobs.map((job) => (
          <Jobscard key={job._id} job={job}></Jobscard>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;

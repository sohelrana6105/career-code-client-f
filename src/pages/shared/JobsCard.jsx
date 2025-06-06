import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { NavLink } from "react-router";

const jobsCard = ({ job }) => {
  // console.log(job);

  const {
    _id,
    title,
    location,
    company_logo,
    company,
    description,
    requirements,

    salaryRange,
  } = job;

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="flex items-center gap-4">
          <figure>
            <img src={company_logo} alt="Shoes" />
          </figure>
          <div>
            <h1 className="text-4xl">{company} </h1>
            <p className="flex items-center gap-2 ">
              <FaLocationDot /> {location}{" "}
            </p>
          </div>
        </div>

        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <h2>
            Salary {salaryRange.min}-{salaryRange.max} {salaryRange.currency}
          </h2>
          <p>{description}</p>
          <div className="card-actions ">
            {requirements.map((skill, i) => (
              <div key={i} className="badge badge-outline">
                {skill}
              </div>
            ))}
          </div>
          <div className="card-actions justify-end">
            <NavLink to={`/jobs/${_id}`}>
              <button className="btn btn-primary">Show Details</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default jobsCard;

import React, { useEffect, useState } from "react";
import { FaSackDollar } from "react-icons/fa6";
import { HiLocationMarker } from "react-icons/hi";
import { NavLink, useParams } from "react-router";

const JobDetails = () => {
  const { id } = useParams();

  // console.log(id);
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/jobs/${id}`)
      .then((res) => res.json())
      .then((data) => setJob(data));
  }, [id]);
  if (job === null) {
    return <div className="flex justify-center s"> ...loading</div>;
  }

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
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-start gap-8">
        {/* Company Logo */}
        <div className="flex-shrink-0">
          <img
            src={company_logo}
            alt={`${company} logo`}
            className="w-32 h-32 object-contain rounded-xl border"
          />
        </div>

        {/* Job Info */}
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <h2 className="text-xl text-gray-600">{company}</h2>

          <div className="flex flex-wrap items-center gap-4 text-gray-500">
            <p className=" flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-sm">
              <HiLocationMarker /> {location}
            </p>
            <span className="flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              <FaSackDollar /> {salaryRange.min} - {salaryRange.max}{" "}
              {salaryRange.currency}
            </span>
          </div>

          <div className="border-t pt-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-1">
              Description:
            </h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-1">
              Requirements:
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              {requirements?.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
          </div>

          <NavLink to={`/jobApply/${_id}`}>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
              Apply Now
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

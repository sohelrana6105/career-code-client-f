import React, { use } from "react";
import { Authcontext } from "../../context/authcontext/Authcontext";

const AddJob = () => {
  const { user } = use(Authcontext);
  const handleAddJOb = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    // console.log(data);

    const { max, min, currency, ...newJob } = data;
    console.log(newJob);
    newJob.salaryRange = {
      min: min,
      max: max,
      currency: currency,
    };

    newJob.requirements = newJob.requirements.trim().split(",");
    newJob.responsibilities = newJob.responsibilities.trim().split(",");
    console.log(Object.keys(newJob).length);
  };

  return (
    <div>
      <h1>add a Job</h1>

      <form onSubmit={handleAddJOb}>
        {/* basic Info */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Basic info</legend>

          <label className="label">Title</label>
          <input
            type="text"
            name="title"
            className="input"
            placeholder="Title"
            required
          />

          <label className="label">Company</label>
          <input
            type="text"
            name="company"
            className="input"
            placeholder="Company"
            required
          />

          <label className="label">Location</label>
          <input
            type="text"
            name="location"
            className="input"
            placeholder="Location"
            required
          />

          <label className="label">Company Logo</label>
          <input
            type="text"
            name="company_logo"
            className="input"
            placeholder="Company Logo url"
            required
          />
        </fieldset>
        {/*Job type  */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job type</legend>

          <div className="filter">
            <input
              className="btn filter-reset"
              type="radio"
              name="jobType"
              aria-label="All"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="On-Site"
              value="On-Site"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Remote"
              value="Remote"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Hybrid"
              value="Hybrid"
            />
          </div>
        </fieldset>
        {/*  Job category*/}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job category</legend>
          <select
            defaultValue="Job category"
            name="category"
            className="select"
          >
            <option disabled={true}>Job category</option>
            <option>Engineering</option>
            <option>Marketing </option>
            <option>Finance</option>
          </select>
        </fieldset>
        {/* Application Deadline */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Application Deadline</legend>
          <input type="date" name="applicationDeadline" className="input" />
        </fieldset>
        {/* Salary Range */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Salary Range</legend>
          <label className="label">Minimum Salary </label>
          <input
            type="text"
            name="min"
            className="input"
            placeholder="My awesome page"
          />

          <label className="label">Minimum Salary </label>
          <input
            type="text"
            name="max"
            className="input"
            placeholder="my-awesome-page"
          />

          <label className="label">Currency</label>
          <select
            defaultValue="select a currency"
            name="currency"
            className="select"
          >
            <option disabled={true}>select a currency</option>
            <option>BDT</option>
            <option>USD </option>
            <option>EU</option>
          </select>
        </fieldset>
        {/* Job description  */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job description</legend>
          <textarea
            className="textarea"
            name="description"
            placeholder="job description"
          ></textarea>
        </fieldset>
        {/* Job requirements*/}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Requirements</legend>
          <textarea
            className="textarea"
            name="requirements"
            placeholder="Job requirements (separated by comma)"
          ></textarea>
        </fieldset>
        {/* Job Responsibilities*/}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Responsibilities</legend>
          <textarea
            className="textarea"
            name="responsibilities"
            placeholder="Job Responsibilities (separated by comma)"
          ></textarea>
        </fieldset>
        {/* Hr related info */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Hr Related Info</legend>

          <label className="label">Hr name</label>
          <input
            type="text"
            name="hr_name"
            className="input"
            placeholder="Hr name"
          />

          <label className="label">Company</label>
          <input
            type="email"
            name="hr_email"
            className="input"
            placeholder="Company"
            defaultValue={user.email}
          />

          <input type="submit" className="btn" value="Add a Job" />
        </fieldset>
      </form>
    </div>
  );
};

export default AddJob;

import React, { use, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Authcontext } from "../../context/authcontext/Authcontext";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id: jobId } = useParams();

  const { user } = use(Authcontext);

  const [job, setJob] = useState({});

  const navigation = useNavigate();

  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((alljob) => {
        const job = alljob.find((job) => job._id == jobId);
        setJob(job);
      });
  }, [jobId]);

  if (!job || Object.keys(job).length === 0) {
    return <div>...loading</div>;
  }

  // console.log(job);

  const handleapplyform = (e) => {
    e.preventDefault();
    const form = e.target;
    const LinkDinLink = form.linkdinLink.value;
    const GithubLink = form.githubLink.value;
    const ResumeLink = form.resumeLink.value;

    if (LinkDinLink === "" && GithubLink === "" && ResumeLink === "") {
      return setError("add linkdin link ,github link and resumelink ");
    }
    if (LinkDinLink === "") {
      return setError("add linkdin link");
    }
    if (GithubLink === "") {
      return setError("add github link");
    }
    if (ResumeLink === "") {
      return setError("add resume link");
    }

    // jobId:jobId,   short hand only jobId
    const application = {
      jobId,
      applicant: user.email,
      LinkDinLink,
      GithubLink,
      ResumeLink,
      company_logo: job.company_logo,
      title: job.title,
      company: job.company,
    };
    // console.log(application);
    axios
      .post("http://localhost:3000/application", application)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });

          navigation("/myapplications");
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="flex justify-center">
        {" "}
        {error && <p className="text-2xl text-red-600 font-bold">{error} </p>}
      </div>
      <div className="flex justify-center my-14">
        <form onSubmit={handleapplyform}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            {/* <legend className="fieldset-legend">Page details</legend> */}

            <label className="label">LinkDin Link</label>
            <input
              type="url"
              name="linkdinLink"
              className="input"
              placeholder="LinkDin Link"
            />

            <label className="label">Github Link</label>
            <input
              type="url"
              name="githubLink"
              className="input"
              placeholder="Github Link"
            />

            <label className="label">Resume Link</label>
            <input
              type="url"
              name="resumeLink"
              className="input"
              placeholder="Resume Link"
            />
            <input className="btn" type="submit" value="Apply" />
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default JobApply;

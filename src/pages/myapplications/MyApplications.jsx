import React, { use, useEffect, useState } from "react";
import { Authcontext } from "../../context/authcontext/Authcontext";
import MyApplicationRow from "./MyApplicationRow";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyApplications = () => {
  const { user } = use(Authcontext);

  // const accessToken = user.accessToken;
  const [applicant, setApplicant] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get(`/application?email=${user.email}`)

      .then((res) => {
        setApplicant(res.data);
      });
  }, [user, axiosSecure]);

  // useEffect(() => {
  //   fetch(`http://localhost:3000/application?email=${user.email}`, {
  //     headers: {
  //       authorization: `Bearer ${accessToken}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setApplicant(data);
  //     });
  // }, [user, accessToken]);

  if (applicant.length === 0) {
    return <div>...loading</div>;
  }
  // console.log(applicant);

  return (
    <div>
      <h1>my application</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>#</label>
              </th>

              <th>Appllcants</th>
              <th>Company </th>
              <th>applicant link</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {applicant.map((applicantInfo, i) => (
              <MyApplicationRow
                key={applicantInfo._id}
                applicantInfo={applicantInfo}
                index={i}
              ></MyApplicationRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplications;

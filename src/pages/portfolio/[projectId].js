import { useRouter } from "next/router";
import React from "react";

const ProjectDetails = ({ projectId }) => {
  const router = useRouter();
  const id = router.query.projectId;
  console.log("ProjectId", id);
  return (
    <div
      className="project-details-page"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <h3>Detials of project having ID is {id} will be shown here</h3>
    </div>
  );
};

export default ProjectDetails;

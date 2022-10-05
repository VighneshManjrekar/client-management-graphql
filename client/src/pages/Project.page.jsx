import { Link, useParams,useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner.component";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../queries/projects.queries";
import ClientInfo from "../components/ClientInfo.component";
import DeleteProjectBtn from "../components/DeleteProjectBtn.component";
import EditProject from "../components/EditProject.component";

export default function Project() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { loading, err, data } = useQuery(GET_PROJECT, {
    variables: { id },
  });
  console.log("Data: ",data.project)
  if (loading) return <Spinner />;
  if (err) return navigate("/error");
  return (
    <>
      {!loading && !err && (
        <div className="mx-auto w-75 card p-5">
          <Link to="/" className="btn btn-light btn-sm w-25 d-inline ms-auto">
            Back
          </Link>
          <h1>{data.project.name}</h1>
          <p>{data.project.description}</p>
          <h5 className="mt-3">Project Status</h5>
          <p className="lead">{data.project.status}</p>
          <ClientInfo client={data.project.client} />
          <DeleteProjectBtn projectId={data.project.id} />
          <EditProject project={data.project}/>
        </div>
      )}
    </>
  );
}

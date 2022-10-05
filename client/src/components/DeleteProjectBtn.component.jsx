import { DELETE_PROJECT } from "../mutations/project.mutation";
import { GET_PROJECTS } from "../queries/projects.queries";
import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

export default function DeleteProjectBtn({ projectId }) {
  const navigate = useNavigate();

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: projectId },
    onCompleted: () => navigate("/"),
    refetchQueries: [{ query: GET_PROJECTS }],
  });

  return (
    <div className="d-flex mt-5 ms-auto">
      <button className="btn btn-danger btn-sm" onClick={deleteProject}>
        <FaTrash /> Delete Project
      </button>
    </div>
  );
}

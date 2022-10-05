import Spinner from "./Spinner.component";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../queries/projects.queries";
import ProjectCard from "./ProjectCard.component";

export default function Projects() {
  const { loading, err, data } = useQuery(GET_PROJECTS);
  if (loading) return <Spinner />;
  if (err) return <p>Something went wrong</p>;
  return (
    <>
      {data.projects.length > 0 ? (
        <div className="row mt-4">
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>No Projects</p>
      )}
    </>
  );
}

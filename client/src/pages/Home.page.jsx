import Clients from "../components/Clients.component";
import AddClientModal from "../components/AddClientModal.component";
import Projects from "../components/Projects.component";
import AddProjectModal from "../components/AddProjectModal.component";

export default function Home() {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClientModal />
        <AddProjectModal />
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  );
}

import { FaTrash } from "react-icons/fa";

// graphql mutation import
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../mutations/client.mutation";
import { GET_CLIENTS } from "../queries/clients.queries";
import { GET_PROJECTS } from "../queries/projects.queries";

export default function ClientRow({ client }) {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    // update(cache, { data: { deleteClient } }) {
    //   const { clients } = cache.readQuery({ query: GET_CLIENTS });
    //   cache.writeQuery({
    //     query: GET_CLIENTS,
    //     data: {
    //       clients: clients.filter((client) => client.id !== deleteClient.id),
    //     },
    //   });
    // },
    refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],
  });
  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={deleteClient}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
}

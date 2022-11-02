import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Spinner, Table } from "react-bootstrap";
import InitialState from "../model/myinterface";
import { Link } from "react-router-dom";

function HomePage() {
  const [users, setUsers] = useState<Array<any>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getAllUsersWithAwait();
  }, []);

  const getAllUsersWithAwait = async () => {
    const result = await axios.get("http://localhost:5000/users");
    console.log(result);
    setUsers(result.data.reverse());
    setLoading(false);
    console.log("after axios call");
  };

  const deleteUser = async (userId: number) => {
    await axios.delete(`http://localhost:5000/users/${userId}`);
    getAllUsersWithAwait();
  };

  const getAllUsers = () => {
    axios
      .get("http://localhost:5000/users")
      .then(function (response) {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    console.log("after axios api call");
  };

  return (
    <div className="container">
      {users.length < 1 ? (
        <Spinner animation="grow" />
      ) : (
        <div>
          <h2 className="py-3">User Management System</h2>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <Link
                      to={`/users/view/${user.id}`}
                      className="btn btn-info me-2"
                    >
                      View
                    </Link>
                    <Link
                      to={`/users/edit/${user.id}`}
                      className="btn btn-outline-info me-2"
                    >
                      Edit
                    </Link>
                    <Button
                      onClick={() => deleteUser(user.id)}
                      variant="danger"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
}

export default HomePage;

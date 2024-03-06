import '../style/Table.css'
const Table = (props) => {
  const { users } = props;
  return (
    <div className="Table">
      <table>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">E-mail</th>
          <th scope="col">Phone</th>
          <th scope="col">Username</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user)=> {
          return (<tr key={user.id}>
            <th scope="row">{user.name.firstname} {user.name.lastname}</th>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.username}</td>
          </tr>)
        })}
      </tbody>
    </table>
    </div>
  )
}
export default Table;
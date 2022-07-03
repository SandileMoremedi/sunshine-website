import Link from "next/link";
const Orders = ({ users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th className="number">Number</th>
          <th className="name">Name</th>
          <th className="amount">Amount</th>
          <th className="status">Status</th>
        </tr>
      </thead>
      <tbody>
        {users.length !== 0 &&
          users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td className="name">
                <Link href="/orders/1">{user.user}</Link>
              </td>
              <td>{user.amount}</td>
              <td>{user.status}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Orders;

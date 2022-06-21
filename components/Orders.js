import Link from "next/link";
const Orders = () => {
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
        <tr>
          <td>bro</td>
          <td className="name">
            <Link href="/">Bro</Link>
          </td>
          <td>bro</td>
          <td>bro</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Orders;

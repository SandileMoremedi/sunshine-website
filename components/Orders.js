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
          <td>1</td>
          <td className="name">
            <Link href="/orders/1">Sandile Moremedi</Link>
          </td>
          <td>R360</td>
          <td>In Progress</td>
        </tr>
        <tr>
          <td>1</td>
          <td className="name">
            <Link href="/orders/1">Santan Dave</Link>
          </td>
          <td>R360</td>
          <td>In Progress</td>
        </tr>
        <tr>
          <td>1</td>
          <td className="name">
            <Link href="/orders/1">Jessie Lingard</Link>
          </td>
          <td>R360</td>
          <td>In Progress</td>
        </tr>
        <tr>
          <td>1</td>
          <td className="name">
            <Link href="/orders/1">Michel Brown</Link>
          </td>
          <td>R360</td>
          <td>In Progress</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Orders;

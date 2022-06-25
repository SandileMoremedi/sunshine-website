import Orders from "./Orders";
export default function DashboardComp({ users }) {
  return (
    <>
      <Orders users={users} />
    </>
  );
}

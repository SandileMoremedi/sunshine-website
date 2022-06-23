import sanityconfig from "../sanityconfig";
const EditBtn = ({ product }) => {
  async function handleDelete(id) {
    sanityconfig.delete(id)
    .then(() => 
      console.log("Deleted"))
    .catch((err) => console.log(err));
  }
  return (
    <button
      className="edit"
      type="submit"
      onClick={() => {
        handleDelete(product._id);
      }}
    >
      Edit
    </button>
  );
};
export default EditBtn;

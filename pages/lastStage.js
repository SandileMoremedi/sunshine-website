const lastStage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    var res = await fetch("/api/process", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(e),
    });
    res.json().then((b) => console.log(b));
  };
  return (
    <>
      <form
        action="/api/process"
        method="post"
        onSubmit={(e) => handleSubmit(e.target)}
      >
        <label htmlFor="name">Name</label>
        <input type="text" placeholder="e.g Sandile" id="name" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default lastStage;

import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Sunshine Cash & Carry | Contact</title>
      </Head>
      <div className="contact">
        <h1>Contact</h1>
        <div className="contact__intro">
          <p>
            Welcome to the Sunshine contact page. If you have any complaints or
            would like to praise one of our workers and partners please use this
            and we will contact you as soon as possible.
          </p>
        </div>
        <form action="" method="POST" className="contact__form">
          <label htmlFor="name" className="contact__form__labels">
            Name
          </label>
          <input
            type="text"
            name="name"
            required={true}
            placeholder="e.g. John"
            className="contact__form__inputs"
          />
          <label htmlFor="email" className="contact__form__labels">
            Email
          </label>
          <input
            type="email"
            name="Email"
            id="email"
            placeholder="e.g. sunshine@gmail.com"
            className="contact__form__inputs"
          />

          <label htmlFor="comment" className="contact__form__labels">
            Please add your comment
          </label>
          <textarea name="Comment" id="comment" cols="30" rows="10"></textarea>
          <button type="submit" className="contact__form__submit">
            Send
          </button>
        </form>
      </div>
    </>
  );
};
export default Contact;

export default function ContactForm() {
  return (
    <>
      {/* 
      TODO: Check the documentation from formsubmit.co so you can create a custom thank you page 
      */}
      <form method="post" a action="https://formsubmit.co/the-email.com">
        <label htmlFor="name">Name</label>
        <input type="text" name="Name" id="name" />
      </form>
    </>
  );
}

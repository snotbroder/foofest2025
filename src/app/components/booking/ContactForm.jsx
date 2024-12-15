function ContactForm({ index }) {
  return (
    <div>
      <section>
        <div className="flex flex-col gap-1">
          <h4 className="font-semibold">Information for person {index + 1}</h4>
          <label>First Name</label>
          <input
            type="text"
            name={`first_name_${index}`}
            className="rounded-full pl-2"
            placeholder="John"
            required
          ></input>
        </div>
        <div className="flex flex-col">
          <label>Last Name</label>
          <input
            type="text"
            name={`last_name_${index}`}
            className="rounded-full pl-2"
            placeholder="Doe"
            required
          ></input>
        </div>
        <div className="flex flex-col">
          <label>Email</label>
          <input
            className="rounded-full pl-2"
            type="email"
            name={`email_${index}`}
            placeholder="e.g. john@doe.com"
            required
          ></input>
        </div>
      </section>
    </div>
  );
}

export default ContactForm;

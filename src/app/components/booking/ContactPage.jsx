function ContactPage() {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <section>
        <h3 className="font-rethink font-bold text-main-1 text-2xl border-b-2 border-solid border-tertiary py-2">Your information (Guest 1)</h3>
        <form className="flex flex-col gap-2 py-4" action="none">
          <div className="flex flex-col gap-2">
            <label htmlFor="first-name">First name</label>
            <input id="first-name" placeholder="John" type="text" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="last-name">Last name</label>
            <input id="last-name" placeholder="Doe" type="text" />
          </div>
        </form>
      </section>
      <section>
        <h3 className="font-rethink  text-main-1 text-2xl border-b-2 border-solid border-tertiary py-2">Address</h3>
      </section>
    </div>
  );
}

export default ContactPage;

function volunteerForm() {
  return (
    <section className="bg-primary p-4 -mx-mobile text-main-1 max-w-2xl sm:w-3/4 lg:-mx-desktop sm:self-center">
      <form className="flex flex-col gap-8 " action="">
        <fieldset>
          <legend className="font-semibold text-xl  mb-2">
            Contact information
          </legend>
          <div className="grid grid-cols-1 gap-4 align-baseline justify-end">
            <div className="flex flex-col gap-1">
              <label>First Name</label>
              <input className="rounded-full" input="text"></input>
            </div>
            <div className="flex flex-col">
              <label>Last Name</label>
              <input className="rounded-full" input="text"></input>
            </div>
            <div className="flex flex-col">
              <label>Email</label>
              <input className="rounded-full" input="email"></input>
            </div>
            <div className="flex flex-col">
              <label>Phone Number</label>
              <input className="rounded-full" input="tel"></input>
            </div>
          </div>
        </fieldset>
        <button
          type="submit"
          className="bg-accent-1 text-sm shadow-lg shadow-black flex self-start px-4 py-0.5"
        >
          Sumbit
        </button>
      </form>
    </section>
  );
}

export default volunteerForm;

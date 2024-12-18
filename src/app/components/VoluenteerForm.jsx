import { postVoluenteerInfo } from "../api";
function volunteerForm() {
  function sendData(formData) {
    const data = {
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      email: formData.get("email"),
    };
    postVoluenteerInfo(data);
  }

  return (
    <section className="bg-primary p-8 -mx-mobile text-main-1 max-w-2xl sm:w-3/4 lg:-mx-desktop sm:self-center rounded-rounded-reg">
      <form action={sendData} className="flex flex-col gap-8 ">
        <fieldset>
          <legend className="font-rethink text-2xl mb-6">
            Contact information
          </legend>
          <div className="grid grid-cols-1 gap-4 align-baseline justify-end ">
            <div className="flex flex-col gap-1">
              <label>First Name</label>
              <input
                type="text"
                name="first_name"
                placeholder="John"
                required
              ></input>
            </div>
            <div className="flex flex-col">
              <label>Last Name</label>
              <input
                type="text"
                name="last_name"
                placeholder="Doe"
                required
              ></input>
            </div>
            <div className="flex flex-col">
              <label>Email</label>
              <input
                input="email"
                type="email"
                name="email"
                placeholder="e.g. john@doe.com"
                required
              ></input>
            </div>
            <div className="flex flex-col">
              <label>Phone Number</label>
              <input
                type="tel"
                inputMode="decimal"
                placeholder="XXXX3095"
                maxLength="8"
                required
              ></input>
            </div>
          </div>
        </fieldset>
        <button className="button grid place-self-start" type="submit">
          Sumbit
        </button>
      </form>
    </section>
  );
}

export default volunteerForm;

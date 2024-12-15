import { postVoluenteerInfo } from "../api";
async function volunteerForm() {
  async function sendData(formData) {
    "use server";
    console.log("sending data");

    const data = {
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      email: formData.get("email"),
    };
    await postVoluenteerInfo(data);
  }

  return (
    <section className="bg-primary p-4 -mx-mobile text-main-1 max-w-2xl sm:w-3/4 lg:-mx-desktop sm:self-center">
      <form action={sendData} className="flex flex-col gap-8 ">
        <fieldset>
          <legend className="font-semibold text-xl  mb-2">
            Contact information
          </legend>
          <div className="grid grid-cols-1 gap-4 align-baseline justify-end ">
            <div className="flex flex-col gap-1">
              <label>First Name</label>
              <input
                type="text"
                name="first_name"
                className="rounded-full pl-2 italic"
                placeholder="John"
                required
              ></input>
            </div>
            <div className="flex flex-col">
              <label>Last Name</label>
              <input
                type="text"
                name="last_name"
                className="rounded-full pl-2 italic"
                placeholder="Doe"
                required
              ></input>
            </div>
            <div className="flex flex-col">
              <label>Email</label>
              <input
                className="rounded-full pl-2 italic"
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
                className="rounded-full pl-2 italic"
                type="tel"
                inputMode="decimal"
                placeholder="XXXX3095"
                maxLength="8"
                required
              ></input>
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

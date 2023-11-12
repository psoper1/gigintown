function GeneralAccount({user, setUser, accountType}) {

    const handleChange = (key, value) => {
        setUser({
          ...user,
          [key]: value,
        });
      };
    
      const handleRegister = () => {
        console.log("Registered!");
        console.log(accountType);
        console.log(user);
      };

  return (
    <>
      <div className="card-body signup-card-body p-4 p-md-5">
        <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2 text-center">
          Registration Info
        </h3>
        <form className="px-md-2">
          <div className="mb-4">
            <input
              type="text"
              id="first_name"
              className="form-control form-control-lg inputField"
              onChange={(e) => handleChange("firstName", e.target.value)}
              placeholder="First Name"
            />
            <label className="form-label" htmlFor="firstName"></label>
          </div>

          <div className="mb-4">
            <input
              type="text"
              id="last_name"
              className="form-control form-control-lg inputField"
              onChange={(e) => handleChange("lastName", e.target.value)}
              placeholder="Last Name"
            />
            <label className="form-label" htmlFor="lastName"></label>
          </div>

          <div className="mb-4">
            <input
              type="email"
              id="email"
              className="form-control form-control-lg inputField"
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="Email Address"
            />
            <label className="form-label" htmlFor="email"></label>
          </div>

          <div className="mb-4">
            <input
              type="password"
              id="password"
              className="form-control form-control-lg inputField"
              onChange={(e) => handleChange("password", e.target.value)}
              placeholder="Password"
            />
            <label className="form-label" htmlFor="form2Example28"></label>
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="passConf"
              className="form-control form-control-lg inputField"
              onChange={(e) => handleChange("passwordConf", e.target.value)}
              placeholder="Confirm Password"
            />
            <label className="form-label" htmlFor="form2Example28"></label>
          </div>
          <button
            type="submit"
            onClick={handleRegister}
            className="btn btn-success btn-lg mb-1"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default GeneralAccount;

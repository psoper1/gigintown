import Nav from "./Nav";
import GigInTownLogo from "../imgs/gigintown test3.png";
import GeneralAccount from "./GeneralAccount";
import { Link } from "react-router-dom";

function Signup({ user, setUser, accountType, setAccountType }) {

  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;
    let updatedAccountType;
  
    if (selectedValue === "Artist") {
      updatedAccountType = "Artist";
    } else if (selectedValue === "Venue") {
      updatedAccountType = "Venue";
    } else if (selectedValue === "Promoter") {
      updatedAccountType = "Promoter";
    } else if (selectedValue === "General User") {
      updatedAccountType = "General";
    }
  
    setUser((prevUser) => ({
      ...prevUser,
      account_type: updatedAccountType,
    }));
    setAccountType(updatedAccountType);
    console.log(updatedAccountType);
    console.log(user.account_type);
  };
  console.log(accountType);

  return (
    <>
      <Nav />
      <section className="h-100 h-custom section-signup">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-6">
              <div className="card rounded-3">
                <img
                  className="signup-image"
                  src={GigInTownLogo}
                  alt="Sample"
                />
                <div className="dropdown-question">
                  <div className="text-center text-white">
                    Please choose the type of account you would like to create
                  </div>
                  <div className="mb-4 dropdown-options-venue">
                    <select
                      className="select dropdown-box-venue"
                      onChange={handleDropdownChange}
                    >
                      <option value=""></option>
                      <option value="Artist">Artist</option>
                      <option value="Venue">Venue</option>
                      <option value="Promoter">Promoter</option>
                      <option value="General User">General User</option>
                    </select>
                  </div>
                </div>
                {accountType !== "" && (
                  <>
                  {accountType === "General" &&
                  <>
                    <div>
                      Note: General Accounts are unable to Create Events. If you
                      are representing an Artist, Venue or are a Promoter please
                      choose from the dropdown above.
                    </div>
                    <div>
                      For more information on the different types of accounts,
                      see the <Link to="/faq">FAQ</Link>
                    </div>
                    </>
                  }
                    <GeneralAccount
                      user={user}
                      setUser={setUser}
                      accountType={accountType}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;

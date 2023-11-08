import { useState } from "react";
import Nav from "./Nav";
import GigInTownLogo from '../imgs/gigintown test3.png';

function Signup() {

    const [isVenue, setIsVenue] = useState(false)
    const [user, setUser] = useState({
        password: "",
        passwordConf: "",
        firstName: "",
        lastName: "",
        email: "",
        venueName: "",
    })

    const handleChange = (key, value) => {
        setUser({
            ...user,
            [key]: value
        })
    }

    const handleRegister = () => {
        console.log('Registered!')
        console.log(isVenue)
        console.log(user)
    }

    const handleDropdownChange = (event) => {
        const selectedValue = event.target.value;
        if (selectedValue === "2") {
            setIsVenue(true);
        } else {
            setIsVenue(false);
        }
    };

    return (
        <>
            <Nav />
            <section className="h-100 h-custom section-signup">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-8 col-xl-6">
                            <div className="card rounded-3">
                                <img className='signup-image' src={GigInTownLogo}
                                    alt="Sample photo" />
                                <div className="card-body signup-card-body p-4 p-md-5">
                                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration Info</h3>
                                    <form className="px-md-2">
                                        <div className="mb-4">
                                            <input
                                                type="text"
                                                id="first_name"
                                                className="form-control form-control-lg inputField"
                                                onChange={(e) => handleChange('firstName', e.target.value)}
                                                placeholder="First Name" />
                                            <label className="form-label" htmlFor="firstName"></label>
                                        </div>

                                        <div className="mb-4">
                                            <input
                                                type="text"
                                                id="last_name"
                                                className="form-control form-control-lg inputField"
                                                onChange={(e) => handleChange('lastName', e.target.value)}
                                                placeholder="Last Name" />
                                            <label className="form-label" htmlFor="lastName"></label>
                                        </div>

                                        <div className="mb-4">
                                            <input
                                                type="email"
                                                id="email"
                                                className="form-control form-control-lg inputField"
                                                onChange={(e) => handleChange('email', e.target.value)}
                                                placeholder="Email Address" />
                                            <label className="form-label" htmlFor="email"></label>
                                        </div>

                                        <div className="mb-4">
                                            <input
                                                type="password"
                                                id="password"
                                                className="form-control form-control-lg inputField"
                                                onChange={(e) => handleChange('password', e.target.value)}
                                                placeholder="Password" />
                                            <label className="form-label" htmlFor="form2Example28"></label>
                                        </div>
                                        <div className="mb-4">
                                            <input
                                                type="password"
                                                id="passConf"
                                                className="form-control form-control-lg inputField"
                                                onChange={(e) => handleChange('passwordConf', e.target.value)}
                                                placeholder="Confirm Password" />
                                            <label className="form-label" htmlFor="form2Example28"></label>
                                        </div>
                                        <div>
                                            <div>Are you representing a venue?</div>
                                            <div className="mb-4">
                                                <select className="select" onChange={handleDropdownChange}>
                                                    <option value=""></option>
                                                    <option value="2">Yes</option>
                                                    <option value="3">No</option>
                                                </select>
                                            </div>
                                            {isVenue ?
                                                <div className="mb-4">
                                                    <input
                                                        type="text"
                                                        id="venue_name"
                                                        className="form-control form-control-lg inputField"
                                                        onChange={(e) => handleChange('venueName', e.target.value)}
                                                        placeholder="Name of Venue" />
                                                    <label className="form-label" htmlFor="venueName"></label>
                                                </div>
                                                : <div></div>}
                                        </div>
                                        <button type="submit" onClick={handleRegister} className="btn btn-success btn-lg mb-1">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup;
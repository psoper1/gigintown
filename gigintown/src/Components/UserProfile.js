import Nav from "./Nav";

function UserProfile({loggedInUser}) {
    return (
        <>
        <Nav loggedInUser={loggedInUser} />
        <div className="text-center">{loggedInUser.firstName}</div>
        </>
    )
}

export default UserProfile;
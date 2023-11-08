import Logo from './Logo'
import Nav from './Nav';

function HomePage() {
    return (
        <>
            <Nav />
            <div className='logo-container'>
                <Logo />
            </div>
        </>
    )
}

export default HomePage;
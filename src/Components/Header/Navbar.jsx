import './Navbar.css';
const Navbar = () => {
    return (
        <div className='w-11/12 mx-auto p-5 s1'>
            <img src="logo.png" alt="" />
            <ul className='s1 pr-2'>
                <li><a href="home.jsx">Home</a></li>
                <li><a href="about.jsx">About</a></li>
                <li><a href="Teams.jsx">Teams</a></li>
                <li><a href="Schedules.jsx">Schedules</a></li>
                <li className='flex font-bold gap-2 w-6'> Coin  <img src="coins.png" alt="" /></li>
            </ul>
        </div>
    );
};

export default Navbar;
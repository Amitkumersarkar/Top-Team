import './HeroSection.css';
const HeroSection = () => {

    return (
        <div className='w-11/12 mx-auto'>

            <div className=' bgg h1'>
                <img src="banner-main.png" alt="" />
                <div className='text-5xl font-semibold text-white pt-5'>
                    <h2>Assemble Your Ultimate Dream 11 Cricket Team</h2>
                </div>
                <p className='text-gray-300 text-3xl p-5'>Beyond Boundaries Beyond Limits</p>
                <button className='text-white'>Claim Free Credit</button>
            </div>
        </div>
    );
};

export default HeroSection;
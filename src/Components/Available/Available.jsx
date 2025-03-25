import './Available.css';
const Available = ({ handleIsActive }) => {
    return (
        <div>
            <button onClick={() => handleIsActive("Available")} className='text-3xl font-bold text-white '>Available </button>

        </div>
    );
};

export default Available;
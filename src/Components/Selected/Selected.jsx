import './Selected.css';
const Selected = ({ handleIsActive }) => {
    return (
        <div>
            <button onClick={handleIsActive} className='text-3xl font-bold text-white b1'>Selected </button>

        </div>
    );
};

export default Selected;
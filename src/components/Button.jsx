const Button = ({ btn, nameBtn }) => {
    return (
        <button
            onClick={btn}
            className="bg-rick hover:bg-morty rounded-lg p-2 transform transition-transform duration-150 ease-in-out active:scale-90"
        >
            {nameBtn}
        </button>
    );
};

export default Button;

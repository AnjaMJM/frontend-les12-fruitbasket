import "./button.css"

function Button({handleClick, children, disabled, btnType}) {


    return (
        <button
            type={btnType}
            onClick={handleClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default Button;
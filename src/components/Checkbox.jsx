const Checkbox = ({ id, onChange, text, checked }) => {
    return (
        <div className="checkbox-form setting center">
            <input
                type="checkbox"
                name={id}
                id={id}
                className="right-10"
                onChange={onChange}
                checked={checked}
            />
            <label htmlFor={id} className="label-checkbox white w-100">
                {text}
            </label>
        </div>
    );
};

export default Checkbox;

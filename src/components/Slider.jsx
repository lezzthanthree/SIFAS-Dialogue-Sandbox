const Slider = ({
    id,
    text,
    value,
    onChange,
    range,
    info,
    allowEdit,
    description,
    resetToDefault,
}) => {
    const promptNumber = () => {
        const number = prompt("Enter a value");
        if (isNaN(number) || number == null) {
            alert("Please input a valid number... *honk*");
            return NaN;
        }
        return number;
    };
    return (
        <div className="column setting">
            <label
                htmlFor={id}
                className="label-slider white bottom-10 align-center"
            >
                {text}
                {info}
            </label>
            <div className="row white center">
                <input
                    type="range"
                    name={id}
                    id={id}
                    className="white w-100"
                    value={value}
                    min={range[0]}
                    max={range[1]}
                    onChange={(e) => {
                        onChange(e.target.value);
                    }}
                />
                {allowEdit && (
                    <i
                        className="bi bi-pencil-fill left-10 sprite-setting-icon"
                        onClick={() => {
                            const number = promptNumber();
                            if (isNaN(number) || number == null) {
                                return;
                            }
                            onChange(number);
                        }}
                    ></i>
                )}
                {!isNaN(resetToDefault) && (
                    <i
                        className="bi bi-arrow-counterclockwise left-10 sprite-setting-icon"
                        onClick={() => {
                            onChange(resetToDefault);
                        }}
                    ></i>
                )}
            </div>
            {description}
        </div>
    );
};

export default Slider;

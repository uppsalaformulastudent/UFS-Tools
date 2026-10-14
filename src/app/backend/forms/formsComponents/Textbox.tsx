
import type { TextBox } from "./types";

type TextboxProps = {
    element: TextBox;
};

export function Textbox({ element }: TextboxProps) {
    const {
        id,
        label,
        required,
        multiline,
        placeholder,
        minLength,
        maxLength,
    } = element;

    const inputProps = {
        id,
        name: id,
        required,
        placeholder,
        minLength,
        maxLength,
    };

    return (
        <div>
            <label htmlFor={id}>{label} <br></br></label>

            {multiline ? (
                <textarea className="border "{...inputProps} />
            ) : (
                <input type="text" {...inputProps} />
            )}
        </div>
    );
}

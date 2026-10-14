import type { NumberInput } from "./types";

type NumberInputProps = {
    element: NumberInput;
};

export function NumberInput({ element }: NumberInputProps) {
    const { id, label, required, min, max } = element;

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input type="number" id={id} name={id} required={required} min={min} max={max} />
        </div>
    );
}

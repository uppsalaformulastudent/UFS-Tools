import type { Checkbox } from "./types";

type CheckboxProps = {
    element: Checkbox;
};

export function Checkbox({ element }: CheckboxProps) {
    const { id, label, required } = element;

    return (
        <div>
            <input type="checkbox" id={id} name={id} required={required} />
            <label htmlFor={id}>{label}</label>
        </div>
    );
};

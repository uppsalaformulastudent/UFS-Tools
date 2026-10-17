import type { Dropdown } from "./types";

type DropdownProps = {
    element: Dropdown;
};

export function Dropdown({ element }: DropdownProps) {
    const { id, label, options } = element;

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <select id={id} name={id}>
                {options.map((option) => (
                    <option key={option.id} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

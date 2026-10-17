import type { RadioGroup } from "./types";

type RadioGroupProps = {
    element: RadioGroup;
};

export function RadioButtonGroup({ element }: RadioGroupProps) {
    const { id, label, options, required} = element;

    return (
        <fieldset>
            <legend>{label}</legend>

            {options.map((option) => (
                <div key={option.id}>
                    <input
                        type="radio"
                        id={`${id}-${option.id}`}
                        name={id}
                        value={option.value}
                        required={required}
                    />
                    <label htmlFor={`${id}-${option.id}`}>
                        {option.label}
                    </label>
                </div>
            ))}
        </fieldset>
    );
}

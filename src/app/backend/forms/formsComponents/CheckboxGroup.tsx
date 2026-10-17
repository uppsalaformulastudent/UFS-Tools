
import type { CheckboxGroup as CheckboxGroupType } from "./types";

type CheckboxGroupProps = {
    element: CheckboxGroupType;
};

export function CheckboxGroup({ element }: CheckboxGroupProps) {
    const { id, label, options } = element;

    return (
        <fieldset>
            <legend>{label}</legend>

            {options.map((option) => (
                <div key={option.id}>
                    <input
                        type="checkbox"
                        id={`${id}-${option.id}`}
                        name={id}
                        value={option.value}
                    />
                    <label htmlFor={`${id}-${option.id}`}>
                        {option.label}
                    </label>
                </div>
            ))}
        </fieldset>
    );
}

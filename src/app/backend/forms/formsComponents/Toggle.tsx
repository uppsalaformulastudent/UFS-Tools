import type { Toggle as ToggleElement } from "./types";

type ToggleProps = {
    element: ToggleElement;
};

export function Toggle({ element }: ToggleProps) {
    const { id, label, required } = element;

    return (
        <div>
            <label
                htmlFor={id}
                className="cursor-pointer text-sm font-medium text-zinc-900 dark:text-zinc-100"
            >
                {label}
            </label> <br></br>

            <input
                type="checkbox"
                id={id}
                name={id}
                role="switch"
                required={required}
                className="
                    relative h-6 w-11 shrink-0
                    cursor-pointer appearance-none
                    rounded-full bg-zinc-300
                    transition-colors duration-200
                    checked:bg-red-600
                    dark:bg-zinc-700
                    dark:checked:bg-red-600
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-red-500
                    focus-visible:ring-offset-2

                    before:absolute before:top-0.5 before:left-0.5
                    before:h-5 before:w-5
                    before:rounded-full before:bg-white
                    before:shadow-sm
                    before:transition-transform before:duration-200
                    checked:before:translate-x-5
                "
            />
        </div>
    );
}

import type { date } from "./types";

type DatePickerProps = {
    element: date;
};

export function DatePicker({ element }: DatePickerProps) {
    const { id, label, required } = element;

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input type="date" id={id} name={id} required={required} />
        </div>
    );
}

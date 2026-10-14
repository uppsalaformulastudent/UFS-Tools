import type { Slider } from "./types";

type SliderProps = {
    element: Slider;
};

export function Slider({ element }: SliderProps) {
    const { label, id, min, max, step } = element;

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type="range"
                min={min}
                max={max}
                step={step}
            />
        </div>
    );
}

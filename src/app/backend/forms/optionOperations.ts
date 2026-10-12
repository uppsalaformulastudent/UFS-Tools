import type { Form, FormElement, ChoiceElement, ChoiceOption } from "./types";

function isChoiceElement(
    element: FormElement | undefined,
): element is ChoiceElement {
    return (
        element !== undefined &&
        (element.type === "checkboxGroup" ||
            element.type === "radio" ||
            element.type === "dropdown")
    );
}
export function appendOption() {}

export function removeOption() {}

export function updateOption() {}

export function moveOption() {}

export function insertOption() {}

export function getOption() {}

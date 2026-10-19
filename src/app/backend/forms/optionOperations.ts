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
/** 
 * @brief Appends an option to a choice element
 * @param {FormElement} element - The choice element to which the option will be appended
 * @param {ChoiceOption} option - The option to be appended
 * @returns {FormElement} - The updated choice element with the new option appended
 */
export function appendOption(element: FormElement, option: ChoiceOption): FormElement {
    if (!isChoiceElement(element)) {
        return element;
    }
    if (getOption(element, option.id) !== undefined) {
        return element;
    }

    return { ...element, 
        options: [... element.options, option],
    };
}

/**
 * @brief Removes an option from a choice element
 * @param {FormElement} element - The choice element from which the option will be removed
 * @param {string} id - The id of the option to be removed
 * @returns {FormElement} - The updated choice element with the option removed
 */
export function removeOption(element: FormElement, id: string): FormElement {
    if (!isChoiceElement(element)) {
        return element;
    }
    if (getOption(element, id) === undefined) {
        return element;
    }

    return {
        ...element,
        options: element.options.filter((o) => o.id !== id),
    };
}

/**
 * @brief Updates an option in a choice element
 * @param {FormElement} element - The choice element in which the option will be updated
 * @param {ChoiceOption} newOption - The new option to replace the old one
 * @param {string} oldId - The id of the option to be replaced
 * @returns {FormElement} - The updated choice element with the option updated
 */
export function updateOption(element: FormElement, newOption: ChoiceOption, oldId: string): FormElement {
    if (!isChoiceElement(element)) {
        return element;
    }
    if (getOption(element, oldId) === undefined) {
        return element;
    }

    return {
        ...element,
        options: element.options.map((o) => (o.id === oldId ? newOption : o)),
    };
}

export function moveOption(element: FormElement, id: string, index: number):FormElement {
    if (!isChoiceElement(element)) {
        return element;
    }
    if(getOption(element, id) === undefined) {
        return element;
    }
    if (!Number.isInteger(index) || index < 0 || index >= element.options.length) {
        return element;
    }

    const tempOption = getOption(element, id);
    const newElement = removeOption(element, id);

    return insertOption(newElement, tempOption, index);
}

/**
 * @brief Inserts an option at a specified index in a choice element
 * @param {FormElement} element - The choice element in which the option will be inserted
 * @param {ChoiceOption} option - The option to be inserted
 * @param {number} index - The index at which the option will be inserted
 * @returns {FormElement} - The updated choice element with the option inserted
 */
export function insertOption(element: FormElement, option, ChoiceOption, index: number): FormElement {
    if (!isChoiceElement(element)) {
        return element;
    }
    if (getOption(element, option.id) !== undefined) {
        return element;
    }

    if (!Number.isInteger(index) || index < 0) {
        return element;
    }

    return {
        ...element,
        options: [
            ...element.options.slice(0, index),
            option,
            ...element.options.slice(index),
        ],
    };
}

export function getOption(element: FormElement, id: string): ChoiceOption | undefined {
    if (!isChoiceElement(element)) {
        return undefined;
    }
   return element.options.find((o) => o.id === id);
}

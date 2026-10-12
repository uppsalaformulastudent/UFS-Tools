/**
 * This file contains the operations that can be performed on a form.
 * Each operation is a function that takes a form and an element as arguments and returns a new form.
 */

import { Form, FormElement } from "./types";
import { generateId } from "./factories";

/**
 * @brief Appends an element to the form
 * @param {Form} form - The form to which the element will be appended
 * @param {FormElement} element - The element to be appended
 * @returns {Form} - The updated form with the new element appended
 */
export function appendElement(form: Form, element: FormElement): Form {
    if (getElement(form, element.id) !== undefined) {
        return form;
    }
    return {
        ...form,
        elements: [...form.elements, element],
    };
}
/**
 * @brief Removes an element from the form
 * @param {Form} form - the form witch the element will be deleted from
 * @param {string} id - the id of the element that will be deleted
 * @returns {Form} - THe updated form with the element removed.
 */
export function removeElement(form: Form, id: string): Form {
    const index = getElementIndex(form, id);
    if (getElement(form, id) === undefined || index === -1) {
        return form;
    }
    return {
        ...form,
        elements: form.elements.filter((e) => e.id !== id),
    };
}
/**
 * @brief inserts an element to a specified index, if Index > form.elements.length then it's appended to the end
 * @param {Form} form - the form that witch the element will be inserted into
 * @param {FormElement} element - the element that will be inserted
 * @param {number} index - the index of where the element will be inserted to.
 * @return {Form} the updated form with the element inserted
 */
export function insertElement(
    form: Form,
    element: FormElement,
    index: number,
): Form {
    if (getElement(form, element.id) !== undefined) {
        return form;
    }

    if (!Number.isInteger(index) || index < 0) {
        return form;
    }

    return {
        ...form,
        elements: [
            ...form.elements.slice(0, index),
            element,
            ...form.elements.slice(index),
        ],
    };
}
/**
 * @brief replaces an old element with a new one but keeps the id
 * @param {Form} form - the form of witch the element that will be updated is stored
 * @param {FormElement} newElement - the Element containing the new data.
 * @param {string} oldId - the ID of the element that will be updated
 * @returns {Form} an updated form where the element is updated
 */
export function updateElement(
    form: Form,
    newElement: FormElement,
    oldId: string,
): Form {
    if (getElement(form, oldId) === undefined) {
        return form;
    }

    return {
        ...form,
        elements: form.elements.map((element) =>
            element.id === oldId ? { ...newElement, id: oldId } : element,
        ),
    };
}
/**
 * @bref moves an element to a specified index
 * @param {Form} form - the form where the movement will take place
 * @param {string} id - the id of the element that will be moved
 * @param {number} index - the index of where the the element will be moved to
 * @ returns {Form} the updated form with the element moved
 */
export function moveElement(form: Form, id: string, index: number): Form {
    if (getElement(form, id) === undefined) {
        return form;
    }

    if (!Number.isInteger(index) || index < 0) {
        return form;
    }

    const tempElement = getElement(form, id);
    const newForm = removeElement(form, id);

    return insertElement(newForm, tempElement, index);
}

/**
 * @brief creates a duplicate of an element with a unique id and inserts it behind the original
 * @param {Form} form - the form where the duplication will happen
 * @param {string} id - id of the original element
 * @returns {Form} updated form with the duplicated element
 */
export function duplicateElement(form: Form, id: string): Form {
    if (getElement(form, id) === undefined) {
        return form;
    }

    const original = getElement(form, id);
    const duplicate: FormElement = {
        ...original,
        id: generateId(),
    };

    const newIndex = getElementIndex(form, id) + 1;

    return insertElement(form, duplicate, newIndex);
}
/**
 * @brief gets an element from the form by id
 * @param {Form} form - the form where the element is stored
 * @param {string} id - the id of the element that will be retrieved
 * @returns {FormElement | undefined} the element if found, otherwise undefined
 */
export function getElement(form: Form, id: string): FormElement | undefined {
    return form.elements.find((e) => e.id === id);
}

/**
 * @brief gets the index of an element in the form by id
 * @param {Form} form - the form where the element is stored
 * @param {string} id - the id of the element that will be retrieved
 * @returns {number} the index of the element if found, otherwise -1
 */
export function getElementIndex(form: Form, id: string): number {
    return form.elements.indexOf(getElement(form, id));
}

/**
 * @brief Updates the properties of a form
 * @param {Form} form - The form to update
 * @param {FormChanges} changes - The properties to update
 * @returns {Form} A new form with the updated properties
 */
type FormChanges = Partial<Pick<Form, "title" | "description" | "enddate">>;

export function updateForm(form: Form, changes: FormChanges): Form {
    return {
        ...form,
        ...changes,
        version: form.version + 1,
    };
}

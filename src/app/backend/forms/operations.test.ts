import {
    appendElement,
    removeElement,
    updateElement,
    moveElement,
    insertElement,
    duplicateElement,
    copyElement,
    pastElement,
    getElement,
    getElementIndex,
    updateForm,
} from "./operations";

import {
    generateId,
    createTextbox,
    createCheckbox,
    createCheckboxGroup,
    createRadioButtonGroup,
    createDropdown,
    createHeader,
    createParagraph,
    createDivider,
    createDatePicker,
    createFileUpload,
    createNumberInput,
    createSlider,
    createToggle,
    createImage,
    createPageBreak,
    createForm,
    createChoiceOption,
} from "./factories";

// form for testing

const textbox = createTextbox("Name", true);
const checkbox = createCheckbox("Accept Terms", true);
const checkboxGroup = createCheckboxGroup("Select Options", true, [
    createChoiceOption("Option 1", "option1"),
    createChoiceOption("Option 2", "option2"),
]);
const form = createForm("Test Form", "This is a test form", [
    textbox,
    checkbox,
    checkboxGroup,
]);

describe("Form Operations", () => {
    test("getElement should return textbox", () => {
        const foundTextbox = getElement(form, textbox.id);

        expect(foundTextbox).toEqual(textbox);
    });

    test("getElement should return undefined if not found", () => {
        const foundElement = getElement(form, "nonexistent-id");

        expect(foundElement).toBeUndefined();
    });
    test("GetElementIndex should return the index of textbox", () => {
        const foundIndex = getElementIndex(form, textbox.id);

        expect(foundIndex).toEqual(0);
    });

    test("GetElementIndex should return -1 if not found", () => {
        const foundIndex = getElementIndex(form, "nonexistent-id");

        expect(foundIndex).toEqual(-1);
    });

    test("appendElement should add an element to the form", () => {
        const newTextbox = createTextbox("Email", true);
        const updatedForm = appendElement(form, newTextbox);

        expect(updatedForm.elements).toContainEqual(newTextbox);
    });

    test("appendElement should not add duplicate elements", () => {
        const updatedForm = appendElement(form, textbox);

        expect(
            updatedForm.elements.filter((e) => e.id === textbox.id),
        ).toHaveLength(1);
    });

    test("removeElement should remove an element", () => {
        const updatedForm = removeElement(form, textbox.id);

        expect(updatedForm.elements).not.toContainEqual(textbox);
    });

    test("removeElement should ignore nonexistent elements", () => {
        const updatedForm = removeElement(form, "nonexistent-id");

        expect(updatedForm.elements).toEqual(form.elements);
    });

    test("updateElement should update an existing element", () => {
        const updatedTextbox = { ...textbox, label: "Updated Name" };
        const updatedForm = updateElement(form, updatedTextbox, textbox.id);

        expect(updatedForm.elements).toContainEqual(updatedTextbox);

        const result = updatedForm.elements.find((e) => e.id === textbox.id);

        expect(result).toEqual(updatedTextbox);
    });

    test("updateElement should ignore nonexistent elements", () => {
        const updatedTextbox = { ...textbox, label: "Updated Name" };

        const updatedForm = updateElement(
            form,
            updatedTextbox,
            "nonexistent-id",
        );

        expect(updatedForm).toBe(form);
    });

    test("moveElement should move an element to a new position", () => {
        const updatedForm = moveElement(form, checkbox.id, 0);

        expect(updatedForm.elements[0]).toEqual(checkbox);
    });

    test("moveElement should ignore nonexistent elements", () => {
        const updatedForm = moveElement(form, "nonexistent-id", 0);

        expect(updatedForm.elements).toEqual(form.elements);
    });
    test("moveElement should ignore invalid index", () => {
        const updatedForm = moveElement(form, textbox.id, -123);

        expect(updatedForm.elements).toEqual(form.elements);
    });

    test("InsertElement should insert an element to a specific index", () => {
        const textbox3 = createTextbox("Username", true);
        console.log(form.elements[1]);
        const updatedform = insertElement(form, textbox3, 1);
        console.log(updatedform.elements[1]);

        expect(updatedform.elements[1]).toEqual(textbox3);
        expect(updatedform.elements.length).toEqual(form.elements.length + 1);
    });

    test("Insert element should ignore an insert if index is invalid", () => {
        const textbox3 = createTextbox("password", true);
        const updatedForm = insertElement(form, textbox3, -21);

        expect(updatedForm.elements).toEqual(form.elements);
    });

    test("InsertElement should insert an element to a specific index", () => {
        const textbox3 = createTextbox("Username", true);
        const updatedform = insertElement(form, textbox3, 1);

        expect(updatedform.elements[1]).toEqual(textbox3);
        expect(updatedform.elements.length).toEqual(form.elements.length + 1);
    });

    test("InsertElement should append if index > form.length", () => {
        const textbox3 = createTextbox("Username", true);
        const updatedform = insertElement(form, textbox3, 1000);

        expect(updatedform.elements[3]).toEqual(textbox3);
        expect(updatedform.elements.length).toEqual(form.elements.length + 1);
    });

    test("InsertElement should not insert duplicate elements", () => {
        const updatedform = insertElement(form, textbox, 1);

        expect(
            updatedform.elements.filter((e) => e.id === textbox.id),
        ).toHaveLength(1);
    });

    test("duplicateElement should create two indentical elements except for their id", () => {
        const updatedForm = duplicateElement(form, textbox.id);
        expect(
            updatedForm.elements.filter((e) => e.type === "textbox").length,
        ).toEqual(2);
    });

    test("duplicate Element should not duplicate a invalid element", () => {
        const updatedForm = duplicateElement(form, "nonexistant-id");

        expect(updatedForm.elements).toEqual(form.elements);
    });
});

describe("updateForm", () => {
    test("should update the title without modifying the original", () => {
        const form = createForm("Old Title", "Some description");

        const updated = updateForm(form, {
            title: "New Title",
        });

        expect(updated.title).toBe("New Title");
        expect(form.title).toBe("Old Title");
        expect(updated.id).toBe(form.id);
        expect(updated.elements).toEqual(form.elements);
        expect(updated).not.toBe(form);
        expect(updated.version).toBe(form.version + 1);
    });

    test("should preserve properties not being updated", () => {
        const updated = updateForm(form, {
            description: "Updated description",
        });

        expect(updated.description).toBe("Updated description");
        expect(updated.elements).toEqual(form.elements);
        expect(updated.version).toBe(form.version + 1);
    });
    test("should add enddate if provided", () => {
        const updated = updateForm(form, {
            enddate: "2024-12-31",
        });

        expect(updated.enddate).toBe("2024-12-31");
        expect(updated.version).toBe(form.version + 1);
    });
});

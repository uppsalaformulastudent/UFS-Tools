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

import { Form, FormElement } from "./types";

import {
    createHistory,
    saveState,
    undo,
    redo,
    getCurrentForm,
} from "./history";

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

describe("History Operations", () => {
    test("saveState should save the current form state", () => {
        let history = createHistory(form);
        const textbox2 = createTextbox("Email", true);
        const newForm = appendElement(form, textbox2);
        history = saveState(history, newForm);

        expect(history.states.length).toBe(2);
        expect(history.states[0]).toEqual(form);
        expect(history.states[1]).toEqual(newForm);
        expect(history.index).toBe(1);
    });
    test("saveState should not save the same form state again", () => {
        let history = createHistory(form);
        history = saveState(history, form);

        expect(history.states.length).toBe(1);
        expect(history.states[0]).toEqual(form);
        expect(history.index).toBe(0);
    });

    test("undo should revert to the previous form state", () => {
        let history = createHistory(form);
        const textbox2 = createTextbox("Email", true);
        const newForm = appendElement(form, textbox2);
        history = saveState(history, newForm);

        history = undo(history);

        expect(history.index).toBe(0);
        expect(getCurrentForm(history)).toEqual(form);
    });

    test("redo should move to the next form state", () => {
        let history = createHistory(form);
        const textbox2 = createTextbox("Email", true);
        const newForm = appendElement(form, textbox2);
        history = saveState(history, newForm);

        history = undo(history);
        history = redo(history);

        expect(history.index).toBe(1);
        expect(getCurrentForm(history)).toEqual(newForm);
    });

    test("undo should not go below index 0", () => {
        let history = createHistory(form);
        history = undo(history);

        expect(history.index).toBe(0);
        expect(getCurrentForm(history)).toEqual(form);
    });

    test("redo should not go above the last index", () => {
        const history = createHistory(form);
        const textbox2 = createTextbox("Email", true);
        const newForm = appendElement(form, textbox2);
        const newhistory = saveState(history, newForm);

        const redoHistory = redo(newhistory);

        expect(redoHistory.states).toEqual(newhistory.states);
    });
});

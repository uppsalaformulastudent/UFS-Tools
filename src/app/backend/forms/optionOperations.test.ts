import {
    appendOption,
    removeOption,
    updateOption,
    moveOption,
    insertOption,
    getOption,
} from "./optionOperations";

import {
    createTextbox,
    createCheckboxGroup,
    createRadioButtonGroup,
    createDropdown,
    createForm,
    createChoiceOption,
} from "./factories";

const textbox = createTextbox("textbox1", "Textbox 1");
const checkboxGroup = createCheckboxGroup("checkbox1", "Checkbox Group 1");
const radioButtonGroup = createRadioButtonGroup(
    "radiobutton1",
    "Radiobutton Group 1",
);
const dropdown = createDropdown("dropdown1", "Dropdown 1");

const form = createForm("form1", "Form 1", [
    textbox,
    checkboxGroup,
    radioButtonGroup,
    dropdown,
]);

describe("Option Operations", () => {
    test("appendOption appends an option to each type", () => {
        const newOption = createChoiceOption("test", "test");

        const NewCheckboxGroup = appendOption(checkboxGroup, newOption);
        const NewRadioButtonGroup = appendOption(radioButtonGroup, newOption);
        const NewDropdown = appendOption(dropdown, newOption);

        expect(NewCheckboxGroup.options).toContainEqual(newOption);
        expect(NewRadioButtonGroup.options).toContainEqual(newOption);
        expect(NewDropdown.options).toContainEqual(newOption);
    });

    test("appendOption does not append duplicate options", () => {
        const option = createChoiceOption("test", "test");
    
        // Append once
        const group1 = appendOption(checkboxGroup, option);
    
        // Try to append the same option again
        const group2 = appendOption(group1, option);
    
        // There should still only be one option
        expect(group2.options).toHaveLength(1);
    
        // Duplicate insertion should return the original object
        expect(group2).toBe(group1);
    });

    test("AppendOption does not append an option if the element is not a choice element", () => {
        const newTextbox = appendOption(textbox, createChoiceOption("test", "test"));

        expect(newTextbox).toEqual(textbox);
    });

    test("removeOption removes an option from each type", () => {
        const option1 = createChoiceOption("option1", "option1");
        const option2 = createChoiceOption("option2", "option2");

        const groupWithOptions = appendOption(
            appendOption(checkboxGroup, option1),
            option2,
        );

        const updatedGroup = removeOption(groupWithOptions, option1.id);

        expect(updatedGroup.options).not.toContainEqual(option1);
        expect(updatedGroup.options).toContainEqual(option2);
    });

    test("removeOption does not remove an option if the element is not a choice element", () => {
        const newTextbox = removeOption(textbox, "nonexistent-id");

        expect(newTextbox).toEqual(textbox);
    });

    test("removeOption does not remove an option if the option does not exist", () => {
        const option1 = createChoiceOption("option1", "option1");
        const groupWithOption = appendOption(checkboxGroup, option1);

        const updatedGroup = removeOption(groupWithOption, "nonexistent-id");

        expect(updatedGroup).toEqual(groupWithOption);
    });

    test("updateOption updates an option in each type", () => {
        const option1 = createChoiceOption("option1", "option1");
        const groupWithOption = appendOption(checkboxGroup, option1);

        const updatedOption = { ...option1, label: "updated option" };
        const updatedGroup = updateOption(groupWithOption, updatedOption, option1.id);

        expect(updatedGroup.options).toContainEqual(updatedOption);
        expect(updatedGroup.options).not.toContainEqual(option1);
    });

    test("updateOption does not update an option if the element is not a choice element", () => {
        const updatedTextbox = updateOption(textbox, createChoiceOption("test", "test"), "nonexistent-id");

        expect(updatedTextbox).toEqual(textbox);
    });

    test("updateOption does not update an option if the oldId does not exist", () => {
        const option1 = createChoiceOption("option1", "option1");
        const groupWithOption = appendOption(checkboxGroup, option1);

        const updatedOption = { ...option1, label: "updated option" };
        const updatedGroup = updateOption(groupWithOption, updatedOption, "nonexistent-id");

        expect(updatedGroup).toEqual(groupWithOption);
    });

    test("getOption retrieves an option from each type", () => {
        const option1 = createChoiceOption("option1", "option1");
        const groupWithOption = appendOption(checkboxGroup, option1);

        const retrievedOption = getOption(groupWithOption, option1.id);

        expect(retrievedOption).toEqual(option1);
    });

    test("getOption returns undefined if the element is not a choice element", () => {
        const retrievedOption = getOption(textbox, "nonexistent-id");

        expect(retrievedOption).toBeUndefined();
    });

    test("getOption returns undefined if the option does not exist", () => {
        const option1 = createChoiceOption("option1", "option1");
        const groupWithOption = appendOption(checkboxGroup, option1);

        const retrievedOption = getOption(groupWithOption, "nonexistent-id");

        expect(retrievedOption).toBeUndefined();
    });

    test("insertOption inserts an option at a specific index", () => {
        const option1 = createChoiceOption("option1", "option1");
        const option2 = createChoiceOption("option2", "option2");
        const groupWithOptions = appendOption(appendOption(checkboxGroup, option1), option2);

        const newOption = createChoiceOption("newOption", "newOption");
        const updatedGroup = insertOption(groupWithOptions, newOption, 1);

        expect(updatedGroup.options[1]).toEqual(newOption);
    });
});

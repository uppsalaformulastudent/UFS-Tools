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
import type { ChoiceOption, FormElement } from "./types";

const UUID_V4_REGEX =
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function expectValidId(object: { id: string }): void {
    expect(object.id).toMatch(UUID_V4_REGEX);
}

function exampleOptions(): ChoiceOption[] {
    return [
        createChoiceOption("Aerodynamics", "aero"),
        createChoiceOption("Vehicle Dynamics", "vehicle-dynamics"),
    ];
}

describe("factories", () => {
    describe("generateId", () => {
        test("generates UUID v4 identifiers", () => {
            expect(generateId()).toMatch(UUID_V4_REGEX);
        });

        test("generates a different ID for each call", () => {
            const ids = Array.from({ length: 100 }, () => generateId());
            expect(new Set(ids).size).toBe(ids.length);
        });
    });

    describe("createTextbox", () => {
        test("creates a textbox with all properties", () => {
            const textbox = createTextbox(
                "Full name",
                true,
                false,
                "Enter your name",
                2,
                100,
            );

            expectValidId(textbox);
            expect(textbox).toMatchObject({
                type: "textbox",
                label: "Full name",
                required: true,
                multiline: false,
                placeholder: "Enter your name",
                minLength: 2,
                maxLength: 100,
            });
        });

        test("leaves omitted optional properties undefined", () => {
            const textbox = createTextbox("Email", false, false);

            expectValidId(textbox);
            expect(textbox.required).toBe(false);
            expect(textbox.placeholder).toBeUndefined();
            expect(textbox.minLength).toBeUndefined();
            expect(textbox.maxLength).toBeUndefined();
        });

        test("accepts only some optional parameters and supports multiline", () => {
            const textbox = createTextbox(
                "Motivation",
                true,
                true,
                undefined,
                3,
            );

            expect(textbox.multiline).toBe(true);
            expect(textbox.placeholder).toBeUndefined();
            expect(textbox.minLength).toBe(3);
            expect(textbox.maxLength).toBeUndefined();
        });
    });

    test("createCheckbox preserves its label and required flag", () => {
        const checkbox = createCheckbox("Accept terms", true);

        expectValidId(checkbox);
        expect(checkbox).toMatchObject({
            type: "checkbox",
            label: "Accept terms",
            required: true,
        });
    });

    describe("choice-based elements", () => {
        test("createCheckboxGroup preserves its options", () => {
            const options = exampleOptions();
            const group = createCheckboxGroup("Departments", true, options);

            expectValidId(group);
            expect(group).toMatchObject({
                type: "checkboxGroup",
                label: "Departments",
                required: true,
            });
            expect(group.options).toEqual(options);
        });

        test("createRadioButtonGroup preserves its options", () => {
            const options = exampleOptions();
            const group = createRadioButtonGroup("First choice", true, options);

            expectValidId(group);
            expect(group).toMatchObject({
                type: "radio",
                label: "First choice",
                required: true,
            });
            expect(group.options).toEqual(options);
        });

        test("createDropdown preserves its options", () => {
            const options = exampleOptions();
            const dropdown = createDropdown("Select department", true, options);

            expectValidId(dropdown);
            expect(dropdown).toMatchObject({
                type: "dropdown",
                label: "Select department",
                required: true,
            });
            expect(dropdown.options).toEqual(options);
        });

        test("choice groups can be created with no options", () => {
            expect(
                createCheckboxGroup("New question", false, []).options,
            ).toEqual([]);
            expect(
                createRadioButtonGroup("New question", false, []).options,
            ).toEqual([]);
            expect(createDropdown("New question", false, []).options).toEqual(
                [],
            );
        });

        test("preserves existing choice IDs instead of regenerating them", () => {
            const options = exampleOptions();
            const dropdown = createDropdown("Department", false, options);

            expect(dropdown.options.map((option) => option.id)).toEqual(
                options.map((option) => option.id),
            );
            expect(dropdown.id).not.toBe(options[0].id);
        });
    });

    test("createHeader supports a heading level", () => {
        const header = createHeader("Join UFS", "h2");

        expectValidId(header);
        expect(header).toMatchObject({
            type: "header",
            text: "Join UFS",
            level: "h2",
        });
    });

    test("createParagraph preserves its text", () => {
        const paragraph = createParagraph("This is a paragraph.");

        expectValidId(paragraph);
        expect(paragraph).toMatchObject({
            type: "paragraph",
            text: "This is a paragraph.",
        });
    });

    test("createDivider creates a divider with an ID", () => {
        const divider = createDivider();

        expectValidId(divider);
        expect(divider.type).toBe("divider");
    });

    test("createDatePicker preserves its label and required flag", () => {
        const picker = createDatePicker("Available from", true);

        expectValidId(picker);
        expect(picker).toMatchObject({
            type: "date",
            label: "Available from",
            required: true,
        });
    });

    test("createFileUpload preserves size and file-count limits", () => {
        const acceptedFileTypes = ["application/pdf", ".docx"];
        const maxFileSize = 5 * 1024 * 1024; // 5 MiB, measured in bytes
        const upload = createFileUpload(
            "Upload CV",
            true,
            acceptedFileTypes,
            maxFileSize,
            10,
        );

        expectValidId(upload);
        expect(upload).toMatchObject({
            type: "fileUpload",
            label: "Upload CV",
            required: true,
            acceptedFileTypes,
            maxFileSize,
            maxFiles: 10,
        });
    });

    test("createNumberInput preserves its minimum and maximum", () => {
        const numberInput = createNumberInput("Age", false, 1, 100);

        expectValidId(numberInput);
        expect(numberInput).toMatchObject({
            type: "numberInput",
            label: "Age",
            required: false,
            min: 1,
            max: 100,
        });
    });

    describe("createSlider", () => {
        test("preserves an explicitly provided step", () => {
            const slider = createSlider("Rating", true, 0, 100, 5);

            expectValidId(slider);
            expect(slider).toMatchObject({
                type: "slider",
                label: "Rating",
                required: true,
                min: 0,
                max: 100,
                step: 5,
            });
        });

        test("defaults to step 1 when omitted", () => {
            const slider = createSlider("Rating", false, 0, 10);

            expect(slider.required).toBe(false);
            expect(slider.step).toBe(1);
        });

        test("supports fractional steps", () => {
            expect(createSlider("Precision", true, 0, 5, 0.5).step).toBe(0.5);
        });
    });

    test("createToggle preserves its label and required flag", () => {
        const toggle = createToggle("Receive updates", false);

        expectValidId(toggle);
        expect(toggle).toMatchObject({
            type: "toggle",
            label: "Receive updates",
            required: false,
        });
    });

    describe("createImage", () => {
        test("includes optional alternative text", () => {
            const image = createImage(
                "https://example.com/image.jpg",
                "UFS race car",
            );

            expectValidId(image);
            expect(image).toMatchObject({
                type: "image",
                src: "https://example.com/image.jpg",
                altText: "UFS race car",
            });
        });

        test("allows omitted alternative text", () => {
            const image = createImage("https://example.com/image.jpg");

            expect(image.altText).toBeUndefined();
        });
    });

    test("createPageBreak creates a page break with an ID", () => {
        const pageBreak = createPageBreak();

        expectValidId(pageBreak);
        expect(pageBreak.type).toBe("pageBreak");
    });

    describe("createChoiceOption", () => {
        test("creates an option with an ID, label, and value", () => {
            const option = createChoiceOption(
                "Vehicle Dynamics",
                "vehicle-dynamics",
            );

            expectValidId(option);
            expect(option).toMatchObject({
                label: "Vehicle Dynamics",
                value: "vehicle-dynamics",
            });
        });

        test("creates different IDs for otherwise identical options", () => {
            const first = createChoiceOption("Yes", "yes");
            const second = createChoiceOption("Yes", "yes");

            expect(first.id).not.toBe(second.id);
        });
    });

    describe("createForm", () => {
        test("creates a form containing every supported element type", () => {
            const options = exampleOptions();
            const elements: FormElement[] = [
                createTextbox("Full name", true, false),
                createCheckbox("Accept terms", true),
                createCheckboxGroup("Interests", true, options),
                createRadioButtonGroup("First choice", true, options),
                createDropdown("Department", true, options),
                createHeader("Welcome", "h1"),
                createParagraph("This is a paragraph."),
                createDivider(),
                createDatePicker("Select a date", true),
                createFileUpload(
                    "Upload CV",
                    true,
                    [".pdf"],
                    5 * 1024 * 1024,
                    1,
                ),
                createNumberInput("Age", true, 0, 100),
                createSlider("Rating", false, 0, 100, 5),
                createToggle("Receive updates", false),
                createImage("https://example.com/image.jpg", "Example image"),
                createPageBreak(),
            ];

            const form = createForm(
                "Test Form",
                "This is a test form",
                elements,
                2,
                "2027-01-01",
            );

            expectValidId(form);
            expect(form).toMatchObject({
                type: "form",
                title: "Test Form",
                description: "This is a test form",
                version: 2,
                enddate: "2027-01-01",
            });
            expect(form.elements).toEqual(elements);
            expect(form.elements).toHaveLength(15);
            expect(new Set(elements.map((element) => element.id)).size).toBe(
                15,
            );
        });

        test("defaults to an empty element list and version 1", () => {
            const form = createForm("Empty Form", "No questions yet");

            expectValidId(form);
            expect(form.type).toBe("form");
            expect(form.elements).toEqual([]);
            expect(form.version).toBe(1);
            expect(form.enddate).toBeUndefined();
        });

        test("creates separate forms with different IDs", () => {
            const first = createForm("Recruitment", "Description");
            const second = createForm("Recruitment", "Description");

            expect(first.id).not.toBe(second.id);
            expect(first.elements).not.toBe(second.elements);
        });
    });

    test("every factory generates its own UUID, without an ID parameter", () => {
        const options = exampleOptions();
        const objects = [
            createTextbox("Name", true, false),
            createCheckbox("Terms", true),
            createCheckboxGroup("Group", false, options),
            createRadioButtonGroup("Radio", false, options),
            createDropdown("Dropdown", false, options),
            createHeader("Title", "h1"),
            createParagraph("Text"),
            createDivider(),
            createDatePicker("Date", false),
            createFileUpload("Files", false, [".pdf"], 1024, 1),
            createNumberInput("Number", false, 0, 10),
            createSlider("Slider", false, 0, 10),
            createToggle("Toggle", false),
            createImage("https://example.com/image.png"),
            createPageBreak(),
            createForm("Form", "Description"),
            createChoiceOption("Option", "option"),
        ];

        for (const object of objects) {
            expectValidId(object);
        }
        expect(new Set(objects.map((object) => object.id)).size).toBe(
            objects.length,
        );
    });
});

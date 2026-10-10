import {
    TextBox,
    Checkbox,
    CheckboxGroup,
    RadioGroup,
    Dropdown,
    Header,
    Paragraph,
    Divider,
    DatePicker,
    FileUpload,
    NumberInput,
    Slider,
    Toggle,
    Image,
    PageBreak,
    ChoiceOption,
} from "./types";

/*
 * @brief Creates a textbox element
 * @ param {string} id - The unique identifier for the textbox
 * @ param {string} label - The label for the textbox
 * @ param {boolean} required - Whether the textbox is required or not
 * @ param {boolean} multiline - Whether the textbox is multiline or not
 * @ param {string} placeholder - The placeholder text for the textbox
 * @ param {number} minLength - The minimum length of the textbox input
 * @ param {number} maxLength - The maximum length of the textbox input
 * @returns {TextBox} - The created textbox element
 */
export function createTextbox(
    id: string,
    label: string,
    required: boolean,
    multiline: boolean,
    placeholder?: string,
    minLength?: number,
    maxLength?: number,
): TextBox {
    return {
        type: "textbox",
        id,
        label: label,
        required,
        multiline,
        placeholder,
        minLength,
        maxLength,
    };
}
/**
 * @brief Creates a checkbox element
 * @ param {string} id - The unique identifier for the checkbox
 * @ param {string} label - The label for the checkbox
 * @ param {boolean} required - Whether the checkbox is required or not
 * @returns {Checkbox} - The created checkbox element
 */
export function createCheckbox(
    id: string,
    label: string,
    required: boolean,
): Checkbox {
    return {
        type: "checkbox",
        id,
        label: label,
        required,
    };
}
/**
 * @brief Creates a checkbox group element
 * @ param {string} id - The unique identifier for the checkbox group
 * @ param {string} label - The label for the checkbox group
 * @ param {boolean} required - Whether the checkbox group is required or not
 * @ param {ChoiceOption[]} options - The checkboxes in the group
 * @returns {checkboxGroup} - The created checkbox group element
 */
export function createCheckboxGroup(
    id: string,
    label: string,
    required: boolean,
    options: ChoiceOption[],
): CheckboxGroup {
    return {
        type: "checkboxGroup",
        id,
        label,
        required,
        options,
    };
}
/**
 * @brief Creates a radio button group element
 * @ param {string} id - The unique identifier for the radio button group
 * @ param {string} label - The label for the radio button group
 * @ param {boolean} required - Whether the radio button group is required or not
 * @ param {ChoiceOption[]} options - The radio buttons in the group
 * @returns {RadioGroup} - The created radio button group element
 */
export function createRadioButtonGroup(
    id: string,
    label: string,
    required: boolean,
    options: ChoiceOption[],
): RadioGroup {
    return {
        type: "radio",
        id,
        label,
        required,
        options,
    };
}
/**
 * @brief Creates a dropdown element
 * @ param {string} id - The unique identifier for the dropdown
 * @ param {string} label - The label for the dropdown
 * @ param {boolean} required - Whether the dropdown is required or not
 * @ param {ChoiceOption[]} options - The options in the dropdown
 * @returns {Dropdown} - The created dropdown element
 */
export function createDropdown(
    id: string,
    label: string,
    required: boolean,
    options: ChoiceOption[],
): Dropdown {
    return {
        type: "dropdown",
        id,
        label,
        required,
        options,
    };
}
/**
 * @brief Creates a header element
 * @ param {string} id - The unique identifier for the header
 * @ param {string} text - The text for the header
 * @ param {string} level - The level of the header (e.g., "h1", "h2", "h3", "h4", "h5", "h6")
 * @returns {Header} - The created header element
 */
export function createHeader(id: string, text: string, level: string): Header {
    return {
        type: "header",
        id,
        level,
        weight,
    };
}
/**
 * @brief Creates a paragraph element
 * @ param {string} id - The unique identifier for the paragraph
 * @ param {string} text - The text for the paragraph
 * @returns {Paragraph} - The created paragraph element
 */
export function createParagraph(id: string, text: string): Paragraph {
    return {
        type: "paragraph",
        id,
        text,
    };
}

/**
 * @brief Creates a divider element
 * @ param {string} id - The unique identifier for the divider
 * @returns {Divider} - The created divider element
 */
export function createDivider(id: string) {
    return {
        type: "divider",
        id,
    };
}

/**
 * @brief Creates a date picker element
 * @ param {string} id - The unique identifier for the date picker
 * @ param {string} label - The label for the date picker
 * @ param {boolean} required - Whether the date picker is required or not
 * @returns {DatePicker} - The created date picker element
 */
export function createDatePicker(
    id: string,
    label: string,
    required: boolean,
): DatePicker {
    return {
        type: "date",
        id,
        label,
        required,
    };
}

/**
 * @brief Creates a file upload element
 * @ param {string} id - The unique identifier for the file upload
 * @ param {string} label - The label for the file upload
 * @ param {boolean} required - Whether the file upload is required or not
 * @ param {string[]} acceptedFileTypes - The accepted file types for the file upload
 * @ param {number} maxFileSize - The maximum file size for the file upload
 * @returns {FileUpload} - The created file upload element
 */
export function createFileUpload(
    id: string,
    label: string,
    required: boolean,
    acceptedFileTypes: string[],
    maxFileSize: number,
): FileUpload {
    return {
        type: "fileUpload",
        id,
        label,
        required,
        acceptedFileTypes,
        maxFileSize,
    };
}

/**
 * @brief Creates a number input element
 * @ param {string} id - The unique identifier for the number input
 * @ param {string} label - The label for the number input
 * @ param {boolean} required - Whether the number input is required or not
 * @ param {number} min - The minimum value for the number input
 * @ param {number} max - The maximum value for the number input
 * @returns {NumberInput} - The created number input element
 */
export function createNumberInput(
    id: string,
    label: string,
    required: boolean,
    min: number,
    max: number,
): NumberInput {
    return {
        type: "numberInput",
        id,
        label,
        required,
        min,
        max,
    };
}
/**
 * @brief Creates a slider element
 * @ param {string} id - The unique identifier for the slider
 * @ param {string} label - The label for the slider
 * @ param {boolean} required - Whether the slider is required or not
 * @ param {number} min - The minimum value for the slider
 * @ param {number} max - The maximum value for the slider
 * param {number} step - The step value for the slider
 * @returns {Slider} - The created slider element
 */
export function createSlider(
    id: string,
    label: string,
    min: number,
    max: number,
    step: number,
): Slider {
    return {
        type: "slider",
        id,
        label,
        min,
        max,
        step,
    };
}

/**
 * @brief Creates a toggle switch element
 * @ param {string} id - The unique identifier for the toggle switch
 * @ param {string} label - The label for the toggle switch
 * @ param {boolean} required - Whether the toggle switch is required or not
 * @returns {Toggle} - The created toggle switch element
 */
export function createToggle(
    id: string,
    label: string,
    required: boolean,
): Toggle {
    return {
        type: "toggle",
        id,
        label,
        required,
    };
}

/**
 * @brief Creates an image element
 * @ param {string} id - The unique identifier for the image
 * @ param {string} src - The source URL for the image
 * @ param {string} altText - The alternative text for the image
 * @returns {Image} - The created image element
 */
export function createImage(id: string, src: string, altText?: string): Image {
    return {
        type: "image",
        id,
        src,
        altText,
    };
}

/**
 * @brief Creates a page break
 * @ param {string} id - The unique identifier for the page break
 * @returns {PageBreak} - The created page break element
 */
export function createPageBreak(id: string): PageBreak {
    return {
        type: "pageBreak",
        id,
    };
}

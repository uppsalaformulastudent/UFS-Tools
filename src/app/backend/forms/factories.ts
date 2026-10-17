import type {
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
    Form,
    FormElement,
} from "./types";

export function generateId(): string {
    return crypto.randomUUID();
}

/**
 * @brief Creates a textbox element
 * @param {string} label - The label for the textbox
 * @param {boolean} required - Whether the textbox is required or not
 * @param {boolean} multiline - Whether the textbox is multiline or not
 * @param {string} placeholder - The placeholder text for the textbox
 * @param {number} minLength - The minimum length of the textbox input
 * @param {number} maxLength - The maximum length of the textbox input
 * @returns {TextBox} - The created textbox element
 */
export function createTextbox(
    label: string,
    required: boolean,
    multiline: boolean,
    placeholder?: string,
    minLength?: number,
    maxLength?: number,
): TextBox {
    return {
        type: "textbox",
        id: generateId(),
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
 * @param {string} label - The label for the checkbox
 * @param {boolean} required - Whether the checkbox is required or not
 * @returns {Checkbox} - The created checkbox element
 */
export function createCheckbox(label: string, required: boolean): Checkbox {
    return {
        type: "checkbox",
        id: generateId(),
        label: label,
        required,
    };
}
/**
 * @brief Creates a checkbox group element
 * @param {string} label - The label for the checkbox group
 * @param {boolean} required - Whether the checkbox group is required or not
 * @param {ChoiceOption[]} options - The checkboxes in the group
 * @returns {CheckboxGroup} - The created checkbox group element
 */
export function createCheckboxGroup(
    label: string,
    required: boolean,
    options: ChoiceOption[] = [],
): CheckboxGroup {
    return {
        type: "checkboxGroup",
        id: generateId(),
        label,
        required,
        options,
    };
}
/**
 * @brief Creates a radio button group element
 * @param {string} label - The label for the radio button group
 * @param {boolean} required - Whether the radio button group is required or not
 * @param {ChoiceOption[]} options - The radio buttons in the group
 * @returns {RadioGroup} - The created radio button group element
 */
export function createRadioButtonGroup(
    label: string,
    required: boolean,
    options: ChoiceOption[] = [],
): RadioGroup {
    return {
        type: "radio",
        id: generateId(),
        label,
        required,
        options,
    };
}
/**
 * @brief Creates a dropdown element
 * @param {string} label - The label for the dropdown
 * @param {boolean} required - Whether the dropdown is required or not
 * @param {ChoiceOption[]} options - The options in the dropdown
 * @returns {Dropdown} - The created dropdown element
 */
export function createDropdown(
    label: string,
    required: boolean,
    options: ChoiceOption[] = [],
): Dropdown {
    return {
        type: "dropdown",
        id: generateId(),
        label,
        required,
        options,
    };
}
/**
 * @brief Creates a header element
 * @param {string} text - The text for the header
 * @param {string} level - The level of the header (e.g., "h1", "h2", "h3", "h4", "h5", "h6")
 * @returns {Header} - The created header element
 */
export function createHeader(text: string, level: Header["level"]): Header {
    return {
        type: "header",
        id: generateId(),
        text,
        level,
    };
}
/**
 * @brief Creates a paragraph element
 * @param {string} text - The text for the paragraph
 * @returns {Paragraph} - The created paragraph element
 */
export function createParagraph(text: string): Paragraph {
    return {
        type: "paragraph",
        id: generateId(),
        text,
    };
}

/**
 * @brief Creates a divider element
 * @returns {Divider} - The created divider element
 */
export function createDivider(): Divider {
    return {
        type: "divider",
        id: generateId(),
    };
}

/**
 * @brief Creates a date picker element
 * @param {string} label - The label for the date picker
 * @param {boolean} required - Whether the date picker is required or not
 * @returns {DatePicker} - The created date picker element
 */
export function createDatePicker(label: string, required: boolean): DatePicker {
    return {
        type: "date",
        id: generateId(),
        label,
        required,
    };
}

/**
 * @brief Creates a file upload element
 * @param {string} label - The label for the file upload
 * @param {boolean} required - Whether the file upload is required or not
 * @param {string[]} acceptedFileTypes - The accepted file types for the file upload
 * @param {number} maxFileSize - The maximum file size for the file upload in bytes
 * @param {number} maxFiles - The maximum number of files that can be uploaded
 * @returns {FileUpload} - The created file upload element
 */
export function createFileUpload(
    label: string,
    required: boolean,
    acceptedFileTypes: string[],
    maxFileSize: number,
    maxFiles: number,
): FileUpload {
    return {
        type: "fileUpload",
        id: generateId(),
        label,
        required,
        acceptedFileTypes,
        maxFileSize,
        maxFiles,
    };
}

/**
 * @brief Creates a number input element
 * @param {string} label - The label for the number input
 * @param {boolean} required - Whether the number input is required or not
 * @param {number} min - The minimum value for the number input
 * @param {number} max - The maximum value for the number input
 * @returns {NumberInput} - The created number input element
 */
export function createNumberInput(
    label: string,
    required: boolean,
    min: number,
    max: number,
): NumberInput {
    return {
        type: "numberInput",
        id: generateId(),
        label,
        required,
        min,
        max,
    };
}
/**
 * @brief Creates a slider element
 * @param {string} label - The label for the slider
 * @param {boolean} required - Whether the slider is required or not
 * @param {number} min - The minimum value for the slider
 * @param {number} max - The maximum value for the slider
 * @param {number} step - The step value for the slider
 * @returns {Slider} - The created slider element
 */
export function createSlider(
    label: string,
    required: boolean,
    min: number,
    max: number,
    step: number = 1,
): Slider {
    return {
        type: "slider",
        id: generateId(),
        label,
        required,
        min,
        max,
        step,
    };
}

/**
 * @brief Creates a toggle switch element
 * @param {string} label - The label for the toggle switch
 * @param {boolean} required - Whether the toggle switch is required or not
 * @returns {Toggle} - The created toggle switch element
 */
export function createToggle(label: string, required: boolean): Toggle {
    return {
        type: "toggle",
        id: generateId(),
        label,
        required,
    };
}

/**
 * @brief Creates an image element
 * @param {string} src - The source URL for the image
 * @param {string} altText - The alternative text for the image
 * @returns {Image} - The created image element
 */
export function createImage(src: string, altText?: string): Image {
    return {
        type: "image",
        id: generateId(),
        src,
        altText,
    };
}

/**
 * @brief Creates a page break
 * @returns {PageBreak} - The created page break element
 */
export function createPageBreak(): PageBreak {
    return {
        type: "pageBreak",
        id: generateId(),
    };
}

/**
 * @brief Creates a form
 * @param {string} title - The title of the form
 * @param {string} description - The description of the form
 * @param {FormElement[]} elements - The elements of the form
 * @param {number} version - The version of the form
 * @param {string} enddate - The end date of the form (optional)
 * @returns {Form} - The created form
 */
export function createForm(
    title: string,
    description: string,
    elements: FormElement[] = [],
    version: number = 1,
    enddate?: string,
): Form {
    return {
        type: "form",
        id: generateId(),
        title,
        description,
        elements,
        version,
        enddate,
    };
}

/**
 * @brief Creates a choice option
 * @param {string} label - The label for the choice option
 * @param {string} value - The value for the choice option
 * @returns {ChoiceOption} - The created choice option
 */
export function createChoiceOption(label: string, value: string): ChoiceOption {
    return {
        id: generateId(),
        label,
        value,
    };
}

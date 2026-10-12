export type elementType =
    | "textbox"
    | "checkbox"
    | "checkboxGroup"
    | "radio"
    | "dropdown"
    | "header"
    | "paragraph"
    | "divider"
    | "date"
    | "fileUpload"
    | "slider"
    | "image"
    | "numberInput"
    | "toggle"
    | "form"
    | "pageBreak";

export type FormElement =
    | TextBox
    | Checkbox
    | CheckboxGroup
    | RadioGroup
    | Dropdown
    | Header
    | Paragraph
    | Divider
    | DatePicker
    | FileUpload
    | Slider
    | Image
    | NumberInput
    | Toggle
    | PageBreak;

export type ChoiceElement = CheckboxGroup | RadioGroup | Dropdown;

export type ChoiceOption = {
    id: string;
    label: string;
    value: string;
};

export type TextBox = {
    type: "textbox";
    id: string;
    label: string;
    required: boolean;
    multiline: boolean;
    placeholder?: string;
    minLength?: number;
    maxLength?: number;
};

export type Checkbox = {
    type: "checkbox";
    id: string;
    label: string;
    required: boolean;
};

export type CheckboxGroup = {
    type: "checkboxGroup";
    id: string;
    label: string;
    required: boolean;
    options: ChoiceOption[];
};

export type RadioGroup = {
    type: "radio";
    id: string;
    label: string;
    required: boolean;
    options: ChoiceOption[];
};

export type Dropdown = {
    type: "dropdown";
    id: string;
    label: string;
    required: boolean;
    options: ChoiceOption[];
};

export type Header = {
    type: "header";
    id: string;
    text: string;
    level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export type Paragraph = {
    type: "paragraph";
    id: string;
    text: string;
};

export type Divider = {
    type: "divider";
    id: string;
};

export type DatePicker = {
    type: "date";
    id: string;
    label: string;
    required: boolean;
};

export type FileUpload = {
    type: "fileUpload";
    id: string;
    label: string;
    required: boolean;
    acceptedFileTypes?: string[];
    maxFileSize?: number; // in bytes
    maxFiles?: number;
};

export type NumberInput = {
    type: "numberInput";
    id: string;
    label: string;
    required: boolean;
    min?: number;
    max?: number;
};

export type Slider = {
    type: "slider";
    id: string;
    label: string;
    required: boolean;
    min: number;
    max: number;
    step: number;
};

export type Image = {
    type: "image";
    id: string;
    src: string;
    altText?: string;
};

export type Toggle = {
    type: "toggle";
    id: string;
    label: string;
    required: boolean;
};

export type Form = {
    id: string;
    title: string;
    description?: string;
    elements: FormElement[];
    version: number;
    enddate?: string; // ISO 8601 date string
};

export type PageBreak = {
    type: "pageBreak";
    id: string;
};

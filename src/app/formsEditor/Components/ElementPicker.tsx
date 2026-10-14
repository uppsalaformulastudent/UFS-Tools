import {createCheckbox, createTextbox, createCheckboxGroup, createRadioButtonGroup, createDropdown, createDatePicker, createFileUpload, createNumberInput, createSlider, createToggle, createImage, createHeader, createParagraph, createDivider} from "@/app/backend/forms/factories";

export function ElementPicker({ onSelect }: { onSelect: (element: any) => void }) {
    const elements = [
        { name: "Textbox", create: () => createTextbox("Label", true, false, "Placeholder") },
        { name: "Checkbox", create: () => createCheckbox("Label", true) },
        { name: "Checkbox Group", create: () => createCheckboxGroup("Label", true, [{ label: "Option 1" }, { label: "Option 2" }]) },
        { name: "Radio Button Group", create: () => createRadioButtonGroup("Label", true, [{ label: "Option 1" }, { label: "Option 2" }]) },
        { name: "Dropdown", create: () => createDropdown("Label", true, [{ label: "Option 1" }, { label: "Option 2" }]) },
        { name: "Date Picker", create: () => createDatePicker("Label", true) },
        { name: "File Upload", create: () => createFileUpload("Label", true) },
        { name: "Number Input", create: () => createNumberInput("Label", true, 0, 100) },
        { name: "Slider", create: () => createSlider("Label", true, 0, 100) },
        { name: "Toggle", create: () => createToggle("Label", false) },
        { name: "Image", create: () => createImage("https://via.placeholder.com/150", "Alt Text") },
        { name: "Header", create: () => createHeader("Header Text", "h1") },
        { name: "Paragraph", create: () => createParagraph("Paragraph Text") },
        { name: "Divider", create: () => createDivider() },
    ];

    return (
        <div className="grid grid-cols-2 gap-4">
            {elements.map((element) => (
                <button
                    key={element.name}
                    onClick={() => onSelect(element.create())}
                    className="rounded border border-gray-300 p-4 text-left hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
                >
                    {element.name}
                </button>
            ))}
        </div>
    );
}

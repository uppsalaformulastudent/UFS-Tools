import { Textbox } from "@/app/backend/forms/formsComponents/Textbox";
import { Checkbox } from "@/app/backend/forms/formsComponents/Checkbox";
import { CheckboxGroup } from "@/app/backend/forms/formsComponents/CheckboxGroup";
import { RadioGroup } from "@/app/backend/forms/formsComponents/RadioGroup";
import { Dropdown } from "@/app/backend/forms/formsComponents/Dropdown";
import { DatePicker } from "@/app/backend/forms/formsComponents/DatePicker";
import { FileUpload } from "@/app/backend/forms/formsComponents/FileUpload";
import { NumberInput } from "@/app/backend/forms/formsComponents/NumberInput";
import { Slider } from "@/app/backend/forms/formsComponents/Slider";
import { Toggle } from "@/app/backend/forms/formsComponents/Toggle";
import { Image } from "@/app/backend/forms/formsComponents/Image";
import { Header } from "@/app/backend/forms/formsComponents/Header";
import { Paragraph } from "@/app/backend/forms/formsComponents/Paragraph";
import { createTextbox } from "@/app/backend/forms/factories";
import { createCheckbox } from "@/app/backend/forms/factories";
import { createCheckboxGroup } from "@/app/backend/forms/factories";
import { createRadioButtonGroup } from "@/app/backend/forms/factories";
import { createDropdown } from "@/app/backend/forms/factories";
import { createDatePicker } from "@/app/backend/forms/factories";
import { createFileUpload } from "@/app/backend/forms/factories";
import { createNumberInput } from "@/app/backend/forms/factories";
import { createSlider } from "@/app/backend/forms/factories";
import { createToggle } from "@/app/backend/forms/factories";
import { createImage } from "@/app/backend/forms/factories";
import { createHeader } from "@/app/backend/forms/factories";
import { createParagraph } from "@/app/backend/forms/factories";
import { createDivider } from "@/app/backend/forms/factories";

import { FormRenderer } from "@/app/backend/forms/formsComponents/FormRenderer";

export default function Editor() {
    const form = {
        title: "Test Form",
        description: "This is a test form.",
        elements: [
            createTextbox("Name", true, false, "Enter your name"),
            createTextbox("Message", false, true, "Enter your message"),
            createCheckbox("I agree to the terms and conditions", true),
            createDatePicker("Select your birthdate", true),
            createFileUpload("Upload your resume", true),
            createNumberInput("Enter your age", true, 0, 120),
            createSlider("Select your satisfaction level", true, 0, 10),
            createToggle("Enable notifications", false),
            createDivider(),
            createImage("https://via.placeholder.com/500", "Placeholder Image"),
            createHeader("Section 1", "h1"),
            createParagraph("This is a paragraph of text."),
        ],
    };

    const textbox = form.elements[0] as FormElement;
    const multilineTextbox = form.elements[1] as FormElement;

    return (
        <main className="mx-auto max-w-2xl space-y-6 p-8">
            <FormRenderer form={form} />
        </main>
    );
}

import type { FormElement } from "@/app/backend/forms/types";

import { Checkbox } from "@/app/backend/forms/formsComponents/Checkbox";
import { Textbox } from "@/app/backend/forms/formsComponents/Textbox";
import { DatePicker } from "@/app/backend/forms/formsComponents/DatePicker";
import { FileUpload } from "@/app/backend/forms/formsComponents/FileUpload";
import { Divider } from "@/app/backend/forms/formsComponents/Divider";
import { NumberInput } from "@/app/backend/forms/formsComponents/NumberInput";
import { Slider } from "@/app/backend/forms/formsComponents/Slider";
import { Toggle } from "@/app/backend/forms/formsComponents/Toggle";
import { Image } from "@/app/backend/forms/formsComponents/Image";
import { Header } from "@/app/backend/forms/formsComponents/Header";
import { Paragraph } from "@/app/backend/forms/formsComponents/Paragraph";

// import { RadioGroup } from "@/app/backend/forms/formsComponents/RadioGroup";
// import { CheckboxGroup } from "@/app/backend/forms/formsComponents/CheckboxGroup";
// import { Dropdown } from "@/app/backend/forms/formsComponents/Dropdown";

type Props = {
    element: FormElement;
};

export function FormElementRenderer({ element }: Props) {
    switch (element.type) {
        case "textbox":
            return <Textbox element={element} />;

        case "checkbox":
            return <Checkbox element={element} />;

        // case "checkboxGroup":
        //     return <CheckboxGroup element={element} />;
        //
        // case "radio":
        //     return <RadioButtonGroup element={element} />;
        //
        // case "dropdown":
        //     return <Dropdown element={element} />;

        case "date":
            return <DatePicker element={element} />;

        case "fileUpload":
            return <FileUpload element={element} />;

        case "numberInput":
            return <NumberInput element={element} />;

        case "slider":
            return <Slider element={element} />;

        case "toggle":
            return <Toggle element={element} />;

        case "image":
            return <Image element={element} />;

        case "header":
            return <Header element={element} />;

        case "paragraph":
            return <Paragraph element={element} />;

        case "divider":
            return <Divider element={element} />;

        case "pageBreak":
            return null;

        default:
            return null;
    }
}

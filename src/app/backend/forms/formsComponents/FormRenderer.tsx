import type { Form } from "@/src/app/backend/types";
import { FormElementRenderer } from "./FormElementRenderer";

type props = {
    form: Form;
};

/**
 * @brief Renders a form based on the provided form data.
 * @param {props} props - The props containing the form data to render.
 * @returns {JSX.Element} The rendered form.
 */
export function FormRenderer({ form }: Props) {
    return (
        <form>
            <h1>{form.title}</h1>
            <p>{form.description}</p>

            {form.elements.map((element) => (
                <FormElementRenderer
                    key={element.id}
                    element={element}
                />
            ))}

            <button type="submit">Submit</button>
        </form>
    );
}

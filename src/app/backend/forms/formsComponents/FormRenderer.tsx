import type { Form } from "@/src/app/backend/types";
import { FormElementRenderer } from "./FormElementRenderer";

type props = {
    form: Form;
};

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

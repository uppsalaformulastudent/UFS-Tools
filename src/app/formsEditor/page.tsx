import { Textbox } from "@/app/backend/forms/formsComponents/Textbox";
import { createTextbox } from "@/app/backend/forms/factories";

export default function TestPage() {
    const textbox = createTextbox(
        "Full name: ",
        true,
        false,
        "Enter your full name",
    );

    const multilineTextbox = createTextbox(
        "Why do you want to join UFS?",
        true,
        true,
        "Tell us about yourself...",
    );

    return (
        <main className="mx-auto max-w-2xl space-y-6 p-8">
            <h1 className="text-3xl font-bold">
                Form Components Test
            </h1>

            <Textbox element={textbox} />
            <Textbox element={multilineTextbox} />
        </main>
    );
}

import type { Paragraph } from "./types";

type ParagraphProps = {
    element: Paragraph;
};

export function Paragraph({ element }: ParagraphProps) {
    const { id, text } = element;

    return (
        <div>
            <p id={id}>{text}</p>
        </div>
    );
}

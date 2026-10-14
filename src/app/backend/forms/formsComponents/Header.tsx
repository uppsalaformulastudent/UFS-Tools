
import type { Header } from "./types";

type HeaderProps = {
    element: Header;
};

export function Header({ element }: HeaderProps) {
    const { id, text, level } = element;

    const Tag = level;

    return (
        <div>
            <Tag id={id} className="">
                {text}
            </Tag>
        </div>
    );
}

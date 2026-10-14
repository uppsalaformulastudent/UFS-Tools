import type { Divider as DividerType } from "../types";

type DividerProps = {
    element: DividerType;
};

export function Divider({ element }: DividerProps) {
    return (
        <hr
            id={element.id}
            className="my-4 w-full border-0 border-t border-zinc-300 dark:border-zinc-700"
        />
    );
}

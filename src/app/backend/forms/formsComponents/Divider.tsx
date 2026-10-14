import type {divider} from "./types";

type DividerProps = {
    element: divider;
};

export function Divider({ element }: DividerProps) {
    return <hr />;
}


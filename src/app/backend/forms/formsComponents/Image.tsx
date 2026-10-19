import type {Image} from "./types";

type ImageProps = {
    element: Image;
};

export function Image({ element }: ImageProps) {
    const { id, src, alt, } = element;

    return (
        <div>
            <img id={id} src={src} alt={alt} />
        </div>
    );
}

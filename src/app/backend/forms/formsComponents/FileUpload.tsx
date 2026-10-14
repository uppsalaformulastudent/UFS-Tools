import type { fileUpload } from "./types";

type FileUploadProps = {
    element: fileUpload;
};

export function FileUpload({ element }: FileUploadProps) {
    const { id, label, required } = element;

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input type="file" id={id} name={id} required={required} />
        </div>
    );
}

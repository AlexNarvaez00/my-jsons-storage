import { Label,TextInput } from "flowbite-react";
import { ChangeEvent, useId } from "react";

interface Props {
    label: string;
    error:string
    name:string
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void
}
/**
 * @param string label
 * @returns string
 */
const tranformLabel = (label:string) =>{
    let temp = label.replaceAll("_"," ").toLowerCase();
    return temp[0].toUpperCase() + temp.substring(1);
}

export default function InputJsonField({ label, error, name, handleChange }: Props) {
    const id = useId();
    const labelTrans = tranformLabel(label);
    return (
        <div>
            <div className="mb-2 block">
                <Label value={`${labelTrans}:`} htmlFor={id} />
            </div>
            <TextInput
                required
                type="text"
                id={id}
                className={`w-full`}
                placeholder={`${labelTrans}...`}
                color={`${error ? `failure`: `gray`}`}
                helperText={error}
                name={name}
                onChange={handleChange}
                autoComplete="off"
            />
        </div>
    );
}

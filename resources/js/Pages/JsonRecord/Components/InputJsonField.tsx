import TextInput from "@/Components/TextInput";
import { Label } from "flowbite-react";
import { useId } from "react";

interface Props {
    label: string;
}

const tranformLabel = (label:string) =>{
    let temp = label.replaceAll("_"," ").toLowerCase();
    return temp[0].toUpperCase() + temp.substring(1);
}

export default function InputJsonField({ label }: Props) {
    const id = useId();
    const labelTrans = tranformLabel(label);
    return (
        <div>
            <div className="mb-2 block">
                <Label value={`${labelTrans}:`} htmlFor={id} />
            </div>
            <TextInput required type="text" id={id} className={`w-full`} placeholder={`${labelTrans}...`} />
        </div>
    );
}

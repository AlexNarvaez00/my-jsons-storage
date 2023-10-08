import TextInput from "@/Components/TextInput";
import { Button, Select } from "flowbite-react";
import React  from "react";
import { JsonField } from "../Models/JsonField.model";
import { HiMinus } from "react-icons/hi";
import Error from "@/Components/Error";

interface Errors {
    type?: string;
    name?: string;
}

interface Props {
    types: string[];
    replaceFiled: Function;
    remove: Function;
    index: Number;
    jsonField: JsonField;
    error: Errors;
}

export default function RowJsonField({
    types,
    replaceFiled,
    index,
    jsonField,
    remove,
    error,
}: Props) {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        replaceFiled(index, {
            ...jsonField,
            name: event.target.value,
        });
    };

    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        replaceFiled(index, {
            ...jsonField,
            type: event.target.value,
        });
    };

    return (
        <section className="mb-2 grid grid-cols-5 gap-4 items-top">
            <div className="col-span-2">
                <TextInput
                    placeholder="Field Name"
                    required
                    type="text"
                    value={jsonField.name}
                    onChange={handleChange}
                    color={`${error.name ? `failure` : ``}`}
                    className={`w-full`}
                />
                {error.name && <Error>{error.name}</Error>}
            </div>
            <div className="col-span-2">
                <Select
                    value={jsonField.type}
                    onChange={handleSelect}
                    color={`${error.type ? `failure` : ``}`}
                >
                    {types?.map((type, index) => (
                        <option key={index}>{type}</option>
                    ))}
                </Select>
                {error.type && <Error>{error.type}</Error>}
            </div>
            <div className="cols-span-1 py-2">
                <Button size="xs" onClick={() => remove(index)}>
                    <HiMinus />
                </Button>
            </div>
        </section>
    );
}

import { Button, Select, TextInput } from "flowbite-react";
import React from "react";
import { JsonField } from "../Models/JsonField.model";
import { HiMinus } from "react-icons/hi";

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
        <section className="mb-2 flex gap-3 items-top">
            <section className="flex gap-3 grow">
                <div className="w-full">
                    <TextInput
                        placeholder="Field Name"
                        required
                        type="text"
                        value={jsonField.name}
                        onChange={handleChange}
                        color={`${error.name ? `failure` : `gray`}`}
                        className={`w-full`}
                        helperText={error.name}
                        autoComplete="off"
                    />
                </div>
                <div className="w-full">
                    <Select
                        value={jsonField.type}
                        onChange={handleSelect}
                        color={`${error.type ? `failure` : `gray`}`}
                        helperText={error.type}
                    >
                        {types?.map((type, index) => (
                            <option key={index}>{type}</option>
                        ))}
                    </Select>
                </div>
            </section>
            <div className="py-2">
                <Button
                    size="xs"
                    onClick={() => remove(index)}
                    className=""
                >
                    <HiMinus />
                </Button>
            </div>
        </section>
    );
}

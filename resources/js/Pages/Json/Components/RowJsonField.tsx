import { Button, Select, TextInput } from "flowbite-react";
import React from "react";
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
                    />
                    {error.name && <Error>{error.name}</Error>}
                </div>
                <div className="w-full">
                    <Select
                        value={jsonField.type}
                        onChange={handleSelect}
                        color={`${error.type ? `failure` : `gray`}`}
                    >
                        {types?.map((type, index) => (
                            <option key={index}>{type}</option>
                        ))}
                    </Select>
                    {error.type && <Error>{error.type}</Error>}
                </div>
            </section>
            <div className="py-2 flex">
                <Button
                    size="xs"
                    onClick={() => remove(index)}
                    className="w-full"
                >
                    <HiMinus />
                </Button>
            </div>
        </section>
    );
}

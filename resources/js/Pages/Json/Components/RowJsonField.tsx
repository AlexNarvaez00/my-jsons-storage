import TextInput from "@/Components/TextInput";
import { PageProps } from "@/types";
import { Select } from "flowbite-react";
import React, { useState } from "react";
import { JsonField } from "../Models/JsonField.model";

interface Props {
    types: string[];
    replaceFiled: Function;
    index: Number;
    jsonField: JsonField;
}

export default function RowJsonField({
    types,
    replaceFiled,
    index,
    jsonField,
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
        <div className="mb-2 flex gap-4">
            <TextInput
                placeholder="Field Name"
                required
                type="text"
                value={jsonField.name}
                onChange={handleChange}
            />
            <div className="grow">
                <Select value={jsonField.type} onChange={handleSelect}>
                    {types?.map((type, index) => (
                        <option key={index}>{type}</option>
                    ))}
                </Select>
            </div>
        </div>
    );
}

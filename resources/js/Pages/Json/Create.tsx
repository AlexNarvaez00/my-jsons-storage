import { PageProps } from "@/types";
import Layout from "../Layout";
import { Button, Label, Select } from "flowbite-react";
import TextInput from "@/Components/TextInput";
import React, { useState } from "react";
import { JsonField } from "./Models/JsonField.model";
import RowJsonField from "./Components/RowJsonField";
import { HiPlus } from "react-icons/hi";
import { AiFillSave } from "react-icons/ai";
import { useForm } from "@inertiajs/react";

interface Props extends PageProps<{ types: string[] }> {}

interface DataForm {
    name: string;
    fields: JsonField[];
}

function CreatePage({ types }: Props) {
    const { post, data, setData, errors } = useForm<DataForm>({
        name: "",
        fields: [
            {
                name: "",
                type: "",
            },
        ],
    });

    const handleChange = (index, field: JsonField) => {
        setData((prev) => {
            prev.fields[index] = field;
            return {
                name: prev.name,
                fields: prev.fields,
            };
        });
    };

    const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setData((prev) => ({
            name: prev.name,
            fields: [
                ...prev.fields,
                {
                    name: "",
                    type: "",
                },
            ],
        }));
    };

    return (
        <Layout breadcrumbs={[{ text: "all", url: route("jsons.index") }]}>
            <section className="mb-4">
                <h2 className="text-3xl">Crea a new JSON</h2>
            </section>

            <section className="mb-4">
                <form
                    onSubmit={handleSubmit}
                    className="flex max-w-md flex-col gap-4"
                >
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="name" value="Name:" />
                        </div>
                        <TextInput
                            id="name"
                            placeholder="Name...."
                            required
                            type="text"
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="name" value="Fileds:" />
                        </div>
                        {data.fields.map((field, index) => (
                            <RowJsonField
                                types={types}
                                key={index}
                                index={index}
                                replaceFiled={handleChange}
                            />
                        ))}
                    </div>
                    <div>
                        <Button type="button" onClick={handleClick} size="xs">
                            <HiPlus /> Add field
                        </Button>
                    </div>
                    <div className="flex justify-end">
                        <Button>
                            <span className="mr-2">
                                <AiFillSave className="" />
                            </span>
                            Save All
                        </Button>
                    </div>
                </form>
            </section>
        </Layout>
    );
}

export default CreatePage;

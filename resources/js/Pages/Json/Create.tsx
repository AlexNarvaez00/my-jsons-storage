import { PageProps } from "@/types";
import Layout from "../Layout";
import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { JsonField } from "./Models/JsonField.model";
import RowJsonField from "./Components/RowJsonField";
import { HiPlus } from "react-icons/hi";
import { AiFillSave } from "react-icons/ai";
import useCreateJsonStore from "./Store/useCreateJsonStore";
import { clear } from "console";

interface Props extends PageProps<{ types: string[] }> {}

function CreatePage({ types }: Props) {
    const { post, data,
        setData, errors,
        reset, clearErrors,
        processing  } = useCreateJsonStore();

    const handleChange = (index, field: JsonField) => {
        setData((prev) => {
            prev.fields[index] = field;
            return {
                name: prev.name,
                fields: prev.fields,
            };
        });
    };

    const handleRemove = (index: Number) => {
        setData((prev) => ({
            ...prev,
            fields: prev.fields.filter((field, position) => position != index),
        }));
        clearErrors();
    };

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData((prev) => ({
            name: event.target.value,
            fields: prev.fields,
        }));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        post(route("jsons.store"), {
            preserveScroll: true,
            onSuccess: () => reset()
        });
    };

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        clearErrors();
        setData((prev) => ({
            name: prev.name,
            fields: [
                ...prev.fields,
                {
                    name: "",
                    type: "String",
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
                    className="flex max-w-xl flex-col gap-4"
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
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div>
                        <section className="mb-2 block">
                            <Label htmlFor="name" value="Fileds:" />
                        </section>
                        {data.fields.map((field, index) => (
                            <RowJsonField
                                types={types}
                                key={index}
                                index={index}
                                replaceFiled={handleChange}
                                jsonField={field}
                                remove={handleRemove}
                                error={{
                                    name: errors[`fields.${index}.name`],
                                    type: errors[`fields.${index}.type`]
                                }}
                            />
                        ))}
                    </div>
                    {errors?.fields  && <span className="text-red-400">{errors.fields}</span>}
                    <div>
                        <Button type="button" onClick={handleClick} size="xs">
                            <HiPlus /> Add field
                        </Button>
                    </div>
                    <div className="flex justify-end">
                        <Button type="submit" disabled={processing}>
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

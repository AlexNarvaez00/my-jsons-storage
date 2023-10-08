import { PageProps } from "@/types";
import Layout from "../Layout";
import { JsonModel } from "../Json/Models/Json.model";
import { Label, TextInput } from "flowbite-react";
import InputJsonField from "./Components/InputJsonField";

interface Props extends PageProps<{ json: JsonModel; fields: string[] }> {}

export default function Create({ json, fields }: Props) {
    console.log(json);
    return (
        <Layout
            breadcrumbs={[
                { text: json.id, url: route("jsons.show", json.id) },
                {
                    text: "create",
                    url: route("jsons.show", json.id),
                },
            ]}
        >
            <section className="mb-4">
                <h2 className="text-3xl">Add new Record</h2>
            </section>
            <section className="mb-4">
                <form className="flex max-w-xl flex-col gap-4">
                    {fields.map((field, index) => (
                        <InputJsonField key={index} label={field} />
                    ))}
                </form>
            </section>
        </Layout>
    );
}

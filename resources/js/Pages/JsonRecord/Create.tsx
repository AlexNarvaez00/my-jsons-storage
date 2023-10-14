import { PageProps } from "@/types";
import Layout from "../Layout";
import { JsonModel } from "../Json/Models/Json.model";
import { Button } from "flowbite-react";
import InputJsonField from "./Components/InputJsonField";
import { AiFillSave } from "react-icons/ai";
import useCreateJsonRecordStore from "./Store/useCreateJsonRecordStore";

interface Props extends PageProps<{ json: JsonModel; fields: string[] }> {}

export default function Create({ json, fields }: Props) {
    const { errors, post , reset, setData, processing } = useCreateJsonRecordStore();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        post(route("jsonRecords.store",json.id),{
            onSuccess : () => reset()
        });
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setData((prev)=>({
            ...prev,
            [event.target.name]: event.target.value
        }) );
    }


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
                <form onSubmit={handleSubmit} className="flex max-w-xl flex-col gap-4">
                    {fields.map((field, index) => (
                        <InputJsonField
                            key={index}
                            label={field}
                            error={errors[field]}
                            name={field}
                            handleChange={handleChange}
                        />
                    ))}
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

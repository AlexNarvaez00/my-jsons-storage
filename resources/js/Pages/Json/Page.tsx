import { Link } from "@inertiajs/react";
import Layout from "../Layout";
import { JsonModel } from "./Models/Json.model";
import { NavigationRegisters } from "@/Types/PaginationRegisters";
import { PageProps } from "@/types";
import { Button, TextInput } from "flowbite-react";
import PaginationLinks from "@/Components/PaginationLinks";

import { useSearch } from "./Hooks/useSearch";
import { HiPlus } from "react-icons/hi";
import JsonsTable from "./Components/JsonsTable";
import EmptyRecords from "@/Components/EmptyRecords";

interface Props
    extends PageProps<{
        records: NavigationRegisters<JsonModel>;
        hasSomeRecords: boolean;
    }> {}

function JsonPage({ records, hasSomeRecords }: Props) {
    const { data, handleSubmitForm, handleChangeInputSearch } = useSearch(
        route("jsons.index"),
    );

    return (
        <Layout breadcrumbs={[{ text: "all", url: route("jsons.index") }]}>
            <section className="mb-4">
                <h2 className="text-3xl">All Json</h2>
            </section>
            <section className="mb-4 flex justify-between">
                <div className="flex container max-w-xl">
                    <form className="w-full" onSubmit={handleSubmitForm}>
                        <TextInput
                            placeholder="Search..."
                            type="text"
                            name="search"
                            onChange={handleChangeInputSearch}
                            value={data.search}
                            autoComplete="off"
                        />
                    </form>
                </div>
                <Button
                    as={Link}
                    href={route("jsons.create")}
                    sizing="sm"
                    color="blue"
                >
                    <HiPlus className={`mr-1`} />
                    Add
                </Button>
            </section>
            <section className="mb-4">
                {hasSomeRecords && <JsonsTable jsons={records.data} />}
                {!hasSomeRecords && (
                    <EmptyRecords route={route("jsons.create")} />
                )}
            </section>
            <section className="mb-4 flex justify-end">
                <PaginationLinks links={records.links} />
            </section>
        </Layout>
    );
}

export default JsonPage;

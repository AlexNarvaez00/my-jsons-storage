import { Link, useForm } from "@inertiajs/react";
import Layout from "../Layout";
import { JsonModel } from "./Models/Json.model";
import { NavigationRegisters } from "@/Types/PaginationRegisters";
import { PageProps } from "@/types";
import { Button, Table, TextInput } from "flowbite-react";
import PaginationLinks from "@/Components/PaginationLinks";
import { HiOutlineDocumentDuplicate, HiOutlineTrash, HiPlus } from "react-icons/hi";
import moment from "moment";
import { useSearch } from "./Hooks/useSearch";

interface Props
    extends PageProps<{ records: NavigationRegisters<JsonModel> }> {}

function JsonPage({ records }: Props) {
    const {data,handleSubmitForm,handleChangeInputSearch} = useSearch(route("jsons.index"));

    const handleClick =
        (url: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
            event.preventDefault();
            navigator.clipboard.writeText(url).then(() => {
                alert("ULR copiada" + url);
            });
        };

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
                            autoComplete="none"
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
                <Table>
                    <Table.Head>
                        <Table.HeadCell>Name</Table.HeadCell>
                        <Table.HeadCell>Records</Table.HeadCell>
                        <Table.HeadCell>Created At</Table.HeadCell>
                        <Table.HeadCell>URL</Table.HeadCell>
                        <Table.HeadCell></Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {records?.data.map((jsondb, index) => (
                            <Table.Row key={jsondb.id}>
                                <Table.Cell>
                                    <Link href={route("jsons.show", jsondb.id)}>
                                        {jsondb.name}
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>{jsondb.count_records}</Table.Cell>
                                <Table.Cell>
                                    {moment(jsondb.created_at, "YYYYMMDD")
                                        .startOf("hour")
                                        .fromNow()}
                                </Table.Cell>
                                <Table.Cell>
                                    <a
                                        href={route(
                                            "v1.jsons.index",
                                            jsondb.id,
                                        )}
                                        onClick={handleClick(
                                            route("v1.jsons.index", jsondb.id),
                                        )}
                                    >
                                        <HiOutlineDocumentDuplicate />
                                    </a>
                                </Table.Cell>
                                <Table.Cell>
                                    <HiOutlineTrash />
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </section>
            <section className="mb-4 flex justify-end">
                <PaginationLinks links={records.links} />
            </section>
        </Layout>
    );
}

export default JsonPage;

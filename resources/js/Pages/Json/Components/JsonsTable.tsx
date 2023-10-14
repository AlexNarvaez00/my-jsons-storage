import { Table } from "flowbite-react";
import { JsonModel } from "../Models/Json.model";
import { Link } from "@inertiajs/react";
import moment from "moment";
import { HiOutlineDocumentDuplicate, HiOutlineTrash } from "react-icons/hi";
import { toast } from "sonner";

interface Props {
    jsons: JsonModel[];
}

export default function JsonsTable({ jsons }: Props) {
    const handleClick =
        (url: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
            event.preventDefault();
            navigator.clipboard.writeText(url).then(() => {
                toast.success("Url copied successfully");
            });
        };

    return (
        <Table>
            <Table.Head>
                <Table.HeadCell>Name</Table.HeadCell>
                <Table.HeadCell>Records</Table.HeadCell>
                <Table.HeadCell>Created At</Table.HeadCell>
                <Table.HeadCell>URL</Table.HeadCell>
                <Table.HeadCell></Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
                {jsons.map((jsondb, index) => (
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
                                href={route("v1.jsons.index", jsondb.id)}
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
    );
}

import { Link } from "@inertiajs/react";
import Layout from "../Layout";
import { JsonModel } from "./Models/Json.model";
import { NavigationRegisters } from "@/Types/PaginationRegisters";
import { PageProps } from "@/types";
import { Table } from "flowbite-react";
import PaginationLinks from "@/Components/PaginationLinks";
import { HiOutlineDocumentDuplicate, HiOutlineTrash } from "react-icons/hi";

interface Props
  extends PageProps<{ records: NavigationRegisters<JsonModel> }> {}

function JsonPage({ records }: Props) {
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
              <Table.Row>
                <Table.Cell>
                  <Link href={route("jsons.show", jsondb.id)}>
                    {jsondb.name}
                  </Link>
                </Table.Cell>
                <Table.Cell>{jsondb.count_records}</Table.Cell>
                <Table.Cell>{jsondb.created_at}</Table.Cell>
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

import { PageProps } from "@/types";
import Layout from "../Layout";
import { JsonModel } from "./Models/Json.model";
import { Record } from "./Models/JsonRecord.model";
import { Button, Table } from "flowbite-react";
import { NavigationRegisters } from "@/Types/PaginationRegisters";
import PaginationLinks from "@/Components/PaginationLinks";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { Link } from "@inertiajs/react";
import moment from "moment";

interface Props extends
  PageProps<{
    json: JsonModel;
    fields: string[];
    records: NavigationRegisters<Record>;
  }> {}

function ShowPage({ json, fields, records }: Props) {
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
        <h2 className="text-3xl">
          {json.name} (
          <span className="text-gray-400">{json.id}</span>)
        </h2>
      </section>
      <section className="mb-4 flex justify-end">
        <Button
          as={Link}
          href={route("jsonRecords.create", json.id)}
          size="sm"
          color="blue"
        >
          add
        </Button>
      </section>

      <section className="mb-4">
        <Table>
          <Table.Head>
            <Table.HeadCell></Table.HeadCell>
            {fields.map((field, index) => (
              <Table.HeadCell key={index}>{field}</Table.HeadCell>
            ))}
            <Table.HeadCell>Created at</Table.HeadCell>
            <Table.HeadCell>Link</Table.HeadCell>
          </Table.Head>
          <Table.Body>
            {records.data.map((record, index) => (
              <Table.Row key={`${record.public_id}-${index}`}>
                <Table.Cell>{record.public_id}</Table.Cell>
                {fields.map((field, index) => (
                  <Table.Cell key={index}>
                    {JSON.parse(record.record)[field]}
                  </Table.Cell>
                ))}
                <Table.Cell>
                  {moment(record.created_at).startOf("hour").fromNow()}
                </Table.Cell>
                <Table.Cell>
                  <a
                    href={route("v1.jsons.show", {
                      json: json.id,
                      jsonRecordPublicId: record.public_id,
                    })}
                    onClick={handleClick(
                      route("v1.jsons.show", {
                        json: json.id,
                        jsonRecordPublicId: record.public_id,
                      }),
                    )}
                  >
                    <HiOutlineDocumentDuplicate />
                  </a>

                  {}
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

export default ShowPage;

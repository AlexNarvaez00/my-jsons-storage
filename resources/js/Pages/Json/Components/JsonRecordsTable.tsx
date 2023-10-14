import { Table } from "flowbite-react";
import moment from "moment";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { JsonModel } from "../Models/Json.model";
import { Record } from "../Models/JsonRecord.model";
import { toast } from "sonner";

interface Props {
  records: Record[];
  fields: string[];
  json: JsonModel;
}

export default function JsonRecordsTable({ records, fields, json }: Props) {
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
        <Table.HeadCell></Table.HeadCell>
        {fields.map((field, index) => (
          <Table.HeadCell key={index}>{field}</Table.HeadCell>
        ))}
        <Table.HeadCell>Created at</Table.HeadCell>
        <Table.HeadCell>Link</Table.HeadCell>
      </Table.Head>
      <Table.Body>
        {records.map((record, index) => (
          <Table.Row key={`${record.public_id}-${index}`}>
            <Table.Cell>{record.public_id}</Table.Cell>
            {fields.map((field, index) => (
              <Table.Cell key={index}>
                {JSON.parse(record.record)[field]}
              </Table.Cell>
            ))}
            <Table.Cell>
              {moment(record.created_at)
                .startOf("hour")
                .fromNow()}
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
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

import { PageProps } from "@/types";
import Layout from "../Layout";
import { JsonModel } from "./Models/Json.model";
import { Record } from "./Models/JsonRecord.model";
import { Button, TextInput } from "flowbite-react";
import { NavigationRegisters } from "@/Types/PaginationRegisters";
import PaginationLinks from "@/Components/PaginationLinks";
import { HiPlus } from "react-icons/hi";
import { Link } from "@inertiajs/react";
import { useSearch } from "./Hooks/useSearch";
import JsonRecordsTable from "./Components/JsonRecordsTable";
import EmptyRecords from "@/Components/EmptyRecords";

interface Props extends
  PageProps<{
    json: JsonModel;
    fields: string[];
    records: NavigationRegisters<Record>;
    hasSomeRecords: boolean;
  }> {}

function ShowPage({ json, fields, records, hasSomeRecords }: Props) {
  const { data, handleSubmitForm, handleChangeInputSearch } = useSearch(
    route("jsons.show", json.id),
  );
  return (
    <Layout breadcrumbs={[{ text: "all", url: route("jsons.index") }]}>
      <section className="mb-4">
        <h2 className="text-3xl">
          {json.name} (
          <span className="text-gray-400">{json.id}</span>)
        </h2>
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
          href={route("jsonRecords.create", json.id)}
          sizing="sm"
          color="blue"
        >
          <HiPlus className={`mr-1`} />
          Add
        </Button>
      </section>
      <section className="mb-4">
        {hasSomeRecords && (
          <JsonRecordsTable
            records={records.data}
            json={json}
            fields={fields}
          />
        )}
        {!hasSomeRecords && (
          <EmptyRecords route={route("jsonRecords.create", json.id)} />
        )}
      </section>
      <section className="mb-4 flex justify-end">
        <PaginationLinks links={records.links} />
      </section>
    </Layout>
  );
}

export default ShowPage;

import { Link } from "@inertiajs/react";
import { Button } from "flowbite-react";

interface Props {
    title?: string;
    route: string;
}

export default function EmptyRecords({ title = "Pleas add a new register",route }: Props) {
    return (
        <section className="w-full p-11 flex">
            <div className="m-auto">
                <h1 className="text-5xl font-bold text-gray-300">
                   {title}
                </h1>
                <div className="flex mt-5">
                    <Button
                        as={Link}
                        href={route}
                        className="mx-auto"
                        color="blue"
                    >
                        Create register
                    </Button>
                </div>
            </div>
        </section>
    );
}

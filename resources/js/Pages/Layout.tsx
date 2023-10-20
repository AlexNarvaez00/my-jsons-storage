import {
    Breadcrumb,
    DarkThemeToggle,
    Flowbite,
    Sidebar,
} from "flowbite-react";
import { Toaster } from "sonner";
import genericTheme from "./Theme";

interface Bdcrmb {
    text: string;
    url: string;
}

interface Props {
    children: React.ReactNode;
    breadcrumbs?: Bdcrmb[];
}

export default function Layout({ children, breadcrumbs }: Props) {
    return (
        <Flowbite theme={{theme:genericTheme}}>
            <Toaster richColors position="top-right" />
            <main className="flex min-h-screen dark:bg-gray-900">
                <section className="">
                    <Sidebar>
                        <Sidebar.Logo href="" img="">
                            <p>JsonDB</p>
                        </Sidebar.Logo>
                        <Sidebar.Items>
                            <Sidebar.ItemGroup title="Proyects">
                                <Sidebar.Item>All Json</Sidebar.Item>
                            </Sidebar.ItemGroup>
                            <Sidebar.ItemGroup title="Account">
                                <Sidebar.Item>
                                    <div className="flex justify-between items-center">
                                        Theme
                                        <DarkThemeToggle />
                                    </div>
                                </Sidebar.Item>
                                <Sidebar.Item>Acces</Sidebar.Item>
                            </Sidebar.ItemGroup>
                        </Sidebar.Items>
                    </Sidebar>
                </section>
                <section className="w-full shrink">
                    <Breadcrumb className="bg-gray-50 px-5 py-4 dark:bg-gray-900/50">
                        <Breadcrumb.Item>Json</Breadcrumb.Item>
                        {breadcrumbs?.map((bdcrmb, index) => (
                            <Breadcrumb.Item
                                href={bdcrmb.url}
                                key={index}
                            >
                                {bdcrmb.text}
                            </Breadcrumb.Item>
                        ))}
                    </Breadcrumb>
                    <div className="px-5 py-4 dark:bg-gray-900">{children}</div>
                </section>
            </main>
        </Flowbite>
    );
}

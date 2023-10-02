import { Breadcrumb, Navbar, Sidebar } from "flowbite-react";

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
        <main className="flex min-h-screen">
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
                            <Sidebar.Item>Acces</Sidebar.Item>
                        </Sidebar.ItemGroup>
                    </Sidebar.Items>
                </Sidebar>
            </section>
            <section className="w-full shrink">
                <Breadcrumb className="bg-gray-50 px-5 py-4 dark:bg-gray-900">
                    <Breadcrumb.Item>Json</Breadcrumb.Item>
                    {breadcrumbs?.map((bdcrmb, index) => (
                        <Breadcrumb.Item href={bdcrmb.url} key={index}>
                            {bdcrmb.text}
                        </Breadcrumb.Item>
                    ))}
                </Breadcrumb>
                <div className="px-5 py-4">{children}</div>
            </section>
        </main>
    );
}

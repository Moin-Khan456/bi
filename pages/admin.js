import Head from "next/head";
import dynamic from "next/dynamic";
import { useState } from "react";
import Header from "../components/header/Header";

const AdminSidebar = dynamic(() =>
  import("../components/admin/AdminSidebar.jsx")
);
const BlogsTable = dynamic(() => import("../components/admin/BlogsTable.jsx"));
const MailsTable = dynamic(() => import("../components/admin/MailsTable.jsx"));

export default function Admin() {
  const [selectedComponent, setSelectedComponent] = useState("Blogs");

  const handleComponentChange = (component) => {
    setSelectedComponent(component);
  };

  return (
    <>
      <Head>
        <title> Admin - Brain Inventory </title>
        <meta name="description" content="" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content=" Brain Inventory Admin – Software | Web | App Development 
"
        />
        <meta property="og:description" content="" />

        <meta property="og:url" content="https://braininventory.in/admin" />

        <link rel="canonical" href="https://braininventory.in/admin" />
      </Head>

      <main>
        <Header />
        <div className="2xl:p-10 p-8 2xl:space-y-8">
          <div className="flex justify-start items-start pt-12 gap-12">
            <AdminSidebar
              handleComponentChange={handleComponentChange}
              selectedComponent={selectedComponent}
            />

            <section className="w-full">
              {selectedComponent === "Blogs" && <BlogsTable />}
              {selectedComponent === "Mails" && <MailsTable />}
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

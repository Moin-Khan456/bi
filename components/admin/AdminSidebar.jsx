const AdminSidebar = ({ selectedComponent, handleComponentChange }) => {
  return (
    <section className="h-screen bg-base-blue-2 w-[25%] rounded border border-gray-50">
      <div className="mx-auto w-[50%] flex flex-col gap-8 pt-14">
        <div
          className={`text-center py-2 rounded font-medium border cursor-pointer ${
            selectedComponent === "Blogs" ? "bg-gray-50 text-violet-950" : ""
          }`}
          onClick={() => handleComponentChange("Blogs")}
        >
          Blogs Meta Data
        </div>
        <div
          className={`text-center py-2 rounded font-medium border cursor-pointer ${
            selectedComponent === "Mails" ? "bg-gray-50 text-violet-950" : ""
          }`}
          onClick={() => handleComponentChange("Mails")}
        >
          Mails Data
        </div>
      </div>
    </section>
  );
};

export default AdminSidebar;

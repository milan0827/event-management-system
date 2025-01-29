import AppTitle from "../app-title/AppTitle";
import RenderList from "../render-list/RenderList";
import SidebarList from "../sidebar-list/SidebarList";

const ADMIN_SIDEBAR_LIST = [
  {
    id: 1,
    label: "Manage Events",
    link: "manage-events",
  },
  {
    id: 2,
    label: "Manage users",
    link: "manage-users",
  },
];

const Sidebar = () => {
  return (
    <nav className="bg-gray-700 border-r border-zinc-400 p-2 w-[20rem] ">
      <AppTitle title="EMS" className="text-white" />
      <ul className="flex flex-col gap-1">
        <RenderList
          data={ADMIN_SIDEBAR_LIST}
          render={(list) => <SidebarList list={list} />}
        />
      </ul>
    </nav>
  );
};

export default Sidebar;

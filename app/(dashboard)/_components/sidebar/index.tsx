import { List } from "./list";
import { NewButton } from "./new-button";

export const Sidebar = () => {
  return (
    <aside className="fixed z-10 left-0 top-0 bg-black h-full w-[60px] md:w-[60px] md:flex hidden p-3 flex-col gap-y-4 text-white">
      <List />
      <NewButton />
    </aside>
  );
};

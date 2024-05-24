import { Sidebar } from "./_components/sidebar";
import { Navbar } from "./_components/navbar";
import { OrgSidebar } from "./_components/org-sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
};

const DashboardLayout = ({
  children,
}: DashboardLayoutProps) => {
  return (
    <main className="h-full flex flex-col md:flex-row">
      <Sidebar />
      <div className="flex-1 h-full md:pl-[60px]">
        <div className="flex gap-x-3 h-full">
          <OrgSidebar />
          <div className="flex-1 h-full">
            <Navbar />
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;

import {
  LayoutDashboard,
  BookOpen,
  Wallet,
  Building2,
  Users,
  Recycle,
  Handshake,
  Factory,
  BarChart3,
  TrendingUp,
  Truck,
  Package,
  X
} from "lucide-react";
import { cn } from "./ui/utils";

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "daily-book", label: "Daily Data Book", icon: BookOpen },
  { id: "rokadi", label: "Rokadi Update", icon: Wallet },
  { id: "bank", label: "Bank Account", icon: Building2 },
  { id: "labour", label: "Labour", icon: Users },
  { id: "feriwala", label: "Feriwala", icon: Recycle },

  { id: "truck-driver", label: "Truck Driver", icon: Truck },
  { id: "maal-in", label: "Maal In", icon: Package },

  { id: "kabadiwala", label: "Kabadiwala", icon: Recycle },
  { id: "partnership", label: "Partnership", icon: Handshake },
  { id: "rates-update", label: "Rates Update", icon: TrendingUp },
  { id: "business-reports", label: "Business Reports", icon: BarChart3 },
  { id: "mill", label: "Party / Mill", icon: Factory },
];

export function Sidebar({
  activeSection,
  setActiveSection,
  isSidebarOpen,
  toggleSidebar,
}) {
  return (
    <>
      {/* MOBILE OVERLAY */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black/40 md:hidden z-40"
        ></div>
      )}

      {/* SIDEBAR PANEL */}
      <aside
        className={cn(
          "fixed md:static top-0 left-0 h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 w-64 z-50 transform transition-transform duration-300",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        {/* Mobile Close Button */}
        <div className="md:hidden flex justify-end p-4">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
        </div>

        {/* NAV MENU */}
        <nav className="p-4 space-y-1 overflow-y-auto h-[calc(100%-60px)] md:h-full">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  toggleSidebar(); // close on mobile
                }}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors",
                  activeSection === item.id
                    ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                )}
              >
                <Icon className="w-5 h-5 shrink-0" />
                <span className="truncate">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
}

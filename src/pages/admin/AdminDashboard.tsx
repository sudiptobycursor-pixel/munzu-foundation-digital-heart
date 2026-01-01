import { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import { Heart, LayoutDashboard, Users, DollarSign, FileText, Image, Settings, Bell, LogOut, Menu, X, User, Mail, Calendar, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/admin/dashboard" },
  { icon: Users, label: "Volunteers", path: "/admin/volunteers" },
  { icon: DollarSign, label: "Donations", path: "/admin/donations" },
  { icon: FileText, label: "Programs", path: "/admin/programs" },
  { icon: Image, label: "Gallery", path: "/admin/gallery" },
  { icon: Mail, label: "Messages", path: "/admin/messages" },
  { icon: Bell, label: "Notifications", path: "/admin/notifications" },
  { icon: User, label: "Profile", path: "/admin/profile" },
  { icon: Settings, label: "Settings", path: "/admin/settings" },
];

const stats = [
  { label: "Total Donations", value: "৳2.5M", change: "+12%", icon: DollarSign, color: "bg-green-500" },
  { label: "Volunteers", value: "248", change: "+8%", icon: Users, color: "bg-blue-500" },
  { label: "Programs", value: "12", change: "+2", icon: FileText, color: "bg-purple-500" },
  { label: "Messages", value: "45", change: "New", icon: Mail, color: "bg-orange-500" },
];

const DashboardHome = () => (
  <div className="space-y-8">
    <div><h1 className="text-2xl font-serif font-bold text-foreground">Dashboard</h1><p className="text-muted-foreground">Welcome back, Admin</p></div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, i) => (
        <div key={i} className="admin-stat-card">
          <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center text-white`}><stat.icon className="w-6 h-6" /></div>
          <div><p className="text-2xl font-bold text-foreground">{stat.value}</p><p className="text-sm text-muted-foreground">{stat.label}</p></div>
          <span className="ml-auto text-xs text-green-600 bg-green-100 px-2 py-1 rounded">{stat.change}</span>
        </div>
      ))}
    </div>
    <div className="grid lg:grid-cols-2 gap-6">
      <div className="admin-card"><h3 className="font-semibold mb-4">Recent Donations</h3>
        {[1,2,3,4].map(i => <div key={i} className="flex justify-between py-3 border-b last:border-0"><span>Anonymous Donor</span><span className="text-primary font-medium">৳{i*500}</span></div>)}
      </div>
      <div className="admin-card"><h3 className="font-semibold mb-4">New Volunteers</h3>
        {["Rahim Ahmed", "Fatima Begum", "Kamal Hossain", "Nasreen Akter"].map((n, i) => <div key={i} className="flex items-center gap-3 py-3 border-b last:border-0"><div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium">{n[0]}</div><span>{n}</span></div>)}
      </div>
    </div>
  </div>
);

const GenericPage = ({ title }: { title: string }) => (
  <div className="space-y-6">
    <h1 className="text-2xl font-serif font-bold text-foreground">{title}</h1>
    <div className="admin-card"><p className="text-muted-foreground">Manage your {title.toLowerCase()} here. This section is ready for database integration.</p>
      <div className="mt-6 grid gap-4">{[1,2,3].map(i => <div key={i} className="p-4 bg-secondary rounded-lg flex justify-between items-center"><span>{title} Item {i}</span><Button size="sm" variant="outline">Edit</Button></div>)}</div>
    </div>
  </div>
);

const ProfilePage = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-serif font-bold">Profile</h1>
    <div className="admin-card max-w-2xl">
      <div className="flex items-center gap-4 mb-6"><div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold">A</div><div><h3 className="text-xl font-semibold">Admin User</h3><p className="text-muted-foreground">admin@munzu.org</p></div></div>
      <div className="grid gap-4"><div className="p-4 bg-secondary rounded-lg"><strong>Role:</strong> Super Admin</div><div className="p-4 bg-secondary rounded-lg"><strong>Joined:</strong> January 2024</div></div>
    </div>
  </div>
);

const SettingsPage = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-serif font-bold">Settings</h1>
    <div className="admin-card max-w-2xl space-y-4">
      {["Site Title", "Contact Email", "Phone Number"].map((label, i) => <div key={i}><label className="text-sm font-medium">{label}</label><input className="w-full mt-1 p-2 border rounded-lg" defaultValue={label === "Site Title" ? "Munzu Foundation" : ""} /></div>)}
      <Button>Save Changes</Button>
    </div>
  </div>
);

const NotificationsPage = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-serif font-bold">Notifications</h1>
    <div className="space-y-4">
      {["New donation received - ৳5,000", "New volunteer registration", "Monthly report ready", "System update completed"].map((n, i) => <div key={i} className="admin-card flex items-center gap-4"><Bell className="w-5 h-5 text-primary" /><span>{n}</span><span className="ml-auto text-xs text-muted-foreground">{i+1}h ago</span></div>)}
    </div>
  </div>
);

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("adminLoggedIn")) navigate("/admin");
  }, [navigate]);

  const handleLogout = () => { localStorage.removeItem("adminLoggedIn"); navigate("/admin"); };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-sidebar transform transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0 lg:w-20"}`}>
        <div className="p-4 flex items-center gap-3 border-b border-sidebar-border">
          <div className="w-10 h-10 bg-sidebar-primary rounded-full flex items-center justify-center"><Heart className="w-5 h-5 text-sidebar-primary-foreground" /></div>
          {sidebarOpen && <span className="font-serif font-bold text-sidebar-foreground">Munzu Admin</span>}
        </div>
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <Link key={item.path} to={item.path} className={`admin-menu-item ${location.pathname === item.path ? "active" : ""}`}>
              <item.icon className="w-5 h-5" />{sidebarOpen && <span>{item.label}</span>}
            </Link>
          ))}
          <button onClick={handleLogout} className="admin-menu-item w-full text-left text-red-400 hover:bg-red-500/10"><LogOut className="w-5 h-5" />{sidebarOpen && <span>Logout</span>}</button>
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-h-screen">
        <header className="bg-card border-b border-border p-4 flex items-center gap-4">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-secondary rounded-lg"><Menu className="w-5 h-5" /></button>
          <div className="ml-auto flex items-center gap-4">
            <button className="relative p-2 hover:bg-secondary rounded-lg"><Bell className="w-5 h-5" /><span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" /></button>
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">A</div>
          </div>
        </header>
        <main className="flex-1 p-6 overflow-auto">
          <Routes>
            <Route path="dashboard" element={<DashboardHome />} />
            <Route path="volunteers" element={<GenericPage title="Volunteers" />} />
            <Route path="donations" element={<GenericPage title="Donations" />} />
            <Route path="programs" element={<GenericPage title="Programs" />} />
            <Route path="gallery" element={<GenericPage title="Gallery" />} />
            <Route path="messages" element={<GenericPage title="Messages" />} />
            <Route path="notifications" element={<NotificationsPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;

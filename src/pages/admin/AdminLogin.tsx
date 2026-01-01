import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart, Lock, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "admin@munzu.org" && password === "admin123") {
      localStorage.setItem("adminLoggedIn", "true");
      toast({ title: "Welcome back!", description: "Login successful." });
      navigate("/admin/dashboard");
    } else {
      toast({ title: "Error", description: "Invalid credentials. Try admin@munzu.org / admin123", variant: "destructive" });
    }
  };

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-accent" />
          </div>
          <h1 className="font-serif text-3xl font-bold text-primary-foreground">Admin Panel</h1>
          <p className="text-primary-foreground/70">Munzu Foundation</p>
        </div>
        <form onSubmit={handleLogin} className="bg-card rounded-2xl p-8 shadow-2xl space-y-6">
          <div>
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="pl-10" placeholder="admin@munzu.org" required />
            </div>
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="pl-10" placeholder="••••••••" required />
            </div>
          </div>
          <Button type="submit" className="w-full" size="lg">Sign In</Button>
          <p className="text-center text-sm text-muted-foreground">Demo: admin@munzu.org / admin123</p>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;

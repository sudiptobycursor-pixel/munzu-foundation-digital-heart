import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Heart, CheckCircle, CreditCard, Smartphone, Building } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const donationAmounts = [500, 1000, 2500, 5000, 10000];

const impactItems = [
  { amount: "500", impact: "Provide school supplies for 1 child for a year" },
  { amount: "1,000", impact: "Feed a family for one month" },
  { amount: "2,500", impact: "Cover medical checkup for 10 patients" },
  { amount: "5,000", impact: "Train 1 woman in vocational skills" },
  { amount: "10,000", impact: "Support a child's entire education for a year" },
];

const paymentMethods = [
  { id: "bkash", name: "bKash", icon: Smartphone, number: "01712-345678" },
  { id: "nagad", name: "Nagad", icon: Smartphone, number: "01812-345678" },
  { id: "bank", name: "Bank Transfer", icon: Building, details: "Eastern Bank Ltd.\nA/C: 1234567890\nRouting: 115270107" },
  { id: "card", name: "Credit/Debit Card", icon: CreditCard, details: "Secure online payment" },
];

const DonatePage = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("bkash");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [donorPhone, setDonorPhone] = useState("");
  const { toast } = useToast();

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = customAmount || selectedAmount;
    toast({
      title: "Thank you for your generosity! 💚",
      description: `Your donation of ৳${amount} will help transform lives. We'll contact you shortly with payment details.`,
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container-custom relative z-10 text-center text-primary-foreground">
          <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-4 animate-fade-in-down">
            Support Our Cause
          </span>
          <h1 className="heading-display mb-6 animate-fade-in-up">
            Your <span className="text-accent">Gift</span> Changes Lives
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up delay-100">
            Every contribution, no matter the size, brings us closer to a world where everyone has the opportunity to thrive.
          </p>
        </div>
      </section>

      {/* Donation Form */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div className="card-elevated p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground">Make a Donation</h2>
                  <p className="text-muted-foreground text-sm">Choose your contribution amount</p>
                </div>
              </div>

              <form onSubmit={handleDonate} className="space-y-6">
                {/* Amount Selection */}
                <div>
                  <Label className="text-foreground font-medium mb-3 block">Select Amount (BDT)</Label>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {donationAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount("");
                        }}
                        className={`py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                          selectedAmount === amount && !customAmount
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-foreground hover:bg-primary/20"
                        }`}
                      >
                        ৳{amount.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  <Input
                    type="number"
                    placeholder="Enter custom amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    className="w-full"
                  />
                </div>

                {/* Payment Method */}
                <div>
                  <Label className="text-foreground font-medium mb-3 block">Payment Method</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {paymentMethods.map((method) => (
                      <button
                        key={method.id}
                        type="button"
                        onClick={() => setSelectedMethod(method.id)}
                        className={`p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                          selectedMethod === method.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <method.icon className={`w-5 h-5 mb-2 ${selectedMethod === method.id ? "text-primary" : "text-muted-foreground"}`} />
                        <p className="font-medium text-foreground">{method.name}</p>
                        {method.number && (
                          <p className="text-sm text-muted-foreground">{method.number}</p>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Donor Info */}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={donorEmail}
                        onChange={(e) => setDonorEmail(e.target.value)}
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={donorPhone}
                        onChange={(e) => setDonorPhone(e.target.value)}
                        placeholder="+880 1XXX-XXXXXX"
                        required
                      />
                    </div>
                  </div>
                </div>

                <Button type="submit" variant="hero" size="xl" className="w-full">
                  Complete Donation
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </form>
            </div>

            {/* Impact Info */}
            <div className="space-y-8">
              <div>
                <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                  Your Impact
                </span>
                <h2 className="heading-section text-foreground">See How Your Gift Helps</h2>
                <p className="text-muted-foreground">
                  100% of your donation goes directly to our programs. Here's what your contribution can achieve:
                </p>
              </div>

              <div className="space-y-4">
                {impactItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-secondary rounded-xl"
                  >
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">৳{item.amount}</p>
                      <p className="text-muted-foreground text-sm">{item.impact}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Transparency */}
              <div className="card-elevated p-6 bg-primary/5 border-primary/20">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                  Our Commitment to Transparency
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Registered NGO with full government approval</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Annual audited financial reports available</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Regular donor updates and impact reports</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Tax-deductible donations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways */}
      <section className="section-padding bg-secondary">
        <div className="container-custom text-center">
          <h2 className="heading-section text-foreground mb-6">Other Ways to Give</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Beyond monetary donations, there are many ways you can support our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/volunteer">
              <Button variant="outline" size="lg">
                Volunteer Your Time
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Corporate Partnerships
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DonatePage;

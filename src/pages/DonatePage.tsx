import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Heart, CheckCircle, CreditCard, Smartphone, Building } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import PageHero from "@/components/PageHero";
import heroDonateImage from "@/assets/hero-donate.jpg";

const donationAmounts = [500, 1000, 2500, 5000, 10000];

const DonatePage = () => {
  const { t } = useLanguage();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("bkash");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [donorPhone, setDonorPhone] = useState("");
  const { toast } = useToast();

  const paymentMethods = [
    { id: "bkash", name: "bKash", icon: Smartphone, number: "01712-345678" },
    { id: "nagad", name: "Nagad", icon: Smartphone, number: "01812-345678" },
    { id: "bank", name: "Bank Transfer", icon: Building, details: "Eastern Bank Ltd.\nA/C: 1234567890" },
    { id: "card", name: "Credit/Debit Card", icon: CreditCard, details: "Secure payment" },
  ];

  const impactItems = [
    { amount: "500", impact: t('donate.impact1') },
    { amount: "1,000", impact: t('donate.impact2') },
    { amount: "2,500", impact: t('donate.impact3') },
    { amount: "5,000", impact: t('donate.impact4') },
    { amount: "10,000", impact: t('donate.impact5') },
  ];

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = customAmount || selectedAmount;
    toast({
      title: t('donate.thankYou'),
      description: t('donate.thankYouDesc'),
    });
  };

  return (
    <Layout>
      {/* Hero with Background Image */}
      <PageHero
        badge={t('donate.badge')}
        title={t('donate.title')}
        titleHighlight={t('donate.titleHighlight')}
        titleEnd={t('donate.titleEnd')}
        subtitle={t('donate.subtitle')}
        backgroundImage={heroDonateImage}
      />

      {/* Donation Form */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <ScrollReveal animation="fade-right">
              <div className="card-elevated p-8 md:p-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-foreground">{t('donate.formTitle')}</h2>
                    <p className="text-muted-foreground text-sm">{t('donate.formSubtitle')}</p>
                  </div>
                </div>

                <form onSubmit={handleDonate} className="space-y-6">
                  {/* Amount Selection */}
                  <div>
                    <Label className="text-foreground font-medium mb-3 block">{t('donate.selectAmount')}</Label>
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
                      placeholder={t('donate.enterCustom')}
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
                    <Label className="text-foreground font-medium mb-3 block">{t('donate.paymentMethod')}</Label>
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
                      <Label htmlFor="name">{t('donate.yourName')}</Label>
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
                        <Label htmlFor="email">{t('donate.email')}</Label>
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
                        <Label htmlFor="phone">{t('donate.phone')}</Label>
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
                    {t('donate.completeDonation')}
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </form>
              </div>
            </ScrollReveal>

            {/* Impact Info */}
            <div className="space-y-8">
              <ScrollReveal animation="fade-left">
                <div>
                  <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                    {t('donate.impactBadge')}
                  </span>
                  <h2 className="heading-section text-foreground">{t('donate.impactTitle')}</h2>
                  <p className="text-muted-foreground">
                    {t('donate.impactSubtitle')}
                  </p>
                </div>
              </ScrollReveal>

              <div className="space-y-4">
                {impactItems.map((item, index) => (
                  <ScrollReveal key={index} animation="fade-left" delay={index * 100}>
                    <div className="flex items-start gap-4 p-4 bg-secondary rounded-xl">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                        <CheckCircle className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">৳{item.amount}</p>
                        <p className="text-muted-foreground text-sm">{item.impact}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Transparency */}
              <ScrollReveal animation="fade-up" delay={400}>
                <div className="card-elevated p-6 bg-primary/5 border-primary/20">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                    {t('donate.transparencyTitle')}
                  </h3>
                  <ul className="space-y-3">
                    {[t('donate.transparency1'), t('donate.transparency2'), t('donate.transparency3'), t('donate.transparency4')].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways */}
      <section className="section-padding bg-secondary">
        <ScrollReveal>
          <div className="container-custom text-center">
            <h2 className="heading-section text-foreground mb-6">{t('donate.otherWays')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              {t('donate.otherWaysText')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/volunteer">
                <Button variant="outline" size="lg">
                  {t('donate.volunteerTime')}
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  {t('donate.corporatePartnerships')}
                </Button>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </Layout>
  );
};

export default DonatePage;

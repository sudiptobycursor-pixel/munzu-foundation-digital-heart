import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import PageHero from "@/components/PageHero";
import heroContactImage from "@/assets/hero-contact.jpg";

const ContactPage = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.ourAddress'),
      details: ["123 Foundation Street", "Mirpur-10, Dhaka 1216", "Bangladesh"],
    },
    {
      icon: Phone,
      title: t('contact.phoneNumbers'),
      details: ["+880 1234-567890", "+880 9876-543210"],
    },
    {
      icon: Mail,
      title: t('contact.emailLabel'),
      details: ["info@munzufoundation.org", "support@munzufoundation.org"],
    },
    {
      icon: Clock,
      title: t('contact.officeHours'),
      details: ["Saturday - Thursday", "9:00 AM - 6:00 PM"],
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t('contact.messageSent'),
      description: t('contact.messageSentDesc'),
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/8801234567890", "_blank");
  };

  return (
    <Layout>
      {/* Hero with Background Image */}
      <PageHero
        badge={t('contact.badge')}
        title={t('contact.title')}
        titleHighlight={t('contact.titleHighlight')}
        subtitle={t('contact.subtitle')}
        backgroundImage={heroContactImage}
      />

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <ScrollReveal animation="fade-right">
              <div className="card-elevated p-8 md:p-12">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  {t('contact.sendMessage')}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">{t('contact.yourName')} *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">{t('contact.email')} *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">{t('contact.phone')}</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+880 1XXX-XXXXXX"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">{t('contact.subject')} *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder={t('contact.subjectPlaceholder')}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="message">{t('contact.message')} *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('contact.messagePlaceholder')}
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    {t('contact.send')}
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              </div>
            </ScrollReveal>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <ScrollReveal key={index} animation="fade-left" delay={index * 100}>
                    <div className="card-elevated p-6 h-full">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-serif font-semibold text-foreground mb-2">
                        {info.title}
                      </h4>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* WhatsApp Button */}
              <ScrollReveal animation="fade-up" delay={400}>
                <button
                  onClick={openWhatsApp}
                  className="w-full card-elevated p-6 flex items-center gap-4 bg-[#25D366]/10 border-[#25D366]/20 hover:bg-[#25D366]/20 transition-colors group"
                >
                  <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-foreground">{t('contact.chatWhatsApp')}</p>
                    <p className="text-muted-foreground text-sm">{t('contact.quickResponse')}</p>
                  </div>
                </button>
              </ScrollReveal>

              {/* Map */}
              <ScrollReveal animation="scale" delay={500}>
                <div className="rounded-2xl overflow-hidden shadow-lg h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.6289866848093!2d90.36833731498168!3d23.806921884568856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1a3cebabd21%3A0xde1a12fae3c0d0e0!2sMirpur-10!5e0!3m2!1sen!2sbd!4v1640000000000!5m2!1sen!2sbd"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;

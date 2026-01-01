import { Layout } from "@/components/layout/Layout";
import { CheckCircle, Shield, FileText } from "lucide-react";

const PrivacyPage = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 bg-primary">
        <div className="container-custom text-center text-primary-foreground">
          <h1 className="heading-display mb-6">Privacy Policy</h1>
          <p className="text-primary-foreground/80">Last updated: January 1, 2024</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <div className="card-elevated p-8 md:p-12 space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-primary" />
                  Introduction
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Munzu Foundation ("we," "us," or "our") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you interact with our website and services.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span><strong>Personal Information:</strong> Name, email, phone number, and address when you donate, volunteer, or contact us.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span><strong>Payment Information:</strong> Payment details processed securely through third-party payment providers.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span><strong>Usage Data:</strong> Anonymous data about how you use our website to improve user experience.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use your information to:
                </p>
                <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                  <li>Process donations and send receipts</li>
                  <li>Communicate about our programs and impact</li>
                  <li>Respond to inquiries and requests</li>
                  <li>Send newsletters (with your consent)</li>
                  <li>Improve our services and website</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure. All payment transactions are encrypted using SSL technology.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You have the right to access, correct, or delete your personal information. Contact us at privacy@munzufoundation.org for any privacy-related requests.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about this privacy policy, contact us at:<br />
                  Email: privacy@munzufoundation.org<br />
                  Phone: +880 1234-567890
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPage;

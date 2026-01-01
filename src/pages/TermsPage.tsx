import { Layout } from "@/components/layout/Layout";
import { CheckCircle } from "lucide-react";

const TermsPage = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 bg-primary">
        <div className="container-custom text-center text-primary-foreground">
          <h1 className="heading-display mb-6">Terms & Conditions</h1>
          <p className="text-primary-foreground/80">Last updated: January 1, 2024</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <div className="card-elevated p-8 md:p-12 space-y-8">
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using the Munzu Foundation website, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Use of Website</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span>You agree to use this website for lawful purposes only.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span>You may not use this website in any way that may damage or impair its availability.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span>All content on this website is the property of Munzu Foundation.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Donations</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All donations made through our website are:
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li>Voluntary contributions to support our charitable work</li>
                <li>Non-refundable unless made in error</li>
                <li>Used according to our stated charitable purposes</li>
                <li>Subject to our financial transparency policies</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Volunteer Agreement</h2>
              <p className="text-muted-foreground leading-relaxed">
                By registering as a volunteer, you agree to follow our volunteer guidelines, maintain confidentiality, and represent the foundation positively.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Munzu Foundation shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Legal Information</h2>
              <div className="bg-secondary rounded-xl p-6">
                <p className="text-foreground font-medium mb-2">Registration Details:</p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>Registered NGO under the Societies Registration Act</li>
                  <li>Registration Number: NGO-2015-12345</li>
                  <li>Tax Exemption Certificate: Available upon request</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these terms, contact us at legal@munzufoundation.org
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsPage;

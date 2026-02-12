'use client';

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <h1 className="text-4xl font-black text-slate-800 mb-8 tracking-tight">Terms & Conditions</h1>
      
      <div className="space-y-8 text-slate-600 font-medium leading-relaxed">
        <p className="text-lg">
          Welcome to Health Plus Innovation (“Company”, “we”, “our”, “us”).<br />
          By accessing or using our website, you agree to comply with and be bound by the following Terms & Conditions. Please read them carefully. If you do not agree with any part, you must not use our website.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <span className="h-8 w-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">1</span>
            Purpose of Website
          </h2>
          <p>
            Our website provides information about our products, services, and general pharmaceutical knowledge for educational and business purposes. We do not provide medical advice. All product information is for awareness only and should not replace consultation with a licensed healthcare professional.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <span className="h-8 w-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">2</span>
            Products & Services
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>We are engaged in marketing and distribution support for pharmaceutical brands, not direct manufacturing.</li>
            <li>All products mentioned are marketed under valid licenses and comply with applicable regulatory standards in India.</li>
            <li>Product availability and specifications are subject to change without notice.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <span className="h-8 w-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">3</span>
            Intellectual Property Rights
          </h2>
          <p>
            All content on this website — including text, images, graphics, logos, product information, and designs — is the property of Health Plus Innovation or its licensors. You may not copy, reproduce, distribute, or modify any content without our prior written permission.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <span className="h-8 w-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">4</span>
            Website Usage Restrictions
          </h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Use the website for any unlawful purpose.</li>
            <li>Distribute harmful software, spam, or malicious code.</li>
            <li>Misrepresent or misuse our brand name, products, or services.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <span className="h-8 w-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">5</span>
            Third-Party Links
          </h2>
          <p>
            Our website may contain links to third-party websites for reference or convenience. We are not responsible for the content, accuracy, or policies of these external sites.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <span className="h-8 w-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">6</span>
            Disclaimer of Liability
          </h2>
          <p>
            We make no guarantees about the completeness, accuracy, or reliability of website content. We are not liable for any loss, damage, or injury arising from the use of information or products mentioned on this site. Always consult a qualified healthcare provider before using any pharmaceutical product.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <span className="h-8 w-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">7</span>
            Regulatory Compliance
          </h2>
          <p>
            We operate under applicable Indian pharmaceutical marketing and distribution laws. Any claims related to products will be subject to Central Drugs Standard Control Organisation (CDSCO) and other relevant authorities’ regulations.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <span className="h-8 w-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">8</span>
            Privacy Policy
          </h2>
          <p>
            Your use of our website is also governed by our Privacy Policy, which explains how we collect, use, and protect your data.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <span className="h-8 w-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">9</span>
            Governing Law
          </h2>
          <p>
            These Terms & Conditions are governed by and construed in accordance with the laws of India. Any disputes will be subject to the jurisdiction of courts in Haryana/Delhi, India.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <span className="h-8 w-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">10</span>
            Changes to Terms
          </h2>
          <p>
            We reserve the right to modify these Terms & Conditions at any time. Updated versions will be posted on this page with the “Last Updated” date.
          </p>
        </section>

        <section className="pt-12 border-t border-slate-100">
          <h2 className="text-3xl font-black text-slate-800 mb-6 tracking-tight">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <p className="text-xs font-black uppercase tracking-widest text-primary">Gmail</p>
              <p className="text-slate-800 font-bold underline">innovateplushealth@gmail.com</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-black uppercase tracking-widest text-primary">Phone</p>
              <p className="text-slate-800 font-bold">+91 9266903156</p>
            </div>
            <div className="md:col-span-2 space-y-2">
              <p className="text-xs font-black uppercase tracking-widest text-primary">Corporate Address</p>
              <p className="text-slate-800 font-bold">D-4/1 1st floor okhla phase industrial area phase 2 South Delhi-110020</p>
            </div>
            <div className="md:col-span-2 space-y-2">
              <p className="text-xs font-black uppercase tracking-widest text-primary">Headquarter Address</p>
              <p className="text-slate-800 font-bold">Plot No.225, Gali No. 1, Surya Vihar Part-II, Sec-91, Faridabad- 121013, Haryana</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

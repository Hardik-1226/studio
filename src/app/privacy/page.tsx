'use client';

import { Shield, Lock, Eye, Cookie, Share2, FileText, Bell, Phone, Mail, MapPin } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <h1 className="text-4xl font-black text-slate-800 mb-4 tracking-tight">Privacy Policy</h1>
      <p className="text-lg text-slate-600 font-medium mb-12">
        Health Plus Innovation (“Company”, “we”, “our”, “us”) values your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect the data you share with us.
      </p>

      <div className="space-y-8 text-slate-600 font-medium leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <span className="h-8 w-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">
              <Eye className="h-4 w-4" />
            </span>
            1. Information We Collect
          </h2>
          <p>We may collect the following information when you use our website or contact us:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Personal Information:</strong> Name, email address, phone number, company details, and any other details you voluntarily provide.</li>
            <li><strong>Non-Personal Information:</strong> Browser type, IP address, pages visited, and time spent on our site.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <span className="h-8 w-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">
              <FileText className="h-4 w-4" />
            </span>
            2. How We Use Your Information
          </h2>
          <p>We use your information for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Responding to inquiries and providing customer support.</li>
            <li>Sharing product details, services, and company updates.</li>
            <li>Improving our website’s performance and user experience.</li>
            <li>Complying with legal and regulatory requirements.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <span className="h-8 w-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">
              <Cookie className="h-4 w-4" />
            </span>
            3. Cookies
          </h2>
          <p>
            Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, but some features may not function properly.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <span className="h-8 w-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">
              <Share2 className="h-4 w-4" />
            </span>
            4. Sharing of Information
          </h2>
          <p>We do not sell, rent, or trade your personal information. We may share it only with:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Regulatory authorities if required by law.</li>
            <li>Service providers who help operate our website and services (bound by confidentiality agreements).</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <span className="h-8 w-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">
              <Lock className="h-4 w-4" />
            </span>
            5. Data Security
          </h2>
          <p>
            We implement industry-standard security measures to protect your personal data from unauthorized access, misuse, or disclosure.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <span className="h-8 w-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">!</span>
            6. Third-Party Links
          </h2>
          <p>
            Our website may contain links to external sites. We are not responsible for the privacy practices or content of those third-party websites.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <span className="h-8 w-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">
              <Shield className="h-4 w-4" />
            </span>
            7. Your Rights
          </h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access and update your personal information.</li>
            <li>Request deletion of your data from our records.</li>
            <li>Withdraw consent for communication at any time.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <span className="h-8 w-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">
              <Bell className="h-4 w-4" />
            </span>
            8. Changes to This Privacy Policy
          </h2>
          <p>
            We may update this policy from time to time. The revised version will be posted on this page with the updated date.
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

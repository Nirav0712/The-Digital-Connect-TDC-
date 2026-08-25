import React, { useState } from 'react';
import GlowOrb from '../components/backgrounds/GlowOrb';
import AnimatedGrid from '../components/backgrounds/AnimatedGrid';
import Button from '../components/common/Button';
import { motion } from 'framer-motion';
import { MapPin, Globe2, ArrowRight, Phone, Mail, Clock, MessageSquare, CheckCircle2 } from 'lucide-react';
import SEO from '../components/seo/SEO';

const faqs = [
  {
    q: "What happens after I contact you?",
    a: "Within 24 hours (usually much faster), one of our senior executives will reach out to schedule an initial discovery call. We'll discuss your objectives, timeline, and high-level technical requirements."
  },
  {
    q: "Do you sign Non-Disclosure Agreements (NDAs)?",
    a: "Absolutely. We understand the critical nature of intellectual property and are fully prepared to execute mutual NDAs before any sensitive project details are discussed."
  },
  {
    q: "Can I hire a dedicated team or just project-based?",
    a: "We offer both models. You can engage us for a fixed-bid project, or you can hire dedicated engineers who act as a direct extension of your internal team."
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    // Mock submit
    setTimeout(() => {
      if (formData.email && formData.name) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    }, 1500);
  };

  // Structured Data specific to the Contact page
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "The Digital Connect",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91 9925843531",
        "contactType": "customer service",
        "availableLanguage": ["English", "Hindi"]
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "212 Milestone Building, Drive In Rd",
        "addressLocality": "Thaltej, Ahmedabad",
        "addressRegion": "Gujarat",
        "postalCode": "380059",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen pt-[72px] bg-brand-lavender/30 relative overflow-x-hidden w-full max-w-[100vw]">
      <SEO
        title="Contact The Digital Connect | Digital & Technology Solutions"
        description="Ready to build something amazing? Contact The Digital Connect for premium web, mobile, and custom software development services."
        schema={contactSchema}
      />

      <AnimatedGrid className="absolute inset-0 z-0 pointer-events-none" />
      <GlowOrb className="w-[300px] md:w-[800px] h-[300px] md:h-[800px] top-[5%] md:top-[10%] right-[-20%] md:right-[-10%] bg-brand-blue opacity-30 animate-blob pointer-events-none" />
      <GlowOrb className="w-[200px] md:w-[600px] h-[200px] md:h-[600px] bottom-[10%] left-[-10%] bg-brand-peach opacity-30 animate-blob pointer-events-none" style={{ animationDelay: '3s' }} />

      {/* Main Contact Section */}
      <section className="py-24 px-5 relative z-10 w-full max-w-7xl mx-auto flex-grow flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center">
            <span className="text-sm font-bold uppercase tracking-widest text-brand-cyan mb-6 block flex items-center gap-2">
              <MessageSquare size={16} /> Contact Our Team
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight leading-tight mb-8 text-brand-primary-navy">
              Let's Build Something <span className="text-brand-electric-cyan">Meaningful</span> Together.
            </h1>
            <p className="text-lg text-brand-text-muted mb-10 max-w-lg">
              Whether you're looking for a dedicated software engineering team, a robust mobile application, or a scalable SaaS product, our global experts are ready to accelerate your technical roadmap.
            </p>

            <div className="space-y-8 mt-4 bg-white p-8 rounded-3xl border border-brand-border shadow-sm">
              <h3 className="font-bold text-2xl text-brand-primary-navy mb-6 border-b border-brand-border pb-4">Our Contact Details</h3>
              <div className="flex items-start gap-4 hover:translate-x-2 transition-transform">
                <div className="bg-brand-cyan/10 p-3 rounded-xl text-brand-cyan shrink-0"><Phone size={24} /></div>
                <div>
                  <p className="text-sm font-bold text-brand-text-muted uppercase tracking-widest mb-1">Direct Call (Global)</p>
                  <a href="tel:+919925843531" className="text-2xl font-bold font-heading text-brand-primary-navy hover:text-brand-cyan transition-colors">+91 9925843531</a>
                </div>
              </div>
              <div className="flex items-start gap-4 hover:translate-x-2 transition-transform">
                <div className="bg-brand-cyan/10 p-3 rounded-xl text-brand-cyan shrink-0"><Mail size={24} /></div>
                <div>
                  <p className="text-sm font-bold text-brand-text-muted uppercase tracking-widest mb-1">Email</p>
                  <a href="mailto:info@thedigitalconnect.in" className="text-2xl font-bold font-heading text-brand-primary-navy hover:text-brand-cyan transition-colors">info@thedigitalconnect.in</a>
                </div>
              </div>
              <div className="flex items-start gap-4 hover:translate-x-2 transition-transform">
                <div className="bg-brand-cyan/10 p-3 rounded-xl text-brand-cyan shrink-0"><MapPin size={24} /></div>
                <div>
                  <p className="text-sm font-bold text-brand-text-muted uppercase tracking-widest mb-1">India Headquarters</p>
                  <p className="text-xl font-heading font-semibold text-brand-primary-navy leading-relaxed">212 Milestone Building, Drive In Rd,<br /> Thaltej, Ahmedabad, Gujarat 380059</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-border relative overflow-hidden flex flex-col justify-center">
            {status === 'success' ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center text-center py-12 z-20">
                <div className="w-24 h-24 bg-brand-cyan/10 text-brand-cyan rounded-full flex items-center justify-center mb-6 shadow-highlight">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-3xl font-heading font-extrabold mb-4 text-brand-primary-navy">Inquiry Sent!</h3>
                <p className="text-brand-text-muted text-lg mb-8 max-w-md mx-auto">Thank you for reaching out to The Digital Connect. Our technical strategy team will contact you within 24 hours.</p>
                <Button onClick={() => setStatus('idle')} className="bg-brand-primary-navy text-white hover:bg-brand-cyan">Send Another Message</Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-extrabold font-heading text-brand-primary-navy mb-2">Discuss Your Project</h3>
                  <p className="text-brand-text-muted">Fill out the form below detailing your technical requirements.</p>
                </div>

                {status === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl mb-6 font-medium text-sm">Please fill in all required fields accurately.</div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-primary-navy" htmlFor="name">Full Name *</label>
                    <input required id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 md:py-4 rounded-xl bg-brand-off-white border border-brand-border focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-primary-navy" htmlFor="company">Company</label>
                    <input id="company" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 md:py-4 rounded-xl bg-brand-off-white border border-brand-border focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none transition-all" placeholder="Acme Inc." />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-primary-navy" htmlFor="email">Email Address *</label>
                    <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 md:py-4 rounded-xl bg-brand-off-white border border-brand-border focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none transition-all" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-primary-navy" htmlFor="phone">Phone / WhatsApp</label>
                    <input id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 md:py-4 rounded-xl bg-brand-off-white border border-brand-border focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none transition-all" placeholder="+1 234 567 8900" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-primary-navy" htmlFor="service">Core Service Required</label>
                  <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 md:py-4 rounded-xl bg-brand-off-white border border-brand-border focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none transition-all appearance-none cursor-pointer">
                    <option value="">Select an engineering service...</option>
                    <option value="web">Web Application Development</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="uiux">UI/UX Interface Design</option>
                    <option value="software">Custom SaaS/Enterprise Software</option>
                    <option value="hire">Hire Dedicated Developers</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-primary-navy" htmlFor="message">Project Requirements</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full px-4 py-3 md:py-4 rounded-xl bg-brand-off-white border border-brand-border focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none transition-all resize-none" placeholder="Provide a brief overview of your business objectives..."></textarea>
                </div>

                <Button type="submit" disabled={status === 'loading'} className="w-full shadow-lg bg-brand-cyan text-brand-primary-navy hover:bg-brand-electric-cyan font-bold py-4 text-lg mt-4 h-auto">
                  {status === 'loading' ? 'Transmitting Request...' : 'Submit Business Enquiry'}
                </Button>
                <div className="text-center mt-4 text-xs font-semibold text-brand-text-muted">By submitting, you agree to our strictly enforced Privacy Policy governing data confidentiality.</div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-24 px-5 bg-white border-y border-brand-border relative z-10 w-full">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-brand-cyan font-bold tracking-widest uppercase text-sm mb-3 block">Clarifications</span>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-primary-navy">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                key={idx}
                className="bg-brand-off-white border border-brand-border p-6 md:p-8 rounded-2xl hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold font-heading text-brand-primary-navy mb-3">{faq.q}</h3>
                <p className="text-brand-text-muted leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-24 px-5 bg-[#061B2E] relative overflow-hidden text-white mt-auto">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#19B5D8]/50 via-[#061B2E] to-[#061B2E]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-heading font-black mb-6 flex items-center justify-center gap-4"><Globe2 className="text-[#19C7E8]" size={40} /> Global Operations</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">Operating seamlessly across timezones delivering unparalleled digital engineering support globally.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative max-w-5xl mx-auto">
            {[
              { city: "Ahmedabad", country: "India (HQ)", time: "IST (UTC+5:30)", address: "212 Milestone Building,\nThaltej, Ahmedabad 380059" },
              { city: "New York", country: "United States", time: "EST (UTC-5)", address: "Available strictly for\nenterprise remote engagements" },
              { city: "London", country: "United Kingdom", time: "GMT (UTC+0)", address: "Available strictly for\nenterprise remote engagements" }
            ].map((loc, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors group text-center md:text-left">
                <div className="w-12 h-12 rounded-full bg-[#19C7E8]/20 flex items-center justify-center text-[#19C7E8] mb-6 shadow-[0_0_15px_rgba(25,199,232,0.2)] mx-auto md:mx-0">
                  <MapPin size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-1">{loc.city}</h3>
                <div className="text-[#19C7E8] font-bold text-sm mb-4">{loc.country}</div>
                <div className="text-white/50 text-sm mb-6 pb-6 border-b border-white/10 flex items-center justify-center md:justify-start gap-2">
                  <Clock size={16} /> Timezone: {loc.time}
                </div>
                <div className="text-white/70 whitespace-pre-line text-sm mb-6 leading-relaxed">{loc.address}</div>
                <a href="tel:+919925843531" className="inline-flex items-center gap-2 text-sm font-bold text-[#19C7E8] group-hover:text-white transition-colors">
                  Contact Office <ArrowRight size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;

import React, { useState } from 'react';
import GlowOrb from '../components/backgrounds/GlowOrb';
import AnimatedGrid from '../components/backgrounds/AnimatedGrid';
import Button from '../components/common/Button';

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

  return (
    <div className="flex flex-col min-h-screen pt-20 bg-brand-lavender/30 relative">
      <AnimatedGrid />
      <GlowOrb className="w-[800px] h-[800px] top-[10%] right-[-10%] bg-brand-blue opacity-40 animate-blob" />
      <GlowOrb className="w-[600px] h-[600px] bottom-[10%] left-[-10%] bg-brand-peach opacity-40 animate-blob" style={{ animationDelay: '3s' }} />

      <section className="py-24 px-6 relative z-10 w-full max-w-7xl mx-auto flex-grow flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center">
            <span className="text-sm font-bold uppercase tracking-widest text-primary mb-6 block">Let's Talk</span>
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight leading-tight mb-10">
              Let's build something <span className="text-brand-purple">meaningful</span> together.
            </h1>

            <div className="space-y-8 mt-8">
              <div>
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-2">Email</p>
                <a href="mailto:hello@thedigitalconnect.com" className="text-2xl font-bold hover:text-brand-purple transition-colors">hello@thedigitalconnect.com</a>
              </div>
              <div>
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-2">Office</p>
                <p className="text-xl">123 Innovation Drive,<br />Tech Core, Suite 400</p>
              </div>
              <div>
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-2">Business Hours</p>
                <p className="text-xl">Monday - Friday<br />9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 md:p-12 rounded-[2rem] shadow-xl border border-border relative">
            {status === 'success' ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12 bg-white rounded-[2rem] z-20">
                <div className="w-20 h-20 bg-brand-mint text-primary rounded-full flex items-center justify-center mb-6">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h3 className="text-3xl font-heading font-extrabold mb-4">Inquiry Sent!</h3>
                <p className="text-muted-foreground text-lg mb-8">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                <Button onClick={() => setStatus('idle')}>Send Another Message</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold font-heading mb-8">Tell us about your project</h3>
                {status === 'error' && (
                  <div className="p-4 bg-red-50 text-red-600 rounded-xl mb-6 font-medium">Please fill in all required fields.</div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold" htmlFor="name">Full Name *</label>
                    <input required id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-brand-soft border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold" htmlFor="company">Company</label>
                    <input id="company" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-brand-soft border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Acme Inc." />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold" htmlFor="email">Email Address *</label>
                    <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-brand-soft border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold" htmlFor="phone">Phone</label>
                    <input id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-brand-soft border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold" htmlFor="service">Service Required</label>
                  <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-brand-soft border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all">
                    <option value="">Select a service...</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="uiux">UI/UX Design</option>
                    <option value="software">Custom Software</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold" htmlFor="message">Project Details</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full px-4 py-3 rounded-xl bg-brand-soft border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none" placeholder="Tell us about your goals..."></textarea>
                </div>

                <Button type="submit" disabled={status === 'loading'} className="w-full shadow-lg">
                  {status === 'loading' ? 'Sending...' : 'Send Inquiry'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;

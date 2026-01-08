import { useState } from 'react';
import { Phone, Mail, MessageCircle, MapPin, ChevronDown } from 'lucide-react';

export default function Support() {
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const faqs = [
    {
      id: 'faq-1',
      question: 'What is the waiting period for health insurance coverage?',
      answer: 'Typically, health insurance policies have a 30-day waiting period for general illnesses and a 2-4 year waiting period for pre-existing conditions. Accidental injuries are usually covered from day one. Please refer to your policy document for specific details.'
    },
    {
      id: 'faq-2',
      question: 'How long does claim processing take?',
      answer: 'Most claims are processed within 15-30 days of receiving all required documents. Emergency claims may be expedited. Cashless claims are settled directly with the hospital, often within 24-48 hours.'
    },
    {
      id: 'faq-3',
      question: 'Can I switch my policy to another insurance company?',
      answer: 'Yes, you can switch policies. However, pre-existing conditions may have waiting periods with the new provider. Some benefits like no-claim bonuses may not be transferred. Contact us for assistance with policy portability.'
    },
    {
      id: 'faq-4',
      question: 'What is not covered under health insurance?',
      answer: 'Common exclusions include cosmetic procedures, fertility treatments, dental procedures, and certain chronic conditions during waiting periods. Each policy has specific exclusions listed in the policy document.'
    },
    {
      id: 'faq-5',
      question: 'How do I increase my policy coverage?',
      answer: 'You can enhance your coverage by adding riders like critical illness cover, accident benefit, or increasing your sum insured. This can usually be done during renewal or mid-term with medical underwriting if required.'
    },
    {
      id: 'faq-6',
      question: 'What happens if I miss a premium payment?',
      answer: 'If you miss a premium payment, your policy will lapse after the grace period (usually 30 days). You can revive the policy within 2 years with the unpaid premiums. No coverage is provided during the lapsed period.'
    },
    {
      id: 'faq-7',
      question: 'Can I add family members to my existing policy?',
      answer: 'If you have an individual policy, you\'ll need to upgrade to a family floater or purchase separate policies. Family floater policies allow adding new members during renewal, subject to medical underwriting.'
    },
    {
      id: 'faq-8',
      question: 'Is there a no-claim bonus benefit?',
      answer: 'Yes, most policies offer no-claim bonuses, which increase your sum insured by 5-50% for every claim-free year. This accumulates year on year, providing increased coverage at no extra cost.'
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden py-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 left-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Support & Contact
            </span>
          </h1>
          <p className="text-xl text-gray-300">We're here to help 24/7</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-20">
          <div className="group bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-xl p-6 text-center hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
            <p className="text-gray-300">1-800-INSURE-1</p>
            <p className="text-sm text-gray-400">24/7 Available</p>
          </div>

          <div className="group bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-xl p-6 text-center hover:border-blue-400/60 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Mail className="w-12 h-12 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
            <p className="text-gray-300">support@insuranceplus.com</p>
            <p className="text-sm text-gray-400">Within 2 hours</p>
          </div>

          <div className="group bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-xl p-6 text-center hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <MessageCircle className="w-12 h-12 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold text-white mb-2">WhatsApp</h3>
            <p className="text-gray-300">+91-9876-543-210</p>
            <p className="text-sm text-gray-400">Instant Support</p>
          </div>

          <div className="group bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-xl p-6 text-center hover:border-blue-400/60 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold text-white mb-2">Office</h3>
            <p className="text-gray-300">123 Insurance Street</p>
            <p className="text-sm text-gray-400">Mon-Fri: 9 AM - 6 PM</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-white mb-8">Send Us a Message</h2>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-800 border border-cyan-400/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-800 border border-cyan-400/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-slate-800 border border-cyan-400/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="+91-9876543210"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-800 border border-cyan-400/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors h-32 resize-none"
                  placeholder="Tell us how we can help..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
              >
                Send Message
              </button>
              {submitted && (
                <div className="p-4 bg-green-500/20 border border-green-400/50 rounded-lg text-green-300 animate-fade-in">
                  Thank you! We'll get back to you soon.
                </div>
              )}
            </form>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl font-bold text-white mb-8">Business Hours</h2>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-400/30 rounded-xl p-8 space-y-4 mb-8">
              <div className="flex justify-between py-3 border-b border-cyan-400/20">
                <span className="text-gray-300">Monday - Friday</span>
                <span className="text-cyan-300 font-semibold">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between py-3 border-b border-cyan-400/20">
                <span className="text-gray-300">Saturday</span>
                <span className="text-cyan-300 font-semibold">10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-gray-300">Sunday</span>
                <span className="text-red-400 font-semibold">Closed</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Emergency Support</h3>
              <p className="text-gray-300 mb-4">For critical claim assistance and emergency queries, call our 24/7 hotline anytime.</p>
              <div className="text-2xl font-bold text-cyan-400">1-800-EMERGENCY</div>
            </div>
          </div>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                className="group bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-400/30 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/20"
                style={{
                  animation: `slideDown 0.5s ease-out forwards`,
                  animationDelay: `${index * 0.08}s`,
                  opacity: 0
                }}
              >
                <div className="p-6 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-cyan-400 transition-transform duration-300 ${
                      expandedFAQ === faq.id ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                {expandedFAQ === faq.id && (
                  <div className="px-6 pb-6 border-t border-cyan-400/20 text-gray-300 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}

import { useState, useEffect } from 'react';
import { TrendingUp, Heart, Users } from 'lucide-react';

export default function Home() {
  const [stats, setStats] = useState({ policies: 0, claims: 0, customers: 0 });

  useEffect(() => {
    const animateCounter = (end: number, duration: number = 2000) => {
      let start = 0;
      const increment = end / (duration / 16);
      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(interval);
          return end;
        }
      }, 16);
      return () => clearInterval(interval);
    };

    const timer1 = setTimeout(() => {
      let policies = 0;
      const interval1 = setInterval(() => {
        policies += 1250;
        if (policies >= 50000) {
          clearInterval(interval1);
          setStats(s => ({ ...s, policies: 50000 }));
        } else {
          setStats(s => ({ ...s, policies }));
        }
      }, 30);
    }, 500);

    const timer2 = setTimeout(() => {
      let claims = 0;
      const interval2 = setInterval(() => {
        claims += 500;
        if (claims >= 20000) {
          clearInterval(interval2);
          setStats(s => ({ ...s, claims: 20000 }));
        } else {
          setStats(s => ({ ...s, claims }));
        }
      }, 30);
    }, 800);

    const timer3 = setTimeout(() => {
      let customers = 0;
      const interval3 = setInterval(() => {
        customers += 375;
        if (customers >= 15000) {
          clearInterval(interval3);
          setStats(s => ({ ...s, customers: 15000 }));
        } else {
          setStats(s => ({ ...s, customers }));
        }
      }, 30);
    }, 1100);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-20 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Your Smart Insurance Partner
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive Health & Life Insurance Solutions with transparent policies and instant claim processing
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="group bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-8 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 transform hover:scale-105 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-4 mb-4">
              <TrendingUp className="w-12 h-12 text-cyan-400" />
              <div>
                <div className="text-4xl font-bold text-cyan-300">
                  {Math.floor(stats.policies / 1000)}k+
                </div>
                <div className="text-gray-400">Active Policies</div>
              </div>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-blue-400/30 rounded-2xl p-8 hover:border-blue-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:scale-105 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-4 mb-4">
              <Heart className="w-12 h-12 text-blue-400" />
              <div>
                <div className="text-4xl font-bold text-blue-300">
                  {Math.floor(stats.claims / 1000)}k+
                </div>
                <div className="text-gray-400">Claims Processed</div>
              </div>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-cyan-500/20 to-teal-500/20 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-8 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 transform hover:scale-105 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-4 mb-4">
              <Users className="w-12 h-12 text-cyan-400" />
              <div>
                <div className="text-4xl font-bold text-cyan-300">
                  {Math.floor(stats.customers / 1000)}k+
                </div>
                <div className="text-gray-400">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <h2 className="text-4xl font-bold text-white">Why Choose Insurance Plus?</h2>
            <ul className="space-y-4">
              {[
                'Instant claim processing and settlement',
                'Wide network of hospitals and providers',
                'Transparent policy terms and conditions',
                '24/7 customer support and assistance',
                'Competitive premiums and flexible plans',
                'Quick policy issuance and activation'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300 hover:text-cyan-300 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative h-80 animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-2xl blur-2xl"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-xl border border-cyan-400/30 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">100%</div>
                <div className="text-lg text-gray-300">Customer Satisfaction</div>
              </div>
            </div>
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
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}

import { Heart, TrendingUp, Users, Gift } from 'lucide-react';
import { useState } from 'react';

export default function Products() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const healthPlans = [
    {
      id: 'family',
      name: 'Family Floater',
      icon: Users,
      description: 'Coverage for entire family',
      features: ['Up to 5 family members', 'Cashless claims at network hospitals', 'Annual health check-up', 'Tax benefits up to 25,000']
    },
    {
      id: 'individual',
      name: 'Individual Plan',
      icon: Heart,
      description: 'Personal health protection',
      features: ['Covers self only', 'Extensive hospital network', 'No waiting period for accidents', 'Maternity benefit included']
    },
    {
      id: 'critical',
      name: 'Critical Illness',
      icon: TrendingUp,
      description: 'Protection against major illnesses',
      features: ['Coverage for 25+ critical illnesses', 'Lump sum payment on diagnosis', 'Return of premium option', 'Affordable premiums']
    },
    {
      id: 'senior',
      name: 'Senior Citizen',
      icon: Users,
      description: 'Specialized coverage for seniors',
      features: ['Age 60-75 eligible', 'Pre-existing condition coverage', 'No medical check-up', 'Wellness benefits included']
    }
  ];

  const lifePlans = [
    {
      id: 'term',
      name: 'Term Life',
      icon: TrendingUp,
      description: 'Pure life protection',
      features: ['Lowest premium rates', '10, 20, 30 year terms', 'Death benefit payout', 'Renewable till age 80']
    },
    {
      id: 'whole',
      name: 'Whole Life',
      icon: Heart,
      description: 'Lifetime coverage with benefits',
      features: ['Coverage till age 100', 'Guaranteed returns', 'Loan against policy', 'Living benefits available']
    },
    {
      id: 'child',
      name: 'Child Plans',
      icon: Gift,
      description: 'Secure your child\'s future',
      features: ['Educational benefits', 'Marriage maturity benefit', 'Parental protection', 'Flexible payout options']
    },
    {
      id: 'retirement',
      name: 'Retirement Plans',
      icon: Users,
      description: 'Secure retirement income',
      features: ['Guaranteed pension', 'Flexible retirement age', 'Lump sum or annuity', 'Spouse pension benefit']
    }
  ];

  const renderProducts = (plans: typeof healthPlans) => (
    <div className="grid md:grid-cols-2 gap-8">
      {plans.map((plan, index) => {
        const Icon = plan.icon;
        const isExpanded = expanded === plan.id;
        return (
          <div
            key={plan.id}
            onClick={() => setExpanded(isExpanded ? null : plan.id)}
            className="group bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-400/30 rounded-2xl p-8 cursor-pointer transition-all duration-500 hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-500/20"
            style={{
              animation: `fadeIn 0.6s ease-out forwards`,
              animationDelay: `${index * 0.15}s`,
              opacity: 0
            }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30 border border-cyan-400/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">{plan.name}</h3>
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                </div>
              </div>
            </div>

            <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-96' : 'max-h-0'}`}>
              <div className="pt-4 space-y-2 border-t border-cyan-400/20">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-300 animate-fade-in">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-2 rounded-lg transition-all duration-300 font-semibold">
                View Details
              </button>
              <button className="flex-1 border border-cyan-400/50 hover:border-cyan-400 text-cyan-300 hover:text-cyan-200 px-6 py-2 rounded-lg transition-all duration-300">
                Get Quote
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );

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
              Our Insurance Plans
            </span>
          </h1>
          <p className="text-xl text-gray-300">Choose the perfect plan for your needs</p>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 animate-fade-in">Health Insurance Plans</h2>
          {renderProducts(healthPlans)}
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white mb-8 animate-fade-in">Life Insurance Plans</h2>
          {renderProducts(lifePlans)}
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
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}

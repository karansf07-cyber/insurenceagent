import { useState } from 'react';
import { ChevronDown, CheckCircle, AlertCircle } from 'lucide-react';

export default function ClaimsGuide() {
  const [activeTab, setActiveTab] = useState('cashless');
  const [expandedSteps, setExpandedSteps] = useState<string[]>([]);

  const toggleStep = (stepId: string) => {
    setExpandedSteps(prev =>
      prev.includes(stepId) ? prev.filter(s => s !== stepId) : [...prev, stepId]
    );
  };

  const cashlessSteps = [
    {
      id: 'cash-1',
      title: 'Choose a Network Hospital',
      details: [
        'Visit an insurer-approved network hospital',
        'Carry your Health Insurance ID Card',
        'Bring Photo ID proof'
      ]
    },
    {
      id: 'cash-2',
      title: 'Inform the Insurer/TPA',
      details: [
        'Planned hospitalization: 48–72 hours in advance',
        'Emergency hospitalization: Within 24 hours of admission',
        'Provide patient and policy details'
      ]
    },
    {
      id: 'cash-3',
      title: 'Submit Pre-Authorization Request',
      details: [
        'Hospital submits Cashless/Pre-Authorization Form',
        'Include doctor\'s admission note and diagnosis',
        'Provide estimated treatment cost'
      ]
    },
    {
      id: 'cash-4',
      title: 'Authorization Review',
      details: [
        'Insurer/TPA reviews medical details',
        'Checks policy coverage',
        'Communicates approval status to hospital'
      ]
    },
    {
      id: 'cash-5',
      title: 'Treatment & Monitoring',
      details: [
        'Treatment proceeds as per approval',
        'Additional documents may be requested',
        'Investigation reports and progress notes provided'
      ]
    },
    {
      id: 'cash-6',
      title: 'Discharge & Settlement',
      details: [
        'Hospital submits final bills to insurer/TPA',
        'Insurer settles approved expenses directly',
        'Patient pays only non-covered expenses'
      ]
    }
  ];

  const reimbursementSteps = [
    {
      id: 'reimb-1',
      title: 'Pay Hospital Bills',
      details: [
        'Patient pays the full hospital bill at discharge',
        'Collect all original documents and receipts',
        'Keep itemized bills and prescriptions'
      ]
    },
    {
      id: 'reimb-2',
      title: 'Inform the Insurer',
      details: [
        'Notify insurer/TPA within timeline specified in policy',
        'Provide initial intimation of claim',
        'Share preliminary documents'
      ]
    },
    {
      id: 'reimb-3',
      title: 'Fill Claim Form',
      details: [
        'Complete and sign the Reimbursement Claim Form',
        'Provide accurate policy and patient details',
        'State the claim amount requested'
      ]
    },
    {
      id: 'reimb-4',
      title: 'Submit Claim Documents',
      details: [
        'Duly filled and signed claim form',
        'Health Insurance ID Card copy',
        'Photo ID proof',
        'Original hospital bills and receipts',
        'Itemized hospital bill with breakup',
        'Discharge summary from hospital',
        'Doctor\'s consultation notes and prescriptions',
        'Diagnostic test reports (lab, X-ray, MRI, etc.)',
        'Pharmacy bills with prescriptions',
        'Implant/consumables invoices if applicable'
      ]
    },
    {
      id: 'reimb-5',
      title: 'Claim Processing',
      details: [
        'Insurer verifies all documents',
        'Checks policy coverage and eligibility',
        'May request additional documents if needed',
        'Investigation of medical necessity if required'
      ]
    },
    {
      id: 'reimb-6',
      title: 'Claim Decision & Payment',
      details: [
        'Claim is approved, partially approved, or rejected',
        'Approved amount credited to bank account',
        'Claim status communicated to policyholder',
        'Appeal process available for rejected claims'
      ]
    }
  ];

  const renderSteps = (steps: typeof cashlessSteps) => (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <div
          key={step.id}
          onClick={() => toggleStep(step.id)}
          className="group bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-400/30 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/20"
          style={{
            animation: `slideDown 0.5s ease-out forwards`,
            animationDelay: `${index * 0.1}s`,
            opacity: 0
          }}
        >
          <div className="p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                {step.title}
              </h3>
            </div>
            <ChevronDown
              className={`w-5 h-5 text-cyan-400 transition-transform duration-300 ${
                expandedSteps.includes(step.id) ? 'rotate-180' : ''
              }`}
            />
          </div>

          {expandedSteps.includes(step.id) && (
            <div className="px-6 pb-6 border-t border-cyan-400/20 space-y-3 animate-fade-in">
              {step.details.map((detail, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300">{detail}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen relative overflow-hidden py-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 left-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Claims Filing Guide
            </span>
          </h1>
          <p className="text-xl text-gray-300">Step-by-step process for health insurance claims</p>
        </div>

        <div className="flex gap-4 mb-12 justify-center">
          <button
            onClick={() => setActiveTab('cashless')}
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === 'cashless'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50'
                : 'border border-cyan-400/50 text-cyan-300 hover:border-cyan-400'
            }`}
          >
            Cashless Claims
          </button>
          <button
            onClick={() => setActiveTab('reimbursement')}
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === 'reimbursement'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50'
                : 'border border-cyan-400/50 text-cyan-300 hover:border-cyan-400'
            }`}
          >
            Reimbursement Claims
          </button>
        </div>

        {activeTab === 'cashless' && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-cyan-400" />
              Cashless Claim Process
            </h2>
            {renderSteps(cashlessSteps)}
          </div>
        )}

        {activeTab === 'reimbursement' && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-cyan-400" />
              Reimbursement Claim Process
            </h2>
            {renderSteps(reimbursementSteps)}
          </div>
        )}

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-cyan-400/30 rounded-xl p-6 animate-fade-in">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-blue-400" />
              Important Timelines
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Claim submission: 7–30 days from discharge</li>
              <li>• Document clarification: Within 15-30 days</li>
              <li>• Claim approval: Within 30-45 days</li>
              <li>• Payment settlement: Within 7-10 days</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-xl p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-cyan-400" />
              Pro Tips for Claim Success
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Keep copies of all documents</li>
              <li>• Submit claims within timelines</li>
              <li>• Verify hospital network status</li>
              <li>• Ensure documents are legible</li>
            </ul>
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

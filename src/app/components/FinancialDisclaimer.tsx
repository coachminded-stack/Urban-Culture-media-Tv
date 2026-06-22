import { AlertTriangle } from 'lucide-react';

export function FinancialDisclaimer() {
  return (
    <div className="animate-fadeIn bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border border-yellow-500/40 rounded-lg p-4 mb-6">
      <div className="flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="text-yellow-500 font-semibold text-sm mb-1">Financial Disclaimer</h4>
          <p className="text-gray-300 text-xs leading-relaxed">
            <strong>Urban Culture Media TV does not provide financial advice.</strong> We are not responsible for any investment decisions or monetary losses incurred from content viewed on this platform. All financial content is for entertainment and educational purposes only. This is not financial, legal, or investment advice. Viewers should consult with licensed financial professionals before making any financial decisions. Past performance does not guarantee future results.
          </p>
        </div>
      </div>
    </div>
  );
}

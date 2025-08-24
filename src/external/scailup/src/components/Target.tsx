
import { X, Check } from 'lucide-react';

const Target = () => {
  return (
    <section className="py-24 px-4 bg-premium-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 apple-fade-in">
          Voor <span className="text-gradient">wie?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Niet voor */}
          <div className="p-6 rounded-xl border border-red-500/20 bg-red-500/5 apple-fade-in apple-stagger-2">
            <div className="flex items-center justify-center mb-4">
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                <X className="w-5 h-5 text-red-400" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Niet voor:</h3>
            <ul className="text-premium-silver/90 space-y-2 text-left">
              <li>• Quick fix zoekers</li>
              <li>• Budget-first beslissers</li>
              <li>• AI-skeptici</li>
              <li>• Eenmalige project hunters</li>
            </ul>
          </div>

          {/* Wel voor */}
          <div className="p-6 rounded-xl border border-green-500/20 bg-green-500/5 apple-fade-in apple-stagger-3">
            <div className="flex items-center justify-center mb-4">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-green-400" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Wel voor:</h3>
            <ul className="text-premium-silver/90 space-y-2 text-left">
              <li>• Visionaire founders</li>
              <li>• Innovatieve B2B bedrijven</li>
              <li>• Agency owners met ambitie</li>
              <li>• Strategische consultants</li>
            </ul>
          </div>
        </div>

        <p className="text-premium-silver/80 text-lg mt-10 italic apple-fade-in apple-stagger-4">
          "Als u op zoek bent naar partners die uw business écht begrijpen, 
          dan bent u op de juiste plek."
        </p>
      </div>
    </section>
  );
};

export default Target;

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const EmailFAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Hoe snel zie ik resultaten met jullie e-mailcampagnes?",
      answer: "De meeste klanten zien binnen 2-3 weken de eerste meetings in hun agenda. Gemiddeld duurt het 30 dagen om de volledige ROI te realiseren. Onze AI-personalisatie zorgt ervoor dat je direct hoge response rates krijgt.",
      keywords: "resultaten email marketing, roi email campagnes, snelle resultaten outbound"
    },
    {
      question: "Wat is jullie gemiddelde response rate?",
      answer: "Onze klanten behalen gemiddeld 12% response rate, met een inbox delivery rate van 85%. Dit is 10x hoger dan traditionele cold email campaigns die vaak onder de 1% blijven steken.",
      keywords: "response rate email marketing, inbox delivery rate, cold email resultaten"
    },
    {
      question: "Is jullie aanpak GDPR-compliant?",
      answer: "Absoluut. Alle e-mailcampagnes zijn volledig GDPR-compliant. We gebruiken alleen geverifieerde zakelijke contactgegevens, hanteren strict opt-out beleid en documenteren alle communicatie voor compliance doeleinden.",
      keywords: "gdpr compliant email marketing, privacy wetgeving, opt-out email marketing"
    },
    {
      question: "Hoeveel tijd kost het voor mijn team?",
      answer: "Minimale tijdsinvestering. Na de initiële onboarding (2-3 uur) hoeft jouw team alleen maar meetings te voeren. Wij doen al het andere: prospect research, e-mail schrijven, opvolging en kwalificatie.",
      keywords: "tijdsinvestering email marketing, outbound automatisering, hands-off marketing"
    },
    {
      question: "Kunnen jullie integreren met ons CRM-systeem?",
      answer: "Ja, we integreren met alle grote CRM-systemen zoals HubSpot, Salesforce, Pipedrive en 50+ andere platforms. Alle leads en meeting data worden automatisch gesynchroniseerd met jouw bestaande workflow.",
      keywords: "crm integratie email marketing, hubspot integratie, salesforce integratie"
    },
    {
      question: "Wat als we niet tevreden zijn met de resultaten?",
      answer: "We bieden een 30 dagen geld-terug-garantie. Als je niet tevreden bent met de resultaten in de eerste maand, krijg je 100% van je investering terug. We zijn zo zeker van onze aanpak dat we dit risico volledig op ons nemen.",
      keywords: "geld terug garantie, resultaatgarantie email marketing, risico vrij uitproberen"
    },
    {
      question: "Hoe werkt de AI-personalisatie precies?",
      answer: "Onze AI analyseert elke prospect op basis van hun LinkedIn profiel, bedrijfswebsite, recent nieuws en industrie-trends. Vervolgens genereert het unieke, relevante berichten die aansluiten bij hun specifieke uitdagingen en doelen. Geen templates, elke mail is uniek.",
      keywords: "ai personalisatie email, gepersonaliseerde berichten, artificial intelligence marketing"
    },
    {
      question: "Wat is het verschil met andere email marketing bureaus?",
      answer: "Wij zijn het enige bureau dat volledige AI-personalisatie combineert met een eigen database van 500k+ Nederlandse beslissers. Anderen gebruiken templates of goedkope VA's. Wij gebruiken geavanceerde AI voor échte personalisatie op schaal.",
      keywords: "verschil email marketing bureaus, ai vs templates, unieke propositie"
    }
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-black" id="faq">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[300px] bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[400px] bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-8"
              style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
            Veelgestelde Vragen
          </h2>
          <p className="text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            Alles wat je wilt weten over onze e-mailcampagne service
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(index);
            
            return (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500 overflow-hidden">
                  
                  {/* Question */}
                  <button
                    className="w-full p-6 lg:p-8 text-left flex items-center justify-between hover:bg-white/[0.02] transition-all duration-300"
                    onClick={() => toggleItem(index)}
                    aria-expanded={isOpen}
                  >
                    <h3 className="text-lg lg:text-xl font-medium text-white pr-4 leading-relaxed"
                        style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {isOpen ? (
                        <Minus className="w-6 h-6 text-white/60" />
                      ) : (
                        <Plus className="w-6 h-6 text-white/60" />
                      )}
                    </div>
                  </button>

                  {/* Answer */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                      <p className="text-white/60 leading-relaxed font-light">
                        {faq.answer}
                      </p>
                      {/* SEO keywords (hidden visually but crawlable) */}
                      <div className="sr-only" aria-label={`Keywords: ${faq.keywords}`}>
                        {faq.keywords}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-white/60 mb-8 text-lg font-light">
            Nog vragen? We beantwoorden ze graag persoonlijk.
          </p>
          <button className="bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-white/30 px-8 py-4 rounded-full font-light text-lg transition-all duration-300">
            Plan een gesprek
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default EmailFAQSection;
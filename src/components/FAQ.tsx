import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function FAQ() {
  const { t } = useLanguage();

  const faqs = [
    { q: 'faq.q1', a: 'faq.a1' },
    { q: 'faq.q2', a: 'faq.a2' },
    { q: 'faq.q3', a: 'faq.a3' },
    { q: 'faq.q4', a: 'faq.a4' },
    { q: 'faq.q5', a: 'faq.a5' },
    { q: 'faq.q6', a: 'faq.a6' },
  ];

  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-narrow">
        <span className="label-small block mb-4 text-center">{t('faq.label')}</span>
        <h2 className="heading-section mb-12 text-center">{t('faq.title')}</h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.q}
              value={`item-${index}`}
              className="border border-border rounded-xl px-6 data-[state=open]:shadow-card transition-shadow"
            >
              <AccordionTrigger className="text-left font-display text-lg font-medium hover:no-underline py-5">
                {t(faq.q)}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {t(faq.a)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

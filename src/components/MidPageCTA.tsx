import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';

interface MidPageCTAProps {
  onOpenForm: () => void;
}

export function MidPageCTA({ onOpenForm }: MidPageCTAProps) {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-12 md:py-16 bg-primary/5">
      <div
        ref={ref}
        className={`container-narrow text-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <p className="text-lg md:text-xl text-muted-foreground mb-6">
          {t('midcta.text')}
        </p>
        <Button variant="hero" size="xl" onClick={onOpenForm}>
          {t('midcta.cta')}
        </Button>
      </div>
    </section>
  );
}

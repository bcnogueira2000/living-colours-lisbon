import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

interface MidPageCTAProps {
  onOpenForm: () => void;
}

export function MidPageCTA({ onOpenForm }: MidPageCTAProps) {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-primary/5">
      <div className="container-narrow text-center">
        <p className="text-lg md:text-xl text-muted-foreground mb-6">
          {t('midcta.text')}
        </p>
        <Button variant="warm" size="xl" onClick={onOpenForm}>
          {t('hero.cta')}
        </Button>
      </div>
    </section>
  );
}

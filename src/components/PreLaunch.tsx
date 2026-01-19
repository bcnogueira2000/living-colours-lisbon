import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

interface PreLaunchProps {
  onOpenForm: () => void;
}

export function PreLaunch({ onOpenForm }: PreLaunchProps) {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-foreground text-primary-foreground">
      <div className="container-narrow text-center">
        <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-sm font-medium mb-8">
          {t('prelaunch.label')}
        </span>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-8">
          {t('prelaunch.title')}
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-6">
          {t('prelaunch.p1')}
        </p>
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
          {t('prelaunch.p2')}
        </p>
        <Button
          variant="hero"
          size="xl"
          onClick={onOpenForm}
          className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90"
        >
          {t('prelaunch.cta')}
        </Button>
      </div>
    </section>
  );
}

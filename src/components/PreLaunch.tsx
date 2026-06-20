import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { Zap } from 'lucide-react';
import { ICON_STROKE } from '@/lib/constants';

interface PreLaunchProps {
  onOpenForm: () => void;
}

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const diff = targetDate.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return timeLeft;
}

export function PreLaunch({ onOpenForm }: PreLaunchProps) {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  // October 1, 2026 for full opening
  const fullOpeningCountdown = useCountdown(new Date('2026-10-01T00:00:00'));
  // July 1, 2026 for soft launch
  const softLaunchCountdown = useCountdown(new Date('2026-07-01T00:00:00'));

  const countdownUnits = [
    { value: fullOpeningCountdown.days, labelKey: 'prelaunch.days' },
    { value: fullOpeningCountdown.hours, labelKey: 'prelaunch.hours' },
    { value: fullOpeningCountdown.minutes, labelKey: 'prelaunch.minutes' },
    { value: fullOpeningCountdown.seconds, labelKey: 'prelaunch.seconds' },
  ];

  return (
    <section className="section-padding bg-foreground bg-brand-glow text-primary-foreground">
      <div
        ref={ref}
        className={`container-narrow text-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-sm font-medium mb-8">
          {t('prelaunch.label')}
        </span>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-8">
          {t('prelaunch.title')}
        </h2>

        {/* Countdown */}
        <div className="flex justify-center gap-4 md:gap-6 mb-10">
          {countdownUnits.map((unit) => (
            <div key={unit.labelKey} className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-primary-foreground/10 flex items-center justify-center mb-2">
                <span className="font-display text-2xl md:text-3xl font-semibold">
                  {String(unit.value).padStart(2, '0')}
                </span>
              </div>
              <span className="text-xs uppercase tracking-wider text-primary-foreground/60">
                {t(unit.labelKey)}
              </span>
            </div>
          ))}
        </div>

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
          className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 mb-16"
        >
          {t('prelaunch.cta')}
        </Button>

        {/* Soft Launch Banner */}
        <div
          className={`relative overflow-hidden rounded-2xl bg-secondary/20 border border-secondary/30 p-8 md:p-10 text-left transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-secondary/30 flex items-center justify-center mt-1">
              <Zap className="w-5 h-5 text-secondary" strokeWidth={ICON_STROKE} />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="font-display text-xl md:text-2xl font-medium text-primary-foreground">
                  {t('softlaunch.title')}
                </h3>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed mb-4">
                {t('softlaunch.desc')}
              </p>
              <ul className="space-y-2 text-primary-foreground/70 text-sm mb-6">
                <li>• {t('softlaunch.bullet1')}</li>
                <li>• {t('softlaunch.bullet2')}</li>
                <li>• {t('softlaunch.bullet3')}</li>
              </ul>
              <Button
                variant="hero"
                size="lg"
                onClick={onOpenForm}
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
              >
                {t('softlaunch.cta')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

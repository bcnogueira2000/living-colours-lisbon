import { useLanguage } from '@/contexts/LanguageContext';
import { Logo } from '@/components/Logo';

export function Footer() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container-wide">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <Logo size={40} className="brightness-0 invert opacity-90" />
            </div>
            <p className="text-primary-foreground/70 text-sm">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-4">{t('footer.contact')}</h4>
            <div className="space-y-2 text-sm text-primary-foreground/70">
              <p>{t('footer.address')}</p>
              <a
                href="mailto:hello@livingcolours.pt"
                className="hover:text-primary-foreground transition-colors"
              >
                hello@livingcolours.pt
              </a>
            </div>
          </div>

          {/* Language */}
          <div>
            <h4 className="font-medium mb-4">Language</h4>
            <div className="flex gap-4 text-sm">
              <button
                onClick={() => setLanguage('en')}
                className={`transition-colors ${
                  language === 'en'
                    ? 'text-primary-foreground font-medium'
                    : 'text-primary-foreground/50 hover:text-primary-foreground/80'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('pt')}
                className={`transition-colors ${
                  language === 'pt'
                    ? 'text-primary-foreground font-medium'
                    : 'text-primary-foreground/50 hover:text-primary-foreground/80'
                }`}
              >
                Português
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Living Colours AR. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}

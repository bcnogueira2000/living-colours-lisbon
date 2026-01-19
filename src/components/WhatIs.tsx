import { useLanguage } from '@/contexts/LanguageContext';

export function WhatIs() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-narrow">
        <span className="label-small block mb-4">{t('whatis.label')}</span>
        <h2 className="heading-section mb-12">{t('whatis.title')}</h2>
        
        <div className="space-y-6">
          <p className="editorial-text">{t('whatis.p1')}</p>
          <p className="editorial-text">{t('whatis.p2')}</p>
          <p className="editorial-text">{t('whatis.p3')}</p>
        </div>
      </div>
    </section>
  );
}

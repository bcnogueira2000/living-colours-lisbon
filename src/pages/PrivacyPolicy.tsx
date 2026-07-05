import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

export default function PrivacyPolicy() {
  const { language } = useLanguage();
  const isPT = language === 'pt';

  const sections = isPT
    ? [
        { title: 'Responsável pelo tratamento', body: 'Living Colours, Avenida Almirante Reis 142, Lisboa. Email: hello@livingcolours.pt' },
        { title: 'Dados recolhidos', body: 'Nome, email, telefone, nacionalidade, preferências de quarto e motivação para a estadia — recolhidos exclusivamente através do formulário de interesse.' },
        { title: 'Finalidade', body: 'Contacto para apresentação da oferta e gestão de manifestações de interesse para residência no Living Colours.' },
        { title: 'Base legal', body: 'Consentimento explícito do titular (Artigo 6.º, n.º 1, al. a) do RGPD).' },
        { title: 'Conservação', body: 'Os dados são conservados pelo período necessário para responder ao interesse manifestado, ou até 24 meses após a última interacção.' },
        { title: 'Direitos', body: 'Pode exercer os direitos de acesso, rectificação, apagamento e oposição enviando email para hello@livingcolours.pt.' },
      ]
    : [
        { title: 'Data controller', body: 'Living Colours, Avenida Almirante Reis 142, Lisbon. Email: hello@livingcolours.pt' },
        { title: 'Data collected', body: 'Name, email, phone, nationality, room preferences and motivation for the stay — collected exclusively through the interest form.' },
        { title: 'Purpose', body: 'Contact to present our offer and manage expressions of interest for residency at Living Colours.' },
        { title: 'Legal basis', body: 'Explicit consent of the data subject (Article 6(1)(a) GDPR).' },
        { title: 'Retention', body: 'Data is retained for the period necessary to respond to the expressed interest, or up to 24 months after the last interaction.' },
        { title: 'Rights', body: 'You may exercise your rights of access, rectification, erasure and objection by emailing hello@livingcolours.pt.' },
      ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container-narrow section-padding">
        <Link
          to="/"
          className="inline-block mb-12 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          ← Living Colours
        </Link>

        <h1 className="heading-section mb-3">
          {isPT ? 'Política de Privacidade' : 'Privacy Policy'}
        </h1>
        <p className="text-sm text-muted-foreground mb-12">
          {isPT ? 'Julho 2026' : 'July 2026'}
        </p>

        <div className="space-y-8">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="font-display text-xl font-medium mb-3 text-foreground">
                {s.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{s.body}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

type Section = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  after?: string[];
};

export default function PrivacyPolicy() {
  const { language } = useLanguage();
  const isPT = language === 'pt';

  const intro = isPT
    ? 'Esta Política de Privacidade explica como o Living Colours recolhe, utiliza e protege os dados pessoais submetidos através deste website, em particular através do nosso formulário de interesse.'
    : 'This Privacy Policy explains how Living Colours collects, uses and protects personal data submitted through this website, in particular through our interest form.';

  const sections: Section[] = isPT
    ? [
        {
          title: '1. Responsável pelo Tratamento',
          paragraphs: ['O responsável pelo tratamento é:'],
          bullets: [
            'Living Colours',
            'Avenida Almirante Reis 142',
            'Lisboa, Portugal',
            'Email: hello@livingcolours.pt',
          ],
          after: [
            'Para quaisquer questões relativas a esta Política de Privacidade ou ao tratamento dos seus dados pessoais, pode contactar-nos através do email indicado acima.',
          ],
        },
        {
          title: '2. Dados Pessoais Recolhidos',
          paragraphs: ['Podemos recolher os seguintes dados pessoais quando preenche o nosso formulário de interesse ou nos contacta através do website:'],
          bullets: [
            'Nome;',
            'Endereço de email;',
            'Número de telefone;',
            'Nacionalidade;',
            'Tipo de quarto ou estadia preferido;',
            'Data prevista de entrada ou duração da estadia;',
            'Motivação para permanecer no Living Colours;',
            'Qualquer outra informação que forneça voluntariamente no formulário ou em comunicações subsequentes.',
          ],
          after: [
            'Não recolhemos intencionalmente categorias especiais de dados pessoais, como dados de saúde, convicções religiosas, opiniões políticas ou informação sensível semelhante. Por favor não inclua tal informação no formulário salvo se for estritamente necessário.',
          ],
        },
        {
          title: '3. Finalidades do Tratamento',
          paragraphs: ['Tratamos os seus dados pessoais para as seguintes finalidades:'],
          bullets: [
            'Responder ao seu pedido ou manifestação de interesse;',
            'Apresentar informação sobre o Living Colours, quartos disponíveis, preços, serviços e condições;',
            'Avaliar se a nossa oferta de alojamento é adequada à estadia pretendida;',
            'Gerir comunicações de acompanhamento sobre a sua potencial residência;',
            'Manter um registo interno de pedidos e potenciais residentes;',
            'Cumprir obrigações legais aplicáveis, quando relevante.',
          ],
          after: [
            'Não utilizaremos os seus dados para finalidades não relacionadas sem o informar e, quando exigido, sem obter o seu consentimento.',
          ],
        },
        {
          title: '4. Base Legal',
          paragraphs: ['A base legal para o tratamento dos seus dados pessoais é:'],
          bullets: [
            'O seu consentimento, quando submete voluntariamente o formulário de interesse ou nos contacta;',
            'Diligências pré-contratuais a seu pedido, quando o seu pedido diz respeito a uma potencial estadia ou reserva no Living Colours;',
            'Interesse legítimo, quando necessário para a gestão interna de pedidos, desde que os seus direitos e interesses não prevaleçam sobre esse interesse;',
            'Obrigação legal, quando somos obrigados a conservar ou tratar determinados dados ao abrigo da lei aplicável.',
          ],
          after: [
            'Quando o tratamento se baseia no consentimento, pode retirá-lo a qualquer momento contactando-nos através de hello@livingcolours.pt. A retirada do consentimento não afecta a licitude do tratamento efectuado antes da mesma.',
          ],
        },
        {
          title: '5. Partilha de Dados e Subcontratantes',
          paragraphs: [
            'Os seus dados pessoais poderão ser acedidos por membros autorizados da equipa Living Colours que deles necessitem para responder ao seu pedido ou gerir a sua potencial residência.',
            'Poderemos também recorrer a prestadores de serviços terceiros de confiança, actuando como subcontratantes, para apoiar o funcionamento do website, formulários, comunicações por email, alojamento, ferramentas de CRM, analítica ou outros sistemas administrativos.',
            'Estes prestadores apenas podem tratar dados pessoais de acordo com as nossas instruções e devem implementar medidas adequadas de segurança e confidencialidade.',
            'Não vendemos os seus dados pessoais.',
          ],
        },
        {
          title: '6. Transferências Internacionais',
          paragraphs: [
            'Alguns dos prestadores tecnológicos utilizados para operar o website ou gerir comunicações poderão tratar dados fora do Espaço Económico Europeu.',
            'Nesse caso, procuraremos assegurar a existência de garantias adequadas, tais como decisões de adequação, cláusulas contratuais-tipo ou outros mecanismos lícitos de transferência ao abrigo do RGPD.',
          ],
        },
        {
          title: '7. Conservação dos Dados',
          paragraphs: [
            'Conservamos os dados pessoais apenas pelo período necessário para as finalidades descritas nesta Política de Privacidade.',
            'Em geral, os dados submetidos através do formulário de interesse serão conservados pelo período necessário para responder ao seu pedido e gerir a sua manifestação de interesse, podendo ser conservados até 24 meses após a última interacção, salvo se um período mais longo for exigido por lei ou justificado por uma relação contratual subsequente.',
            'Caso o seu pedido conduza a uma reserva ou contrato de residência, poderão aplicar-se períodos adicionais de conservação, que serão comunicados separadamente quando relevante.',
          ],
        },
        {
          title: '8. Os Seus Direitos',
          paragraphs: ['Ao abrigo do RGPD, pode ter o direito de:'],
          bullets: [
            'Aceder aos seus dados pessoais;',
            'Solicitar a rectificação de dados inexactos ou incompletos;',
            'Solicitar o apagamento dos seus dados pessoais;',
            'Solicitar a limitação do tratamento;',
            'Opor-se a determinadas actividades de tratamento;',
            'Solicitar a portabilidade dos dados, quando aplicável;',
            'Retirar o consentimento, quando o tratamento se baseie no mesmo;',
            'Apresentar reclamação junto de uma autoridade de controlo.',
          ],
          after: [
            'Para exercer os seus direitos, por favor contacte-nos através de hello@livingcolours.pt.',
            'Tem também o direito de apresentar reclamação junto da autoridade portuguesa de protecção de dados:',
            'Comissão Nacional de Proteção de Dados — CNPD\nWebsite: www.cnpd.pt\nEmail: geral@cnpd.pt',
          ],
        },
        {
          title: '9. Segurança',
          paragraphs: [
            'Adoptamos medidas técnicas e organizativas razoáveis para proteger os dados pessoais contra acesso não autorizado, perda, uso indevido, alteração ou divulgação.',
            'Contudo, nenhum website ou sistema de comunicação electrónica é totalmente seguro. Deve ter cuidado ao partilhar dados pessoais online.',
          ],
        },
        {
          title: '10. Cookies e Analítica',
          paragraphs: [
            'O nosso website pode utilizar cookies ou tecnologias semelhantes para assegurar o seu correcto funcionamento, melhorar a experiência do utilizador e, quando aplicável, analisar o tráfego do site.',
            'Quando legalmente exigido, cookies não essenciais apenas serão utilizados com o seu consentimento. Informação mais detalhada poderá ser disponibilizada numa Política de Cookies separada ou num banner de cookies.',
          ],
        },
        {
          title: '11. Actualizações a esta Política de Privacidade',
          paragraphs: [
            'Podemos actualizar esta Política de Privacidade periodicamente para reflectir alterações ao nosso website, serviços, requisitos legais ou práticas de tratamento de dados.',
            'A versão mais recente estará sempre disponível neste website, com a data da última actualização indicada acima.',
          ],
        },
      ]
    : [
        {
          title: '1. Data Controller',
          paragraphs: ['The data controller is:'],
          bullets: [
            'Living Colours',
            'Avenida Almirante Reis 142',
            'Lisbon, Portugal',
            'Email: hello@livingcolours.pt',
          ],
          after: [
            'For any questions regarding this Privacy Policy or the processing of your personal data, you may contact us at the email address above.',
          ],
        },
        {
          title: '2. Personal Data We Collect',
          paragraphs: ['We may collect the following personal data when you complete our interest form or contact us through the website:'],
          bullets: [
            'Name;',
            'Email address;',
            'Phone number;',
            'Nationality;',
            'Preferred type of room or stay;',
            'Expected move-in date or length of stay;',
            'Motivation for staying at Living Colours;',
            'Any other information you voluntarily provide in the form or in subsequent communications.',
          ],
          after: [
            'We do not intentionally collect special categories of personal data, such as health data, religious beliefs, political opinions or similar sensitive information. Please do not include such information in the form unless strictly necessary.',
          ],
        },
        {
          title: '3. Purposes of Processing',
          paragraphs: ['We process your personal data for the following purposes:'],
          bullets: [
            'To respond to your request or expression of interest;',
            'To present information about Living Colours, available rooms, pricing, services and conditions;',
            'To assess whether our accommodation offer is suitable for your intended stay;',
            'To manage follow-up communications regarding your potential residency;',
            'To maintain an internal record of enquiries and prospective residents;',
            'To comply with applicable legal obligations, where relevant.',
          ],
          after: [
            'We will not use your data for unrelated purposes without informing you and, where required, obtaining your consent.',
          ],
        },
        {
          title: '4. Legal Basis',
          paragraphs: ['The legal basis for processing your personal data is:'],
          bullets: [
            'Your consent, when you voluntarily submit the interest form or contact us;',
            'Pre-contractual steps at your request, where your enquiry relates to a potential stay or reservation at Living Colours;',
            'Legitimate interest, where necessary for the internal management of enquiries, provided that your rights and interests do not override such interest;',
            'Legal obligation, where we are required to retain or process certain data under applicable law.',
          ],
          after: [
            'Where processing is based on consent, you may withdraw your consent at any time by contacting us at hello@livingcolours.pt. Withdrawal of consent does not affect the lawfulness of processing carried out before withdrawal.',
          ],
        },
        {
          title: '5. Data Sharing and Processors',
          paragraphs: [
            'Your personal data may be accessed by authorised members of the Living Colours team who need it to respond to your enquiry or manage your potential residency.',
            'We may also use trusted third-party service providers, acting as processors, to support the operation of the website, forms, email communications, hosting, CRM tools, analytics or other administrative systems.',
            'These providers may only process personal data according to our instructions and must implement appropriate security and confidentiality measures.',
            'We do not sell your personal data.',
          ],
        },
        {
          title: '6. International Transfers',
          paragraphs: [
            'Some of the technology providers used to operate the website or manage communications may process data outside the European Economic Area.',
            'Where this occurs, we will seek to ensure that appropriate safeguards are in place, such as adequacy decisions, standard contractual clauses or other lawful transfer mechanisms under the GDPR.',
          ],
        },
        {
          title: '7. Data Retention',
          paragraphs: [
            'We retain personal data only for as long as necessary for the purposes described in this Privacy Policy.',
            'In general, data submitted through the interest form will be retained for the period necessary to respond to your enquiry and manage your expression of interest, and may be retained for up to 24 months after the last interaction, unless a longer retention period is required by law or justified by a subsequent contractual relationship.',
            'If your enquiry leads to a reservation or residency agreement, additional data retention periods may apply and will be communicated separately where relevant.',
          ],
        },
        {
          title: '8. Your Rights',
          paragraphs: ['Under the GDPR, you may have the right to:'],
          bullets: [
            'Access your personal data;',
            'Request correction of inaccurate or incomplete data;',
            'Request deletion of your personal data;',
            'Request restriction of processing;',
            'Object to certain processing activities;',
            'Request data portability, where applicable;',
            'Withdraw consent, where processing is based on consent;',
            'Lodge a complaint with a supervisory authority.',
          ],
          after: [
            'To exercise your rights, please contact us at hello@livingcolours.pt.',
            'You also have the right to lodge a complaint with the Portuguese Data Protection Authority:',
            'Comissão Nacional de Proteção de Dados — CNPD\nWebsite: www.cnpd.pt\nEmail: geral@cnpd.pt',
          ],
        },
        {
          title: '9. Security',
          paragraphs: [
            'We take reasonable technical and organisational measures to protect personal data against unauthorised access, loss, misuse, alteration or disclosure.',
            'However, no website or electronic communication system is completely secure. You should take care when sharing personal data online.',
          ],
        },
        {
          title: '10. Cookies and Analytics',
          paragraphs: [
            'Our website may use cookies or similar technologies to ensure its proper functioning, improve user experience and, where applicable, analyse website traffic.',
            'Where legally required, non-essential cookies will only be used with your consent. More detailed information may be provided in a separate Cookie Policy or cookie banner.',
          ],
        },
        {
          title: '11. Updates to This Privacy Policy',
          paragraphs: [
            'We may update this Privacy Policy from time to time to reflect changes in our website, services, legal requirements or data processing practices.',
            'The latest version will always be available on this website, with the date of the last update indicated above.',
          ],
        },
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
          {isPT ? 'Última actualização: Julho 2026' : 'Last updated: July 2026'}
        </p>

        <p className="text-muted-foreground leading-relaxed mb-12">{intro}</p>

        <div className="space-y-8">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="font-display text-xl font-medium mb-3 text-foreground">
                {s.title}
              </h2>
              {s.paragraphs?.map((p, i) => (
                <p key={`p-${i}`} className="text-muted-foreground leading-relaxed mb-3 whitespace-pre-line">
                  {p}
                </p>
              ))}
              {s.bullets && (
                <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground leading-relaxed mb-3">
                  {s.bullets.map((b, i) => (
                    <li key={`b-${i}`}>{b}</li>
                  ))}
                </ul>
              )}
              {s.after?.map((p, i) => (
                <p key={`a-${i}`} className="text-muted-foreground leading-relaxed mb-3 whitespace-pre-line">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
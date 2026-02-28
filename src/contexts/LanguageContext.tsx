import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.rooms': 'Rooms',
    'nav.spaces': 'Spaces',
    'nav.location': 'Location',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.eyebrow': 'Opening September · Lisbon',
    'hero.softlaunch': 'Soft launch April — limited rooms with early-bird discount',
    'hero.headline': 'A new boutique coliving opening in Lisbon this September',
    'hero.subheadline': 'A thoughtfully designed home for people in mobility — combining privacy, community, and design in a central Lisbon location.',
    'hero.cta': "I'm interested",
    'hero.learnMore': 'Learn more',
    
    // Mid-page CTA
    'midcta.text': 'Interested in joining us? We\'re now collecting expressions of interest for September.',
    'midcta.cta': 'Reserve your spot',
    
    // What is
    'whatis.label': 'The Concept',
    'whatis.title': 'What is Living Colours AR?',
    'whatis.intro': 'We are creating a boutique coliving residence — a thoughtfully designed home for people in transition. Not a hotel, not a hostel, not a student dormitory. A place to truly live.',
    'whatis.pillar1.title': 'A Real Home',
    'whatis.pillar2.title': 'Quality Without Compromise',
    'whatis.pillar3.title': 'Community by Design',
    'whatis.p1': 'We are creating a boutique coliving residence — a thoughtfully designed home for people in transition. Not a hotel, not a hostel, not a student dormitory. A place to truly live.',
    'whatis.p2': 'We believe temporary living should not mean temporary quality. Every detail — from the furniture to the community — is considered to create a sense of belonging, even if your stay is measured in months.',
    'whatis.p3': 'Private spaces with shared values. Considered design at accessible prices. A community that feels like home.',
    
    // Who it's for
    'who.label': 'Our Residents',
    'who.title': 'Who is it for?',
    'who.intro': 'Living Colours AR welcomes those who share our values: curiosity, respect, and the desire to live well, wherever life takes them.',
    'who.student.title': 'Students in Mobility',
    'who.student.desc': 'Pursuing studies abroad with a need for stability and focus.',
    'who.professional.title': 'Young Professionals',
    'who.professional.desc': 'Starting a new chapter in Lisbon, seeking quality without long-term commitment.',
    'who.nomad.title': 'Digital Nomads',
    'who.nomad.desc': 'Working remotely while exploring what Lisbon has to offer.',
    'who.relocating.title': 'People Relocating',
    'who.relocating.desc': 'Settling into the city while searching for their permanent home.',
    
    // What's included
    'included.label': 'Living Here',
    'included.title': 'What\'s included',
    'included.intro': 'Everything you need for a comfortable, productive, and connected life.',
    'included.rooms': 'Fully Furnished Rooms',
    'included.rooms.desc': 'Thoughtfully designed private spaces with quality furniture, linens, and storage.',
    'included.kitchen': 'Shared Kitchens',
    'included.kitchen.desc': 'Well-equipped kitchens on every floor for daily cooking and shared meals.',
    'included.cleaning': 'Regular Cleaning',
    'included.cleaning.desc': 'Weekly cleaning of your room and daily maintenance of common areas.',
    'included.cowork': 'Cowork & Lounge',
    'included.cowork.desc': 'Dedicated spaces to work, meet, and relax with reliable high-speed internet.',
    'included.events': 'Community Events',
    'included.events.desc': 'Regular gatherings, dinners, and activities to connect with fellow residents.',
    'included.management': 'On-site Management',
    'included.management.desc': 'A dedicated team to support you and maintain the quality of life here.',
    
    // Rooms
    'rooms.label': 'Room Types',
    'rooms.title': 'Find your space',
    'rooms.intro': 'Five room categories designed to suit different needs and preferences. All rooms are private, fully furnished, and include utilities.',
    'rooms.smart': 'Smart',
    'rooms.smart.desc': 'Compact and clever. Perfect for those who value efficiency and spend their days exploring the city.',
    'rooms.standard': 'Standard',
    'rooms.standard.desc': 'The perfect balance of comfort and value. A well-designed space that feels like home.',
    'rooms.premium': 'Premium',
    'rooms.premium.desc': 'Extra space, extra light. For those who want a bit more room to breathe.',
    'rooms.suite': 'Suite',
    'rooms.suite.desc': 'Generous proportions with enhanced amenities. Where comfort meets sophistication.',
    'rooms.master': 'Master Suite',
    'rooms.master.desc': 'Our finest rooms. Exceptional space, premium finishes, and the best views in the building.',
    'rooms.from': 'From',
    'rooms.month': '/month',
    'rooms.learnMore': 'Learn more',
    'rooms.privateBathroom': 'Private bathroom',
    'rooms.sharedBathroom': 'Shared bathroom',
    'rooms.size.smart': '10 m²',
    'rooms.size.standard': '14 m²',
    'rooms.size.premium': '18 m²',
    'rooms.size.suite': '25 m²',
    'rooms.size.master': '35 m²',
    'rooms.area': 'Area',
    'rooms.close': 'Close',
    'rooms.smart.detail': 'The Smart room is a cleverly designed compact space, ideal for those who are always on the go. Features include a comfortable single bed, built-in desk, wardrobe, and natural light. Shared bathroom on the floor.',
    'rooms.standard.detail': 'The Standard room offers a perfect balance — spacious enough for daily comfort with a double bed, work desk, wardrobe, and plenty of natural light. Shared bathroom on the floor.',
    'rooms.premium.detail': 'The Premium room gives you extra space and light. Enjoy a double bed, generous work area, wardrobe, and your own private bathroom with modern finishes.',
    'rooms.suite.detail': 'The Suite features generous proportions with a king bed, dedicated living area, work desk, walk-in wardrobe, and a private ensuite bathroom with premium fixtures.',
    'rooms.master.detail': 'Our finest offering — the Master Suite provides exceptional space with a king bed, separate living area, premium work station, walk-in closet, and a luxurious private bathroom with rain shower.',
    
    // Common spaces
    'spaces.label': 'Common Areas',
    'spaces.title': 'Spaces to share',
    'spaces.intro': 'Beyond your private room, Living Colours AR offers thoughtfully designed spaces for work, relaxation, and connection.',
    'spaces.cowork.title': 'Cowork & Lounge',
    'spaces.cowork.desc': 'A quiet, professional environment with ergonomic seating, high-speed wifi, and natural light. Perfect for focused work or video calls.',
    'spaces.cowork.detail': 'The cowork area features standing desks, private phone booths, a communal table for collaborative work, and a lounge area for more relaxed working. Printing and scanning facilities are available, along with lockers for your equipment.',
    'spaces.meeting.title': 'Meeting Rooms',
    'spaces.meeting.desc': 'Reservable private rooms for calls, interviews, or small gatherings. Equipped and ready when you need them.',
    'spaces.meeting.detail': 'Two fully equipped meeting rooms with video conferencing capabilities, whiteboards, and comfortable seating for up to 6 people. Book through our resident app for free.',
    'spaces.kitchen.title': 'Community Kitchen',
    'spaces.kitchen.desc': 'A larger kitchen space designed for community dinners, cooking classes, and shared moments.',
    'spaces.kitchen.detail': 'Our community kitchen is equipped with professional-grade appliances, a large island for group cooking, and dining space for up to 20 people. Regular community dinners and cooking events are organized here.',
    'spaces.coming': 'Coming Soon',
    'spaces.cinema.title': 'Cinema Room',
    'spaces.cinema.desc': 'A cozy screening room for movie nights and shared entertainment.',
    'spaces.cinema.detail': 'A dedicated screening room with a 120" projector, surround sound system, comfortable recliners, and ambient lighting. Available for residents to book for private screenings or community movie nights.',
    'spaces.gym.title': 'Fitness Area',
    'spaces.gym.desc': 'A compact gym space for residents who want to stay active without leaving home.',
    'spaces.gym.detail': 'Our fitness area includes cardio equipment, free weights, yoga mats, and a stretching zone. Open 24/7 for residents. Yoga and fitness classes will be organized regularly.',
    
    // Location
    'location.label': 'The Neighborhood',
    'location.title': 'Almirante Reis, Lisbon',
    'location.intro': 'One of Lisbon\'s most vibrant and authentic avenues. A neighborhood that balances tradition with creativity.',
    'location.central': 'Central Location',
    'location.central.desc': 'In the heart of Lisbon, with the city\'s best neighborhoods just minutes away.',
    'location.metro': 'Metro at Your Door',
    'location.metro.desc': 'Direct access to the green line, connecting you to the entire city.',
    'location.authentic': 'Authentic Lisbon',
    'location.authentic.desc': 'Local shops, markets, cafes, and restaurants that define the real Lisbon experience.',
    'location.diverse': 'Diverse & Creative',
    'location.diverse.desc': 'A multicultural neighborhood known for its arts scene and welcoming atmosphere.',
    
    // Pre-launch
    'prelaunch.label': 'Opening September 2026',
    'prelaunch.title': 'Now collecting expressions of interest',
    'prelaunch.p1': 'We are opening in September and currently welcoming expressions of interest from future residents.',
    'prelaunch.p2': 'Leave your details and we\'ll be in touch to discuss your plans and preferred room type.',
    'prelaunch.cta': "I'm interested",
    'prelaunch.days': 'Days',
    'prelaunch.hours': 'Hours',
    'prelaunch.minutes': 'Min',
    'prelaunch.seconds': 'Sec',

    // Soft Launch
    'softlaunch.title': 'Soft Launch — April 2026',
    'softlaunch.desc': 'Can\'t wait until September? We\'re opening a limited number of rooms in April with a significant early-bird discount until the full opening. Some amenities will still be in progress, but you\'ll be the first to experience Living Colours AR.',
    'softlaunch.bullet1': 'Limited rooms available from April',
    'softlaunch.bullet2': 'Significant discount on rent until full September opening',
    'softlaunch.bullet3': 'Some common areas and amenities will open progressively',
    'softlaunch.cta': 'Join the soft launch',
    
    // Contact form
    'form.title': 'Express your interest',
    'form.subtitle': 'Tell us about yourself and we\'ll be in touch to discuss your plans.',
    'form.name': 'Full name',
    'form.nationality': 'Nationality',
    'form.email': 'Email',
    'form.phone': 'Phone number',
    'form.movein': 'Preferred move-in date',
    'form.stay': 'Preferred length of stay',
    'form.stay.3-6': '3-6 months',
    'form.stay.6-12': '6-12 months',
    'form.stay.12+': '12+ months',
    'form.room': 'Preferred room type',
    'form.room.any': 'No preference',
    'form.about': 'Tell us about yourself',
    'form.about.placeholder': 'What brings you to Lisbon? What are your plans?',
    'form.submit': 'Send my interest',
    'form.success': 'Thank you for your interest! We\'ll be in touch soon.',
    'form.privacy': 'Your information is safe with us and will only be used to contact you about Living Colours AR.',
    
    // FAQ
    'faq.label': 'Questions',
    'faq.title': 'Frequently asked questions',
    'faq.q1': 'Is this a student residence?',
    'faq.a1': 'Living Colours AR is a coliving space, not a traditional student residence. While we welcome students, we also welcome young professionals, digital nomads, and anyone in mobility who values quality living.',
    'faq.q2': 'Are short stays allowed?',
    'faq.a2': 'Our minimum stay is 3 months. We\'re designed for residents seeking stability, not short-term visitors.',
    'faq.q3': 'What is the minimum stay?',
    'faq.a3': 'The minimum stay is 3 months. Most of our residents stay between 6-12 months.',
    'faq.q4': 'Are prices all-inclusive?',
    'faq.a4': 'Yes. Your monthly rent includes utilities, high-speed internet, regular cleaning, and access to all common areas and amenities.',
    'faq.q5': 'Can I visit before booking?',
    'faq.a5': 'Absolutely. Once the building is ready, we\'ll be happy to arrange a visit. Express your interest and we\'ll keep you informed.',
    'faq.q6': 'How does the community work?',
    'faq.a6': 'We organize regular events and provide spaces for connection, but community is never forced. You choose how social you want to be.',
    'faq.q7': 'What is the soft launch in April?',
    'faq.a7': 'Before our full September opening, we\'re making a limited number of rooms available from April at a discounted rate. Some amenities will still be in progress, but you\'ll enjoy a reduced price until the full opening. It\'s a great opportunity for early residents.',
    
    // Footer
    'footer.tagline': 'Boutique coliving in Lisbon',
    'footer.contact': 'Contact',
    'footer.address': 'Avenida Almirante Reis, Lisbon',
    'footer.rights': 'All rights reserved.',
  },
  pt: {
    // Navigation
    'nav.about': 'Sobre',
    'nav.rooms': 'Quartos',
    'nav.spaces': 'Espaços',
    'nav.location': 'Localização',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.eyebrow': 'Abertura em Setembro · Lisboa',
    'hero.softlaunch': 'Soft launch em Abril — quartos limitados com desconto early-bird',
    'hero.headline': 'Um novo coliving boutique abre em Lisboa em Setembro',
    'hero.subheadline': 'Uma casa cuidadosamente desenhada para pessoas em mobilidade — combinando privacidade, comunidade e design numa localização central de Lisboa.',
    'hero.cta': 'Tenho interesse',
    'hero.learnMore': 'Saber mais',
    
    // Mid-page CTA
    'midcta.text': 'Tem interesse em juntar-se a nós? Estamos a recolher manifestações de interesse para Setembro.',
    'midcta.cta': 'Reserve o seu lugar',
    
    // What is
    'whatis.label': 'O Conceito',
    'whatis.title': 'O que é o Living Colours AR?',
    'whatis.intro': 'Estamos a criar uma residência de coliving boutique — uma casa cuidadosamente desenhada para pessoas em transição. Não é um hotel, não é um hostel, não é uma residência de estudantes. Um lugar para realmente viver.',
    'whatis.pillar1.title': 'Uma Verdadeira Casa',
    'whatis.pillar2.title': 'Qualidade Sem Compromisso',
    'whatis.pillar3.title': 'Comunidade por Design',
    'whatis.p1': 'Estamos a criar uma residência de coliving boutique — uma casa cuidadosamente desenhada para pessoas em transição. Não é um hotel, não é um hostel, não é uma residência de estudantes. Um lugar para realmente viver.',
    'whatis.p2': 'Acreditamos que viver temporariamente não deve significar qualidade temporária. Cada detalhe — do mobiliário à comunidade — é pensado para criar um sentido de pertença, mesmo que a sua estadia seja medida em meses.',
    'whatis.p3': 'Espaços privados com valores partilhados. Design cuidado a preços acessíveis. Uma comunidade que se sente como casa.',
    
    // Who it's for
    'who.label': 'Os Nossos Residentes',
    'who.title': 'Para quem é?',
    'who.intro': 'O Living Colours AR dá as boas-vindas a quem partilha os nossos valores: curiosidade, respeito, e o desejo de viver bem, onde quer que a vida os leve.',
    'who.student.title': 'Estudantes em Mobilidade',
    'who.student.desc': 'A estudar no estrangeiro com necessidade de estabilidade e foco.',
    'who.professional.title': 'Jovens Profissionais',
    'who.professional.desc': 'A começar um novo capítulo em Lisboa, procurando qualidade sem compromisso a longo prazo.',
    'who.nomad.title': 'Nómadas Digitais',
    'who.nomad.desc': 'A trabalhar remotamente enquanto exploram o que Lisboa tem para oferecer.',
    'who.relocating.title': 'Pessoas em Transição',
    'who.relocating.desc': 'A instalar-se na cidade enquanto procuram a sua casa permanente.',
    
    // What's included
    'included.label': 'Viver Aqui',
    'included.title': 'O que está incluído',
    'included.intro': 'Tudo o que precisa para uma vida confortável, produtiva e conectada.',
    'included.rooms': 'Quartos Mobilados',
    'included.rooms.desc': 'Espaços privados cuidadosamente desenhados com mobiliário de qualidade, roupa de cama e arrumação.',
    'included.kitchen': 'Cozinhas Partilhadas',
    'included.kitchen.desc': 'Cozinhas bem equipadas em cada piso para cozinhar diariamente e refeições partilhadas.',
    'included.cleaning': 'Limpeza Regular',
    'included.cleaning.desc': 'Limpeza semanal do seu quarto e manutenção diária das áreas comuns.',
    'included.cowork': 'Cowork & Lounge',
    'included.cowork.desc': 'Espaços dedicados para trabalhar, reunir e relaxar com internet de alta velocidade.',
    'included.events': 'Eventos Comunitários',
    'included.events.desc': 'Encontros regulares, jantares e atividades para conectar com outros residentes.',
    'included.management': 'Gestão no Local',
    'included.management.desc': 'Uma equipa dedicada para o apoiar e manter a qualidade de vida aqui.',
    
    // Rooms
    'rooms.label': 'Tipologias',
    'rooms.title': 'Encontre o seu espaço',
    'rooms.intro': 'Cinco categorias de quartos desenhadas para diferentes necessidades e preferências. Todos os quartos são privados, mobilados e incluem despesas.',
    'rooms.smart': 'Smart',
    'rooms.smart.desc': 'Compacto e inteligente. Perfeito para quem valoriza a eficiência e passa os dias a explorar a cidade.',
    'rooms.standard': 'Standard',
    'rooms.standard.desc': 'O equilíbrio perfeito entre conforto e valor. Um espaço bem desenhado que se sente como casa.',
    'rooms.premium': 'Premium',
    'rooms.premium.desc': 'Mais espaço, mais luz. Para quem quer mais margem para respirar.',
    'rooms.suite': 'Suite',
    'rooms.suite.desc': 'Proporções generosas com comodidades melhoradas. Onde o conforto encontra a sofisticação.',
    'rooms.master': 'Master Suite',
    'rooms.master.desc': 'Os nossos melhores quartos. Espaço excecional, acabamentos premium e as melhores vistas do edifício.',
    'rooms.from': 'Desde',
    'rooms.month': '/mês',
    'rooms.learnMore': 'Saber mais',
    'rooms.privateBathroom': 'Casa de banho privativa',
    'rooms.sharedBathroom': 'Casa de banho partilhada',
    'rooms.size.smart': '10 m²',
    'rooms.size.standard': '14 m²',
    'rooms.size.premium': '18 m²',
    'rooms.size.suite': '25 m²',
    'rooms.size.master': '35 m²',
    'rooms.area': 'Área',
    'rooms.close': 'Fechar',
    'rooms.smart.detail': 'O quarto Smart é um espaço compacto inteligentemente desenhado, ideal para quem está sempre em movimento. Inclui cama de solteiro confortável, secretária integrada, roupeiro e luz natural. Casa de banho partilhada no piso.',
    'rooms.standard.detail': 'O quarto Standard oferece o equilíbrio perfeito — espaçoso o suficiente para o conforto diário com cama de casal, secretária, roupeiro e muita luz natural. Casa de banho partilhada no piso.',
    'rooms.premium.detail': 'O quarto Premium oferece mais espaço e luz. Desfrute de cama de casal, área de trabalho generosa, roupeiro e casa de banho privativa com acabamentos modernos.',
    'rooms.suite.detail': 'A Suite apresenta proporções generosas com cama king, zona de estar dedicada, secretária, closet e casa de banho privativa com equipamentos premium.',
    'rooms.master.detail': 'A nossa melhor oferta — a Master Suite proporciona espaço excecional com cama king, zona de estar separada, estação de trabalho premium, closet e casa de banho privativa luxuosa com chuveiro de chuva.',
    
    // Common spaces
    'spaces.label': 'Áreas Comuns',
    'spaces.title': 'Espaços para partilhar',
    'spaces.intro': 'Para além do seu quarto privado, o Living Colours AR oferece espaços cuidadosamente desenhados para trabalho, relaxamento e conexão.',
    'spaces.cowork.title': 'Cowork & Lounge',
    'spaces.cowork.desc': 'Um ambiente calmo e profissional com assentos ergonómicos, wifi de alta velocidade e luz natural. Perfeito para trabalho focado ou videochamadas.',
    'spaces.cowork.detail': 'A área de cowork inclui secretárias de pé, cabines telefónicas privadas, uma mesa comunitária para trabalho colaborativo e uma zona lounge. Serviços de impressão e digitalização disponíveis, com cacifos para equipamento.',
    'spaces.meeting.title': 'Salas de Reunião',
    'spaces.meeting.desc': 'Salas privadas reserváveis para chamadas, entrevistas ou pequenas reuniões. Equipadas e prontas quando precisar.',
    'spaces.meeting.detail': 'Duas salas de reunião totalmente equipadas com capacidade para videoconferência, quadros brancos e assentos confortáveis para até 6 pessoas. Reserve gratuitamente através da nossa app de residentes.',
    'spaces.kitchen.title': 'Cozinha Comunitária',
    'spaces.kitchen.desc': 'Um espaço de cozinha maior para jantares comunitários, aulas de culinária e momentos partilhados.',
    'spaces.kitchen.detail': 'A nossa cozinha comunitária está equipada com eletrodomésticos profissionais, uma ilha grande para cozinhar em grupo e espaço de jantar para até 20 pessoas. Jantares e eventos culinários são organizados regularmente.',
    'spaces.coming': 'Em Breve',
    'spaces.cinema.title': 'Sala de Cinema',
    'spaces.cinema.desc': 'Uma sala acolhedora para noites de cinema e entretenimento partilhado.',
    'spaces.cinema.detail': 'Uma sala de projeção dedicada com projetor de 120", sistema de som surround, reclinatórios confortáveis e iluminação ambiente. Disponível para reserva pelos residentes.',
    'spaces.gym.title': 'Área Fitness',
    'spaces.gym.desc': 'Um espaço de ginásio compacto para residentes que querem manter-se ativos sem sair de casa.',
    'spaces.gym.detail': 'A nossa área fitness inclui equipamento de cardio, pesos livres, tapetes de yoga e zona de alongamentos. Aberta 24/7 para residentes. Aulas de yoga e fitness serão organizadas regularmente.',
    
    // Location
    'location.label': 'O Bairro',
    'location.title': 'Almirante Reis, Lisboa',
    'location.intro': 'Uma das avenidas mais vibrantes e autênticas de Lisboa. Um bairro que equilibra tradição com criatividade.',
    'location.central': 'Localização Central',
    'location.central.desc': 'No coração de Lisboa, com os melhores bairros da cidade a poucos minutos.',
    'location.metro': 'Metro à Porta',
    'location.metro.desc': 'Acesso direto à linha verde, conectando-o a toda a cidade.',
    'location.authentic': 'Lisboa Autêntica',
    'location.authentic.desc': 'Lojas locais, mercados, cafés e restaurantes que definem a verdadeira experiência lisboeta.',
    'location.diverse': 'Diverso & Criativo',
    'location.diverse.desc': 'Um bairro multicultural conhecido pela sua cena artística e atmosfera acolhedora.',
    
    // Pre-launch
    'prelaunch.label': 'Abertura Setembro 2026',
    'prelaunch.title': 'A recolher manifestações de interesse',
    'prelaunch.p1': 'Abrimos em Setembro e estamos a receber manifestações de interesse de futuros residentes.',
    'prelaunch.p2': 'Deixe os seus dados e entraremos em contacto para discutir os seus planos e tipo de quarto preferido.',
    'prelaunch.cta': 'Tenho interesse',
    'prelaunch.days': 'Dias',
    'prelaunch.hours': 'Horas',
    'prelaunch.minutes': 'Min',
    'prelaunch.seconds': 'Seg',

    // Soft Launch
    'softlaunch.title': 'Soft Launch — Abril 2026',
    'softlaunch.desc': 'Não consegue esperar até Setembro? Vamos abrir um número limitado de quartos em Abril com um desconto significativo de early-bird até à abertura completa. Algumas comodidades ainda estarão em desenvolvimento, mas será dos primeiros a viver no Living Colours AR.',
    'softlaunch.bullet1': 'Quartos limitados disponíveis a partir de Abril',
    'softlaunch.bullet2': 'Desconto significativo na renda até à abertura completa em Setembro',
    'softlaunch.bullet3': 'Algumas áreas comuns e comodidades abrirão progressivamente',
    'softlaunch.cta': 'Quero o soft launch',
    
    // Contact form
    'form.title': 'Manifeste o seu interesse',
    'form.subtitle': 'Conte-nos sobre si e entraremos em contacto para discutir os seus planos.',
    'form.name': 'Nome completo',
    'form.nationality': 'Nacionalidade',
    'form.email': 'Email',
    'form.phone': 'Número de telefone',
    'form.movein': 'Data de entrada preferida',
    'form.stay': 'Duração de estadia preferida',
    'form.stay.3-6': '3-6 meses',
    'form.stay.6-12': '6-12 meses',
    'form.stay.12+': '12+ meses',
    'form.room': 'Tipo de quarto preferido',
    'form.room.any': 'Sem preferência',
    'form.about': 'Fale-nos sobre si',
    'form.about.placeholder': 'O que o traz a Lisboa? Quais são os seus planos?',
    'form.submit': 'Enviar interesse',
    'form.success': 'Obrigado pelo seu interesse! Entraremos em contacto em breve.',
    'form.privacy': 'A sua informação está segura connosco e será usada apenas para o contactar sobre o Living Colours AR.',
    
    // FAQ
    'faq.label': 'Questões',
    'faq.title': 'Perguntas frequentes',
    'faq.q1': 'Isto é uma residência de estudantes?',
    'faq.a1': 'O Living Colours AR é um espaço de coliving, não uma residência de estudantes tradicional. Embora recebamos estudantes, também recebemos jovens profissionais, nómadas digitais e qualquer pessoa em mobilidade que valorize viver com qualidade.',
    'faq.q2': 'São permitidas estadias curtas?',
    'faq.a2': 'A nossa estadia mínima é de 3 meses. Somos desenhados para residentes que procuram estabilidade, não visitantes de curta duração.',
    'faq.q3': 'Qual é a estadia mínima?',
    'faq.a3': 'A estadia mínima é de 3 meses. A maioria dos nossos residentes fica entre 6-12 meses.',
    'faq.q4': 'Os preços são tudo incluído?',
    'faq.a4': 'Sim. A sua renda mensal inclui despesas, internet de alta velocidade, limpeza regular e acesso a todas as áreas comuns e comodidades.',
    'faq.q5': 'Posso visitar antes de reservar?',
    'faq.a5': 'Absolutamente. Assim que o edifício estiver pronto, teremos todo o gosto em organizar uma visita. Manifeste o seu interesse e mantê-lo-emos informado.',
    'faq.q6': 'Como funciona a comunidade?',
    'faq.a6': 'Organizamos eventos regulares e providenciamos espaços para conexão, mas a comunidade nunca é forçada. Você escolhe o quão social quer ser.',
    'faq.q7': 'O que é o soft launch em Abril?',
    'faq.a7': 'Antes da abertura completa em Setembro, vamos disponibilizar um número limitado de quartos a partir de Abril com um preço reduzido. Algumas comodidades ainda estarão em desenvolvimento, mas terá um desconto significativo até à abertura total. É uma ótima oportunidade para residentes pioneiros.',
    
    // Footer
    'footer.tagline': 'Coliving boutique em Lisboa',
    'footer.contact': 'Contacto',
    'footer.address': 'Avenida Almirante Reis, Lisboa',
    'footer.rights': 'Todos os direitos reservados.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

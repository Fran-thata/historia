import { TimelinePeriod } from './types';

export const TIMELINE_DATA: TimelinePeriod[] = [
  {
    id: 'carles-iv',
    title: 'Carles IV a Ferran VII',
    periodRange: '1788-1808',
    events: [
      {
        date: '1788',
        title: 'Coronació de Carles IV',
        description: "Inici del regnat marcat per la Revolució Francesa, l'aliança amb Napoleó i els conflictes internacionals.",
        isImportant: false,
        imageUrl: "https://res.cloudinary.com/ddpujsrsg/image/upload/v1769714653/Captura_de_pantalla_2026-01-29_202350_uikltt.png"
      },
      {
        date: '1807',
        title: 'Tractat de Fontainebleau',
        description: "Acord que permet el pas de tropes franceses cap a Portugal, facilitant l'ocupació d'Espanya.",
        isImportant: true,
        imageUrl: "https://res.cloudinary.com/ddpujsrsg/image/upload/v1769714916/Captura_de_pantalla_2026-01-29_202807_d60men.png"
      },
      {
        date: '18 març 1808',
        title: "Motí d'Aranjuez",
        description: "Revolta que provoca la caiguda de Godoy i l'abdicació de Carles IV en Ferran VII.",
        isImportant: false,
        imageUrl: "https://res.cloudinary.com/ddpujsrsg/image/upload/v1769715156/Captura_de_pantalla_2026-01-29_203224_tyjtzy.png"
      },
      {
        date: '1808',
        title: 'Abdicacions de Baiona',
        description: "Napoleó força l'abdicació dels Borbons. Josep Bonaparte esdevé rei sota l'Estatut de Baiona.",
        isImportant: false,
        imageUrl: "https://res.cloudinary.com/ddpujsrsg/image/upload/v1769715109/Captura_de_pantalla_2026-01-29_203141_ieevyd.png"
      },
    ],
  },
  {
    id: 'guerra-indep',
    title: "Guerra d'Independència",
    periodRange: '1808-1814',
    events: [
      {
        date: '2 maig 1808',
        title: 'Alçament del 2 de maig',
        description: "Revolta a Madrid contra l'ocupació francesa, iniciant la Guerra d'Independència.",
        isImportant: true,
        imageUrl: "https://res.cloudinary.com/ddpujsrsg/image/upload/v1769715429/Captura_de_pantalla_2026-01-29_203659_dwgwbp.png"
      },
      {
        date: '1808',
        title: 'Junta Central Suprema',
        description: "Govern de resistència que reconeix Ferran VII i trenca amb l'Antic Règim.",
        isImportant: false,
        imageUrl: "https://res.cloudinary.com/ddpujsrsg/image/upload/v1769715513/Captura_de_pantalla_2026-01-29_203822_wjiayc.png"
      },
      {
        date: 'Setembre 1810',
        title: 'Corts de Cadis',
        description: "Inici de reformes liberals a Cadis que culminen amb la primera Constitució.",
        isImportant: false,
        imageUrl: "https://res.cloudinary.com/ddpujsrsg/image/upload/v1769715619/Captura_de_pantalla_2026-01-29_204011_njsdwu.png"
      },
      {
        date: '19 març 1812',
        title: 'Constitució de Cadis "La Pepa"',
        description: "Primera constitució liberal: sobirania nacional, divisió de poders i fi de la Inquisició.",
        isImportant: true,
        imageUrl: "https://res.cloudinary.com/ddpujsrsg/image/upload/v1769715687/Captura_de_pantalla_2026-01-29_204117_iq1bum.png"
      },
      {
        date: 'Desembre 1813',
        title: 'Tractat de Valençay',
        description: "Napoleó retira les tropes i restableix la monarquia de Ferran VII.",
        isImportant: false,
        imageUrl: "https://res.cloudinary.com/ddpujsrsg/image/upload/v1769715764/Captura_de_pantalla_2026-01-29_204233_pja2al.png"
      },
    ],
  },
  {
    id: 'ferran-vii',
    title: 'Regnat de Ferran VII',
    periodRange: '1814-1833',
    events: [
      {
        date: '4 maig 1814',
        title: 'Sexenni Absolutista',
        description: "Ferran VII restaura l'Antic Règim i persegueix els liberals.",
        isImportant: true,
        imageUrl: "https://res.cloudinary.com/ddpujsrsg/image/upload/v1769715834/Captura_de_pantalla_2026-01-29_204344_whs5as.png"
      },
      {
        date: '1 gener 1820',
        title: 'Trienni Liberal',
        description: "Riego força el rei a jurar la Constitució. Tres anys de reformes liberals.",
        isImportant: true,
        imageUrl: "https://res.cloudinary.com/ddpujsrsg/image/upload/v1769715895/Captura_de_pantalla_2026-01-29_204445_zv2wav.png"
      },
      {
        date: '1823',
        title: 'Dècada Ominosa',
        description: "Invasió dels Cent Mil Fills de Sant Lluís i retorn a l'absolutisme.",
        isImportant: false,
        imageUrl: "https://res.cloudinary.com/ddpujsrsg/image/upload/v1769715948/Captura_de_pantalla_2026-01-29_204537_dvcfen.png"
      },
      {
        date: '1830',
        title: 'Pragmàtica Sanció',
        description: "Abolició de la Llei Sàlica, permetent regnar a Isabel i detonant el carlisme.",
        isImportant: false,
        imageUrl: "https://res.cloudinary.com/ddpujsrsg/image/upload/v1769716009/Captura_de_pantalla_2026-01-29_204638_fj8kfb.png"
      },
      {
        date: '29 setembre 1833',
        title: 'Mort de Ferran VII',
        description: "Isabel esdevé hereva i esclata la Primera Guerra Carlina.",
        isImportant: false,
        imageUrl: "https://res.cloudinary.com/ddpujsrsg/image/upload/v1769716120/Captura_de_pantalla_2026-01-29_204832_t9olpw.png"
      },
    ],
  },
  {
    id: 'isabel-ii',
    title: "Regnat d'Isabel II",
    periodRange: '1833-1868',
    events: [
      {
        date: '1833-1840',
        title: 'Regència M. Cristina',
        description: "Guerra Carlina, Constitució de 1837 i Desamortització de Mendizábal.",
        isImportant: false,
        imageUrl: "https://res.cloudinary.com/ddpujsrsg/image/upload/v1769716202/Captura_de_pantalla_2026-01-29_204935_pkjif3.png"
      },
      {
        date: '1840-1843',
        title: "Regència d'Espartero",
        description: "Govern autoritari d'Espartero que precipita la majoria d'edat d'Isabel II.",
        isImportant: false,
        imageUrl: "https://res.cloudinary.com/ddpujsrsg/image/upload/v1769716244/Captura_de_pantalla_2026-01-29_205035_jg2ere.png"
      },
      {
        date: '1844-1854',
        title: 'Dècada Moderada',
        description: "Ordre conservador, Constitució de 1845 i creació de la Guàrdia Civil.",
        isImportant: false,
        imageUrl: "https://res.cloudinary.com/ddpujsrsg/image/upload/v1769716287/Captura_de_pantalla_2026-01-29_205119_wxx38d.png"
      },
      {
        date: '1854',
        title: 'La Vicalvarada',
        description: "Alçament d'O'Donnell que dóna pas al Bienni Progressista.",
        isImportant: true,
        imageUrl: "https://res.cloudinary.com/ddpujsrsg/image/upload/v1769716345/Captura_de_pantalla_2026-01-29_205218_qjlzch.png"
      },
      {
        date: '1854-1856',
        title: 'Bienni Progressista',
        description: "Desamortització de Madoz i Llei de Ferrocarrils per modernitzar l'economia.",
        isImportant: false,
        imageUrl: "https://res.cloudinary.com/ddpujsrsg/image/upload/v1769716393/Captura_de_pantalla_2026-01-29_205304_jbhj2c.png"
      },
      {
        date: '1856-1868',
        title: 'Crisi del sistema',
        description: "Inestabilitat política i Pacte d'Ostende per enderrocar la reina.",
        isImportant: false,
        imageUrl: "https://res.cloudinary.com/ddpujsrsg/image/upload/v1769716441/Captura_de_pantalla_2026-01-29_205340_wdfixn.png"
      },
      {
        date: 'Setembre 1868',
        title: 'Revolució "La Gloriosa"',
        description: "Revolta de Prim i Serrano. Exili d'Isabel II.",
        isImportant: true,
        imageUrl: "https://res.cloudinary.com/ddpujsrsg/image/upload/v1769716553/Captura_de_pantalla_2026-01-29_205539_rady0e.png"
      },
    ],
  },
  {
    id: 'sexenni',
    title: 'Sexenni Democràtic',
    periodRange: '1868-1875',
    events: [
      {
        date: '1868-1870',
        title: 'Govern Provisional',
        description: "Constitució de 1869 amb sufragi universal i recerca de nou rei.",
        isImportant: false,
        imageUrl: "https://res.cloudinary.com/ddpujsrsg/image/upload/v1769716595/Captura_de_pantalla_2026-01-29_205627_od4pa4.png"
      },
      {
        date: '1870-1873',
        title: 'Amadeu de Savoia',
        description: "Regnat inestable per l'oposició, Cuba i la guerra carlina.",
        isImportant: false,
        imageUrl: "https://res.cloudinary.com/ddpujsrsg/image/upload/v1769716668/Captura_de_pantalla_2026-01-29_205739_uawwmh.png"
      },
      {
        date: '1873-1874',
        title: 'Primera República',
        description: "Caos cantonalista i inestabilitat, finalitzada pel cop de Pavía.",
        isImportant: true,
        imageUrl: "https://res.cloudinary.com/ddpujsrsg/image/upload/v1769716720/Captura_de_pantalla_2026-01-29_205833_yk8qde.png"
      },
    ],
  },
  {
    id: 'restauracio',
    title: 'Restauració Monàrquica',
    periodRange: '1875-1898',
    events: [
      {
        date: '29 desembre 1874',
        title: 'Pronunciament a Sagunt',
        description: "Martínez Campos proclama Alfons XII. Cánovas crea el sistema de la Restauració.",
        isImportant: true,
        imageUrl: "https://res.cloudinary.com/ddpujsrsg/image/upload/v1769716817/Captura_de_pantalla_2026-01-29_210006_axgfdh.png"
      },
      {
        date: '1876',
        title: 'Constitució de 1876',
        description: "Constitució conservadora i torn pacífic de partits.",
        isImportant: false,
        imageUrl: "https://res.cloudinary.com/ddpujsrsg/image/upload/v1769716938/Captura_de_pantalla_2026-01-29_210209_bblj4e.png"
      },
      {
        date: '1885',
        title: 'Pacte del Pardo',
        description: "Estabilitat garantida sota la regència de Maria Cristina després de la mort del rei.",
        isImportant: false,
        imageUrl: "https://res.cloudinary.com/ddpujsrsg/image/upload/v1769716992/Captura_de_pantalla_2026-01-29_210258_oittzn.png"
      },
      {
        date: '1898',
        title: 'Desastre del 98',
        description: "Pèrdua de les colònies, crisi moral i inici del Regeneracionisme.",
        isImportant: true,
        imageUrl: "https://res.cloudinary.com/ddpujsrsg/image/upload/v1769717039/Captura_de_pantalla_2026-01-29_210348_a1rldd.png"
      },
    ],
  },
];
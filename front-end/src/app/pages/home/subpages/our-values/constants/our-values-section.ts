import IntegrityImage from '../assets/integrity.png';
import InclusivityImage from '../assets/inclusivity.png';
import CommunityImage from '../assets/community.png';
import EmpowermentImage from '../assets/empowerment.png';

const TEXT = {
  TITLE: {
    EN: 'Our values',
    FR: 'Nos valeurs',
  },
  INTEGRITY_TITLE: {
    EN: 'Integrity',
    FR: 'Intégrité',
  },
  INTEGRITY_PARAGRAPH: {
    EN: `We hold ourselves accountable to our members, partners and communities.
    We’re trusted with more than just their money, we advocate for their well-being.`,
    FR: `Nous nous tenons responsables envers nos membres, partenaires et communautés.
    On nous fait confiance avec plus que leur argent, nous défendons leur bien-être.`,
  },
  EMPLOYMENT_TITLE: {
    EN: 'Inclusivity',
    FR: 'Inclusivité',
  },
  EMPLOYMENT_PARAGRAPH: {
    EN: `We believe in equal access for all to the best financial tools regardless of people’s
    history and financial literacy. We let people choose what’s right for them.`,
    FR: `Nous croyons en l'égalité d'accès pour tous aux meilleurs outils financiers, quelle que soit la situation des personnes
    histoire et littératie financière. Nous laissons les gens choisir ce qui leur convient.`,
  },
  EMPOWERMENT_TITLE: {
    EN: 'Empowerment',
    FR: 'Responsabilisation',
  },
  EMPOWERMENT_PARAGRAPH: {
    EN: `We provide people with the knowledge and tools they need to get more out of their time
    and money, so they can go after what they want.`,
    FR: `Nous fournissons aux gens les connaissances et les outils dont ils ont besoin pour tirer le meilleur parti de leur temps
    et de l'argent, pour qu'ils puissent faire ce qu'ils veulent.`,
  },
  COMMUNITY_TITLE: {
    EN: 'Community',
    FR: 'Communauté',
  },
  COMMUNITY_PARAGRAPH: {
    EN: `We build relationships with our members, partners and communities in ways that are meaningful to them.`,
    FR: `Nous construisons des relations avec nos membres, partenaires et communautés de manière significative pour eux.`,
  },
};

type Item = {
  picture: string;
  title: {
    EN: string;
    FR: string;
  };
  paragraph: {
    EN: string;
    FR: string;
  };
};

const items: Array<Item> = [
  {
    picture: IntegrityImage,
    title: TEXT.INTEGRITY_TITLE,
    paragraph: TEXT.INTEGRITY_PARAGRAPH,
  },
  {
    picture: InclusivityImage,
    title: TEXT.EMPLOYMENT_TITLE,
    paragraph: TEXT.EMPLOYMENT_PARAGRAPH,
  },
  {
    picture: EmpowermentImage,
    title: TEXT.EMPOWERMENT_TITLE,
    paragraph: TEXT.EMPOWERMENT_PARAGRAPH,
  },
  {
    picture: CommunityImage,
    title: TEXT.COMMUNITY_TITLE,
    paragraph: TEXT.COMMUNITY_PARAGRAPH,
  },
];

const OUR_VALUES_CONSTANTS = {
  TEXT,
  items,
};

export default OUR_VALUES_CONSTANTS;

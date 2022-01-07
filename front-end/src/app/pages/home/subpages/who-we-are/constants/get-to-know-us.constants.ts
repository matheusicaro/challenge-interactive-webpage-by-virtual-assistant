import MadeInCanadaImage from '../assets/made-in-canada.png';
import TechInnovationMeetsFinanceImage from '../assets/tech-innovation.png';
import NeoIsLocalImage from '../assets/neo-is-local.png';
import NeoIsCommunityImage from '../assets/neo-is-community.png';

const TEXT = {
  TITLE: {
    EN: 'Get to know us',
    FR: 'Neo en bref',
  },
  MADE_IN_CANADA_TITLE: {
    EN: 'Made in Canada, for all of Canada',
    FR: 'Neo est conçue par et pour les gens du pays',
  },
  MADE_IN_CANADA_PARAGRAPH: {
    EN: 'Neo is available from coast to coast for all Canadians—regardless of your financial situation.',
    FR: `Nos services sont accessibles à tout le monde, d’un océan à l’autre, peu importe votre situation financière.`,
  },
  MADE_IN_CANADA_PARAGRAPH_TOPIC: {
    EN: `Neo Savings is not available to Quebec residents. Don't worry—we're coming soon.`,
    FR: `Le compte Neo Épargne n’est pas offert au Québec. Ne vous inquiétez pas, on s’en vient.`,
  },
  TECH_INNOVATION_MEETS_FINANCE: {
    EN: 'Tech innovation meets finance',
    FR: `Neo met la technologie au service de vos finances`,
  },
  TECH_INNOVATION_MEETS_FINANCE_PARAGRAPH: {
    EN: 'We use technology to create custom solutions that help you do more with your money..',
    FR: 'Nous utilisons la technologie pour créer des solutions personnalisées qui vous permettent d’en faire plus avec votre argent.',
  },
  NEO_IS_LOCAL: {
    EN: 'Neo is local',
    FR: 'Neo est ici, là, partout',
  },
  NEO_IS_LOCAL_PARAGRAPH: {
    EN: 'Join us in discovering, exploring, and experiencing rewards all while supporting Canadian businesses.',
    FR: 'Découvrez des récompenses tout en explorant votre quartier et en soutenant les entreprises du pays.',
  },
  NEO_IS_COMMUNITY: {
    EN: 'Neo is community',
    FR: 'Neo, c’est une communauté',
  },
  NEO_IS_COMMUNITY_PARAGRAPH: {
    EN: `From perks, to financial tips and events, we're committed to sharing the best we have to offer.`,
    FR: `Des avantages, des conseils financiers, des évènements, et plus : nous voulons vous offrir la crème de la crème.`,
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

  topic?: {
    EN: string;
    FR: string;
  };
};

const items: Array<Item> = [
  {
    picture: MadeInCanadaImage,
    title: TEXT.MADE_IN_CANADA_TITLE,
    paragraph: TEXT.MADE_IN_CANADA_PARAGRAPH,
    topic: TEXT.MADE_IN_CANADA_PARAGRAPH_TOPIC,
  },
  {
    picture: TechInnovationMeetsFinanceImage,
    title: TEXT.TECH_INNOVATION_MEETS_FINANCE,
    paragraph: TEXT.TECH_INNOVATION_MEETS_FINANCE_PARAGRAPH,
  },
  {
    picture: NeoIsLocalImage,
    title: TEXT.NEO_IS_LOCAL,
    paragraph: TEXT.NEO_IS_LOCAL_PARAGRAPH,
  },
  {
    picture: NeoIsCommunityImage,
    title: TEXT.NEO_IS_COMMUNITY,
    paragraph: TEXT.NEO_IS_COMMUNITY_PARAGRAPH,
  },
];

const GET_TO_KNOW_US_CONSTANTS = {
  TEXT,
  items,
};

export default GET_TO_KNOW_US_CONSTANTS;

import FounderAndrewAvatar from '../assets/founder-andrew.jpg';
import FounderJeffAvatar from '../assets/founder-jeff.jpg';
import FounderKrisAvatar from '../assets/founder-kris.jpg';

const TEXT = {
  TITLE: {
    EN: 'Our founders',
    FR: 'Nos fondateurs',
  },
  PARAGRAPH: {
    EN: `We know how technology can be used to improve everyday life. After building SkipTheDishes
    into a top 10 brand in Canada, we’re now set on challenging conventions with a smarter spending, saving and rewards
    experience for Canadians.`,
    FR: `Nous savons comment mettre la technologie au service de votre quotidien. Après avoir développé SkipTheDishes
    et avoir contribué à son classement parmi les 10 principales marques au Canada, nous avons décidé de bousculer les
    conventions en introduisant une façon plus intelligente d’acheter, d’épargner et d’obtenir des récompenses pour les gens du pays.`,
  },
};

type Founder = {
  picture: string;
  name: string;
  positions: Array<string>;
};

const founders: Array<Founder> = [
  {
    picture: FounderAndrewAvatar,
    name: 'Andrew Chau',
    positions: ['Cofondateur et', 'directeur général'],
  },
  {
    picture: FounderJeffAvatar,
    name: 'Jeff Adamson',
    positions: ['Cofondateur et', 'directeur des partenariats'],
  },
  {
    picture: FounderKrisAvatar,
    name: 'Kris Read',
    positions: ['Cofondateur et', 'directeur technique'],
  },
];

const OUR_FOUNDERS_CONSTANTS = {
  TEXT,
  founders,
};

export default OUR_FOUNDERS_CONSTANTS;

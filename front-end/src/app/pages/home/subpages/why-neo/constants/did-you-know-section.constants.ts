import ShopLocalImage from '../assets/shop-local.png';
import ShopLocalImageForDark from '../assets/shop-local-white.png';
import EarnBigImage from '../assets/earn-big.png';
import EarnBigImageForDark from '../assets/earn-big-white.png';
import SaveMoreImage from '../assets/save-more.png';
import SaveMoreImageForDark from '../assets/save-more-white.png';
import DiscoverImage from '../assets/discover.png';
import DiscoverImageForDark from '../assets/discover-white.png';

const TEXT = {
  DID_YOU_KNOW_TITLE: {
    EN: 'Did you know? Neo helps you:',
    FR: 'Le saviez-vous? Neo vous aide à',
  },
  SHOP_LOCAL_TOPIC: {
    EN: 'Shop local',
    FR: 'Magasiner localement',
  },
  SHOP_LOCAL_PARAGRAPH: {
    EN: 'Neo has partnered with over 4000 local businesses to get the most out of your card',
    FR: `Neo a noué des partenariats avec plus de 4 000 commerçants pour vous en offrir plus.`,
  },
  EARN_BIG_TOPIC: {
    EN: 'Earn big',
    FR: 'Accumuler rapidement',
  },
  EARN_BIG_PARAGRAPH: {
    EN: 'Our community of partners offer up to 15% on your first purchas',
    FR: `Notre communauté de partenaires vous offre jusqu’à 15 % de rabais sur votre premier achat.`,
  },
  SAVE_MORE_TOPIC: {
    EN: 'Save more',
    FR: 'Économiser plus',
  },
  SAVE_MORE_PARAGRAPH: {
    EN: 'You can get up to 2% paying bills like your utilities and cell phone',
    FR: `Obtenez jusqu’à 2% de remises en argent en payant vos factures de services publics.`,
  },
  DISCOVER_TOPIC: {
    EN: 'Discover',
    FR: 'Explorer',
  },
  DISCOVER_PARAGRAPH: {
    EN: 'We’re the local experts. Simply explore our app to find hidden treasures!',
    FR: 'Utilisez notre appli pour découvrir tous les bijoux de votre quartier!',
  },
};

type Item = {
  picture: {
    dark: string;
    light: string;
  };

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
    picture: {
      dark: ShopLocalImageForDark,
      light: ShopLocalImage,
    },
    title: TEXT.SHOP_LOCAL_TOPIC,
    paragraph: TEXT.SHOP_LOCAL_PARAGRAPH,
  },
  {
    picture: {
      dark: EarnBigImageForDark,
      light: EarnBigImage,
    },
    title: TEXT.EARN_BIG_TOPIC,
    paragraph: TEXT.EARN_BIG_PARAGRAPH,
  },
  {
    picture: {
      dark: SaveMoreImageForDark,
      light: SaveMoreImage,
    },
    title: TEXT.SAVE_MORE_TOPIC,
    paragraph: TEXT.SAVE_MORE_PARAGRAPH,
  },
  {
    picture: {
      dark: DiscoverImageForDark,
      light: DiscoverImage,
    },
    title: TEXT.DISCOVER_TOPIC,
    paragraph: TEXT.DISCOVER_PARAGRAPH,
  },
];

const DID_YOU_KNOW_CONSTANTS = {
  TEXT,
  items,
};

export default DID_YOU_KNOW_CONSTANTS;

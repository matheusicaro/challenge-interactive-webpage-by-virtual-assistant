import React from 'react';
import styled from 'styled-components';

import { ItemList, Text } from '../../../../../components';

import ShopLocalImage from '../assets/shop-local.png';
import ShopLocalImageForDark from '../assets/shop-local-white.png';
import EarnBigImage from '../assets/earn-big.png';
import EarnBigImageForDark from '../assets/earn-big-white.png';
import SaveMoreImage from '../assets/save-more.png';
import SaveMoreImageForDark from '../assets/save-more-white.png';
import DiscoverImage from '../assets/discover.png';
import DiscoverImageForDark from '../assets/discover-white.png';

import { useTheme } from '../../../../../styles/provider';

const DID_YOU_KNOW_TITLE = 'Did you know? Neo helps you:';

const SHOP_LOCAL_TOPIC = 'Shop local';
const SHOP_LOCAL_PARAGRAPH = 'Neo has partnered with over 4000 local businesses to get the most out of your card';

const EARN_BIG_TOPIC = 'Earn big';
const EARN_BIG_PARAGRAPH = 'Our community of partners offer up to 15% on your first purchas';

const SAVE_MORE_TOPIC = 'Save more';
const SAVE_MORE_PARAGRAPH = 'You can get up to 2% paying bills like your utilities and cell phone';

const DISCOVER_TOPIC = 'Discover';
const DISCOVER_PARAGRAPH = 'We’re the local experts. Simply explore our app to find hidden treasures!';

const items = [
  {
    picture: {
      dark: ShopLocalImageForDark,
      light: ShopLocalImage,
    },
    title: SHOP_LOCAL_TOPIC,
    paragraph: SHOP_LOCAL_PARAGRAPH,
  },
  {
    picture: {
      dark: EarnBigImageForDark,
      light: EarnBigImage,
    },
    title: EARN_BIG_TOPIC,
    paragraph: EARN_BIG_PARAGRAPH,
  },
  {
    picture: {
      dark: SaveMoreImageForDark,
      light: SaveMoreImage,
    },
    title: SAVE_MORE_TOPIC,
    paragraph: SAVE_MORE_PARAGRAPH,
  },
  {
    picture: {
      dark: DiscoverImageForDark,
      light: DiscoverImage,
    },
    title: DISCOVER_TOPIC,
    paragraph: DISCOVER_PARAGRAPH,
  },
];

type Props = {
  children?: never;
};

const DidYouKnowSection: React.FC<Props> = (props) => {
  const { theme } = useTheme();

  const isDarkTheme = theme === 'dark';

  return (
    <Container>
      <Text variant="h4">{DID_YOU_KNOW_TITLE}</Text>

      <ul>
        {items.map((item) => (
          <ItemList
            key={item.title}
            picture={isDarkTheme ? item.picture.dark : item.picture.light}
            title={item.title}
            paragraph={item.paragraph}
          />
        ))}
      </ul>
    </Container>
  );
};

export default DidYouKnowSection;

const Container = styled.section`
  text-align: center;

  padding: 15vh 20vw;
  padding-bottom: 0;

  & > ul {
    display: flex;
    align-content: space-around;
    margin: 8vh 0;

    list-style-type: none;

    li {
      padding: 18px 25px;

      &,
      p {
        line-height: 1.8em;
      }
    }
  }
`;

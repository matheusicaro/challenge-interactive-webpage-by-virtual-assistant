import React from 'react';
import styled from 'styled-components';

import { Text } from '../../../../../components';

import ShopLocalImage from '../assets/shop-local.png';
import EarnBigImage from '../assets/earn-big.png';
import SaveMoreImage from '../assets/save-more.png';
import DiscoverImage from '../assets/discover.png';

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
    picture: ShopLocalImage,
    title: SHOP_LOCAL_TOPIC,
    paragraph: SHOP_LOCAL_PARAGRAPH,
  },
  {
    picture: EarnBigImage,
    title: EARN_BIG_TOPIC,
    paragraph: EARN_BIG_PARAGRAPH,
  },
  {
    picture: SaveMoreImage,
    title: SAVE_MORE_TOPIC,
    paragraph: SAVE_MORE_PARAGRAPH,
  },
  {
    picture: DiscoverImage,
    title: DISCOVER_TOPIC,
    paragraph: DISCOVER_PARAGRAPH,
  },
];

type Props = {
  children?: never;
};

const DidYouKnowSection: React.FC<Props> = (props) => {
  return (
    <Container>
      <Text variant="h4">{DID_YOU_KNOW_TITLE}</Text>

      <ul>
        {items.map((item) => (
          <Item key={item.title} picture={item.picture} title={item.title} paragraph={item.paragraph} />
        ))}
      </ul>
    </Container>
  );
};

export default DidYouKnowSection;

const Item = (props: { key: string; picture: string; title: string; paragraph: string; topic?: string }) => (
  <li key={props.key}>
    <Figure>
      <img src={props.picture} alt={props.title} />
    </Figure>

    <Text variant="h6">{props.title}</Text>

    <Text component="p" variant="body2">
      {props.paragraph}
    </Text>
  </li>
);

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

const Figure = styled.figure`
  display: contents;

  img {
    width: 50px;
  }
`;

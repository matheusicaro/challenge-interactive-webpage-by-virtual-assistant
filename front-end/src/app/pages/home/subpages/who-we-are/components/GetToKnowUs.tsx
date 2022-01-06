import React from 'react';

import { Text } from '../../../../../components';
import { Figure, PositionContainer, Subtitle, Title } from '../styles';
import styled from 'styled-components';

import MadeInCanadaImage from '../assets/made-in-canada.png';
import TechInnovationMeetsFinanceImage from '../assets/tech-innovation.png';
import NeoIsLocalImage from '../assets/neo-is-local.png';
import NeoIsCommunityImage from '../assets/neo-is-community.png';

const GET_TO_KNOW_US_TITLE = 'Get to know us';

const MADE_IN_CANADA_TITLE = 'Made in Canada, for all of Canada';
const MADE_IN_CANADA_PARAGRAPH = 'Neo is available from coast to coast for all Canadians—regardless of your financial situation.';
const MADE_IN_CANADA_PARAGRAPH_TOPIC = `Neo Savings is not available to Quebec residents. Don't worry—we're coming soon.`;

const TECH_INNOVATION_MEETS_FINANCE = 'Tech innovation meets finance';
const TECH_INNOVATION_MEETS_FINANCE_PARAGRAPH = 'We use technology to create custom solutions that help you do more with your money..';

const NEO_IS_LOCAL = 'Neo is local';
const NEO_IS_LOCAL_PARAGRAPH = 'Join us in discovering, exploring, and experiencing rewards all while supporting Canadian businesses.';

const NEO_IS_COMMUNITY = 'Neo is community';
const NEO_IS_COMMUNITY_PARAGRAPH = `From perks, to financial tips and events, we're committed to sharing the best we have to offer.`;

const items = [
  {
    picture: MadeInCanadaImage,
    title: MADE_IN_CANADA_TITLE,
    paragraph: MADE_IN_CANADA_PARAGRAPH,
    topic: MADE_IN_CANADA_PARAGRAPH_TOPIC,
  },
  {
    picture: TechInnovationMeetsFinanceImage,
    title: TECH_INNOVATION_MEETS_FINANCE,
    paragraph: TECH_INNOVATION_MEETS_FINANCE_PARAGRAPH,
  },
  {
    picture: NeoIsLocalImage,
    title: NEO_IS_LOCAL,
    paragraph: NEO_IS_LOCAL_PARAGRAPH,
  },
  {
    picture: NeoIsCommunityImage,
    title: NEO_IS_COMMUNITY,
    paragraph: NEO_IS_COMMUNITY_PARAGRAPH,
  },
];

type Props = {
  children?: never;
};

const GetToKnowUs: React.FC<Props> = (props) => {
  return (
    <Container>
      <Title id="get-to-know-us-title" text={GET_TO_KNOW_US_TITLE} />

      <ul>
        {items.map((i) => (
          <Item key={i.title} picture={i.picture} title={i.title} paragraph={i.paragraph} topic={i.topic} />
        ))}
      </ul>
    </Container>
  );
};

export default GetToKnowUs;

const Item = (props: { key: string; picture: string; title: string; paragraph: string; topic?: string }) => (
  <li key={props.key}>
    <Figure>
      <img src={props.picture} alt={props.title} />
    </Figure>

    <Subtitle text={props.title} />

    <Text component="p" variant="body2">
      {props.paragraph}
    </Text>

    {props.topic && (
      <Text className="Text-paragraph-alert" component="p" variant="body2">
        {props.topic}
      </Text>
    )}
  </li>
);

const Container = styled.section`
  ${PositionContainer}

  #get-to-know-us-title {
    text-align: center;
  }

  & > ul {
    padding: 10%;
    padding-bottom: 0;

    list-style-type: none;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 50px;
    grid-row-gap: 50px;

    h6,
    p {
      line-height: 2em;
    }

    p {
      font-size: 0.7em;
    }
  }

  .Text-paragraph-alert {
    font-size: 0.5em;
  }
`;

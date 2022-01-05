import React from 'react';

import { Text } from '../../../../components';
import { Figure, PositionContainer } from './styles';
import styled from 'styled-components';

import MadeInCanadaImage from './assets/made-in-canada.png';
import TechInnovationMeetsFinanceImage from './assets/tech-innovation.png';
import NeoIsLocalImage from './assets/neo-is-local.png';
import NeoIsCommunityImage from './assets/neo-is-community.png';

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

type Props = {
  children?: never;
};

const GetToKnowUs: React.FC<Props> = (props) => {
  return (
    <SecondSectionContainer>
      <Text id="get-to-know-us-title" variant="h5">
        {GET_TO_KNOW_US_TITLE}
      </Text>

      <ul>
        <MadeInCanada />
        <TechInnovationMeetsFinance />
        <NeoIsLocal />
        <NeoIsCommunity />
      </ul>
    </SecondSectionContainer>
  );
};

export default GetToKnowUs;

const MadeInCanada = () => (
  <li>
    <Figure>
      <img src={MadeInCanadaImage} alt="Made in Canada, for all of Canada" />
    </Figure>

    <Text variant="h6">{MADE_IN_CANADA_TITLE}</Text>
    <Text component="p" variant="body2">
      {MADE_IN_CANADA_PARAGRAPH}
    </Text>
    <Text className="Text-paragraph-alert" component="p" variant="body2">
      {MADE_IN_CANADA_PARAGRAPH_TOPIC}
    </Text>
  </li>
);

const TechInnovationMeetsFinance = () => (
  <li>
    <Figure>
      <img src={TechInnovationMeetsFinanceImage} alt="Made in Canada, for all of Canada" />
    </Figure>

    <Text variant="h6">{TECH_INNOVATION_MEETS_FINANCE}</Text>
    <Text component="p" variant="body2">
      {TECH_INNOVATION_MEETS_FINANCE_PARAGRAPH}
    </Text>
  </li>
);

const NeoIsLocal = () => (
  <li>
    <Figure>
      <img src={NeoIsLocalImage} alt="Made in Canada, for all of Canada" />
    </Figure>

    <Text variant="h6">{NEO_IS_LOCAL}</Text>
    <Text component="p" variant="body2">
      {NEO_IS_LOCAL_PARAGRAPH}
    </Text>
  </li>
);

const NeoIsCommunity = () => (
  <li>
    <Figure>
      <img src={NeoIsCommunityImage} alt="Made in Canada, for all of Canada" />
    </Figure>

    <Text variant="h6">{NEO_IS_COMMUNITY}</Text>
    <Text component="p" variant="body2">
      {NEO_IS_COMMUNITY_PARAGRAPH}
    </Text>
  </li>
);

const SecondSectionContainer = styled.section`
  ${PositionContainer}

  #get-to-know-us-title {
    text-align: center;
  }

  & > ul {
    padding: 10%;

    list-style-type: none;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 50px;
    grid-row-gap: 50px;

    h6,
    p {
      line-height: 2em;
      font-size: 0.7em;
    }

    h6 {
      margin: 10px 0;
    }
  }

  .Text-paragraph-alert {
    font-size: 0.5em;
  }
`;

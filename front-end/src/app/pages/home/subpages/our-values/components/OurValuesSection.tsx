import React from 'react';
import { List, Title } from '../../styles';

import IntegrityImage from '../assets/integrity.png';
import InclusivityImage from '../assets/inclusivity.png';
import CommunityImage from '../assets/community.png';
import EmpowermentImage from '../assets/empowerment.png';
import styled from 'styled-components';
import { ItemList } from '../../../../../components';

const OUR_VALUES_TITLE = 'Our values';

const INTEGRITY_TITLE = 'Integrity';
const INTEGRITY_PARAGRAPH = `We hold ourselves accountable to our members, partners and communities.
We’re trusted with more than just their money, we advocate for their well-being.`;

const EMPLOYMENT_TITLE = 'Inclusivity';
const EMPLOYMENT_PARAGRAPH = `We believe in equal access for all to the best financial tools regardless of people’s
history and financial literacy. We let people choose what’s right for them.`;

const EMPOWERMENT_TITLE = 'Empowerment';
const EMPOWERMENT_PARAGRAPH = `We provide people with the knowledge and tools they need to get more out of their time
and money, so they can go after what they want.`;

const COMMUNITY_TITLE = 'Community';
const COMMUNITY_PARAGRAPH = `We build relationships with our members, partners and communities in ways that are meaningful to them.`;

const items = [
  {
    picture: IntegrityImage,
    title: INTEGRITY_TITLE,
    paragraph: INTEGRITY_PARAGRAPH,
  },
  {
    picture: InclusivityImage,
    title: EMPLOYMENT_TITLE,
    paragraph: EMPLOYMENT_PARAGRAPH,
  },
  {
    picture: EmpowermentImage,
    title: EMPOWERMENT_TITLE,
    paragraph: EMPOWERMENT_PARAGRAPH,
  },
  {
    picture: CommunityImage,
    title: COMMUNITY_TITLE,
    paragraph: COMMUNITY_PARAGRAPH,
  },
];

type Props = {
  children?: never;
};

const OurValuesSection: React.FC<Props> = (props) => {
  return (
    <Container>
      <Title id="our-values-title" text={OUR_VALUES_TITLE} />

      <List>
        {items.map((item) => (
          <ItemList key={item.title} picture={item.picture} title={item.title} paragraph={item.paragraph} />
        ))}
      </List>
    </Container>
  );
};

export default OurValuesSection;

const Container = styled.section`
  padding: 0vw 25vw;
  padding-bottom: 5vh;

  background-color: ${({ theme }) => theme.colors.background.secondary};

  #our-values-title {
    padding: 50px 0;
    padding-bottom: 0;

    text-align: center;
  }
`;

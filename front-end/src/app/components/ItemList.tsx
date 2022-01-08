import React from 'react';
import { Text } from '.';
import { Figure, Subtitle } from '../pages/home/subpages/styles';

type Props = {
  children?: never;
  key?: string | number;
  picture: string;
  title: string;
  paragraph: string;
  topic?: string;
};

const ItemList: React.FC<Props> = (props) => {
  return (
    <li key={props.key}>
      <Figure>
        <img src={props.picture} alt={props.title} />
      </Figure>

      <Subtitle text={props.title} />

      <Text component="p" variant="body2">
        {props.paragraph}
      </Text>

      {props.topic && (
        <Text className="item-list-topic" component="p" variant="body2">
          {props.topic}
        </Text>
      )}
    </li>
  );
};

export default ItemList;

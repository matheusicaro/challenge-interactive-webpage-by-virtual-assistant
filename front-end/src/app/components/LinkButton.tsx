import React from 'react';

import { Button } from '@mui/material';
import styled from 'styled-components';

type Props = {
  children?: never;
  label: string;
  href: string;
  id?: string;
  reverseColor?: boolean;
};

const LinkButton: React.FC<Props> = ({ label, href, id, reverseColor }) => {
  return (
    <Link className="link-button" reverseColor={reverseColor} id={id} href={href} target="_blank" rel="noreferrer noopener">
      <Button>{label}</Button>
    </Link>
  );
};

export default LinkButton;

const Link = styled.a<{ reverseColor?: boolean }>`
  width: fit-content !important;

  &,
  button {
    color: ${({ theme, reverseColor }) => (reverseColor ? theme.colors.text.paragraphReverse : theme.colors.text.paragraph)} !important;
    background-color: ${({ theme, reverseColor }) =>
      reverseColor ? theme.colors.background.primaryReverse : theme.colors.background.primary} !important;

    :hover {
      background: #1ea57d !important;
      color: #ffffff !important;
    }
  }

  button {
    padding: 8px 40px !important;
    border-radius: 0 !important;
  }

  &,
  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
    color: inherit;
  }
`;

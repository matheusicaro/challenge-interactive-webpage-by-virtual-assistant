import React from 'react';

import { Button } from '@mui/material';
import styled from 'styled-components';

type Props = {
  children?: never;
  label: string;
  href: string;
  id?: string;
};

const LinkButton: React.FC<Props> = ({ label, href, id }) => {
  return (
    <Link id={id} href={href} target="_blank" rel="noreferrer noopener">
      <Button>{label}</Button>
    </Link>
  );
};

export default LinkButton;

const Link = styled.a`
  width: fit-content !important;

  &,
  button {
    color: ${({ theme }) => theme.colors.text.paragraphReverse} !important;
    background-color: ${({ theme }) => theme.colors.background.primaryReverse} !important;

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

import React, { useState } from 'react';

import { Button, Drawer, IconButton, List, ListItem } from '@mui/material';
import { Menu as MenuIcon } from '@material-ui/icons';
import styled from 'styled-components';

type Props = {
  children?: never;
  id?: string;
  options: Array<string>;
  onSelectOption: (option: string) => void;
};

const Menu: React.FC<Props> = (props) => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);
  const openMenu = () => setOpen(true);
  const onClickOption = (option: string) => {
    props.onSelectOption(option);
    setTimeout(closeMenu, 800);
  };

  return (
    <section id={props.id}>
      <MenuButton id="menu-icon" aria-label="Menu" onClick={openMenu}>
        <MenuIcon />
      </MenuButton>
      <DrawerContainer open={open} onClose={closeMenu}>
        <List>
          {props.options.map((option, index) => (
            <ListItem key={index} className="menu-button-container">
              <Button className="menu-button" variant="outlined" onClick={() => onClickOption(option)}>
                {option}
              </Button>
            </ListItem>
          ))}
        </List>
      </DrawerContainer>
    </section>
  );
};

export default Menu;

const MenuButton = styled(IconButton)`
  svg {
    color: white;
  }
`;

const DrawerContainer = styled(Drawer)`
  .MuiPaper-root {
    min-width: 60vw !important;

    background-color: ${({ theme }) => theme.colors.darkColor};
  }

  .menu-button-container,
  .menu-button {
    padding: 0;
  }

  .menu-button-container,
  .menu-button {
    padding: 0 !important;
    margin: 0 !important;

    width: 100% !important;
    margin: 10px 0 !important;

    border-left: 0;
    border-right: 0;
    border-radius: 0;

    color: ${({ theme }) => theme.colors.lightColor};
    border-color: '#787878';
  }
`;

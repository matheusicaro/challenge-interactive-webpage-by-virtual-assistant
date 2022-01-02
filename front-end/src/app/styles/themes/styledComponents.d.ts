import 'styled-components';
import { ThemeNamesType } from '.';

export module 'styled-components' {
  export interface DefaultTheme {
    title: ThemeNamesType;
    colors: {
      background: {
        primary: string;
      };

      text: {
        title: string;
        paragraph: string;
      };
    };
  }
}

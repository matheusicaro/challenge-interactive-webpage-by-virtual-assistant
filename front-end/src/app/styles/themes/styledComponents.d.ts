import 'styled-components';
import { ThemeNamesType } from '.';

export module 'styled-components' {
  export interface DefaultTheme {
    title: ThemeNamesType;
    colors: {
      background: {
        primary: string;
        chat: {
          messages: {
            container: string;
            bot: string;
          };
          launcher: {
            container: string;
          };
        };
        primaryReverse: string;
      };

      text: {
        title: string;
        paragraph: string;
        paragraphReverse: string;
        chat: {
          header: string;
          userMessage: string;
        };
      };
    };
  }
}

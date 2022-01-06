import 'styled-components';
import { ThemeNamesType } from '.';

export module 'styled-components' {
  export interface DefaultTheme {
    title: ThemeNamesType;
    colors: {
      darkColor: string;
      lightColor: string;

      background: {
        primary: string;
        secondary: string;

        chat: {
          messages: {
            container: string;
            bot: string;
          };
        };
        primaryReverse: string;
        appBar: string;
        banner: {
          primary: string;
          primaryReverse: string;
        };
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

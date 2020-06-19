import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
      quinary: string;
      senary: string;
      text: string;
      gray: string;
      chatInput: string;
      symbol: string;
      notification: string;
      discord: string;
      mentionDetail: string;
      mentionMessage: string;
      link: string;
      rocketseat: string;
    };
  }
}

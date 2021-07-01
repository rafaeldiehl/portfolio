import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      backgroundPrimary: string;
      backgroundSecondary: string;
      backgroundTertiary: string;

      textPrimary: string;
      textSecondary: string;
    }
  }
}
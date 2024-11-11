export type ThemeName = 'light' | 'dark';

type ColorKey = 'primary' | 'background' | 'secondary' | 'third';

interface Theme {
  name: string;
  color: Record<ColorKey, string>;
}

export const light: Theme = {
  name: 'ligth',
  color: {
    primary: 'brown',
    background: 'lightgray',
    secondary: 'blue',
    third: 'grin',
  },
};

export const dark: Theme = {
  name: 'dark',
  color: {
    primary: 'coral',
    background: 'midnightblue',
    secondary: 'darkblue',
    third: 'darkgreen',
  },
};

export const getTheme = (themeName: ThemeName): Theme => {
  switch (themeName) {
    case 'light':
      return light;
    case 'dark':
      return dark;
  }
};

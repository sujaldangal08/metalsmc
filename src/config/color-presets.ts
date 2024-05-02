import { useTheme } from 'next-themes';

export const presetLight = {
  lighter: '#d7e3fe',
  light: '#37A05F',
  default: '#37A05F',
  dark: '#37A05F',
  foreground: '#ffffff',
};

export const presetDark = {
  lighter: '#d7e3fe',
  light: '#37A05F',
  default: '#37A05F',
  dark: '#37A05F',
  foreground: '#ffffff',
};

// defaults from global css line 38
export const DEFAULT_PRESET_COLORS = {
  lighter: '#d7e3fe',
  light: '#37A05F',
  default: '#37A05F',
  dark: '#37A05F',
  foreground: '#ffffff',
};

export const DEFAULT_PRESET_COLOR_NAME = 'Green';

export const usePresets = () => {
  const { theme } = useTheme();

  return [
    {
      name: DEFAULT_PRESET_COLOR_NAME,
      colors: DEFAULT_PRESET_COLORS,
    },
    {
      name: 'Black',
      colors: {
        lighter: theme === 'light' ? presetLight.lighter : presetDark.lighter,
        light: theme === 'light' ? presetLight.light : presetDark.light,
        default: theme === 'light' ? presetLight.default : presetDark.default,
        dark: theme === 'light' ? presetLight.dark : presetDark.dark,
        foreground:
          theme === 'light' ? presetLight.foreground : presetDark.foreground,
      },
    },
  ];
};

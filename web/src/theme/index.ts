import { MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = {
  colorScheme: 'dark',
  fontFamily: 'Changa',
  shadows: { sm: '1px 1px 3px rgba(0, 0, 0, 0.5)' },
  primaryColor: 'orange',
  colors: {
    orange: [
      "#fff9e0",
      "#fff0ca",
      "#ffdf99",
      "#ffce62",
      "#ffc342",
      "#ffb618",
      "#ffb102",
      "#e49b00",
      "#ca8800",
      "#af7500"
    ],
    dark: [
      "#f0f5fa",
      "#e1e8ee",
      "#becfdd",
      "#97b5cd",
      "#789fc0",
      "#6491b8",
      "#588ab5",
      "#193246",
      "#3C5B72",
      "#193246"
    ]
  },
  components: {
    Button: {
      styles: {
        root: {
          border: 'none',
        },
      },
    },
  },
};

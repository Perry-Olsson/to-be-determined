import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#d9dadb',
    textSecondary: '#13181c',
    primary: '#ffffff',
    secondary: '#a0a0a3',
    logo: '#c291a8',
  },
  fontSizes: {
    body: 16,
    subheading: 18,
  },
  fonts:{
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  }
};

export default theme;
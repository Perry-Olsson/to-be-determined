import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#13181c',
    textSecondary: '#ffffff',
    primary: '#ffffff',
    secondary: '#404040',
    logo: '#dba7b9',
  },
  fontSizes: {
    body: 16,
    subheading: 22,
    button: 20
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
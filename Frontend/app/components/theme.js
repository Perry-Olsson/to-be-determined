import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#13181c',
    textSecondary: '#ffffff',
    textLightGray: '#bdbdbd',
    textDarkGray: '#707070',
    primary: '#ffffff',
    secondary: '#404040',
    opaqueGray: 'rgba(105, 105, 105, 0.7)',
    logo: '#deb1c6',
  },
  fontSizes: {
    body: 16,
    subheading: 22,
    form: 20
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
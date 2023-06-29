import { ThemeProvider } from 'styled-components';
import GlobalStyles from './assets/styles/global';
import theme from './assets/styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <h1>MyContacts</h1>
    </ThemeProvider>
  );
}

export default App;

import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { Transactions } from "./pages/Transactions/Transactions";
import { TransactionsProvider } from "./contexts/transactionsContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  );
}

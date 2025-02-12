import { TransactionsContext } from "../../contexts/transactionsContext";
import { Header } from "../../components/Header/Header";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { Summary } from "../../components/Summary/Summary";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./stylesTransactions";
import { dateFormater, priceFormater } from "../../utils/formater";
import { useContextSelector } from "use-context-selector";


export function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions;
  })


  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {priceFormater.format(transaction.price)}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{dateFormater.format(new Date(transaction.createdAt))}</td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}

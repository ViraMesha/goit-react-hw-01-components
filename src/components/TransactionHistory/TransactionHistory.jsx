import PropTypes from "prop-types";
import { TransactionTable, TransactionTitles,  TransactionItem, TransactionTableRow } from "./TransactionHistory.styled";

const TransactionHistory = ({items}) => {
return (
    <div>
        <TransactionTable>
  <TransactionTitles>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </TransactionTitles>

  <tbody>
  {items.map(({id, type, amount, currency}) => (
    <TransactionTableRow key={id}>
      <TransactionItem>{type}</TransactionItem>
      <TransactionItem>{amount}</TransactionItem>
      <TransactionItem>{currency}</TransactionItem>
      </TransactionTableRow>
        ))}
  </tbody>
</TransactionTable>
    </div>
)
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
                id: PropTypes.string,
                type: PropTypes.string,
                amount: PropTypes.string,
                currency: PropTypes.string
            }
        )
    ).isRequired
}

export default TransactionHistory;
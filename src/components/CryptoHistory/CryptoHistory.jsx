import { formatDate } from 'helpers/formatDate';
import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';

export const CryptoHistory = ({items}) => {
  return <BaseTable>
  <THead>
    <tr>
      <Th>№</Th>
      <Th>PRICE</Th>
      <Th>AMOUNT</Th>
      <Th>DATE</Th>
    </tr>
  </THead>

  <tbody>
    {items && items.map(({id, price, amount, date}, index)=>(
      <Tr key = {id}>
      <Td>{index+1}</Td>
      <Td>{price}</Td>
      <Td>{amount}</Td>
      <Td>{formatDate(date)}</Td>
    </Tr>
    ))}
  </tbody>
</BaseTable>;
};

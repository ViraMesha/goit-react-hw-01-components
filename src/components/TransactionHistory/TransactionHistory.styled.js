import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  width: 700px;
  text-align: center;
  border: 1px solid grey;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: white;
`;

export const TransactionTitles = styled.thead`
  background-color: #08bad2;
  color: white;
  text-transform: uppercase;
  height: 40px;
`;

export const TransactionTableRow = styled.tr`
color: #84888b;
  &:nth-of-type(even) {
    background-color: #ecf1f4;
  }
`;

export const TransactionItem = styled.td`
  border: 1px solid #08bad2;
  padding-bottom: 10px;
  padding-top: 10px;
`;

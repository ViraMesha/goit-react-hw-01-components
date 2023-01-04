import styled from '@emotion/styled';

export const ListItem = styled.li`
  background-color: #fff;
  align-items: center;
  border: 1px solid grey;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  gap: 7px;
  margin-bottom: 10px;
  padding: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Status = styled.span`
  border-radius: 50%;
  height: 10px;
  width: 10px;

  background-color: ${props => (props.isActive ? 'green' : 'red')};
`;

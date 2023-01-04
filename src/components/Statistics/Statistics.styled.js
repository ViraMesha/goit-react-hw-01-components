import styled from '@emotion/styled';

export const StatisticsWrapper = styled.section`
  width: 300px;
  text-align: center;
  background-color: white;
  border: 1px solid grey;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding-top: 20px;
  margin-bottom: 20px;
`;
export const StatsList = styled.ul`
  display: flex;
  margin-top: 20px;
  color: white;
`;

export const StatsTitle = styled.h2`
  color: #5a6369;
  text-transform: uppercase;
`;

export const StatsItem = styled.li`
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border: 1px solid grey;
  width: 100%;
`;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export { getRandomHexColor };

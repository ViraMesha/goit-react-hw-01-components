import styled from '@emotion/styled';

export const ProfileWrapper = styled.div`
  background-color: white;
  border: 1px solid grey;
  width: 300px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding-top: 20px;
  margin-bottom: 20px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  border-radius: 50%;
  border: 1px solid grey;
  margin-bottom: 20px;
`;

export const UserName = styled.p`
  font-weight: 700;
  font-size: 20px;
`;

export const UserInfo = styled.p`
  color: #979ca0;
`;

export const Stats = styled.ul`
  display: flex;
  height: 100px;
  align-items: center;
  background-color: #f3f6f9;
  margin-top: 20px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border: 1px solid grey;
  height: 100%;
  width: 100%;
`;

export const StatsLabel = styled.span`
  color: #979ca0;
`;

export const StatsQuantity = styled.span`
  font-weight: 700;
`;

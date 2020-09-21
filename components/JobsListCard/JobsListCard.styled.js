import styled from 'styled-components';
export const JobsListCardWrapper = styled.div`
  min-height: 114px;
  background: white;
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;
  transition: 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  }

  .job {
    &__image {
      background: url(${(props) => props.logo}) no-repeat;
      background-size: contain;
      height: 100%;
      width: 30%;
      flex-grow: 1;
      border-radius: 4px;
    }
    &__company {
      font-size: 12px;
      font-weight: bold;
      color: #334680;
      padding-bottom: 8px;
    }
    &__title {
      font-size: 18px;
      font-weight: normal;
      color: #334680;
      padding-bottom: 8px;
    }
    &__type {
      width: 65px;
      font-size: 12px;
      font-weight: bold;
      color: #334680;
      border: 1px solid #334680;
      border-radius: 4px;
      padding: 6px;
    }
    &__right {
      display: flex;
      justify-content: space-between;
      align-self: end;
      width: 80%;
    }
    &__location {
      display: flex;
      /* width: 100%; */
      justify-content: space-between;
      font-size: 12px;
    }
    &__time {
      display: flex;
      font-size: 12px;
    }
  }
`;

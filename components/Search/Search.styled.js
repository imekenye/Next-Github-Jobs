import styled from 'styled-components';

export const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 138px;
  border-radius: 8px;
  background: url('images/building.webp');
  .search {
    position: absolute;
    top: 30%;
    left: 50%;
    bottom: 50%;
    transform: translate3d(-50%, 0, 0);
    .briefcase {
      position: absolute;
      height: 100%;
      top: 50%;
      left: 17.5px;
      color: #b9bdcf;
    }
    input {
      border-radius: 4px;
      border: none;
      width: 60vw;
      height: 55px;
      padding-left: 48px;
      outline: none;
      &::placeholder {
        font-size: 12px;
        color: #b9bdcf;
      }
    }
    button {
      position: absolute;
      width: 146px;
      height: 47px;
      right: 1%;
      top: 15%;
      outline: none;
      border: none;
      border-radius: 4px;
      background: #1e86ff;
      color: white;
      font-size: 16px;
    }
  }
`;

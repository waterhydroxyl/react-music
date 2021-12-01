import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  height: 75px;
  background-color: #242424;

  .content {
    display: flex;
    justify-content: space-between;
    /* background-color: blue; */
    height: 70px;
  }

  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
`;

export const HeaderLeft = styled.div`
  font-size: 14px;
  display: flex;
  .logo {
    display: block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
    text-indent: -9999px;
  }
  .select-list {
    display: flex;
    line-height: 70px;

    .select-item {
      position: relative;
      a {
        display: block;
        padding: 0 20px;
        color: #ccc;
      }

      :last-of-type a {
        position: relative;
        ::after {
          position: absolute;
          content: '';
          width: 28px;
          height: 19px;
          background-image: url(${require('@/assets/img/sprite_01.png').default});
          background-position: -190px 0;
          top: 20px;
          right: -15px;
        }
      }

      &:hover a,
      .active {
        color: #fff;
        background: #000;
        text-decoration: none;
      }

      .active .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-position: -226px 0;
      }
    }
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  color: #ccc;
  font-size: 12px;

  .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;

    input {
      &::placeholder {
        font-size: 12px;
      }
    }
  }

  .center {
    width: 90px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border: 1px solid #666;
    border-radius: 16px;
    margin: 0 16px;
    cursor: pointer;
    color: #666;
    background-color: transparent;
    &:hover {
      color: #fff;
      border-color: #fff;
    }

  }

  .login {
    position: relative;
    cursor: pointer;

    &:hover {
      ::after {
        content: '';
        position: absolute;
        left: -73px;
        width: 158px;
        top: 30px;
        background: #2b2b2b;
        border: 1px solid #202020;
        box-shadow: 0 8px 24px 0 rgb(0 0 0 / 50%);
        border-radius: 4px;
      }

      ::before {
      content: '';
      position: absolute;
      overflow: hidden;
      top: 22px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 0;
      line-height: 0;
      border-color: transparent transparent #434343 transparent;
      border-style: solid;
      border-width: 4px;
    }
    }
  }
`;

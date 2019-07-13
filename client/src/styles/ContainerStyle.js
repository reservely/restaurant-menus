
import styled from 'styled-components';

export const RestaurantProfileMenu = styled.section`
  position: relative;
  display: block;
  -webkit-locale: "en";
`;

export const DivFilterNone = styled.div`
  filter: none;
`;

export const SectionHeader = styled.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  color: #2d333f;
  border-bottom: 1px solid #d8d9db;
  padding-bottom: 16px;
  margin: 0 0 16px 0;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

export const MenuNav = styled.div`
  margin-top: calc(-1 * 16px);
  padding-bottom: 16px;
  border-bottom: 1px solid #d8d9db;
`;

export const MenusContainerCollapsed = styled.div`
  ${props => (props.menuCollapse ? (`
      height: 400px;
      overflow: hidden;
      position: relative;
    `) : '')};
`;

export const MenuContainerGradient = styled.div`
${props => (props.menuCollapse ? (
    `"height: 400px; overflow: hidden; position: relative;"
    content: " ";
    z-index: 10;
    display: block;
    position: absolute;
    height: 200px;
    left: 0;
    bottom: 0;
    width: 100%;
    background-image: -webkit-gradient(linear,left bottom,left top,from(#fff),to(rgba(255,255,255,0)));
    background-image: linear-gradient(to top,#fff,rgba(255,255,255,0));
    background-color: rgba(255,255,255,.2);
    `
  )
    : `padding: 16px;
    cursor: default
    `
  )};
`;

export const ButtonCenter = styled.div`
  text-align: center;
`;

export const ButtonStatic = styled.button`
  color: inherit;
  font: inherit;
  cursor: pointer;
  margin: 0 auto 32px auto;
  padding: 16px;
  font-size: 16px;
  line-height: 1rem;
  font-weight: 500;
  width: 18rem;
  border-radius: 2px;
  display: inline-block;
  box-sizing: border-box;
  border: 1px solid #d8d9db;
  background: 0 0;
  box-sizing: border-box;
  text-align: center;
  :hover {
    border: 2px solid #da3743;
    padding: calc(1rem - 1px);
  }
  :focus {
  outline: 0;
  }
`;

export const ButtonFloat = styled(ButtonStatic)`
  position: fixed;
  bottom: 32px;
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  box-shadow: rgba(51,51,51,.2) 0 2px 4px;
  background-color: #fff
`;

export const MenuFooter = styled.div`
  font-size: 10px;
  font-weight: 500;
  padding-top: 16px;
  padding-bottom: 16px;
  color: #2d333f;
  border-top: 1px solid #d8d9db;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

export const IconText = styled.div`
  display: flex;
  text-overflow: ellipsis;
  text-decoration: inherit;
  margin: 0;
  padding: 0;
`;

export const Icon = styled.div`
  box-sizing: border-box;
  height: 1.5rem;
  width: 1.5rem;
`;

export const WebsiteMenu = styled.div`
  align-self: center;
  margin: 0 0 0 4px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  padding: 0;
  display: block;
  color: #da3743;
  cursor: pointer;
  a {
    color: #da3743;
  }
  a:hover {
    text-decoration: none;
  }
`;

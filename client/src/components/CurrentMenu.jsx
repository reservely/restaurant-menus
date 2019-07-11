/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MenuSection = styled.div`
  padding-top: 16px;
  padding-bottom: 32px;
  border-bottom: 1px solid #d8d9db;
`;
const MenuSectionHeader = styled.div`
  margin: 0;
  margin-bottom: 16px;
`;
const MenuSectionTitle = styled.div`
  margin: 0;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
`;
// const MenuSectionDescription = styled.div`
//   font-size: 14px;
//   line-height: 20px;
//   font-weight: 500;
//   margin-top: 16px;
//   margin-bottom: 0;
// `;
const MenuItems = styled.div`
  -webkit-column-count: 2;
  -moz-column-count: 2;
  column-count: 2;
  -webkit-column-gap: 32px;
  -moz-column-gap: 32px;
  column-gap: 32px;
`;
const MenuItem = styled.div`
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 16px;
  -webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  -moz-column-break-inside: avoid;
  break-inside: avoid;
`;
const MenuPrice = styled.div`
  float: right;
`;
const MenuDescription = styled.p`
  margin-top: 8px;
  margin-bottom: 0;
  font-weight: 400;
`;
// const MenuVariation = styled.div`
//   margin: 0;
//   padding: 0;
// `;


const CurrentMenu = (props) => {
  const { currentMenu } = props;
  const curr = currentMenu.map(menu => (
    <MenuSection key={menu._id}>
      <MenuSectionHeader>
        <MenuSectionTitle>
          { menu.section_name }
        </MenuSectionTitle>
        {/* <MenuSectionDescription>
          { menu.section_description }
        </MenuSectionDescription> */}
      </MenuSectionHeader>
      <MenuItems>
        { menu.items.map(item => (
          <MenuItem key={item._id}>
            <MenuPrice>
              {item.item_price}
            </MenuPrice>
            <div>
              {item.item_name}
            </div>
            <MenuDescription>
              {item.item_description}
            </MenuDescription>
            {/* <MenuVariation>
              {item.item_option}
            </MenuVariation> */}
          </MenuItem>
        ))}
      </MenuItems>
    </MenuSection>
  ));

  return (
    <div>
      {curr}
    </div>
  );
};

CurrentMenu.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  currentMenu: PropTypes.any,
};
CurrentMenu.defaultProps = { currentMenu: [] };
export default CurrentMenu;

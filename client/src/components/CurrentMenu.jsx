import React from 'react';
import PropTypes from 'prop-types';

const CurrentMenu = (props) => {
  const { currentMenu } = props;
  const curr = currentMenu.map(menu => (
    <div key={menu.section_name}>
      { menu.section_name }
      <br />
      { menu.section_description }
      { menu.items.map(item => (
        <div key={item.item_name}>
          {item.item_name}
          <br />
          {item.item_description}
          <br />
          {item.item_price}
        </div>
      ))}
    </div>
  ));

  return (
    <div>
      {curr}
    </div>
  );
};

CurrentMenu.propTypes = {
  currentMenu: PropTypes.node,
};
CurrentMenu.defaultProps = { currentMenu: [] };
export default CurrentMenu;

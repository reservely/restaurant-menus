import React from 'react';
import PropTypes from 'prop-types';

const CurrentMenu = (props) => {
  const { currentMenu } = props;
  const curr = currentMenu.map(menu => (
    <div key={menu.section_name}>
      { menu.section_name }
      <div>
        { menu.section_description }
        { menu.items.map(item => (
          <div key={item.item_name}>
            {item.item_name}
            <div>
              {item.item_description}
            </div>
            {item.item_price}
          </div>
        ))}
      </div>
    </div>
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

/* eslint-disable react/prop-types */
import React from 'react';
import CurrentMenu from './CurrentMenu';


class CurrentMenuController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { restaurantData, currentMenu, handleCurrentMenu } = this.props;
    if (!restaurantData) {
      return <div />;
    }
    return (
      <CurrentMenu
        currentMenu={currentMenu}
        handleCurrentMenu={handleCurrentMenu}
        restaurantData={restaurantData}
      />
    );
  }
}

export default CurrentMenuController;

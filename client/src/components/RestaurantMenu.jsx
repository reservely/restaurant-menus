import React from 'react';

class RestaurantMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: 'Congrats. Your React is working.',
    };
  }

  render() {
    const { temp } = this.state;
    return (
      <div>
        {temp}
      </div>
    );
  }
}

export default RestaurantMenu;

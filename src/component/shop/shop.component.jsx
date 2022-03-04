import React from "react";
import SHOP_DATA from "./SHOP_DATA";
import { CollectionPreview } from "./Collections-preview.component";
class Shop extends React.Component {
  constructor() {
    super();
    this.state = {
      Collections: SHOP_DATA,
    };
  }

  render() {
    const data = this.state.Collections;
    return (
      <div className="shop-page">
        {data.map(({ id, ...otherprops }) => (
          <CollectionPreview key={id} {...otherprops} />
        ))}
      </div>
    );
  }
}

export default Shop;

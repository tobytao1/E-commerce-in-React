import React from "react";
import "./collections-preview.styles.scss";
import { CollectionItem } from "./collections-item.component";

export const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherprops }) => (
            <CollectionItem key={id} {...otherprops} />
          ))}
      </div>
    </div>
  );
};

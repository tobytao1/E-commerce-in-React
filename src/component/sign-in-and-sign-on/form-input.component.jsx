import React from "react";
import "./form-input.styles.scss";

export const FormInput = ({ changeHandler, label, ...otherprops }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherprops} />
      {label ? (
        <label
          className={`${
            otherprops.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};
// import React from "react";
// import "./form-input.styles.scss";

// export const FormInput = ({ changeHandler, label, ...otherprops }) => {
//   return (
//     <div className="group">
//       <input className="form-input" onChange={changeHandler} {...otherprops} />
//       {label ? (
//         <label
//           className={`${
//             otherprops.value.length ? "shrink" : ""
//           } form-input-label`}
//         >
//           {label}
//         </label>
//       ) : null}
//     </div>
//   );
// };

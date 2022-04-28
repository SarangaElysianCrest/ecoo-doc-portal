import classNames from "classnames";
import React from "react";

export default function RoundedButton({ ref, onClick, ...props }) {
  const classes = classNames("rounded-full align-middle", props.className);
  return (
    <button ref={ref} onClick={onClick} className={classes}>
      {props.children}
    </button>
  );
}

import React, { useState } from "react";

const Accordeon = (props) => {
  const { title, children } = props;
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={`accordeon ${isOpen ? "open" : ""}`}>
      <div className="acc-title" onClick={() => setOpen(!isOpen)}>
        <div className="title"> {title}</div>
        <div className="arrow">{"<"}</div>
      </div>
      {children}
    </div>
  );
};

export default Accordeon;

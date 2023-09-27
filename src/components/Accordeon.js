import React, { useState } from "react";

const Accordeon = (props) => {
  const { title, children } = props;
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={`accordeon ${isOpen ? "open" : ""}`}>
      <div className="title" onClick={() => setOpen(!isOpen)}>
        {title}
      </div>
     {children}
    </div>
  );
};

export default Accordeon;

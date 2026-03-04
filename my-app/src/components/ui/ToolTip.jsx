import React, { useState } from "react";

export default function ToolTip({ children, content, config = {} }) {
  const {
    position = "top",
    trigger = "hover",
    delay = 0,
    maxWidth = "max-w-xs",
  } = config;

  const [visible, setVisible] = useState(false);

  const showTip = () => {
    setTimeout(() => setVisible(true), delay);
  };

  const hideTip = () => {
    setVisible(false);
  };

  const triggerProps =
    trigger === "click"
      ? { onClick: () => setVisible(!visible) }
      : { onMouseEnter: showTip, onMouseLeave: hideTip };

  const positionStyles = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  return (
    <div className="relative flex " {...triggerProps}>
      {children}

      {visible && (
        <div
          className={`absolute z-50 px-3 py-2 text-sm text-white bg-gray-900 rounded-md shadow-lg 
          ${maxWidth} ${positionStyles[position]}
          w-max sm:text-xs md:text-sm`}
        >
          {content}
        </div>
      )}
    </div>
  );
}

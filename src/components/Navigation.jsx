import React from "react";

export const Navigation = React.forwardRef(
  (props, ref) => {
    return (
      <nav ref={ref} tabIndex="-1">
        <p>Navigation:</p>
        <a href="https://linkedin.com">LinkedIn</a>
        &nbsp;
        <a href="https://blog.activenode.de">
          Mein Blog
        </a>
      </nav>
    );
  }
);

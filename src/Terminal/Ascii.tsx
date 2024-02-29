import React from "react";

export const Ascii: React.FC<
  { children?: React.ReactChild | string[] | string | undefined }
> = (props) => {
  return (
    <pre style={{ fontSize: ".8rem", lineHeight: 1.2 }}>{props.children}</pre>
  );
};

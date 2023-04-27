import React from "react";

type Props = {
  text: string;
};

const Tag = (props: Props) => {
  return (
    <div className="flex items-center gap-1 p-2 mr-4 text-white bg-blue-900 rounded-lg shadow-md text-md">
      <span className="text-lg text-background">#</span> {props.text}
    </div>
  );
};

export default Tag;

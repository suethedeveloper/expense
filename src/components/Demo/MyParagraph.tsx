import React from "react";

const MyParagraph = (props: {children: React.ReactNode}) => {
    console.log('MyParagraph RUNNING');
    return <p>{props.children}</p>;
  };
  
  export default MyParagraph;
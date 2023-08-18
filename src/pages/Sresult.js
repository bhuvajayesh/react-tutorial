import React from "react";

const Sresult = (props) => {
  const img = `https://source.unsplash.com/600x400?${props.imgName}`;
  return (
    <>
      <div className="my-4">
        <img src={img} alt="image" className="m-auto" />
      </div>
    </>
  );
};

export default Sresult;

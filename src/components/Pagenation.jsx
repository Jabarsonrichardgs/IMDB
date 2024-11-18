import React, { useState } from "react";

const Pagenation = ({page ,onPrev ,onNext}) => {

  return (
    <div className="flex justify-center page ">
      <div className="prev border p-2" onClick={onPrev}>
        Previous
      </div>
      <div className="num border p-2">{page}</div>
      <div className="next border p-2" onClick={onNext} >
        next
      </div>
    </div>
  );
};

export default Pagenation;

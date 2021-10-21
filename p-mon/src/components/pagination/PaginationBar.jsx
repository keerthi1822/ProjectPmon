import React from "react";
import NextPrevBtns from "../pagination/NextPrevBtns";
import CardsPerPageSelection from "../pagination/CardsPerPageSelection";

const PaginationBar = ({
  setLimitValue,
  next,
  setnextUri,
  prev,
  limit,
  setOffset,
}) => {
  return (
    <div className="pagination-bar">
      <CardsPerPageSelection setLimitValue={setLimitValue} />

      <NextPrevBtns
        next={next}
        setnextUri={setnextUri}
        prev={prev}
        limit={limit}
        setOffset={setOffset}
      />
    </div>
  );
};

export default PaginationBar;

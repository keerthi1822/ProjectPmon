import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const NextPrevBtns = ({ next, setnextUri, prev, limit, setOffset }) => {
  const { page } = useParams();
  const history = useHistory();
  const [pageNo, setPageNo] = useState(0 || Number(page));

  const handlePrevious = () => {
    const pageNo = Number(page) - 1;
    setPageNo(pageNo);
    setnextUri(prev);
    if (pageNo < 0) return;
    history.push(`/page/${pageNo}`);
  };

  const handleNext = () => {
    const pageNo = Number(page) + 1;
    if (pageNo === 0) setPageNo(pageNo);
    setPageNo(pageNo);
    setnextUri(next);
    history.push(`/page/${pageNo}`);
  };

  return (
    <>
      <div className="paginating-Links">
        {/* <NavLink to={`/page/${pageNo}`}>Previous</NavLink>
        <NavLink to={`/page/${pageNo}`}>Next</NavLink> */}
        {pageNo === 0 ? null : (
          <button onClick={handlePrevious}>
            <i className="fas fa-angle-left"></i>previous
          </button>
        )}
        <button onClick={handleNext}>
          next<i className="fas fa-angle-right"></i>
        </button>
      </div>
    </>
  );
};

export default NextPrevBtns;

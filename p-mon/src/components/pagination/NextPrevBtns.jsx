import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const NextPrevBtns = ({ next, setnextUri, prev }) => {
  const { page } = useParams();
  const history = useHistory();
  const [pageNo, setPageNo] = useState(Number(page) || 1);
  const handlePrevious = () => {
    setPageNo(pageNo - 1);
    setnextUri(prev);
    if (pageNo <= 0) return;
    history.push(`/page/${pageNo}`);
  };
  const handleNext = () => {
    if (pageNo === 0) setPageNo(pageNo);
    setPageNo(pageNo + 1);
    setnextUri(next);
    history.push(`/page/${pageNo}`);
  };
  return (
    <>
      <div className="paginating-Links">
        {/* <NavLink to={`/page/${pageNo}`}>Previous</NavLink>
        <NavLink to={`/page/${pageNo}`}>Next</NavLink> */}
        {pageNo === 1 ? null : (
          <button onClick={handlePrevious}>
            <i class="fas fa-angle-left"></i>previous
          </button>
        )}
        <button onClick={handleNext}>
          next<i class="fas fa-angle-right"></i>
        </button>
      </div>
    </>
  );
};

export default NextPrevBtns;

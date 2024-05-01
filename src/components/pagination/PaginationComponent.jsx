import { useState } from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { Link } from 'react-router-dom';

const PaginationComponent = ({ currentPage, totalPage }) => {
    const query = new URLSearchParams(window.location.search);
    const [currentPageNo, setcurrentPageNo] = useState(query.get("page"));


    return (
        <div className='mt-5 space-x-2 text-white ms-auto w-fit'>
            <Link
                onClick={() => setcurrentPageNo(`${currentPageNo - 1}`)}
                to={location.pathname + `?page=${currentPageNo - 1}`}>
                <BiChevronLeft
                    className={currentPageNo > 1 ? 'inline text-primaryOrangeAccent text-2xl' : "hidden"} />
            </Link>
            {
                Array
                    .from({ length: 5 })
                    .map(
                        (item, index) =>
                            <Link
                                onClick={() => setcurrentPageNo(`${index + 1}`)}
                                to={location.pathname + `?page=${index + 1}`}
                                key={index}
                                className={`inline p-2 ${currentPageNo === (index + 1).toString() ? "bg-primaryOrangeAccent" : "text-primaryOrangeAccent"} rounded-md`}>
                                {index + 1}
                            </Link>)
            }
            <Link
                onClick={() => setcurrentPageNo(`${currentPageNo + 1}`)}
                to={location.pathname + `?page=${currentPageNo + 1}`}>
                <BiChevronRight
                    className={'inline text-primaryOrangeAccent text-2xl'} />
            </Link>
        </div>
    )
}

export default PaginationComponent

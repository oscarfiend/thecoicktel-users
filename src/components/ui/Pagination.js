import React from 'react'
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../redux/actions/userActions';
import './pagination.css';


const Pagination = () => {
    const {totalPages} = useSelector(state => state)
    const dispatch = useDispatch()


    return (
        <ReactPaginate
        pageCount={totalPages}
        onPageChange={(p)=>dispatch(getUsers(p.selected+1))} 
        previousLabel={"← Previous"}
        nextLabel={"Next →"}  
        containerClassName={"pagination"}
        pageClassName={"pagination__link"}
        activeClassName={"pagination__link--active"}
        activeLinkClassName={"active_link"}
        />
    )
}

export default Pagination

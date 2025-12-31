import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Paginate = () => {
  // states
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  // limit
  const limit = 5;

  // function
  const fetchComments = async() => {
    try{
      const resp = await axios.get(`https://jsonplaceholder.typicode.com/comments`, {
        params: {
          _limit: limit,
          _page : currentPage
        }
      });
      setComments(resp.data);
      // Total count from header response
      const totalCount = resp.headers['x-total-count'];
            setTotalPages(Math.ceil(totalCount/limit));
    } catch(err){
      console.error(err);
    }
  }

  useEffect(() => {
    fetchComments();
  }, [currentPage])
  return (
    <>
      <div>
        <h2>Assignment - Pagination</h2>
        <ul>
          {
            comments.map((msg) => (
              <li key={msg.id}>
                <strong>{msg.name}</strong>
                <p>{msg.email}</p>
                <p>{msg.body}</p>
              </li>
            ))
          }
        </ul>
        {/* Pagination Actions */}
        <div>
          <button type='button' 
            disabled = {currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >pre</button>
          {
            Array.from({length: totalPages}, (_,x) => x + 1).map((page) => (
              <button key={page} onClick={() => setCurrentPage(page)}>{page}</button>
            ))
          }
          <button type='button' 
            disabled = {currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >next</button>
        </div>
      </div>
    </>
  )
}

export default Paginate
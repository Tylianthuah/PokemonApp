import React from 'react'

export const Pagination = ({goToNextPage, goToPrevPage}) => {
  return (
    <div className='pagination'>
        <button className='prevButton' onClick={goToPrevPage}>Prev</button>
        <button className='nextButton' onClick={goToNextPage}>Next</button>       
    </div>
  )
}

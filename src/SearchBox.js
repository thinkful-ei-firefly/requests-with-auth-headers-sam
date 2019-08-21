import React from 'react'

const SearchBox = (props) => {
  return (
    <form className="searchForm" onSubmit={(event) => props.handleSubmit(event)}>
      <label>
        Name: 
        <input type="text" name="searchedName"></input>
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}

export default SearchBox

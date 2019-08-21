import React from 'react'

const Results = (props) => {

  const {results} = props

  let data

  if (results.length) {
    data = results.map((item, i) => {
      return (
        <li key={i}>{item.full_name}</li>
      );
    })
  }

  return (
    <div>
      <h2> Results </h2>
      <p>{props.loading ? "loading" : ""}</p>
      <ul>{data}</ul>
    </div>
  )
}

export default Results

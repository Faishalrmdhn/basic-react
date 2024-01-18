import React from 'react'

function Lists() {
    let items = ['ballpoint', 'book', 'sharpener']
    let arrOfItems = items.map((items, idx)=>{
        return <li key={idx}>{items}</li>
    })
  return (
    <>
        <div>List</div>
        {arrOfItems}
    </>
  )
}

export default Lists
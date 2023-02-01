import React from 'react';

const Nav = (props) => {
  const { category, toggleTitle} = props;
  return (
    <div className='nav'>
      <ol>
        {
          category.map((elem, index) => {
            return <div> 
              <li
              onClick={() => toggleTitle(elem.id, elem.title)}
              key={index}>
              {elem.title}
            </li>
            </div>
          })
        }
      </ol>
    </div>
  )
}
export default Nav;
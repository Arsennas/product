import React,{useState} from 'react';

const Search = (props) => {
  const[value,setValue] = useState('')

  const handlerSubmit = (event) => {
    event.preventDefault()
    setValue('')
    props.searchData(value)
  }
  return(
    <form onSubmit={handlerSubmit}>
      <input className='input'
       value={value} 
       onChange={(e) => 
       setValue(e.target.value)} 
       type="text"/>
      <button type='submit'>search</button>
    </form>
  )
}
export default Search;
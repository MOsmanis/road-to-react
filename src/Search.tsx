import {  FormEventHandler} from 'react'

interface SearchProps {
      onSearch: FormEventHandler,
      search: string
}

const Search = (props: SearchProps) => {
  
    return (<div>
      <label htmlFor="search">Search</label><br/>
      <input id="search" type="text" value={props.search} onChange={props.onSearch}/> 
    </div>);
  }
  
  export default Search
  
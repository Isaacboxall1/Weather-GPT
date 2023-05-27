import React from 'react'
import './searchbar.css'

interface SearchBarProps {
    updateRequest: (value:string) => void;
}

export default function SearchBar(props: SearchBarProps) {
    const [search, setSearch] = React.useState<string>('')
    // console.log(search)
  return (
    <div id="searchbar">
        <input type='text' placeholder='Search city' onChange={(e) => setSearch(e.target.value) } />
        <button onClick={()=> search ? props.updateRequest(search): null}>Submit</button>
    </div>
  )
}


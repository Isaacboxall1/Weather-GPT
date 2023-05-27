import React from 'react'
import './searchbar.css'

interface SearchBarProps {
    updateRequest: (value:string) => void;
}

export default function SearchBar(props: SearchBarProps) {
  const [search, setSearch] = React.useState<string>('')

  const handleSubmit = () => {
      if (search) {
          props.updateRequest(search);
          setSearch('');
      }
  }

  return (
      <div id="searchbar">
          <input 
              type='text' 
              placeholder='Search city' 
              value={search} 
              onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={handleSubmit}>Submit</button>
      </div>
  )
}



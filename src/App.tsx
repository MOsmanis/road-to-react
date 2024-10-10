import Search from './Search.tsx';
import List, { Story } from './ReactLists.tsx';
import './App.css'
import { useState } from 'react';

const [searchText, setSearchText] = useState('React');

const handleSearch = (event: React.FormEvent<HTMLInputElement>) => {
  setSearchText(event.currentTarget.value);
}

const App = () => {
  const stories: Story[] = [
    {
        title: 'React',
        url: 'https://reactjs.org/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        id: 0,
    },
    {
        title: 'Redux',
        url: 'https://redux.js.org/',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        id: 1,
    }
]

const filteredStories = stories.filter((s: Story) => s.title.toLowerCase().includes(searchText.toLowerCase()));

  return (
  <div>
    <Search search={searchText} onSearch={handleSearch}/>
    <hr />
    <List list={filteredStories}/>
  </div>);
}

export default App

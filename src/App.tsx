import InputWithLabel from './InputWithLabel.tsx';
import List, { Story } from './ReactLists.tsx';
import './App.css'
import { useState,useEffect } from 'react';

const useStorageState = (initialState: any, key: any) => {
  const [value, setValue] = useState((localStorage.getItem(key) ?? initialState));
  useEffect(() => {localStorage.setItem(key, value)}, [value, key]);

  return [value, setValue];
}

const App = () => {
// useState((localStorage.getItem('search') ?? 'React'));
  const [searchText, setSearchText] = useStorageState('React', 'search');

  const handleSearch = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setSearchText(value);
  }

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
  <>
    <InputWithLabel key="search" isFocused value={searchText} onInputChange={handleSearch}><strong>Search:</strong></InputWithLabel>
    <hr />
    <List list={filteredStories}/>
  </>);
}

export default App

import { useState } from 'react'
import './App.css'

const App = () => {
  const defaultTitle = 'React';
  const [title, setTitle] = useState(defaultTitle);
  const formatTitle = (text) => text == '' ? defaultTitle : `${text} 😉`;
  const changeTitle = text => {
    setTitle(formatTitle(text));
  }

  // Option 1 set text in real time
  const handleChange = event => {
    changeTitle(event.target.value);
  }
  const getOption1 = () => <div>
      <h1>Hello {title}</h1>
      <label htmlFor="name">What is your name?</label><br/>
      <input id="name" type="text" onChange={handleChange}/> 
    </div>

  // Option 2 js object destructuring
  const getWelcome = (text) => { return {greeting : 'Hey', title : text};}
  const welcome = getWelcome(title)
  const Title = ({greeting, title}) => <h1>{greeting} {title}</h1>
  const getOption2 = () => <div>
      <Title {...welcome} />
      <label htmlFor="name">What is your name?</label><br/>
      <input id="name" type="text" onChange={handleChange}/> 
    </div>

  // Option 3 set text on enter
  const submitForm = event => {
    event.preventDefault();
    changeTitle(event.target.name.value);
  }
  const getOption3 = () => <div>
      <Title {...welcome} />
      <form className="commentForm" onSubmit={submitForm}>
        <label htmlFor="name">What is your name?</label><br/>
        <input id="name" type="text"/> 
      </form>
    </div>

  // Option 4 js map 
  const [list, setList] = useState([welcome]);

  const Titles = () => list.map((text) => <Title {...text} />);
  const submitTitle = event => {
    event.preventDefault();
    setList([...list, getWelcome(formatTitle(event.target.name.value))])
  }

  const getOption4 = () => <div>
      <form className="commentForm" onSubmit={submitTitle}>
        <label htmlFor="name">What is your name?</label><br/>
        <input id="name" type="text"/> 
      </form>
      <Titles/>
    </div>

  return (getOption4());
}

export default App

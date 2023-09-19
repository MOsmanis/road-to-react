import { useState } from 'react'
import './App.css'

const App = () => {
  const defaultTitle = 'React';
  const [title, setTitle] = useState(defaultTitle);
  const formatTitle = (text: string) => text == '' ? defaultTitle : `${text} 😉`;
  const changeTitle = (text: string) => {
    setTitle(formatTitle(text));
  }

  // Option 1 set text in real time
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeTitle(event.target.value);
  }
  
  const getOption1 = () => <div>
      <h1>Hello {title}</h1>
      <label htmlFor="name">What is your name?</label><br/>
      <input id="name" type="text" onChange={handleChange}/> 
    </div>

  // Option 2 js object destructuring
  interface Welcome {
    greeting: string;
    title: string;
  }

  const getWelcome = (text: string) => { return {greeting : 'Hey', title : text};}
  const welcome = getWelcome(title)
  const Title = ({greeting, title}: Welcome, key: number) => <h1 key={key}>{greeting} {title}</h1>
  const getOption2 = () => <div>
      <Title {...welcome} />
      <label htmlFor="name">What is your name?</label><br/>
      <input id="name" type="text" onChange={handleChange}/> 
    </div>

  // Option 3 set text on enter
  interface WelcomeFormElements extends HTMLCollection {
    name: HTMLInputElement;
  }
  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const elements: WelcomeFormElements = event.currentTarget.elements as WelcomeFormElements;
    changeTitle(elements.name.value);
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

  const Titles = () => list.map((text, index) => <Title {...text} key={index} />);
  const submitTitle = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const elements: WelcomeFormElements = event.currentTarget.elements as WelcomeFormElements;
    setList([...list, getWelcome(formatTitle(elements.name.value))])
  }

  const getOption4 = () => <div>
      <form className="commentForm" onSubmit={submitTitle}>
        <label htmlFor="name">What is your name?</label><br/>
        <input id="name" type="text"/> 
      </form>
      <Titles/>
    </div>

  return (getOption1());
}

export default App

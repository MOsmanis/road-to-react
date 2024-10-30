import React from 'react';
import {  FormEventHandler, ReactNode} from 'react'

interface SearchProps {
      key: string,
      onInputChange: FormEventHandler,
      value: string,
      type?: string,
      isFocused: boolean,
      children: ReactNode,
}

const InputWithLabel : React.FC<SearchProps> = ({type='text',...props}) => {
    return (<>
      <label htmlFor={props.key}>{props.children}</label><br/>
      <input id={props.key} type={type} value={props.value} onChange={props.onInputChange} autoFocus ={props.isFocused}/> 
    </>);
  }
  
  export default InputWithLabel

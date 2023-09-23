import * as React from 'react';

interface Framework {
    title: string,
    url: string,
    author: string,
    num_comments: number,
    points: number,
    id: number,
}

const list : Framework[] = [
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

const DescriptionParsed = (item: Object) => {
    const props : string[] = Object.keys(item);
    return ( <div>
                {props.map(p => 
                    <div>
                        <label htmlFor={p}>{`${p} :`}</label>
                        <span id={p} key={p}>{(item as any)[p]}</span>
                    </div>
                )} 
            </div>
    )
}

const Description = (item: Framework) => {
    return ( 
        <div>
            <span><a href={item.url}>{item.title}</a></span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
        </div>
    )
}

const ReactLists = () => {
    return (
        <div>
            <ul>
                {list.map(i => 
                    <li key={i.id}>
                        <Description {...i}/>
                    </li>)
                }
            </ul>
        </div>
    );
}

export default ReactLists
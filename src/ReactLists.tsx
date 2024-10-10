export interface Story {
    title: string,
    url: string,
    author: string,
    num_comments: number,
    points: number,
    id: number,
}

interface ListProps {
    list: Story[],
}

interface ItemProps {
    story: Story,
}
// Different approach for learning
//
// const DescriptionParsed = (item: Object) => {
//     const props : string[] = Object.keys(item);
//     return ( <div>
//                 {props.map(p => 
//                     <div>
//                         <label htmlFor={p}>{`${p} :`}</label>
//                         <span id={p} key={p}>{(item as any)[p]}</span>
//                     </div>
//                 )} 
//             </div>
//     )
// }


const StoryItem = (props: ItemProps) =>

    <li key={props.story.id}>
             <div>
            <span><a href={props.story.url}>{props.story.title}</a></span>
            <span>{props.story.author}</span>
            <span>{props.story.num_comments}</span>
            <span>{props.story.points}</span>
        </div>
    </li>

const List = (props: ListProps) => {
    console.log("list render")
        return (<div>
            <ul>
                {props.list.map(i => <StoryItem story={i}/>)
                }
            </ul>
        </div>);
};

export default List
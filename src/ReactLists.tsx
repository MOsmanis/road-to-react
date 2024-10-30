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


const StoryItem: React.FC<ItemProps> = ({story}) => {
    
    return (
        <li>
            <div>
                <span><a href={story.url}>{story.title}</a></span>
                <span>{story.author}</span>
                <span>{story.num_comments}</span>
                <span>{story.points}</span>
            </div>
        </li>
    )
}
const List: React.FC<ListProps> = ({list}) => {
        return (<div>
            <ul>
                {list.map(i => (<StoryItem key={i.id} story={i}/>))
                }
            </ul>
        </div>);
};

export default List
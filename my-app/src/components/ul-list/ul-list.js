
import ItemList from "../item-list/item-list"
import './ul-list.css';

const UlList = ({data, onDelete}) =>{

   const elements = data.map(item =>{
      const {id, ...itemProps}= item;
      return(
         <ItemList 
         key={id} 
         {...item}
         onDelete ={()=> onDelete(id)}
      
      /> 
      )
   })
return (
   <ul className="app-list list-group">
      {elements}
   </ul>
)
}
export default UlList;
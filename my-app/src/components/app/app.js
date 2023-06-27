import { Component } from 'react';
import SearchPanel from '../search-panel/search-panel';
import AddForm from '../add-form/add-form';
import UlList from '../ul-list/ul-list';

import './app.css';

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
          data: [

        
          ],
   
      }
      this.maxId = 4;
  }
        
        deleteItem = (id) => {
         this.setState(({data}) => {
             return {
                 data: data.filter(item => item.id !== id)
             }
         })
     }


     addItem = (name) => {
        const newItem = {
            name, 
            increase: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }


render(){
    

      return(
      <div className="app"> 
         <div className='search-panel'>
            <SearchPanel/>

         </div>

        <AddForm onAdd={this.addItem}/>   
        <UlList 
        onDelete ={this.deleteItem}
        data={this.state.data}/>

     </div>      


      );
   }
}



export default App;
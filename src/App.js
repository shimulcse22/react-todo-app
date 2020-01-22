import React,{Component} from 'react';
import './App.css';
import ListItems from './Todo/ListItems';
import { bindActionCreators } from 'redux';
import {connect}  from 'react-redux';
import TODO from './Todo/Redux/actionTypes';
import { addItemDispatch,
  deleteItemDispatch,
  setUpdateInputValueDispatch,visibilityDispatch , clearCompletedDispatch,
  toggleTodoDispatch,setShowItems} from './Todo/Redux/dispatch';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItems:{
        text:'',
        key:'',
        completed:false
      },
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.showItems = this.showItems.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this)
  }
  handleInput(e){
    this.setState({
      currentItems:{
        text:e.target.value,
        key:Date.now()
      }
    })
  }

  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItems; 
    this.props.addItemDispatch(newItem);
    if( newItem.text.length !== 0){
      this.setState({
        currentItems:{
          text:'',
          key:''
        },
      })
    }
  }

  deleteItem(key){
    const filterItem = this.props.items.filter(item=>
    item.key!==key);
    this.props.deleteItemDispatch(filterItem) ;
  }
  showItems(e,data){
    e.preventDefault();
    console.log(data);
    this.props.setShowItems(data);
  }
  clearCompleted(){
    console.log("um e")
    this.props.clearCompletedDispatch();
  }
  render(){
    return (
      <div className="App">
        <form id='todo-form' onSubmit={this.addItem}>
            <input 
             type='text'
             placeholder='Enter text' 
             value={this.state.currentItems.text}
             onChange={this.handleInput}
            />
            <button type='submit'> Add </button>
        </form>
        <ListItems 
          setUpdateInputValue={this.setUpdateInputValue}
          items={this.props.items} 
          deleteItem={this.deleteItem}
          {...this.props}
          />
        <div className='showFooter'>
            <div>
            {this.props.items.length !== 0 && 
            <p className='left'> {this.props.items.length} items left    {'  '}
            <button  onClick={(e)=>this.showItems(e,TODO.SHOW_ALL)}> All </button>
            <button  onClick={(e)=>this.showItems(e,TODO.SHOW_ACTIVE)}> Active </button>
            <button  onClick={(e)=>this.showItems(e,TODO.SHOW_COMPLETED)}> Completed </button>
            </p>}
            {this.props.completedItems.length!==0 &&<p className='right' onClick={this.clearCompleted}>
              clear completed
            </p>}
            </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return{
    items: state.items,
    currentItems : state.currentItems,
    activeItems : state.activeItems,
    activeBool: state.activeBool,
    completedItems : state.completedItems,
    completedBool : state.completedBool,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addItemDispatch : addItemDispatch,
    deleteItemDispatch :deleteItemDispatch,
    setUpdateInputValueDispatch : setUpdateInputValueDispatch,
    toggleTodoDispatch : toggleTodoDispatch,
    setShowItems : setShowItems,
    visibilityDispatch : visibilityDispatch,
    clearCompletedDispatch : clearCompletedDispatch
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
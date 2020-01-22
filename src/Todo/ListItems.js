import React,{useState} from 'react';
import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faCheckCircle, faHandHolding } from '@fortawesome/free-solid-svg-icons'

const ListItems =(props) =>{
    
    //console.log("the prop", props);
    const [input,setInput] = useState('');
    const handleSubmit = (e,key,text)=>{
        
        console.log('um here');
        e.preventDefault();
        console.log(input);
        let payload = {};
        if(input === ''){
            payload.data = text;
        }
        else{
            payload.data = input;
        }
        payload.key = key;
        props.setUpdateInputValueDispatch(payload);
        setInput('');
    }
    const items = props.items;
    const listItems = items.map(item=>{
        return (
            <div className='list' key={item.key}>
                <div id = "leftbox" className='faiconsCheck'>
                    <span >
                        <FontAwesomeIcon  
                            icon={ faCheckCircle} 
                            onClick={() => props.toggleTodoDispatch(item.key)}
                        />
                    </span>
                </div>
                <div className = "middlebox" >
                    <div className='middlebox-left'>
                    {!item.visibility&&<span onClick={()=>props.visibilityDispatch(item.key)} style={{textDecoration : item.completed ? 'line-through' : 'none',
                        textShadow : item.completed ? '0px 0px 5px #000' : ''
                    }}>
                        {item.text}
                    </span>}
                    {item.visibility &&
                    <form onSubmit={(e)=>handleSubmit(e,item.key,item.text)}>
                        <input type='text' id={item.key} 
                            defaultValue={item.text}
                            onChange={(e)=>setInput(e.target.value)}
                        />
                    </form> 
                   }
                    </div>
                    {!item.visibility&&<div className='middlebox-right'>
                        <span >
                            <FontAwesomeIcon  
                            icon={ faTrash } 
                            onClick={()=> props.deleteItem(item.key)}
                            
                            />
                        </span>
                    </div>}
                </div>
            </div>
        )
    }
    )
    
    const activeItem = props.activeItems;
    const activeListItems = activeItem.map(item =>{
        return(
            <div className='list' key={item.key}>
                <div className='completed-left'>
                </div>
                <div className='completed-right'>
                    <span>
                        {item.text}
                    </span>
                       
                </div>
            </div>
        )
        
    })
    const completedItem = props.completedItems
    const compltedListItems = completedItem.map(item =>{
        return(
            <div className='list' key={item.key}>
                <div className='completed-left'>
                    <span >
                        <FontAwesomeIcon  
                            icon={ faCheckCircle} 
                            onClick={() => props.toggleTodoDispatch(item.key)}
                        />
                    </span>
                </div>
                <div className='completed-right'>
                    <span style={{textDecoration :  'line-through',
                        textShadow : item.completed ? '0px 0px 5px #000' : ''
                    }}>
                        {item.text}
                    </span>
                       
                </div>
            </div>
        )
    })
    return (
        <>
            {!props.activeBool&& !props.completedBool &&<div>
               {listItems}
            </div>}
            {props.activeBool && <div>
                {activeListItems}
            </div>}
            {props.completedBool && <div>
                {compltedListItems}
            </div>}
        </>
    )
}

export default ListItems;
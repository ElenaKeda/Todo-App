import React from 'react';
import 'antd/dist/antd.css';
import { List, Button, Checkbox } from 'antd';
import { DeleteOutlined, EditOutlined, CheckOutlined } from '@ant-design/icons';
import { ITodo } from '../interfaces';


const SomeTodo = ({todo, onRemove, onChecked}:{todo:ITodo, onRemove:any, onChecked:any}) => {
    console.log(todo.completed)
    return (
        <div className="wrapper">
            <div className="todo-wrapper">
                <Checkbox 
                    onChange={() => onChecked(todo)}>
                    <span
                        className={todo.completed ? 'completed' : undefined}>
                         {/* style={{ textDecoration: todo.completed ? 'line-through' : 'none'}} */}
                        {todo.title}
                    </span>
                </Checkbox>
                {/* {todo.completed ? <s className="">{todo.title}</s> : <span className="">{todo.title}</span>} */}
            </div>
            <div className="btn-wrapper">
                <Button 
                    onClick={() => onRemove(todo.id)}
                    shape="circle"
                    danger>
                    <DeleteOutlined />
                </Button>
            </div>
        </div>
    )
}


export const TodoList = ({todos, onRemove, onChecked}:{todos: ITodo[], onRemove:any, onChecked:any}) => {
    
    return (
        <List
            size="large"
            bordered
            dataSource={todos}
            renderItem={todo => <List.Item key={todo.id}><SomeTodo todo={todo} onRemove={onRemove} onChecked={onChecked} /></List.Item>}
        />
    )
    
}



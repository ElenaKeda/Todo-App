import React, { useState } from 'react';
import { Input, Space } from 'antd';
import 'antd/dist/antd.css';

interface TodoInputProps {
    onAdd(title: string):void
}


export const TodoInput: React.FC<TodoInputProps> = props => {
    const { Search } = Input;

    const [title, setTitle] = useState<string>('');

    const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    };

    const onClickAdd = (e:string) => {
        props.onAdd(e);
        setTitle('')
    };

    return (
        <Search
            onChange={changeInput}
            value = {title}
            placeholder="Write a new task"
            enterButton="Add"
            size="large"
            onSearch={onClickAdd}
        />
    )
}
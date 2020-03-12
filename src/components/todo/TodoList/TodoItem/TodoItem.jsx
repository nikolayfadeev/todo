import React from "react";
import 'typeface-roboto'
import Button from '@material-ui/core/Button';
// import Icon from "@material-ui/core/Icon";
import './TodoItem.css'


export default function TodoItem(props) {
    return (

        <li className={props.class} >{props.nameQuest}
        <Button color = "primary" onClick={props.checkedItemHandler.bind(this, props.id)}>Выполнено</Button>

        <Button color="secondary" onClick={props.removeItemHendler.bind(this, props.id)} >Удалить</Button> <br/>
            <input type="text" onChange={props.changeItemState}/> <Button color="primary" onClick={props.changeItemHandler.bind(this, props.id)}>Редактировать</Button>
        </li>
    )
}
import React from "react";
import TodoList from "./TodoList/TodoList";
import Button from "@material-ui/core/Button";
import classes from "./Todo.module.css"
import EmptyList from "./EmptyList/EmptyList";


export default function Todo(props) {

    return (
        <div className={classes.Todo}>
            <h1>Список дел</h1>
            <input type="text" onChange={props.changeInputHandler} className={classes.TodoInput} />
            <Button onClick={props.addItme} color="primary" variant="outlined">Добавить дело</Button> <br/> <br/>
            <TodoList
                listQuest={props.listQuest}
                removeItemHendler={props.removeItemHendler}
                changeItemHandler={props.changeItemHandler}
                checkedItemHandler={props.checkedItemHandler}
                changeItemState={props.changeItemState}
            />
            <EmptyList infoEmpty={props.infoEmpty}/>

        </div>
    )
}
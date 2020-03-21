import React from "react";
import TodoItem from "./TodoItem/TodoItem";
import classes from "./TodoList.module.css"

export default function TodoList(props) {

    return (
        <ul className={classes.TodoList}>
            {
                props.listQuest.map(
                    (item) => {
                        return  <TodoItem
                            nameQuest={item.nameQuest}
                            id={item.id}
                            key={item.id}
                            class={item.class}
                            removeItemHendler={props.removeItemHendler}
                            changeItemHandler={props.changeItemHandler}
                            checkedItemHandler={props.checkedItemHandler}
                            changeItemState={props.changeItemState}
                        />
                    }
                )
            }


        </ul>

    )
}

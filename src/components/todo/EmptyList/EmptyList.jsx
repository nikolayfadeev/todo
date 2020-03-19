import React from "react";

export default function EmptyList(props) {
    return (
        <span>
            {props.infoEmpty === 0?<p>Список пуст</p>:null}
        </span>
    )
}
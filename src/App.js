import React from 'react';
import './App.css';
import Todo from './components/todo/Todo';
import 'typeface-roboto'


class App extends React.Component {
    state = {
        listQuests: [
            {id: 1, nameQuest: "Первое задание", class: "item"},
            {id: 2, nameQuest: "Второе задание", class: "item"},
            {id: 3, nameQuest: "Третье задание", class: "item"},
            {id: 4, nameQuest: "Четвёртое задание", class: "item"}
        ],
        nameItem: "",
        changeItem: "",
        emptyList: ""
    }


    changeItemState = (changeItem) => {
        this.setState({
            changeItem: changeItem
        })
    }

    changeInputHandler = (e) => {
        let val = e.target.value;
        this.setState({
            nameItem: val
        })
    }

    addItemHendler = (newItem) => {

        let dat = this.state.nameItem

        if(dat !== '') {
            let listQuests = this.state.listQuests
            let id = (this.state.listQuests.length + 1);


            // this.setState(
            //     prevState => ({ ...prevState, listQuests: [...listQuests, {id: 5, nameQuest: dat, flag: true}] })
            // )


            // listQuests = [...listQuests, {id: 5, nameQuest: dat, flag: true}]
            // this.setState({listQuests: listQuests})

            const nItem = [{id: id, nameQuest: dat, flag: true}]

            const arr = listQuests.concat(nItem)
            this.setState({
                listQuests: arr
            })

        }

    }

    removeItemHendler = (removeItem) => {
        let listQuests = this.state.listQuests;
        listQuests = listQuests.filter(
            (item) => {
                return (item.id !== removeItem)
            }
        )

        this.setState({
                listQuests: listQuests
            }
        )
    }

    changeItemHandler = (changeItem) => {
        let listQuests = this.state.listQuests; // стейт со списком


        const changeItemDate = this.state.changeItem // стейт того, на что нужно заменить nameQuest нужного объекта
        let arr = listQuests;

        for (let i=0; listQuests.length <= i; i++) {
            if (listQuests.id = changeItem) {
                this.istQuests.nameQuest = changeItemDate
            }
        }
        this.setState({
            listQuests: listQuests
        })

    }

    checkedItemHandler = (checkedItem) => {
        const listQuests = this.state.listQuests

        listQuests.map(item => {
            return item.id == checkedItem?item.class = "checked-item" : "item"
        })

        this.setState({
            listQuests: listQuests
        })
    }

    render() {
        return (
            <div className="App">

                <Todo listQuest={this.state.listQuests}
                      addItme={this.addItemHendler}
                      changeInputHandler={this.changeInputHandler}
                      removeItemHendler={this.removeItemHendler}
                      changeItemHandler={this.changeItemHandler}
                      checkedItemHandler={this.checkedItemHandler}
                      changeItemState={this.changeItemState}
                      infoEmpty={this.state.listQuests.length}
                />

            </div>
        );
    }
}

export default App;

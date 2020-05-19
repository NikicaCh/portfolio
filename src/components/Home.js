import React from 'react'


export default function Home() {
    return(
        <div className="home">
            <div className="top">
                <h1 className="title">Мирољуб Петровић</h1>
                <img className="menu-icon" src={require("../icons/menu.png")} alt="menu"></img>
            </div>
        </div>
    )
}
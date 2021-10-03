import React from 'react'

function Header(props) {
    return (
        <header className="App-header">
            <center><h1 className="App-title">{props.text}</h1></center>
        </header>
    )
}

export default Header

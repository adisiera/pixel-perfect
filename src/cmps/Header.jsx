import React, { Component, useState } from 'react'
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import ReorderIcon from '@material-ui/icons/Reorder'

export default function Header() {
    const [showBtns, setShowBtns] = useState(false)

    return (
        <header className="header-container">
            <nav>
                <div className="header-left">
                    <div className="header-btns" id={showBtns ? "hidden" : ""}>
                        <div className="logo">LOGO</div>
                        <div className="btn">home</div>
                        <div className="btn">about</div>
                        <div className="btn">contact us</div>
                    </div>
                    <button onClick={()=>setShowBtns(!showBtns)} className="hamburger">
                        {" "}
                        <ReorderIcon /></button>
                </div>

                <div className="header-right">
                    <input type="text" />
                    <button>Search</button>
                </div>
            </nav>
        </header>
    )

}

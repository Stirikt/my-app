import React from "react";
import s from'./Header.module.css';

const Header = () => {
    return (<header className={s.header}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN9sUxWCa0Q3q7O5Lm_TVkaoqw4fz98aD5Vw&usqp=CAU' alt='logo'></img>
    </header>
    )
}

export default Header
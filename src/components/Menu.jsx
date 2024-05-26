import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { word_list } from "../App";
import icon from '../images/icon.png';
import Table from "./Table";
import Carousel from "./Carousel";
import styles from '../menu.module.css';


function Menu(props) {

    return (
        <Router>
            <div className={styles.menu}>
                <Link to="/"><img src={icon} alt="icon" className="icons" /></Link>
                <Link to="/">Главная</Link>
                <Link to="/game">Карточки</Link>
                <div></div>
            </div>
            <Routes>
                <Route path="/" element={<Home/>} ></Route>
                <Route path="/game" element={<Game/>} ></Route>
            </Routes>
        </Router>
    );
}

export default Menu;

function Home() {
    return (
        <Table></Table>
    );
}

function Game() {
    return (
        <Carousel list={word_list} ></Carousel>
    );
}

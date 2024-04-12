import React from "react";
import style from "./style.module.css"

export default function Header(){
  return (
    <header className="Header">
        <h1>Meu Site</h1>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">Sobre</a></li>
                <li><a href="/contact">Contato</a></li>
            </ul>
        </nav>
    </header>
);
}

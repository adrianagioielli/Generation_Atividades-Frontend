import React, { useState, useEffect } from "react";
import './Home.css';

function Home(){
    const[loggedIn, setLoggedIn] = useState(false);

    return (
        <div>
            {loggedIn ?(
                <h1>Bem-vindo de volta!</h1>
            ):(
                <button onClick={()=>setLoggedIn(true)}>Entrar</button>
            )}
            <img src="https://i.imgur.com/H88yIo2.png" alt='Imagem tela inicial' className="img"/>
        </div>
    );
}
export default Home;
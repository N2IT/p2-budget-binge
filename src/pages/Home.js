import React from 'react';
import NavBar from '../components/NavBar';
import '../App.css';

function Home() {
    return (
        <>
            <header>
                <div class="App-header">
                    <NavBar />
                </div>
            </header>
            <main>
                <h1>Home page where primary info of app will exist</h1>
            </main>
        </>
    );
}

export default Home;
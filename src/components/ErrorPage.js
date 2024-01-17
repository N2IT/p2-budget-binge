import NavBar from "./NavBar";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <header>
                <div className="App-header">
                    <NavBar />
                </div>
            </header>
            <main>
                <h1>Oh no! Where'd the money go???</h1>
                <h2>You should look somewhere else...</h2>
            </main>
        </>
    );
}

export default ErrorPage;
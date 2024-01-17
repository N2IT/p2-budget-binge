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
            <main className="error-page">
                <h1 className="test">Oh no! Where'd the money go???</h1>
                {/* <h2 className="test">You should look somewhere else...</h2> */}
                <div className="error-img"><img src={"./PiggyBankBusted.png"}></img></div>
            </main>
        </>
    );
}

export default ErrorPage;
import './App.css'
import * as Sentry from "@sentry/react";
import {useEffect} from "react";

function App() {

    useEffect(() => {
        Sentry.captureMessage('page-visit');
    })

    return (
        <>
            <h1>GreenHome Rózsafa Közösségi Oldal</h1>
            <p>Közösségi oldal a Budapest XIII. kerületben, Rózsafa utca 8-10. alatt épülő GreenHome Rózsafa
                társasház leendő lakói számára.</p>
            <p>Csatlakozz a társasház Facebook csoportjához, hogy értesülj a legfrissebb információkról!</p>
            <a
                className="button"
                href="https://www.facebook.com/groups/rozsafa8"
                onClick={(event) => {
                    Sentry.captureMessage('facebook-navigation');
                    window.location.href = event.currentTarget.href;
                }}>
                Csatlakozás a Facebook csoporthoz
            </a>
        </>
    )
}

export default App

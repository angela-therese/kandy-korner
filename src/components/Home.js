import React from "react";
import { PropsAndState } from './PropsAndState'

export const Home = () => (
    <>
        <main>
        <section className="main__heading">
        <h2>Kandy Korner</h2>
        <small>We mix it with love and make the world taste good.</small>
        <address>
            <p>123 Wonka Boulevard</p>
        </address>
        </section>
        <PropsAndState yourName={"Luca"} />
        </main>
    </>
)
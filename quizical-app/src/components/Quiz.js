import React from "react"

export default function Quiz() {
    return (
        <div >
            <h3 className="question">How would one say goodbye in Spanish?</h3>
            <div className="options">
                <ul className="items">
                    <li className="item">Hola</li>
                    <li className="item">Ni hao!</li>
                    <li className="item">kem cho</li>
                    <li className="item">namaste</li>
                </ul>
            </div>
            <hr className="line" />
        </div>
    )
}
import React from "react"
import './styles/footer.css'
export const Footer = () => {
    return(
        <>
            <div className="footer">
                <div>
                    <p className="name2">aBit</p>
                    <p style= {{fontFamily: 'bitter', fontSize: '20px'}}>Changing The Way In Which <br /> Creators And Fans Interact.</p>
                </div>
                <div className="right-section">
                    <p>Home</p>
                    <p>Are you a Creator?</p>
                    <p>Support</p>
                </div>
            </div>
        </>
    )
}
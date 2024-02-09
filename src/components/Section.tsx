import React from "react"
import './styles/header.css'
import './styles/cover-img.css'
export const Section = () =>{
    return (
        <>
            <div className="cover-image-class">
                    <header>
                        <div className="name">aBit</div>
                        <div className="icons">
                            <div><button className="Share-new-video"> Share new video </button></div>
                            <div style={{cursor: 'pointer'}}> <img src="images/icons8-wallet-50 1.png" /> </div>
                            <div style={{cursor: 'pointer'}}> <img src="images/icons8-notification-96 1.png" /> </div>
                            <div style={{cursor: 'pointer'}}> <img src="images/Profile pic.png" /> </div>
                            <div style={{cursor: 'pointer'}}> <img src="images/icons8-expand-arrow-24 1.png" /> </div>
                        </div>
                    </header>

                    <div><img className="cover-image" src="images/cover image.svg" /></div>
                    <div className="band-class"> <img className="band-image" src="images/Band.png" /> </div>
                    <div className="profile-class">
                        <div className="profile-img"><img src="images/Rectangle 203.svg" /></div>
                        <div className="description">
                            <div className="user-name">
                                <p className="dan-mace">DAN MACE</p>
                                <p className="johy">/Johy_Films/</p>
                            </div>
                            
                            <div className="about">
                                <p style={{fontWeight:'bold'}}>Bio</p>
                                <p>Simply a film fan creating original content for YouTube.Let's Collaborate.</p>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <button className="creator">Creator</button>
                                <button className="empty"></button>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}
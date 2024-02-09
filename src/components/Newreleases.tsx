import React from "react"
import './styles/newreleases.css'
export const Newreleases = ()=>{
    return(
        <>
            <div>
                <div className="video-data">
                    <div className="updates">
                        <p style={{
                            fontSize: '30px',
                            marginBottom: '15px',
                            fontWeight: '400'
                        }}
                        >
                        Releases
                        </p>
                        <p style={{wordSpacing: '2px' ,fontWeight: '400'}}>Videos that you uploaded in collaboration with aBit appear here.</p>
                    </div>
                    <div className="stats">
                        <div className="stats-div">
                            <p className="stats-header">1</p>
                            <p>Shared</p>
                            <p>Videos</p>
                        </div>
                        <div className="stats-div">
                            <p className="stats-header">$9510</p>
                            <p>Funds</p>
                            <p>Raised</p>
                        </div>
                        <div className="stats-div">
                            <p style={{fontSize: '16px' ,marginBottom: '10px', fontWeight: 'bold'}}>317</p>
                            <p>Co-owner</p>
                            <p>community</p>
                        </div>
                        <div className="stats-div">
                            <p className="stats-header">$3804</p>
                            <p>Co-owner</p>
                            <p>Earnings</p>
                        </div>
                    </div>
                </div>
    
                <div className="uploades">
                    <div className="uploade1">
                        <div>
                            <img src="images/+.png" />
                        </div>
                        <div style={{position: 'absolute', bottom: '45px'}}>
                            <p>You haven't uploaded any <br /> videos with aBit yet. Add now!</p>
                        </div>
                    </div>
                    <div className="token-11">
                        <img src="images/unsplash_E8Ufcyxz514.png" />
                        <p className="title">The Sound of Silence</p>
                        <div className="group-77">
                            <div>
                                <p>Shares</p>
                                <p style={{fontSize: '14px' ,fontWeight: '500'}}>317</p>
                            </div>
                            <div>
                                <p>Offers</p>
                                <p style={{fontSize: '14px', fontWeight: '500'}}>75%</p>
                            </div>
                            <div>
                                <p>Raised</p>
                                <p style={{fontSize: '14px',fontWeight: '500'}}>$9510</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
import React from 'react'
import styled from 'styled-components'
import { PortalButton } from '../components/ui/PortalButton'
import ElementCard from '../components/Card'

import ProfileImg from "./profileImg.png"
import BellImg from "./bell.png"
import bgImg from "../assets/Fondo.png"


const ProfileGridLayout = styled.section`
    display: grid;
    grid-template-columns: repeat(2,1fr);
`

const GridItem = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin: auto;
`

const GridFigCaption = styled.figcaption`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-template-rows: repeat(4,1fr);
`

const ProfileView = () => {
  return (
    <div style={{backgroundImage:`url(${bgImg})`, height: "100vh", fontFamily:"Poppins"}}>
    <ProfileGridLayout>
        <GridItem>
            <figure>
                <img
                    src={ProfileImg}
                    width="362px"
                    height="336px"
                    alt="profile-pic"
                />
            <GridFigCaption>
                <div style={{
                    display:"flex",
                    justifyContent: "space-between",
                    width: "330px"
                }}>
                    <h3 style={{gridRow:"1",gridColumn:"1", color:"#FFF", marginLeft: "20px"}}>Cristie Montalvo</h3>
                    <div style={{marginTop:"15px"}}><img src={BellImg} alt="bell-notification-icon"/></div>
                </div>
                <h4 style={{gridRow:"2",gridColumn:"1", color: "#9747FF"}}>@criszztiemg.lens</h4>
                <div style={{gridRow:"3", gridColumn:"1", color:"#FFF"}}>
                    <div>
                        <p>163</p>
                        <p>Following</p>
                    </div>
                </div>
                <div>
                <div style={{gridRow:"3", gridColumn:"2", color:"#FFF"}}>
                        <p>631</p>
                        <p>Followers</p>
                    </div>
                </div>
            </GridFigCaption>
            </figure>
            <PortalButton
                name="Follow"
                className="secondary-button"
            />
            <p>
                UX/UI Designer working in web3. Ilustrator and NFT artist, Frontend Developer, Solidity Developer.
            </p>
            <div>

            </div>
        </GridItem>
        <GridItem>
            <p>Tab</p>
            <p>User input</p>
            <p>post</p>
        </GridItem>
    </ProfileGridLayout>
    </div>
  )
}

export default ProfileView;
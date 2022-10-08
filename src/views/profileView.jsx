import React from 'react'
import styled from 'styled-components'
import { PortalButton } from '../components/ui/PortalButton'
import ElementCard from '../components/Card'

import ProfileImg from "./profileImg.png"
import BellImg from "./bell.png"
import bgImg from "../assets/Fondo.png"
import imgMedia from "./img-media.png"
import docMedia from "./doc-media.png"
import gifMedia from "./gif-media.png"
import worldMedia from "./world-media.png"

const ProfileGridLayout = styled.section`
    display: grid;
    grid-template-columns: 30% 70%;
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

const UserInputWrapper = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 20px 20px 20px 26px;
gap: 20px;
width: 873px;
height: 297px;
left: 497px;
top: 293px;
background: linear-gradient(155.14deg, rgba(0, 0, 0, 0) -2.13%, rgba(255, 255, 255, 0.15) 136.58%);
filter: drop-shadow(0px 4px 49px rgba(0, 7, 72, 0.12));
backdrop-filter: blur(7.5px);
border-radius: 20px;
`

const UserInput = styled.input`
box-sizing: border-box;
width: 828px;
height: 117px;
left: 26px;
top: 20px;
border: 1px solid #FFFFFF;
border-radius: 15px;
color:"#FFF";
background-color: rgba(0,0,0,0.1);
`

const UserInputMedia = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    width: 800px;
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
            <div style={{marginLeft:"50px"}}>
                <p>
                    UX/UI Designer working in web3. Ilustrator and NFT artist, Frontend Developer, Solidity Developer.
                </p>
                <div>

                </div>
            </div>
        </GridItem>
        <GridItem>
            <p>Tab</p>
            <UserInputWrapper>
                <UserInput placeholder="What's happening?"/> 
                <UserInputMedia>
                    <div style={{display: "flex", justifyContent:"space-between", gap:"50px"}}>
                        <img src={imgMedia}/>
                        <img src={docMedia}/>
                        <img src={gifMedia}/>
                        <img src={worldMedia}/>
                    </div>
                    <PortalButton name="Publish" className="primary-button"/>
                </UserInputMedia>
            </UserInputWrapper>
            <p>post</p>
        </GridItem>
    </ProfileGridLayout>
    </div>
  )
}

export default ProfileView;
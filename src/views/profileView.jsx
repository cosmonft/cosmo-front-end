import { React, useState } from 'react'
import styled from 'styled-components'
import { PortalButton } from '../components/ui/PortalButton'
import PrimarySearchAppBar from '../components/nav/index.js';

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
    margin-top: 50px;
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

const InputMedia = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    width: 800px;
`

const TabWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 800px;
    margin-left: 50px;
`

const TabIcon = styled.div`
    height: 58px;
    width: 106px;
    text-align: center;
    &:hover {
        background: rgba(151, 71, 255, 0.3);
        border-radius: 15px;
    }
`

const FeedSection = styled.section`
    margin: auto;
    height: 100%;
`
const PostWrapper = styled.article`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 20px 20px 26px;
    gap: 20px;
    margin-top: 30px;
    width: 873px;
    height: 293px;
    background: linear-gradient(155.14deg, rgba(0, 0, 0, 0) -2.13%, rgba(255, 255, 255, 0.15) 136.58%);
    filter: drop-shadow(0px 4px 49px rgba(0, 7, 72, 0.12));
    backdrop-filter: blur(7.5px);
    border-radius: 20px;
`

const posts = [
    {
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vitae vulputate nascetur tempus, ullamcorper amet. Libero cursus cursus cras integer phasellus pellentesque. Leo ut nec."
    },
    {
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vitae vulputate nascetur tempus, ullamcorper amet. Libero cursus cursus cras integer phasellus pellentesque. Leo ut nec."
    }
];

const ProfileView = () => {
    const [feedClicked, setFeedClicked] = useState(true)
    const [repliesClicked, setRepliesClicked] = useState(false)
    const [mediaClicked, setMediaClicked] = useState(false)
    const [nftClicked, setNftClicked] = useState(false)

  return (
    <div style={{backgroundImage:`url(${bgImg})`, height: "100%", fontFamily:"Poppins"}}>
    <PrimarySearchAppBar />
    <ProfileGridLayout>
        <GridItem style={{}}>
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
                <p style={{color:"#FFF"}}>
                    UX/UI Designer working in web3. Ilustrator and NFT artist, Frontend Developer, Solidity Developer.
                </p>
                <div>

                </div>
            </div>
        </GridItem>
        <GridItem>
            <TabWrapper>
                <TabIcon>
                    <h2 style={{color:"#FFF"}}>Feed</h2>
                </TabIcon>
                <TabIcon>
                    <h2 style={{color:"#FFF"}}>Replies</h2>
                </TabIcon>
                <TabIcon>
                    <h2 style={{color:"#FFF"}}>Media</h2>
                </TabIcon>
                <TabIcon>
                    <h2 style={{color:"#FFF"}}>NFTs</h2>
                </TabIcon>
            </TabWrapper>
            <UserInputWrapper>
                <UserInput placeholder="What's happening?"/> 
                <InputMedia>
                    <div style={{display: "flex", justifyContent:"space-between", gap:"50px", marginTop:"30px"}}>
                    <img src={imgMedia} width="30px" height="34px" alt="media-icon"/>
                        <img src={docMedia} width="30px" height="34px" alt="media-icon"/>
                        <img src={gifMedia} width="30px" height="34px" alt="media-icon"/>
                        <img src={worldMedia} width="30px" height="34px" alt="media-icon"/>
                    </div>
                    <PortalButton name="Publish" className="primary-button"/>
                </InputMedia>
            </UserInputWrapper>
                {
                    feedClicked && 
                    posts.map( post => (
                        <FeedSection>
                            <PostWrapper>
                                <figure style={{display:"flex", margin:"0", padding:"0"}}>
                                    <img src={ProfileImg} style={{borderRadius:"50%", width:"66px", height: "66px"}} alt="profile-pic"/>
                                    <figcaption>
                                    <h3 style={{color:"#FFF", marginLeft: "20px"}}>Cristie Montalvo</h3>
                                    <h4 style={{color: "#9747FF", margin: "-20px 0 0 20px"}}>@criszztiemg.lens</h4>
                                    </figcaption>
                                </figure>
                                <p style={{color:"#FFF", margin:"0", padding:"0"}}>
                                    {post.content}
                                </p>
                                <InputMedia style={{display: "flex", justifyContent:"space-between", margin:"0", padding:"0"}}>
                                    <div style={{display: "flex", justifyContent:"space-between", gap:"50px", marginTop:"30px"}}>
                                        <img src={imgMedia} width="30px" height="34px" alt="media-icon"/>
                                        <img src={docMedia} width="30px" height="34px" alt="media-icon"/>
                                        <img src={gifMedia} width="30px" height="34px" alt="media-icon"/>
                                        <img src={worldMedia} width="30px" height="34px" alt="media-icon"/>
                                    </div>
                                </InputMedia>
                            </PostWrapper>
                        </FeedSection>
                        )
                    )
                }
                {
                    repliesClicked && 
                    posts.map( post => (
                        <FeedSection>
                            
                        </FeedSection>
                        )
                    )
                }
                {
                    mediaClicked && 
                    posts.map( post => (
                        <FeedSection>
                            
                        </FeedSection>
                        )
                    )
                }
                {
                    nftClicked && 
                    posts.map( post => (
                        <FeedSection>
                            
                        </FeedSection>
                        )
                    )
                }
        </GridItem>
    </ProfileGridLayout>
    </div>
  )
}

export default ProfileView;
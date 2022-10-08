import React from 'react'
import styled from 'styled-components'
import ElementCard from '../../Card'
import NFTexmpl from '../../../assets/NFTsExamples/nft-example.png'
import NFTexmpl2 from '../../../assets/NFTsExamples/nft-example2.png'
import NFTexmpl3 from '../../../assets/NFTsExamples/nft-example3.png'
import NFTexmpl4 from '../../../assets/NFTsExamples/nft-example4.png'
import NFTexmpl5 from '../../../assets/NFTsExamples/nft-example5.png'
import NFTexmpl6 from '../../../assets/NFTsExamples/nft-example6.png'
import NFTexmpl7 from '../../../assets/NFTsExamples/nft-example7.png'
import NFTexmpl8 from '../../../assets/NFTsExamples/nft-example8.png'

const CardsGridLayout = styled.section`
    display: flex;
    flex-wrap: wrap;
    margin-left: -60px;
    width: auto;
`

const GridItem = styled.div`
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    padding: 20px;
    gap: 20px;

    width: 324.09px;
    height: 472px;
    border-radius: 20px;

    background: linear-gradient(155.14deg, rgba(0, 0, 0, 0) -2.13%, rgba(255, 255, 255, 0.15) 136.58%);
    filter: drop-shadow(0px 4px 49px rgba(0, 7, 72, 0.12));
    backdrop-filter: blur(7.5px);
`

const NFTsList = [
    {
        img: NFTexmpl,
        name: "COOLGUYZZ",
        usr: "Coolguyzz.io",
        floorPrice: "0,05",
        mxn: "$1,605.97",
        profit: "-12.45",
    },
    {
        img: NFTexmpl2,
        name: "gangstaboi v.1",
        usr: "GB_Gangs",
        floorPrice: "2.53",
        mxn: "$4,487",
        profit: "+34.5",
    },
    {
        img: NFTexmpl3,
        name: "HyperApe",
        usr: "HyperApe.co",
        floorPrice: "1.31",
        mxn: "$1,743.40",
        profit: "-5.6",
    },
    {
        img: NFTexmpl4,
        name: "Lyodd$1",
        usr: "Naomi Po",
        floorPrice: "1.156",
        mxn: "$1,670.85",
        profit: "+12.45",
    },
    {
        img: NFTexmpl5,
        name: "Azuki 3D",
        usr: "AZUKI.JP",
        floorPrice: "1.5",
        mxn: "$1,907.30",
        profit: "+1.6",
    },
    {
        img: NFTexmpl6,
        name: "CuteApe White",
        usr: "CuteApe_99",
        floorPrice: "0.045",
        mxn: "$2,445.60",
        profit: "-14.5",
    },
    {
        img: NFTexmpl7,
        name: "SneakerHead Vol.1",
        usr: "SneakerHead.Corp",
        floorPrice: "1.4",
        mxn: "$1,790.86",
        profit: "+67.9",
    },
    {
        img: NFTexmpl8,
        name: "cvltB3AR",
        usr: "CVLTB3AR",
        floorPrice: "0.88",
        mxn: "$545.78",
        profit: "+12.45",
    }
]

const CardsContainer = () => {
  return (
    <div style={{width:"100vw", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <h1 style={{color:"#FFFFFF", fontSize:"47px"}}>
            Recomendados
        </h1>
        <CardsGridLayout>
            {NFTsList.map(obj => (    
                <GridItem key={obj.name} style={{gridColumn:""}}>
                    <ElementCard
                        img={obj.img}
                        name={obj.name}
                        usr={obj.usr}
                        floorPrice={obj.floorPrice}
                        mxn={obj.mxn}
                        profit={obj.profit}
                        width="235px"
                        height="281px"
                    />
                </GridItem>
            ))}
        </CardsGridLayout>
    </div>
  )
}

export default CardsContainer
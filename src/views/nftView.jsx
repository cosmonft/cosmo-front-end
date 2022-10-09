import React from 'react'   
import miniImg from '../assets/miniImg.png'
import NFTimg from '../assets/nft-image-example.png';
import ElementCard from '../components/Card/index.jsx'

const NFTView = () => {
  return (
    <div>
        <ElementCard
        img={NFTimg}
        name="Nyx-92"
        usr="@collector_name"
        lastBid="2.45"
        price="0.45 ETH"
        mxn="$1,605.92"
        profit="+12.45"
        mini={miniImg}
        width="460px"
        height="560px"
        />
    </div>
  )
}

export default NFTView
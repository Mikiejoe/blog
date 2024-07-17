import React from 'react'
import { MdFacebook,MdTwitter } from 'react-icons/md'

function Footer() {
  return (
    <div>
        <div>
            <h1>Blog Name</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab officia eveniet reprehenderit laborum quisquam, amet odit voluptas atque ipsa molestiae, voluptatum eaque iure provident veritatis, cupiditate in earum placeat officiis?</p>
        </div>
        <div>
            <div>
                <MdFacebook/>
                <MdTwitter/>
            </div>
        </div>
    </div>
  )
}

export default Footer
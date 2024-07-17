import React from 'react'
import { BsTwitterX } from 'react-icons/bs'
import { MdFacebook,} from 'react-icons/md'

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
                <BsTwitterX/>
            </div>
        </div>
    </div>
  )
}

export default Footer
import React from 'react'
import Link from 'gatsby-link'
import RSVP from './rsvp'
import Address from './address'
import GiftList from './giftList'
import WeddingDate from '../date';

const IndexPage = () => (
  <div>
    <WeddingDate/>
    <Address />
    <RSVP />
    <GiftList />
    <p className="line center">Check back soon for more details.</p>
  </div>
)

export default IndexPage

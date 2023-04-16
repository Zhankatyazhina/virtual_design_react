import React from 'react'
import { Home } from './Home/Home'
import { Service } from './Service/Service';
import { Customer } from './Customer/Customer';
import { Team } from './Team/Team';
import { Email } from './Email/Email';

const Main = () => {
  return (
    <div>
        <Home/>
        <Service/>
        <Customer/>
        <Team/>
        <Email/>
    </div>
  )
}


export default Main;
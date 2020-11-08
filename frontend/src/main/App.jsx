
import '../common/template/dependencies'
import React from 'react'
import Header from '../common/template/header'
import SideBar from '../common/template/SideBar'
import Footer from '../common/template/Footer'
import Routes from './Routes'
import Messagens from '../common/msg/messages'


export default props => (
    <div className='wrapper'>
        <Header />
        <SideBar/>
        <div className='content-wrapper'>
        <Routes />
        </div>
        <Footer />
        <Messagens/>
        
    </div>
)
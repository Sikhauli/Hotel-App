import React from 'react'
import "../css/dashboard.css"
import admin from '../images/admin.jpg'
import logo from '../images/logo.png'
import { useNavigate, Link } from 'react-router-dom'


function Dashboard() {


const navigate = useNavigate();

const toCalender = () =>{
    navigate('/calender')
}

const toBooking = () =>{
    navigate('/bookings')
}

const toEarning = () =>{
    navigate('/earnings')
}

const toRoomAvailable = () =>{
    navigate('/rooms')
}

const toLogout = () =>{
    navigate('/')
}


  return (

    <div className='dashboard-container'>
       
        <h2>Admin Dashboard </h2>
   

        <div className='search-container'> 
            <input type="text" placeholder='Search'/>
            <img src={admin} alt = 'Admin' />
            <div className='user-profile'> Motsisi Charles </div>
        </div>

        <div className='det-container'>
        
            <div className='left-container'>
                <img src={logo} alt='Logo' />
                <button className='calender' onClick={toCalender}> Calender  </button>
                <button className='booking' onClick={toBooking}>  Booking </button>
                <button className='earning' onClick={toEarning}> Earning </button>
                <button className='rooms-available' onClick={toRoomAvailable}> Rooms Available </button>
                <button className='logout' onClick={toLogout}> Logout</button>
            </div>            

            <div className='center-container' >
                <div  style={{ display: 'flex', backgroundColor: 'transparent', marginLeft: '1.3vw', height:'30vh', overflowY: 'hidden' }}>
                <div className='rooms fam' style={{ float: 'right' }}>
                
                    <h4 style={{marginTop: '0px', background: 'transparent' }}>Family Room</h4>

                    <div className='room-details-container' style={{ display:'flex' }}>
                        <div className='booked'>3</div>
                        <div className='checked'>10</div>
                        <div className='avail'>35</div>
                    </div>

                    <div className='room-stats-container' style={{ display:'flex', background: 'transparent' }}>
                    
                       <div className='booked'>Booked</div>
                       <div className='checked'>Checked</div>
                       <div className='avail'>Available</div>

                    </div>

                </div>

                <div className='rooms deluxe' style={{ float: 'right', }}>
                
                    <h4 style={{marginTop: '0px', background: 'transparent' }}>Deluxe Room</h4>


                    <div className='room-details-container' style={{ display:'flex' }}>
                    <div className='booked'>3</div>
                    <div className='checked'>10</div>
                    <div className='avail'>35</div>
                </div>

                <div className='room-stats-container' style={{ display:'flex', background: 'transparent' }}>
                
                   <div className='booked'>Booked</div>
                   <div className='checked'>Checked</div>
                   <div className='avail'>Available</div>

                </div>

                </div>

                </div>

            <div  style={{ display: 'flex', backgroundColor: 'transparent', marginLeft: '1.3vw', height:'30vh', overflowY: 'hidden' }}>
    

                <div className='rooms single' style={{ float: 'right'}}>
                    <h4 style={{marginTop: '0px', background: 'transparent' }}>Single Room</h4>

                    <div className='room-details-container' style={{ display:'flex' }}>
                    <div className='booked'>3</div>
                    <div className='checked'>10</div>
                    <div className='avail'>35</div>
                </div>

                <div className='room-stats-container' style={{ display:'flex', background: 'transparent' }}>
                
                   <div className='booked'>Booked</div>
                   <div className='checked'>Checked</div>
                   <div className='avail'>Available</div>

                </div>

                </div>

                <div className='rooms luxury' style={{ float: 'right' }} >

                    <h4 style={{marginTop: '0px', background: 'transparent' }}>Luxury Room</h4>

                    <div className='room-details-container' style={{ display:'flex' }}>
                    <div className='booked'>3</div>
                    <div className='checked'>10</div>
                    <div className='avail'>35</div>
                </div>

                <div className='room-stats-container' style={{ display:'flex', background: 'transparent' }}>
                
                   <div className='booked'>Booked</div>
                   <div className='checked'>Checked</div>
                   <div className='avail'>Available</div>

                </div>      
               </div>
            </div>
          </div>  
            <div className='right-container' style={{background: 'white' }}>
            
                <h3>Latest Booking List</h3>

                <div className='client-info-container' > 
                   <div className='first-card-line'>
                      <div className='names'> Charles </div>
                      <div className='date'> 01/01/01 </div>
                   </div>

                   <div className='second-card-line'>
                    <div className='type'>#Single</div>
                    <div className='guest-number'> 1-Guest </div>
                    <div className='payment'> Paid </div> 
                   </div>
                   
                </div>

            </div>

            <div className='bottom'>
            
            <h2 style={{ background: 'transparent' }} >Average Ration</h2>
            
            <div className='detail-container'>
            
                <div className='upper-container' style={{ display: 'flex', backgroundColor: 'transparent' }}>
                    <div className='first'>Monthly Rate</div>
                    <div className='first'>Occupacy Rate</div>
                    <div className='first'>Repaire</div>
                    <div className='first'>Food & Bev</div>
                    <div className='first'>Telephone</div>
                    <div className='first'>Water</div>
                    <div className='first'>Electricity</div>
                    <div className='first'>Generator</div>

                </div>

                <div className='lower-container' style={{ display: 'flex', backgroundColor: 'transparent' }}>
                
                    <div className='second'>ZAR 1 450 000</div>
                    <div className='second'>40% UP</div>
                    <div className='second'>ZAR 30 480</div>
                    <div className='second'> ZAR 109 000 </div>
                    <div className='second'>ZAR 38 000</div>
                    <div className='second'>ZAR 138 000</div>
                    <div className='second'>ZAR 100 000</div>
                    <div className='second'>ZAR 50 000</div>

                </div>
            </div>

            </div>

        </div>
       
       
</div>
    
    )
}

export default Dashboard;
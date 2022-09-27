import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "../css/dashboard.css"
import admin from '../images/admin.jpg'
import logo from '../images/logo.png'
import { useNavigate, Link } from 'react-router-dom'





const Calender = () => {

    const [date, setDate] = useState(new Date());



const navigate = useNavigate();

const toCalender = () =>{
    navigate('/calender')
}

const toBooking = () =>{
    navigate('/bookings')
}

const toEarning = () =>{
    navigate('/calender')
}

const toRoomAvailable = () =>{
    navigate('/calender')
}

const toLogout = () =>{
    navigate('/calender')
}


  return (
    

    <div className='dashboard-container'>
       
        <h2>Admin Booking Calender</h2>
   

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

            {/* Calender  */}
            
                    <div className='calendar-container' style={{ 

                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        paddingLeft: '13vw'

                    }} >
                    <Calendar onChange={setDate} value={date}  />
                    </div>

                     {/*
                    <p className='text-center' style={{ 

                        backgroundColor: 'rgba(255, 255, 255, 0.1)'
                        
                    }}>
                  
                    <span className='bold' style={{ 

                        backgroundColor: 'rgba(255, 255, 255, 0.1)'

                    }}>Selected Date:</span>{' '}
                    {date.toDateString()}
                </p>  */}
     

            {/* End Calender */}

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

export default Calender
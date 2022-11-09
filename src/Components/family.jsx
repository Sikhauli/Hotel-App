// // import Itachi from "../photos/photo.jpg";
// /*import bg from '../slideIMG/5.jpg';*/
// import "../css/family.css";
// import { Link } from "react-router-dom"
// import { useState } from "react";
// import Data from "../data.json"
// import Itemcard from "./itemcard";
// import data from "./dataf";
// import Cart from "./cart";
// import Payment from "../Components/Payment"


// function Family(props){
//     const [checkIn, setCheckIn] = useState("");
//     const [checkOut, setCheckOut] = useState("");


//     const handleCheckIn = (e) =>{
//         setCheckIn(e.target.value);
        
//     }
//     const handleCheckOut = (e) =>{
//         setCheckOut(e.target.value);
        
//     }

//     const handleSubmit = () => {
        
//     }

//     return(
//         <div className="container">
//             <div className="top">
//                 <img src="" alt="" />
//             </div>
            
//             <div className="links">
//             <span style={{marginLeft: '70%'}}>
//                     <Link to="/home"> Home </Link>
//                 </span>
//                 <span>
//                     <Link to="/home"> Booking </Link>
//                 </span>
//                 <span>
//                     <Link to="/home"> Check Out </Link>
//                 </span>
//                 <span>
//                     <Link to="/home"> Contact </Link>
//                 </span>
//             </div>
//             <div className="sale">
//                 <p>Get 20% discount when you book 3 family rooms</p>
//             </div>

//             <div className="search">
//                 <input type="date" placeholder="Check in date" className="in"
//                 onChange={handleCheckIn} value={checkIn}/>
//                 <input type="date" placeholder="Check out date" className="out"
//                 onChange={handleCheckOut} value={checkOut}/>
//                 <button type="button" placeholder="Search" className="nyaka" onClick={handleSubmit}> Search </button>
//             </div>

//             <div><h1 style={{marginTop: '2%'}}>Room Booking</h1></div>

//             <div className="types">
//                 <table>
//                     <thead>
//                         <tr style={{backgroundColor: 'darkgray'}}>
//                             <td>Room Info</td>
//                             <td>Qty</td>
//                             <td>Services</td>
//                             <td>Initial Amount</td>
//                             <td>Amount</td>
//                         </tr>
//                     </thead>
//                     <tbody>
                        
                        
//                         <tr>
//                             <td>
//                                 Family room gives you<br></br> enough space and confortability<br></br> to make your family not wanna leave
//                             </td>
//                             <td>1</td>
//                             <td>
//                                 <p>Breakfast, Lunch, Dinner,<br></br>
//                                    Massage,Swimming Pool,Wifi<br></br>
//                                 </p>
//                             </td>
//                             <td>ZAR 1800</td>
//                             <td>

//                                 <br></br><br></br>
//                             <section className="py-4 container">
//                                 <div className="row justify-content-center">
//                                     {data.productData.map((item, index)=>{
//                                         return(
//                                             <Itemcard
//                                             img={item.img}
//                                             title={item.title}
//                                             desc={item.desc} 
//                                             price={item.price}
//                                             checkIn={checkIn}
//                                             checkOut={checkOut} 
//                                             item={item}
//                                             key={index} 
//                                             />
//                                         )
//                                     })}
//                                 </div>
                                
//                             </section>
//                             </td>
//                         </tr>
//                         <tr >
//                             <td>
                                
//                             </td>
//                             <td>2</td>
//                             <td>
//                                 <p>Breakfast, Lunch, Dinner,<br></br>
//                                    Massage,Swimming Pool,Wifi<br></br>
//                                 </p>
//                             </td>
//                             <td>ZAR 3600</td>
                            
//                 </tr>
//                     </tbody>
//                 </table>
                
//             </div>

//             <span>
//                 <Link to="/cart">ADDED ROOM</Link>
//             </span>
            
//             <div>
//                 <Cart chechIn={checkIn} checkOut={checkOut}/>
//             </div>
//             {/*<div className="hide-payment" style={{display: "none"}}>
//             {data.productData.map((item, index)=>{
//                 return(
//                     <Payment
//                     title={item.title}
//                     desc={item.desc} 
//                     price={item.price}
//                     checkIn={checkIn}
//                     checkOut={checkOut} 
//                     item={item}
//                     key={index} 
//                     />
//                 )
//             })}
//         </div>*/}
            

//         </div>
//     )
// }

// export default Family;


// import Itachi from "../photos/photo.jpg";
import bg from '../slideIMG/5.jpg';
import "../css/family.css";
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import Data from "../data.json"
import Itemcard from "./itemcard";
import data from "./datal";
import Cart from "./cart";
import PopUpBook from './PopUpBook/PopUpBook';
import popup from './popup.module.css'
import { useNavigate } from 'react-router-dom'
import homeBook from './PopUpBook/Home_Booking.module.css';
import { db } from '../configure/firebase'
import { addDoc, collection, getDocs } from "firebase/firestore";


function Family(props){


    const [checkOut, setCheckOut] = useState("");
    const navigate = useNavigate();

    // const handleCheckIn = (e) =>{
    //     setCheckIn(e.target.value);
        
    // }
    // const handleCheckOut = (e) =>{
    //     setCheckOut(e.target.value);
        
    // }

    //Added Items
    
    const [Hotel, setHotel] = useState([])
    const [userName, setUserName] = useState('');
    const [chooseRoom, setTheRoom] = useState(0);

    // const usersCollectionRef = collection(db, "users", "{}")
    // useEffect(() => {
    //     const getHotels = async () => {
    //         const data = await getDocs(usersCollectionRef);
    //         setHotel(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    //     }
    //     getHotels();
    // }, []);

    const handleUser = (e) =>{
        const val = e.target.value;
        setUserName(val);
    };

    const handleQTY = (e) =>{
        const val = e.target.value;
        setTheRoom(val)
    }

    const [CheckIn, setCheckIn] = useState({
        checkIn: '',
        checkOut: '',
        child: 0,
        adult: 0,
        totalPrice: 0,
        night:0
    })
    const handleChange = (e) => {
        const { name, value } = e.target;

        console.log('value is:', e.target.value);
        console.log('value is:', e.target.name);


        setCheckIn(prevState => ({
            ...prevState,
            [name]: value,

        }))
    }

    // const handleChange = event => {
    //     setCheckIn(event.target.value);
    
    //     console.log('value is:', event.target.value);
    //   };

    const [HotelData, setHotelData] = useState([]);
    const [ButtonPopup, setButtonPopup] = useState(false);
    //const [ConfirmPopup, setConfirmPopup] = useState(false);


    function book(data) {
        setCheckIn('')
        setCheckIn(0)
        setHotelData(data)
        setButtonPopup(true)
    }

    // const usersCollectionRef = collection(db, "hotel")
    // useEffect(() => {
    //     const getRooms = async () => {
    //         const data = await getDocs(usersCollectionRef);
    //         setHotel(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    //     }
    //     getRooms();
    // }, []);


   

    function checkInNow() {
        if(CheckIn.checkIn !== '' && CheckIn.checkOut !== ''){
            var start = new Date(CheckIn.checkIn)
            var end = new Date(CheckIn.checkOut)
            CheckIn.night = ((end.getTime() - start.getTime()) / (24 * 3600 * 1000))
            CheckIn.totalPrice = ((end.getTime() - start.getTime()) / (24 * 3600 * 1000)) * HotelData.price;
            setButtonPopup(false);
            navigate('/Payment', { state: { data: CheckIn, hotelData: HotelData} });
        }
    }

    const saveData = () =>{
        let getPrice;
        let room = parseInt(chooseRoom);
        
        data.productData.map((item)=>{
            if(item.id===room){
                getPrice = item.price 
            }
        })
        const reserve = {
            checkin:CheckIn.checkIn,
            checkout:CheckIn.checkOut,
            adult:CheckIn.adult,
            child:CheckIn.child,
            price:getPrice,
            theUser: userName,
            QTY: chooseRoom

    };

    console.log(reserve);
    }

    // console.log(checkInNow())

    let bookPopUp = (
        <div className={popup.popup}>
            <div className={popup.header}>
                <h3>Booking Details</h3>
            </div>
            <div className={popup.formGroup}>
                <label>Name <span>*</span></label>
                <input type="text" name='Name' className={popup.formControl} value={CheckIn.user} onChange={handleUser}/>
            </div>
            <div className={popup.formGroup}>
                <label>Check-in Date <span>*</span></label>
                <input type="date" name="checkIn" className={popup.formControl} value={CheckIn.checkIn} onChange={handleChange}  />
            </div>

            <div className={popup.formGroup}>
                <label>Check-out Date <span>*</span></label>
                <input type="date" name="checkOut" className={popup.formControl} value={CheckIn.checkOut} onChange={handleChange} />
            </div>

            <div className={popup.formGroup}>
                <label>Adult</label>
                <input type="number" name="adult" className={popup.formControl} value={CheckIn.adult} onChange={handleChange} />
            </div>

            <div className={popup.formGroup}>
                <label>Children</label>
                <input type="number" name="child" className={popup.formControl} value={CheckIn.child} onChange={handleChange} />
            </div>
            <div className={popup.formGroup}>
                <label>QTY</label>
                <input type="number" name="qty" className={popup.formControl} value={CheckIn.QTY} onChange={handleQTY} />
            </div>
            <button type="button" className={popup.submitAvailability} onClick={saveData}>Check Now</button>
        </div>
    );

    return(
        <div className="container">
            <div className="top">
                <img src={bg} alt="" />
            </div>
            
            <div className="links">
            <span style={{marginLeft: '70%'}}>
                    <Link to="/home"> Home </Link>
                </span>
                <span>
                    <Link to="/home"> Booking </Link>
                </span>
                <span>
                    <Link to="/home"> Check Out </Link>
                </span>
                <span>
                    <Link to="/home"> Contact </Link>
                </span>
            </div>
            <div className="sale">
                <p>Get 20% discount when you book 3 family rooms</p>
            </div>

            {/*<div className="search">
                <input type="date" placeholder="Check in date" className="in" required
                onChange={handleCheckIn} value={checkIn}/>
                <input type="date" placeholder="Check out date" className="out" required
                onChange={handleCheckOut} value={checkOut}/>
                <button type="button" placeholder="Search" className="nyaka" onClick={handleSubmit}> Search </button>
    </div>*/}

            <div><h1 style={{marginTop: '10%'}}>Room Booking</h1></div>

            <div className="types">
                <table>
                    <thead>
                        <tr style={{backgroundColor: 'darkgray'}}>
                            <td>Room Info</td>
                            <td>Qty</td>
                            <td>Services</td>
                            <td>Initial Amount</td>
                        </tr>
                    </thead>
                    <tbody>
                        
                        
                        <tr>
                        Family room gives you<br></br> enough space and confortability<br></br> to make your family not wanna leave
                            
                            <td>1</td>
                            <td>
                                <p>Breakfast, Lunch, Dinner,<br></br>
                                   Massage,Swimming Pool,Wifi<br></br>
                                </p>
                            </td>
                            <td>ZAR 2500</td>
                            {/*<td>

                                <br></br><br></br>
                            <section className="py-4 container">
                                <div className="row justify-content-center">
                                    {data.productData.map((item, index)=>{
                                        return(
                                            <Itemcard
                                            img={item.img}
                                            title={item.title}
                                            desc={item.desc} 
                                            price={item.price} 
                                            item={item}
                                            key={index} 
                                            />
                                        )
                                    })}
                                </div>
                            </section>
                                </td>*/}
                        </tr>
                        <tr >
                            <td>
                                
                            </td>
                            <td>2</td>
                            <td>
                                <p>Breakfast, Lunch, Dinner,<br></br>
                                   Massage,Swimming Pool,Wifi<br></br>
                                </p>
                            </td>
                            <td>ZAR 5200</td>
                            
                </tr>
                    </tbody>
                </table>
                
            </div>

            {/*<span>
                <Link to="/cart">ADDED ROOM</Link>
                            </span>
            <div>
                <Cart chechIn={checkIn} checkOut={checkOut}/>
            </div>*/}


        
        <div className={homeBook.main}>
            <br />
            <div className={homeBook.content}>
                <div className={homeBook.hotelList}>
                    {data.productData.map((item, index)=>(
                        <div className={homeBook.hotel} key={index}>
                            <div className={homeBook.image} /*onClick={() => gallery(listHotels)}*/>
                               <Link to="/HotelInfo"> <img src="luxury.jpeg" alt="" /></Link>
                            </div>
                            <div className={homeBook.description} /*onClick={() => gallery(listHotels)}*/>
                                <h3>{item.title}</h3><br />
                                <label>R {item.price}</label><br /><br />
                                <label>{item.desc}</label>
                            </div>
                            <div className={homeBook.bookbtn}>
                                <button className={homeBook.btn} onClick={() => book(item)}>Book</button>
                                <PopUpBook trigger={ButtonPopup} setTrigger={setButtonPopup}>
                                    {bookPopUp}
                                </PopUpBook>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
    )
}

export default Family;


import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import CardDate from '../CardDate';
import Planning from '../Planning';
import DatePicker, { DateObject } from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";

const format = "DD/MM/YYYY";
const Calender = () => {
    const [date, setdata] = useState();
    const [card, setCard] = useState()

    const Cardfunc = () => {
        setCard(<Planning />)

    }
    const [dates, setDates] = useState([

    ]);


    return (
        <div>
           
           
         
                <div className="App">
                    <p style={{ textAlign: "center", fontSize: "25px", fontWeight:'bold' }} className="mt-4">Plan Your Itinerary</p>
                    <div  className="my-3"style={{ textAlign: "center" }}>
                    <span>Pickup Your Date </span>
                        <DatePicker
                            value={dates}
                            onChange={setDates}
                            multiple
                            sort
                            format={format}
                            onOpen={Cardfunc}
                            calendarPosition="bottom-center"
                            plugins={[<DatePanel />]}
                        />

                    </div>
                    {/* <button onClick={() => setDates()}>reset</button> */}
                    <div >
                        {dates.map((date, index) => (
                            <div class="card my-5 planned" >
                                <div class="card-body" key={index}>
                                  <h3 className='text-white'> {date.format()}</h3> 
                                    {card}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>




        
    )
}

export default Calender
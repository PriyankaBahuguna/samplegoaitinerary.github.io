import React, { useState } from "react";
import Input from "../Input";



const Planning = (props) => {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(null);
    const [count3, setCount3] = useState(null);
    const [count4, setCount4] = useState(null);
    const [count5, setCount5] = useState(null);
    const [count6, setCount6] = useState(null);
    const [term, setTerm] = useState([])
    const [myData, setMyData] = useState([])
    const [myData2, setMyData2] = useState([])
    const [myData3, setMyData3] = useState([])
    const [myData4, setMyData4] = useState([])
    const [myData5, setMyData5] = useState([])
    const [myData6, setMyData6] = useState([])
    const [value, setValue] = useState("");

    const handleaddNumber = (e) => {
        setCount(e.target.value);
        console.log(count);
    };

    const handleaddNumber2 = (e) => {
        setCount2(e.target.value);
        console.log(count2);
    };
    const handleaddNumber3 = (e) => {
        setCount3(e.target.value);
        console.log(count3);
    };
    const handleaddNumber4 = (e) => {
        setCount4(e.target.value);
        console.log(count4);
    };
    const handleaddNumber5 = (e) => {
        setCount5(e.target.value);
        console.log(count5);
    };
    const handleaddNumber6 = (e) => {
        setCount6(e.target.value);
        console.log(count6);
    };
    // form submission and data addition
    const onSubmit = (e) => {
        e.preventDefault();
        setMyData([...myData, term]);
    };
    //   // delete items
    function onDelete(myId) {
        const updates = myData.filter((each, idx) => idx !== myId);
        setMyData(updates);
    }
    function onDelete2(myId) {
        const updates = myData.filter((each, idx) => idx !== myId);
        setMyData2(updates);
    }
    function onDelete3(myId) {
        const updates = myData.filter((each, idx) => idx !== myId);
        setMyData3(updates);
    }
    function onDelete4(myId) {
        const updates = myData.filter((each, idx) => idx !== myId);
        setMyData4(updates);
    }
    function onDelete5(myId) {
        const updates = myData.filter((each, idx) => idx !== myId);
        setMyData5(updates);
    }
    function onDelete6(myId) {
        const updates = myData.filter((each, idx) => idx !== myId);
        setMyData6(updates);
    }
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    const addNum = (val, val2, val3, val4, val5, val6,) => {
        let a = parseInt(val);
        let b = parseInt(val2);
        let c = parseInt(val3);
        let d = parseInt(val4);
        let e = parseInt(val5);
        let f = parseInt(val6);
        let sum = a + b + c + d + e + f
        setValue(sum);
    };
    return (
        <div className="container">


            <div class="card plan my-5">
                <div class="card-body">
                    <h4 className="text-white">Plan your itinerary for your Goa visit.</h4>



                    <div class="container text-center">
                        <div class="row ">
                            {/* <div class="col-md-6"> {ACTIVITIES.map((i, id) => (
                                <form onSubmit={(e) => { e.preventDefault(); setMyData([...term, i.value]) }} key={id}>
                                    <span >
                                        <input value={i.value} onChange={(e) => setMyData(e.target.value)} />

                                    </span>


                                    <button>+</button>
                                </form>

                            ))}</div> */}
                            <div class="col-md-6"  >
                                <div >
                                    <form onSubmit={(e) => { e.preventDefault(); setMyData(["Cultural Exploration"]) }} >
                                        <span >
                                            <input className="mt-3 px-5 py-3 bg-warning rounded-pill" value="Cultural Exploration" onChange={(e) => setMyData(e.target.value)} />

                                        </span>


                                        <button className="p-2 rounded"> add</button>
                                    </form>

                                </div>
                                <div>
                                    <form onSubmit={(e) => { e.preventDefault(); setMyData2(["Local market visit"]) }} >
                                        <span >
                                            <input className="my-1 px-5 py-3 bg-warning rounded-pill" value="Local market visit" onChange={(e) => setMyData2(e.target.value)} />

                                        </span>


                                        <button className="p-2 rounded">add</button>
                                    </form>

                                </div>
                                <div>
                                    <form onSubmit={(e) => { e.preventDefault(); setMyData3(["Mandovi River  cruise"]) }} >
                                        <span >
                                            <input className="my-1 px-5 py-3  bg-warning rounded-pill" value="Mandovi River  cruise" onChange={(e) => setMyData3(e.target.value)} />

                                        </span>


                                        <button className="p-2 rounded">add</button>
                                    </form>

                                </div>
                                <div>
                                    <form onSubmit={(e) => { e.preventDefault(); setMyData4(["Water sports at Grand island  "]) }} >
                                        <span >
                                            <input className="my-1 px-5 py-3  bg-warning rounded-pill" value="Water sports at Grand island " onChange={(e) => setMyData4(e.target.value)} />

                                        </span>


                                        <button className="p-2 rounded">add</button>
                                    </form>

                                </div>
                                <div>
                                    <form onSubmit={(e) => { e.preventDefault(); setMyData5(["Clubbing at Tito's lane   "]) }} >
                                        <span >
                                            <input className="my-1 px-5 py-3  bg-warning rounded-pill" value="Clubbing at Tito's lane" onChange={(e) => setMyData5(e.target.value)} />

                                        </span>


                                        <button className="p-2  rounded">add</button>
                                    </form>

                                </div>
                                <div>
                                    <form onSubmit={(e) => { e.preventDefault(); setMyData6(["A day at Baga Beach    "]) }} >
                                        <span >
                                            <input className="my-1 px-5 py-3  bg-warning rounded-pill" value="A day at Baga Beach" onChange={(e) => setMyData6(e.target.value)} />

                                        </span>


                                        <button className="p-2 rounded">add</button>
                                    </form>

                                </div>
                            </div>

                            <div className="col-md-6 mt-3">
                                <span class="form-floating "  >

                                    <select className="form-select my-1 p-3 bg-warning rounded-pill" id="floatingSelectGrid" onChange={(e) => handleaddNumber(e)}
                                        value={count ? count : ""}

                                    >
                                        <option selected>Time (in hours for Cultural Exploration)</option>

                                        <option value="1" >1</option>
                                        <option value="2" >2</option>
                                        <option value="3" >3</option>
                                        <option value="4" >4</option>
                                        <option value="5" >5</option>
                                        <option value="6" >6</option>
                                        <option value="7" >7</option>

                                    </select>



                                </span>
                                <div class="form-floating "  >

                                    <select className="form-select my-1 p-3 bg-warning rounded-pill" id="floatingSelectGrid" onChange={(e) => handleaddNumber2(e)}
                                        values2={count2 ? count2 : ""}

                                    >
                                        <option selected>Time (in hours for Local market visit)</option>

                                        <option value="1" >1</option>
                                        <option value="2" >2</option>
                                        <option value="3" >3</option>
                                        <option value="4" >4</option>
                                        <option value="5" >5</option>
                                        <option value="6" >6</option>
                                        <option value="7" >7</option>
                                        <option value="8" >8</option>

                                    </select>



                                </div>
                                <span class="form-floating  "  >

                                    <select className="form-select my-1 p-3 bg-warning rounded-pill" id="floatingSelectGrid" onChange={(e) => handleaddNumber3(e)}
                                        values3={count3 ? count3 : ""}

                                    >
                                        <option selected>Time (in hours for Mandovi River cruise)</option>

                                        <option value="1" >1</option>
                                        <option value="2" >2</option>
                                        <option value="3" >3</option>


                                    </select>



                                </span>
                                <span class="form-floating "  >

                                    <select className="form-select my-1 p-3 bg-warning rounded-pill" id="floatingSelectGrid" onChange={(e) => handleaddNumber4(e)}
                                        values4={count4 ? count4 : ""}

                                    >
                                        <option selected>Time (in hours for Water sports at Grand island )</option>

                                        <option value="1" >1</option>
                                        <option value="2" >2</option>
                                        <option value="3" >3</option>
                                        <option value="4" >4</option>


                                    </select>



                                </span>
                                <span class="form-floating "  >

                                    <select className="form-select my-1 p-3 bg-warning rounded-pill" id="floatingSelectGrid" onChange={(e) => handleaddNumber5(e)}
                                        values5={count5 ? count5 : ""}

                                    >
                                        <option selected>Time (in hours for Clubbing at Tito's lane)</option>

                                        <option value="1" >1</option>
                                        <option value="2" >2</option>
                                        <option value="3" >3</option>
                                        <option value="4" >4</option>
                                        <option value="5" >5</option>


                                    </select>



                                </span>
                                <span class="form-floating "  >

                                    <select className="form-select my-1 p-3 bg-warning rounded-pill" id="floatingSelectGrid" onChange={(e) => handleaddNumber6(e)}
                                        values6={count6 ? count6 : ""}

                                    >
                                        <option selected>Time (in hours for A day at Baga Beach)</option>

                                        <option value="1" >1</option>
                                        <option value="2" >2</option>
                                        <option value="3" >3</option>
                                        <option value="4" >4</option>
                                        <option value="5" >5</option>
                                        <option value="6" >6</option>
                                        <option value="7" >7</option>
                                        <option value="8" >8</option>
                                        <option value="9" >9</option>


                                    </select>



                                </span>
                            </div>


                            <Input values={count ? count : ""} values2={count2 ? count2 : ""} values3={count3 ? count3 : ""} values4={count4 ? count4 : ""} values5={count5 ? count5 : ""} values6={count6 ? count6 : ""} />
                        </div>
                        <div class="my-4">
                            <h3 className="text-white">Your planned itinerary</h3>
                            <div >
                                <div>
                                    {myData.map((each, idx) => (
                                        <div key={idx} className=" d-flex justify-content-center">
                                            <h5 className="mt-3 p-2 bg-warning rounded-pill">{each}</h5>
                                            <button onClick={() => onDelete(idx)} className="px-3 bg-danger rounded mt-3">X</button>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    {myData2.map((each, idx) => (
                                        <div key={idx} className=" d-flex justify-content-center">
                                            <h5 className="mt-3 p-2 bg-warning rounded-pill">{each}</h5>
                                            <button className="px-3 bg-danger rounded mt-3" onClick={() => onDelete2(idx)}>X</button>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    {myData3.map((each, idx) => (
                                        <div key={idx} className=" d-flex justify-content-center">
                                            <h5 className="mt-3 p-2 bg-warning rounded-pill">{each}</h5>
                                            <button className="px-3 bg-danger rounded mt-3" onClick={() => onDelete3(idx)}>X</button>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    {myData4.map((each, idx) => (
                                        <div key={idx} className=" d-flex justify-content-center">
                                            <h5 className="mt-3 p-2 bg-warning rounded-pill">{each}</h5>
                                            <button className="px-3 bg-danger rounded mt-3" onClick={() => onDelete4(idx)}>X</button>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    {myData5.map((each, idx) => (
                                        <div key={idx} className=" d-flex justify-content-center">
                                            <h5 className="mt-3 p-2 bg-warning rounded-pill">{each}</h5>
                                            <button className="px-3 bg-danger rounded mt-3" onClick={() => onDelete5(idx)}>X</button>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    {myData6.map((each, idx) => (
                                        <div key={idx} className=" d-flex justify-content-center">
                                            <h5 className="mt-3 p-2 bg-warning rounded-pill">{each}</h5>
                                            <button className="px-3 bg-danger rounded mt-3" onClick={() => onDelete6(idx)}>X</button>
                                        </div>
                                    ))}
                                </div>


                            </div>
                        </div>

                    </div>


                </div>
            </div>



        </div>
    );
};

export default Planning;
import React, { useState } from "react";


export default function Input (props) {
    const [value, setValue] = useState(0);

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
        <div className="App d-flex flex-row-reverse">
            <h5 className="text-white"> {value > 9 ? "Total time should be under 9 " : "Total time taken will be " + value} hours</h5>
            <button onClick={() => addNum(props.values, props.values2, props.values3, props.values4, props.values5, props.values6)}>
                Total
            </button>

        </div>
    );
};


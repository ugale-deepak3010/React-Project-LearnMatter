import React, { useState } from 'react'

function AutoIncrementer() {

    var [deep_valueOfState, deep_updateForFun] = useState(100);

    return (
        <div>
            <h2>Auto  -Incrementer</h2>

            <h1 color='red' >{deep_valueOfState}</h1>

            In above Tailwand PreFlight applied.
            <hr />
            <br />

            <h2 className="text-2xl font-semibold" > Auto Increment Example </h2>
            <h1 className="text-4xl font-bold text-red-500" > {deep_valueOfState} </h1>

            <button onClick={
                () => {
                    deep_updateForFun(deep_valueOfState + 1)
                }
            }
                className='bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-full cursor-pointer text-2xl'

            > Click to Increment</button>

        </div>

    )
}

export default AutoIncrementer
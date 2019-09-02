import React, {useState, useEffect} from 'react'

function Example(){
    const [count, setCount] = useState(0);

    //React will run this after every render including the first render
    useEffect(()=>{
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>setCount(count + 1)}>
                Click me
            </button>
        </div>
    );

}

export default Example;

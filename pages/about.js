import { useState } from "react"

const Aboutme = ({abc}) => {
    const [num, setNum] = useState(0)
    return (
        <div>
            <h2>{abc}</h2>
            <h1>{num}</h1>
            <h1>hello</h1>
            <button onClick={() => setNum(prev => prev + 1)}>acrement</button>
        </div>
    )
}

export default Aboutme
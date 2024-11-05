import React from 'react'

function Range() {
    const handleChange = ()=>{

    }
    return (
        <div>
            <input
                type='range'
                value={0}
                name=''
                onChange={handleChange}
                step={0.01}
                className='audio-range'
                min={0}
                max={180}
            />
        </div>
    )
}

export default Range
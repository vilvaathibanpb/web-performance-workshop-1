import React, { useEffect, useState } from 'react';

const Banner = () => {
    const [height, setHeight] = useState(100)

    useEffect(() => {
        setTimeout(() => {
            setHeight(1000)
        }, 1000)
    }, [])
    return (
        <div style={{height: `${height}px`}} >This is a dummy Banner</div>
    )
}

export default Banner;
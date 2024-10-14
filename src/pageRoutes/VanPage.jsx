import { useEffect, useState } from "react";
import '../../server';

export default function VanPage() {
    const [vans, setVans] = useState([]);

    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans));
    }, [])

    const vansData = vans.map(van => {
        return (
            <div key={van.id} className="vanDiv">
                <span className="vanImgSpan">
                    <img src={van.imageUrl}></img>
                </span>
                <p>{van.name}</p>
                <p>{van.price}/Day</p>
                <p><i>{van.type}</i></p>
            </div>
        )
    });
    console.log(vansData)
    return (
        <>
            <h1>Hello its Vanpage</h1>
            <div className="mainDivVan">{vansData}</div>
        </>
    )
}
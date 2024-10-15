import { useEffect, useState } from "react";
import '../../server';
import { Link } from "react-router-dom";

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
                <Link to={`/vans/${van.id}`}>
                    <span className="vanImgSpan">
                        <img src={van.imageUrl}></img>
                    </span>
                    <p>{van.name}</p>
                    <p>{van.price}$/Day</p>
                    <p className="vanType"><i>{van.type}</i></p>
                </Link>
            </div>
        )
    });
    return (
        <>
            <h1>Hello its Vanpage</h1>
            <div className="mainDivVan">{vansData}</div>
        </>
    )
}
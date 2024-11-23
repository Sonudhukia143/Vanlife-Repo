import { useParams, Link, useLocation } from "react-router-dom"
import '../../server.js';
import { useEffect, useState } from "react";
import '../styles/VanDetails.css';

export default function VanDetails() {
    const { id } = useParams();
    const [vans, setVans] = useState([]);

    const param = useLocation().state.userSearchParams;
    const previousParams =  param != null ? `?${param}` : "";


    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans));
    }, [id]);

    const van = vans[id - 1];

    return (
        <div style={{display:"contents"}}>
           <Link to={`/vans/${previousParams}`} className="backToVansLink">← Back to Vans</Link>

            {
                van ? <div className="van-detail">
                    <img src={van.imageUrl} />
                    <h2><p>{van.name}</p></h2>
                    <i><p className="vanType">{van.type}</p></i>
                    <b><p>{van.price}$/Day</p></b>
                    <p><b>Van Details:</b> {van.description}</p>
                </div> : <h1>Loading...</h1>
            }
        </div>
    )
}
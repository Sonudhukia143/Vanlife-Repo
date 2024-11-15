import { Link, Outlet, useParams,NavLink } from "react-router-dom"
import '../../../../server';
import { useEffect, useState } from "react";

export default function HostVanDetails() {
    const { id } = useParams();
    const [vans, setVans] = useState([]);

    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans));
    }, [id]);

    const van = vans[id - 1];
    return (
        <>
            <Link to={'/host/vans'}><h1>Back to Home</h1></Link>
            {
                van ? <div className="van-detail" style={{marginBottom:"10vh"}}>
                    <div style={{ display: "flex"}}>
                        <img src={van.imageUrl} />

                        <span style={{display:"inline-flex",flexDirection:"column",justifyContent:"space-evenly",marginLeft:"5%"}}>
                            <i><p className="vanType" style={{ padding: "5px 20px 5px 20px" }}>{van.type}</p></i>
                            <b><p>{van.name}</p></b> 
                            <b><p>{van.price}$/Day</p></b>
                        </span>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                        <NavLink 
                          to="."
                          end
                        >
                            Details
                        </NavLink>
                        <NavLink
                          to="pricing"
                        >
                            Pricing
                        </NavLink>
                        <NavLink
                          to="photos"
                        >
                            Photos
                        </NavLink>
                    </div>
                    <Outlet context={[van]}/>

                </div> : <h1>Loading...</h1>
            }
        </>

    )
}
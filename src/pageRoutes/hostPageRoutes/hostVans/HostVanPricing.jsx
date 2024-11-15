import { useOutletContext } from "react-router-dom";

export default function HostVanPricing () {
    const [van] = useOutletContext();

    return (
        <div>
            <b><p>{van.price}$/Day</p></b>
            <b>Daily Rates:</b> <p>Usually higher on a per-day basis but provide flexibility.</p>
            <b>Weekly or Monthly Rates:</b> <p>Often discounted to attract long-term renters.</p>
        </div>
           
    )
}
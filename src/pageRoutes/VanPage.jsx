import '../../server';
import { Link, useLoaderData } from "react-router-dom";
import getVans from '../../utils/GetVansData.js';
import { useSearchParams } from "react-router-dom";

export async function loader () {
    try {
        const vansData = await getVans();
        return vansData.vans;
    } catch (error) {
        return error;
    }
}

export default function VanPage() {
    const [searchParams] = useSearchParams();
    const type = searchParams.get("type");

    const vans = useLoaderData();

    const displayedVans = type ? vans.filter(van => van.type === type) : vans;

    // Define which links are disabled based on the current type
    const isLuxuryDisabled = type === "luxury";
    const isRuggedDisabled = type === "rugged";
    const isSimpleDisabled = type === "simple";
    const isAllDisabled = type === null || "";

    const vansData = displayedVans.map(van => {
        return (
            <div key={van.id} className="vanDiv">
                <Link to={van.id} className="single-van-wrapper" state={{ type: type, userSearchParams: `${searchParams.toString()}` }}>
                    <div>
                        <span className="vanImgSpan">
                            <img src={van.imageUrl}></img>
                        </span>
                        <p>{van.name}</p>
                        <p>{van.price}$/Day</p>
                        <p className="vanType"><i>{van.type}</i></p>
                    </div>
                </Link>
            </div>
        )
    });

    return (
        <>
            <span className="vanFilterLinkDiv">
                <Link to={"?type=luxury"} className={`vanFilterLink ${isLuxuryDisabled ? "disabled" : ""}`} style={{ pointerEvents: isLuxuryDisabled ? "none" : "auto", opacity: isLuxuryDisabled ? 0.5 : 1, transform: isLuxuryDisabled ? "translate(0px)" : "translate(5px)", boxShadow: isLuxuryDisabled && "none" }} >Luxury</Link>
                <Link to={"?type=rugged"} className={`vanFilterLink ${isLuxuryDisabled ? "disabled" : ""}`} style={{ pointerEvents: isRuggedDisabled ? "none" : "auto", opacity: isRuggedDisabled ? 0.5 : 1, transform: isRuggedDisabled ? "translate(0px)" : "translate(5px)", boxShadow: isRuggedDisabled && "none" }} >Rugged</Link>
                <Link to={"?type=simple"} className={`vanFilterLink ${isLuxuryDisabled ? "disabled" : ""}`} style={{ pointerEvents: isSimpleDisabled ? "none" : "auto", opacity: isSimpleDisabled ? 0.5 : 1, transform: isSimpleDisabled ? "translate(0px)" : "translate(5px)", boxShadow: isSimpleDisabled && "none" }} >Simple</Link>
                <Link to={""} className={`vanFilterLink ${isAllDisabled ? "disabled" : ""}`} style={{ pointerEvents: isAllDisabled ? "none" : "auto", opacity: isAllDisabled ? 0.5 : 1, transform: isAllDisabled ? "translate(0px)" : "translate(5px)", boxShadow: isAllDisabled && "none" }}>All</Link>
            </span>

            <div className="mainDivVan">{vansData}</div>
        </>
    )
}
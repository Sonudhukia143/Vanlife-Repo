import { useOutletContext, useParams } from "react-router-dom";

export default function HostVanPhotos () {
    const [van] = useOutletContext();

    console.log(useParams());

    return (
            <span style={{display:"grid",gridTemplateColumns:"1fr 1fr",gridTemplateRows:"1fr"}}>
                <img src={van.imageUrl} style={{display:"flex",height:"20vh",padding:"1vh",maxWidth:"20vh"}}/>
                <b>
                    <p style={{padding:"1vh"}}>
                        Bonus Tip: Always review photos after the shoot and reshoot.
                    </p>
                </b>
            </span>
    )
}
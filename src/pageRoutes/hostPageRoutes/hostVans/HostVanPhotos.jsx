import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos () {
    const [van] = useOutletContext();

    return (
            <span style={{display:"grid",gridTemplateColumns:"1fr 2fr",gridTemplateRows:"2fr"}}>
                <img src={van.imageUrl} style={{display:"flex",height:"20vh",padding:"2vh"}}/>
                <b>
                    <p style={{padding:"5vh"}}>
                        Bonus Tip: Always review photos after the shoot and reshoot if necessary to avoid missed opportunities. A little preparation goes a long way in creating an appealing and professional gallery!
                    </p>
                </b>
            </span>
    )
}
import { useOutletContext } from "react-router-dom"

export default function HostVanDetail () {
    const [van] = useOutletContext();
    return (
        <>
            <h3>{van.name}</h3>
            <h4>{van.type}</h4>
            <p>{van.description}</p>
        </>

    )
}
import { Outlet } from "react-router-dom"

export default function Host () {
    return (
        <>
            <h1>This is host page.</h1>
            <Outlet />
        </>
    )
}
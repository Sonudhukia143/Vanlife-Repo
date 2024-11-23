import { useRouteError } from "react-router-dom";

export default function ErrorTemplate() {
    const error = useRouteError();
    console.error(error); // Log error details for debugging

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>Oops! Something went wrong.</h1>
            <p>{error.message || error.status}</p>
            <p>
                <a href="/">Go back to the homepage</a>
            </p>
        </div>
    );
}

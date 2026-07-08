import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="container p-5 text-center">
            <div className="row">
                <div className="col-md-12 my-5">
                    <h1
                        style={{
                            fontSize: "72px",
                            fontWeight: "bold",
                            color: "#1a73e8",
                        }}
                    >
                        404
                    </h1>
                    <h2 className="my-3">Oops! Page Not Found</h2>
                    <p className="text-muted fs-5">
                        The page you&apos;re looking for doesn&apos;t exist or has
                        been moved.
                    </p>
                    <div className="mt-5">
                        <Link to="/" className="btn btn-primary btn-lg">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFound;

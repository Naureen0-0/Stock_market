import React from "react";

function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
    return (
        <section className="container py-5 product-section product-section--left">
            <div className="row align-items-center product-section__row">
                <div className="col-12 col-lg-7 mb-5 mb-lg-0 text-center product-section__media">
                    <img
                        src={imageURL}
                        alt={productName}
                        className="img-fluid product-section__image"
                        style={{ width: "100%", maxWidth: "620px" }}
                    />
                </div>

                <div className="col-12 col-lg-5 px-lg-5 product-section__content">
                    <h2 className="fs-2 mb-4">{productName}</h2>
                    <p
                        className="text-muted lh-lg mb-4 product-section__description"
                        style={{ fontSize: "0.98rem" }}
                    >
                        {productDescription}
                    </p>

                    <div className="d-flex flex-wrap gap-4 mb-4 product-section__links">
                        {tryDemo && (
                            <a href={tryDemo} className="text-decoration-none">
                                Try demo →
                            </a>
                        )}
                        {learnMore && (
                            <a href={learnMore} className="text-decoration-none">
                                Learn more →
                            </a>
                        )}
                    </div>

                    {(googlePlay || appStore) && (
                        <div className="d-flex flex-wrap gap-3 product-section__stores">
                            {googlePlay && (
                                <a href={googlePlay} aria-label={`${productName} on Google Play`}>
                                    <img
                                        src="/Assets/googlePlayBadge.svg"
                                        alt="Get it on Google Play"
                                        className="product-section__store-badge"
                                        style={{ height: "40px" }}
                                    />
                                </a>
                            )}
                            {appStore && (
                                <a href={appStore} aria-label={`${productName} on App Store`}>
                                    <img
                                        src="/Assets/appstoreBadge.svg"
                                        alt="Download on the App Store"
                                        className="product-section__store-badge"
                                        style={{ height: "40px" }}
                                    />
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default LeftSection;

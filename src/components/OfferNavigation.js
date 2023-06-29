"use client";

import { createClient } from "../../prismicio";
import { PrismicLink } from "@prismicio/react";

export default async function OfferNavigation({ activePage, lang }) {
    const client = createClient();
    const allOfferPages = await client.getAllByType("offerpage", { lang: lang });
    allOfferPages.sort((a, b) => a.data.ordinal - b.data.ordinal);
    return (
        <section className="offer-menu">
            {allOfferPages.map((page, i) => (
                <PrismicLink key={i} document={page} className={page.uid === activePage ? "active" : ""}>
                    {page.data.label}
                </PrismicLink>
            ))}
        </section>
    );
}

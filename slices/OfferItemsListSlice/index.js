/**
 * @typedef {import("@prismicio/client").Content.OfferItemsListSliceSlice} OfferItemsListSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<OfferItemsListSliceSlice>} OfferItemsListSliceProps
 * @param {OfferItemsListSliceProps}
 */
import * as prismic from "@prismicio/client";
import { PrismicLink } from "@prismicio/react";
import { createClient } from "../../prismicio";
const OfferItemsListSlice = async ({ slice }) => {
    const offerTarget = slice.primary.offertarget.id;
    const client = createClient();
    const response = await client.get({
        pageSize: 100,
        filters: [prismic.filter.at("my.offeritempage.offertarget", offerTarget)],
        orderings: [
            {
                field: "document.first_publication_date",
            },
        ],
        lang: "*",
    });
    const allOfferItemPages = response.results;
    return (
        <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} className="container">
            <div className="offer__items">
                {allOfferItemPages.map((page, i) => (
                    <PrismicLink document={page} className="offer__item">
                        {page.data.title}
                    </PrismicLink>
                ))}
            </div>
        </section>
    );
};

export default OfferItemsListSlice;

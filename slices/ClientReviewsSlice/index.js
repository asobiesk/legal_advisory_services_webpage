/**
 * @typedef {import("@prismicio/client").Content.ClientReviewsSliceSlice} ClientReviewsSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ClientReviewsSliceSlice>} ClientReviewsSliceProps
 * @param {ClientReviewsSliceProps}
 */

import { PrismicNextImage } from "@prismicio/next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientReviewsSlice = ({ slice }) => {
    return (
        <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
            <Slider dots={true}>
                {slice.items.map((item, i) => (
                    <div key={i} className="container dark reviews no-pdd flex flex-row">
                        <div class="col-2">
                            <div>
                                <p class="reviews__text">{item.review}</p>
                                <p class="reviews__author">
                                    <b>{item.clientname}</b> - {item.clientcountry}
                                </p>
                            </div>
                        </div>
                        <div class="col-2">
                            <PrismicNextImage field={item.image} />
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default ClientReviewsSlice;

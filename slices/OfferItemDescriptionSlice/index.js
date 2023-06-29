/**
 * @typedef {import("@prismicio/client").Content.OfferItemDescriptionSliceSlice} OfferItemDescriptionSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<OfferItemDescriptionSliceSlice>} OfferItemDescriptionSliceProps
 * @param {OfferItemDescriptionSliceProps}
 */
import { PrismicRichText } from "@prismicio/react";

const OfferItemDescriptionSlice = ({ slice }) => {
    return (
        <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} className="container-md">
            {slice.items.map((item, i) => (
                <div className="mt-16 item-description" key={i}>
                    <h2 className="font-bold">{item.header}</h2>
                    <PrismicRichText field={item.maintext} />
                    <PrismicRichText
                        field={item.highlightedtext}
                        components={{
                            paragraph: ({ children }) => <p className="info">{children}</p>,
                        }}
                    />
                </div>
            ))}
        </section>
    );
};

export default OfferItemDescriptionSlice;

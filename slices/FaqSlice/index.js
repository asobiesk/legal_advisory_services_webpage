/**
 * @typedef {import("@prismicio/client").Content.FaqSliceSlice} FaqSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FaqSliceSlice>} FaqSliceProps
 * @param {FaqSliceProps}
 */
import { PrismicRichText } from "@prismicio/react";

const FaqSlice = ({ slice }) => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="container first flex"
        >
            <div className="col-2">
                <div className="faq__heading">
                    <h1 className="font-bold">FAQ</h1>
                    <p className="p-sm">{slice.primary.maindescription}</p>
                </div>
            </div>

            <div className="col-2">
                {slice.items.map((item, i) => (
                    <div key={i} className="faq-answers">
                        <h2 className="h3 font-bold">{item.question}</h2>
                        <PrismicRichText field={item.answer} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FaqSlice;

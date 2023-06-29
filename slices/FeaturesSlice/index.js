/**
 * @typedef {import("@prismicio/client").Content.FeaturesSliceSlice} FeaturesSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FeaturesSliceSlice>} FeaturesSliceProps
 * @param {FeaturesSliceProps}
 */
import { PrismicNextImage } from "@prismicio/next";

const FeaturesSlice = ({ slice }) => {
    return (
        <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} className="container">
            {slice.primary.title?.length ? <h2 className="font-bold">{slice.primary.title}</h2> : <></>}
            <div className="container flex features">
                {slice.items.map((item, i) => (
                    <div className={`col-${slice.items.length}`}>
                        <PrismicNextImage field={item.icon} />
                        <h2 className="h3">{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturesSlice;

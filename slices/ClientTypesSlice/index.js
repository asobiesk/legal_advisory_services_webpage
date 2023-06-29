/**
 * @typedef {import("@prismicio/client").Content.ClientTypesSliceSlice} ClientTypesSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ClientTypesSliceSlice>} ClientTypesSliceProps
 * @param {ClientTypesSliceProps}
 */
import { PrismicLink } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

const ClientTypesSlice = ({ slice }) => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="container flex gain"
        >
            <div class="col-2">
                <PrismicNextImage field={slice.primary.image} />
            </div>
            <div class="col-2 flex-col justify-start">
                <h2 className="font-bold">{slice.primary.title}</h2>
                {slice.items.map((item, i) => (
                    <>
                        <h3 className="font-bold">{item.clienttype}</h3>
                        <p>{item.description}</p>
                        <PrismicLink field={item.link} key={i} className="btn-secondary">
                            <span>{item.linktext}</span>
                        </PrismicLink>
                    </>
                ))}
            </div>
        </section>
    );
};

export default ClientTypesSlice;

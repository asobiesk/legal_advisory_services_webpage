/**
 * @typedef {import("@prismicio/client").Content.MainPitchSliceSlice} MainPitchSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MainPitchSliceSlice>} MainPitchSliceProps
 * @param {MainPitchSliceProps}
 */

import { PrismicRichText, PrismicLink } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

const MainPitchSlice = ({ slice }) => {
    return (
        <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} className="hero">
            <div className="container flex">
                {/* Left Column */}
                <div className="w-1/2">
                    <PrismicRichText
                        field={slice.primary.title}
                        components={{ paragraph: ({ children }) => <span>{children}</span> }}
                    />
                    <PrismicRichText field={slice.primary.header} />
                    <PrismicRichText field={slice.primary.description} />
                    <div>
                        {slice.items.map((item, i) => (
                            <PrismicLink field={item.contactlink} key={i} className="btn">
                                {item.contactbuttontext}
                            </PrismicLink>
                        ))}
                    </div>
                </div>

                {/* Right Column */}
                <div className="w-1/2 p-4">
                    <PrismicNextImage field={slice.primary.image} />
                </div>
            </div>
        </section>
    );
};

export default MainPitchSlice;

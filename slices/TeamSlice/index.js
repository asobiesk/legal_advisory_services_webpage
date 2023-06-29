/**
 * @typedef {import("@prismicio/client").Content.TeamSliceSlice} TeamSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TeamSliceSlice>} TeamSliceProps
 * @param {TeamSliceProps}
 */
import { PrismicLink } from "@prismicio/react";

const TeamSlice = ({ slice }) => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="container dark team"
            style={{ backgroundImage: `url('${slice.primary.image.url}')` }}
        >
            <h2 className="font-bold">{slice.primary.title}</h2>
            <p>{slice.primary.description}</p>
            <PrismicLink field={slice.primary.buttonlink} className="btn">
                {slice.primary.buttontext}
            </PrismicLink>
        </section>
    );
};

export default TeamSlice;

/**
 * @typedef {import("@prismicio/client").Content.BlogParagraphSlice} BlogParagraphSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BlogParagraphSlice>} BlogParagraphProps
 * @param {BlogParagraphProps}
 */
import { PrismicRichText } from "@prismicio/react";

const BlogParagraph = ({ slice }) => {
    return (
        <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} className="container-md">
            <div className="mt-16 item-description">
                <h2 className="h3 font-bold">{slice.primary.header}</h2>
                <PrismicRichText field={slice.primary.content} />
            </div>
        </section>
    );
};

export default BlogParagraph;

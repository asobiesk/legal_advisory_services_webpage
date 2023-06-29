/**
 * @typedef {import("@prismicio/client").Content.CtaSliceSlice} CtaSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CtaSliceSlice>} CtaSliceProps
 * @param {CtaSliceProps}
 */
import { PrismicLink } from "@prismicio/react";
import { giveMePage } from "../../prismicio";

const CtaSlice = async ({ slice, context }) => {
    const { lang } = context;
    const contactPrompt = await giveMePage("contactprompt", lang);
    return (
        <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} className="container cta">
            <h2 className="font-bold">{contactPrompt.data.title}</h2>
            <p>{contactPrompt.data.description}</p>
            <PrismicLink field={contactPrompt.data.contactlink} className="btn">
                {contactPrompt.data.contactbuttontext}
            </PrismicLink>
        </section>
    );
};

export default CtaSlice;

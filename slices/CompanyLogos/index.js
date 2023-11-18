/**
 * @typedef {import("@prismicio/client").Content.CompanyLogosSlice} CompanyLogosSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CompanyLogosSlice>} CompanyLogosProps
 * @param {CompanyLogosProps}
 */
import { PrismicNextImage } from "@prismicio/next";
const CompanyLogos = ({ slice }) => {
    return (
        <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} className="container">
            <div className="container flex logos">
                {slice.primary.title?.length ? <h2 className="font-bold">{slice.primary.title}</h2> : <></>}

                <div class="logos-slide">
                    {slice.items.map((item, i) => (
                        <PrismicNextImage field={item.logo} key={`companyLogo-${i}`} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CompanyLogos;

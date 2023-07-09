"use client";
/**
 * @typedef {import("@prismicio/client").Content.ContentSliceSlice} ContentSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContentSliceSlice>} ContentSliceProps
 * @param {ContentSliceProps}
 */
import { PrismicRichText, PrismicLink } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { useRouter } from "next/navigation";
import Image from "next/image";

const ContentSlice = ({ slice }) => {
    const router = useRouter();
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="container first flex content"
        >
            <div className="col-2 m-auto mb-8">
                <h1 className="font-bold">
                    {slice.primary.displayreturnbutton ? (
                        <a className="cursor-pointer inline" onClick={() => router.back()}>
                            <Image src="/icon_arrow-left.svg" width={20} height={20} alt="back" />
                        </a>
                    ) : (
                        <></>
                    )}
                    {slice.primary.title}
                </h1>
                <PrismicRichText field={slice.primary.description} />

                {slice.primary.contactbuttontext ? (
                    <PrismicLink field={slice.primary.contactlink} className="btn">
                        {slice.primary.contactbuttontext}
                    </PrismicLink>
                ) : (
                    <></>
                )}
            </div>
            <div className="col-2">
                <PrismicNextImage width={500} height={300} field={slice.primary.image} />
            </div>
        </section>
    );
};

export default ContentSlice;

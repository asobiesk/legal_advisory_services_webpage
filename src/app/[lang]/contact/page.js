"use client";

import { giveMePage } from "../../../../prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "../../../../slices";
import GlobalNavigation from "@/components/GlobalNavigation";
import { PrismicRichText } from "@prismicio/react";
import Map from "@/components/Map";
import Footer from "@/components/Footer";

export default async function ContactPage(props) {
    const lang = props?.params?.lang ?? "";
    const [navigation, page, footer] = await Promise.all([
        giveMePage("globalnavigation", lang),
        giveMePage("contactpage", lang),
        giveMePage("footer", lang),
    ]);
    return (
        <>
            <GlobalNavigation navigation={navigation} lang={lang} />
            <section className="container flex first">
                <div className="col-2">
                    <h1>{page.data.title}</h1>
                    <p className="p-sm">{page.data.pitch}</p>
                    <h2 className="h3">{page.data.phoneheader}</h2>
                    <p>{page.data.phone}</p>
                    <h2 className="h3">E-mail</h2>
                    <p>{page.data.email}</p>
                    <h2 className="h3">{page.data.addressheader}</h2>
                    <PrismicRichText field={page.data.address} />
                    <p>{page.data.openinghours}</p>
                </div>
                <div className="col-2">
                    <Map />
                </div>
            </section>
            <SliceZone slices={page.data.slices} components={components} context={{ lang: lang }} />
            <Footer footer={footer} />
        </>
    );
}

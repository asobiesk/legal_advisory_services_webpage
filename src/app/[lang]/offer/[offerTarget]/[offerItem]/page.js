"use client";

import { createClient, giveMePage } from "../../../../../../prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "../../../../../../slices";
import OfferNavigation from "@/components/OfferNavigation";
import GlobalNavigation from "@/components/GlobalNavigation";
import Footer from "@/components/Footer";

export default async function OfferItemPage(props) {
    if (!props) return <></>;
    let { offerTarget, offerItem, lang } = props.params;
    if (!offerTarget) offerTarget = "for-foreigners";
    const client = createClient();
    const [navigation, page, footer] = await Promise.all([
        giveMePage("globalnavigation", lang),
        client.getByUID("offeritempage", offerItem, { lang: "*" }),
        giveMePage("footer", lang),
    ]);
    return (
        <>
            <GlobalNavigation navigation={navigation} lang={lang} />
            <OfferNavigation activePage={offerTarget} />
            <SliceZone slices={page.data.slices} components={components} context={{ lang: lang }} />
            <Footer footer={footer} />
        </>
    );
}

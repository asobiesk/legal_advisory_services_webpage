"use client";

import { createClient, giveMePage, giveMeAllFromTypeByUid } from "../../../../../prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "../../../../../slices";
import OfferNavigation from "@/components/OfferNavigation";
import GlobalNavigation from "@/components/GlobalNavigation";
import Footer from "@/components/Footer";

export default async function OfferPage(props) {
    if (!props?.params) return <></>;
    const offerTarget = props?.params?.offerTarget ?? "for-foreigners";
    const lang = props?.params?.lang ?? "";
    const client = createClient();
    const [navigation, page, footer] = await Promise.all([
        giveMePage("globalnavigation", lang),
        client.getByUID("offerpage", offerTarget, { lang: props.params.lang }),
        giveMePage("footer", lang),
    ]);
    return (
        <>
            <GlobalNavigation navigation={navigation} lang={lang} />
            <OfferNavigation activePage={offerTarget} lang={lang} />
            <SliceZone slices={page.data.slices} components={components} context={{ lang: lang }} />
            <Footer footer={footer} />
        </>
    );
}

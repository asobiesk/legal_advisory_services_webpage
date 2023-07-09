"use client";

import { giveMePage } from "../../../../prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "../../../../slices";
import GlobalNavigation from "@/components/GlobalNavigation";
import Footer from "@/components/Footer";

export default async function PrivacyPage(props) {
    const lang = props?.params?.lang ?? "";
    const [navigation, page, footer] = await Promise.all([
        giveMePage("globalnavigation", lang),
        giveMePage("privacypage", lang),
        giveMePage("footer", lang),
    ]);
    return (
        <>
            <GlobalNavigation navigation={navigation} />
            <SliceZone slices={page.data.slices} components={components} context={{ lang: lang }} />
            <Footer footer={footer} />
        </>
    );
}

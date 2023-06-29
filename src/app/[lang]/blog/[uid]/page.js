"use client";

import { createClient, giveMePage } from "../../../../../prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "../../../../../slices";
import GlobalNavigation from "@/components/GlobalNavigation";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Footer from "@/components/Footer";

export default async function BlogPostPage(props) {
    if (!props) return <></>;
    const { uid, lang } = props.params;
    const router = useRouter();
    const client = createClient();
    const [navigation, page, footer] = await Promise.all([
        giveMePage("globalnavigation", lang),
        client.getByUID("blogpost", uid),
        giveMePage("footer", lang),
    ]);
    const formattedDate = new Date(page.last_publication_date).toLocaleDateString("en-GB");
    return (
        <>
            <GlobalNavigation navigation={navigation} lang={lang} />
            <article>
                <div className="offer-article__hero container flex">
                    <div className="col-2">
                        <h1 className="font-bold">
                            <a className="cursor-pointer inline" onClick={() => router.back()}>
                                <Image src="/icon_arrow-left.svg" width={20} height={20} alt="back" />
                            </a>
                            {page.data.title}
                        </h1>
                        <PrismicRichText field={page.data.description} />
                        <p className="date">{`${formattedDate} • ${page.data.minutestoread} min`}</p>
                    </div>
                    <div className="col-2">
                        <PrismicNextImage width={500} height={300} field={page.data.image} />
                    </div>
                </div>
                <SliceZone slices={page.data.slices} components={components} />
            </article>
            <Footer footer={footer} />
        </>
    );
}

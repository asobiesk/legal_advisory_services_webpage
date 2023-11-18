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

export default async function FaqIndividualQuestionPage(props) {
    const { uid, lang } = props.params;
    const router = useRouter();
    if (!lang) return <></>;
    const client = createClient();
    const [navigation, page, footer] = await Promise.all([
        giveMePage("globalnavigation", lang),
        client.getByUID("faqindividualquestion", uid, { lang: props.params.lang }),
        giveMePage("footer", lang),
    ]);
    return (
        <>
            <GlobalNavigation navigation={navigation} lang={lang} />
            <article>
                <div className="container flex">
                    <div className="col-2">
                        <h1 className="font-bold">
                            <a className="cursor-pointer inline" onClick={() => router.back()}>
                                <Image src="/icon_arrow-left.svg" width={20} height={20} alt="back" />
                            </a>
                        </h1>
                    </div>
                </div>
                <SliceZone slices={page.data.slices} components={components} context={{ lang: lang }} />
            </article>
            <Footer footer={footer} />
        </>
    );
}

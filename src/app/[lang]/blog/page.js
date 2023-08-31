"use client";

import { createClient, giveMePage } from "../../../../prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "../../../../slices";
import { PrismicLink } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import GlobalNavigation from "@/components/GlobalNavigation";
import Footer from "@/components/Footer";

export default async function BlogPage(props) {
    const lang = props?.params?.lang ?? "";

    const client = createClient();
    const [navigation, page, blogPosts, footer] = await Promise.all([
        giveMePage("globalnavigation", lang),
        giveMePage("blogpage", lang),
        client.getAllByType("blogpost", {
            orderings: [
                {
                    field: "my.blogpost.published_on",
                    direction: "desc",
                },
            ],
            lang: "*",
        }),
        giveMePage("footer", lang),
    ]);
    return (
        <>
            <GlobalNavigation navigation={navigation} lang={lang} />
            <section className="container first blog">
                <h1>Blog</h1>
                <div className="flex flex-wrap">
                    {blogPosts.map((post, i) => {
                        return (
                            <div className="col-4 blog__item" key={`blogpost${i}`}>
                                <PrismicLink document={post}>
                                    <PrismicNextImage field={post.data.image} />
                                </PrismicLink>
                                <div className="flex">
                                    {post.tags.map((tag, tagId) => (
                                        <span className="badge" key={`blogPost${i}tag${tagId}`}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h2 className="h3">
                                    <PrismicLink document={post}>{post.data.title}</PrismicLink>
                                </h2>
                                <p className="date">
                                    {new Date(post.last_publication_date).toLocaleDateString("en-GB")}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>
            <SliceZone slices={page.data.slices} components={components} context={{ lang: lang }} />
            <Footer footer={footer} />
        </>
    );
}

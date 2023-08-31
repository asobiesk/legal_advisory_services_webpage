import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";
import config from "./slicemachine.config.json";

/**
 * The project's Prismic repository name.
 */
export const repositoryName = config.repositoryName;

/**
 * A list of Route Resolver objects that define how a document's `url` field
 * is resolved.
 *
 * {@link https://prismic.io/docs/route-resolver#route-resolver}
 *
 * @type {prismic.ClientConfig["routes"]}
 */
// TODO: Update the routes array to match your project's route structure.
const routes = [
    {
        type: "homepage",
        path: "/:lang?",
    },
    {
        type: "aboutpage",
        path: "/:lang?/about",
    },
    {
        type: "faqpage",
        path: "/:lang?/faq",
    },
    {
        type: "offerpage",
        path: "/:lang?/offer/:uid",
    },
    {
        type: "offeritempage",
        resolvers: {
            offerTarget: "offertarget",
        },
        path: "/:lang?/offer/:offerTarget/:uid",
    },
    {
        type: "blogpage",
        path: "/:lang?/blog",
    },
    {
        type: "blogpost",
        path: "/:lang?/blog/:uid",
    },
    {
        type: "contactpage",
        path: "/:lang?/contact",
    },
    {
        type: "privacypage",
        path: "/privacy",
    },
];

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param {prismicNext.CreateClientConfig} config - Configuration for the Prismic client.
 */
export const createClient = (config = {}) => {
    const client = prismic.createClient(repositoryName, {
        fetchOptions: {
            // cache: process.env.NODE_ENV === "production" ? "force-cache" : "no-store",
            next: { tags: ["prismic"] },
        },
        routes,
        ...config,
    });

    prismicNext.enableAutoPreviews({
        client,
        previewData: config.previewData,
        req: config.req,
    });

    return client;
};

export const giveMePage = async (pageCode, desiredLocale) => {
    const client = createClient();
    const DEFAULT_LOCALE = process.env.DEFAULT_LOCALE;
    const defaultLocalePage = await client.getSingle(pageCode, { lang: DEFAULT_LOCALE });
    if (desiredLocale != DEFAULT_LOCALE) {
        const alternateLocalesForPage = defaultLocalePage.alternate_languages.map((language) => language.lang);
        if (alternateLocalesForPage.includes(desiredLocale)) {
            return await client.getSingle(pageCode, { lang: desiredLocale });
        }
    }
    return defaultLocalePage;
};

export const giveMeAllFromTypeByUid = async (type, uid, desiredLocale) => {
    const client = createClient();
    const DEFAULT_LOCALE = process.env.DEFAULT_LOCALE;
    const defaultLocalePage = await client.getByUID(type, uid, { lang: DEFAULT_LOCALE });
    if (desiredLocale != DEFAULT_LOCALE) {
        const alternateLocalesForPage = defaultLocalePage.alternate_languages.map((language) => language.lang);
        if (alternateLocalesForPage.includes(desiredLocale)) {
            return await client.getByUID(type, uid, { lang: DEFAULT_LOCALE });
        }
    }
    return defaultLocalePage;
};

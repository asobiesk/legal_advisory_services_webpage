import { NextResponse } from "next/server";
const prismic = require("@prismicio/client");
const sm = require("../slicemachine.config.json");

let validLocales = [];
const DEFAULT_LOCALE = process.env.DEFAULT_LOCALE;

export async function middleware(request) {
    if (!validLocales.length) {
        await initalizeLocales();
    }
    const { pathname } = request.nextUrl;
    /* Remove locale part from url if it's default locale */
    if (pathname.startsWith(`/${DEFAULT_LOCALE}`)) {
        return NextResponse.redirect(new URL(pathname.replace(`${DEFAULT_LOCALE}`, ""), request.url));
    }
    /* treat all /something/somethingElse paths as /[DEFAULT_LOCALE]/something/somethingElse */
    const pathnameIsMissingValidLocale = validLocales.every((locale) => !pathname.startsWith(`/${locale}`));
    if (pathnameIsMissingValidLocale) {
        return NextResponse.rewrite(new URL(`/${DEFAULT_LOCALE}${pathname}`, request.url));
    }
}

async function initalizeLocales() {
    const client = prismic.createClient(sm.repositoryName);
    const repository = await client.getRepository();
    const locales = repository.languages.map((lang) => lang.id);
    validLocales = locales;
}

export const config = {
    matcher: ["/((?!api|_next|.*\\..*).*)"],
};

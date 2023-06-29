import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicNextLink } from "@prismicio/next";
import { createClient } from "../../prismicio";

export default async function GlobalNavigation(props) {
    if (!props?.navigation) return <></>;
    const { navigation, lang } = props;
    const client = createClient();
    const repository = await client.getRepository();
    const locales = repository.languages;
    return (
        <nav className="container">
            <div className="logo">
                <PrismicLink field={navigation.data.mainlink} className="logo__link">
                    <PrismicNextImage field={navigation.data.logo} />
                </PrismicLink>
            </div>
            <div className="menu">
                {navigation.data.slices.map((slice) => {
                    return (
                        <PrismicLink field={slice.primary.link}>
                            <PrismicText field={slice.primary.name} />
                        </PrismicLink>
                    );
                })}
                <div className="flex">
                    <div>
                        <a href="#" class="lang">
                            <img src="https://heretostay.pl/static/images/icon_lang.svg" alt="Lang" />
                            {lang.split("-")[0]}
                        </a>
                        <div className="lang_menu">
                            <ul>
                                {locales.map((locale) => {
                                    return (
                                        <li key={locale.id}>
                                            <PrismicNextLink href={`/${locale.id}/`}>
                                                {locale.name.split("-")[0]}
                                            </PrismicNextLink>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                    <PrismicLink field={navigation.data.contactlink} className="btn">
                        {navigation.data.contacttext}
                    </PrismicLink>
                </div>
            </div>
        </nav>
    );
}

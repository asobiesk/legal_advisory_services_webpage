import { useState, useCallback, useEffect } from "react";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicNextLink } from "@prismicio/next";
import { createClient } from "../../prismicio";

export default function GlobalNavigation(props) {
    const [showMenu, setShowMenu] = useState(false);
    const [locales, setLocales] = useState([]);
    const { navigation, lang } = props;

    const onMenuButtonClick = useCallback(
        (e) => {
            e.preventDefault();
            e.stopPropagation();
            setShowMenu((prevShowMenu) => !prevShowMenu);
        },
        [setShowMenu]
    );

    const fetchLocales = useCallback(async () => {
        const client = createClient();
        const repository = await client.getRepository();
        setLocales(repository.languages);
    }, []);

    useEffect(() => {
        fetchLocales();
    }, []);

    if (!props?.navigation) return <></>;
    return (
        <nav className="container">
            <div className="logo">
                <PrismicLink field={navigation.data.mainlink} className="logo__link">
                    <PrismicNextImage field={navigation.data.logo} />
                </PrismicLink>
            </div>
            <div className={`menu ${showMenu ? "show" : ""}`}>
                {navigation.data.slices.map((slice, i) => {
                    return (
                        <PrismicLink field={slice.primary.link} key={i}>
                            <PrismicText field={slice.primary.name} />
                        </PrismicLink>
                    );
                })}
                <div className="flex">
                    <div>
                        <a href="#" class="lang">
                            <img src="/icon_lang.svg" alt="Lang" />
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
            <div
                id="mobile-nav-bttn"
                className={`mobile-nav-bttn ${showMenu ? "show" : ""}`}
                onClick={onMenuButtonClick}
            >
                <div>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
}

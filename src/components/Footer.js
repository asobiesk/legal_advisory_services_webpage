"use client";

import { PrismicLink } from "@prismicio/react";

export default function Footer({ footer }) {
    return (
        <footer>
            <div className="container">
                <div className="copyrights">
                    <span>{footer.data.copyright}</span>
                    <a href="#top">
                        <img src="/icon_arrow-up.svg" alt="" />
                    </a>
                </div>
                <div className="cookies">
                    <p>
                        {footer.data.cookies}
                        <PrismicLink
                            field={footer.data.privacylink}
                            components={{ paragraph: ({ children }) => <span>{children}</span> }}
                        >
                            &nbsp;{footer.data.privacylinktext}
                        </PrismicLink>
                        .
                    </p>
                </div>
            </div>
        </footer>
    );
}

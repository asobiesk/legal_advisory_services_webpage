import "./globals.css";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../../../prismicio";

export const metadata = {
    title: "Here To Stay",
    description: "Here To Stay legal advisory website",
};

export default function RootLayout({ children, params }) {
    return (
        <html lang={params.lang}>
            <body>
                {children}
                <PrismicPreview repositoryName={repositoryName} />
            </body>
        </html>
    );
}

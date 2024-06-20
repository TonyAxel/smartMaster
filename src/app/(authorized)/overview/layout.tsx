import type {Metadata} from "next";
import React from "react";
import HeaderAuthorized from "@/components/Layouts/HeaderAuthorized/HeaderAuthorized";


export const metadata: Metadata = {
    title: "Еженедельный итог",
    description: "Ваши траты на текущий момент",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <HeaderAuthorized name="Еженедельный итог" description="Ваши траты на текущий момент"/>
            {children}
        </>
    );
}
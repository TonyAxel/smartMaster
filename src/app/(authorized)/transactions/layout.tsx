import type {Metadata} from "next";
import React from "react";
import HeaderAuthorized from "@/components/Layouts/HeaderAuthorized/HeaderAuthorized";


export const metadata: Metadata = {
    title: "Транзакции",
    description: "Ваши транзакции на текущий момент",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <HeaderAuthorized name="Транзакции" description="Ваши транзакции на текущий момент" />
            {children}
        </>
    );
}
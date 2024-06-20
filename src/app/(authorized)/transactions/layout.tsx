import type {Metadata} from "next";
import {Inter} from "next/font/google";
import React from "react";
import HeaderAuthorized from "@/components/Layouts/HeaderAuthorized/HeaderAuthorized";
import ASide from "@/components/Layouts/aSide/aSide";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "SmartMaster",
    description: "Только ты контролируешь свою жизнь.",
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
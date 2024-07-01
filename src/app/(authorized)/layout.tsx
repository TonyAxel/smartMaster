import type {Metadata} from "next";
import {Inter} from "next/font/google";
import React from "react";
import './globals.css'
import ASide from "@/components/Layouts/ASide/ASide";

const inter = Inter({subsets: ["latin"]});

// export const metadata: Metadata = {
//     title: "SmartMaster",
//     description: "Только ты контролируешь свою жизнь.",
// };

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ASide/>
                {children}
            </body>
        </html>
    );
}
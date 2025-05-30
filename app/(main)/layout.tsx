
"use client";
import dynamic from "next/dynamic"
const Navbar = dynamic(() => import("@/layout/Navbar"), { ssr: false })
const Footer = dynamic(() => import("@/layout/Footer"), { ssr: false })
export default function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}
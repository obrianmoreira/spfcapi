import Link from "next/link"
import Style from './Layout.module.css'
import { Frame } from "@/components/Layout/layout";
import { Button } from "@/components/Items/Button/button";

const links = [
    {name: 'Home', href: '/dashboard'},
    {name: 'Invoices', href: '/dashboard/invoices'}
];

export default function NavLinks() {
    return (
        <>
            {links.map((link) => {
                return (
                    <>
                        <div key={link.name}>
                            <Link href={link.href}><p className={Style.navbar}>{link.name}</p></Link>
                        </div>
                    </>
                )
            })}
        </>
    )
}
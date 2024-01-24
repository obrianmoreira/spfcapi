import Link from "next/link";

const links = [
    {name: 'Home', href: '/dashboard'},
    {name: 'Invoices', href: '/dashboard/invoices'}
];

export default function Page() {
    return (
        <>
            <p>Hello, World. I am the page of the dashboad!</p>
        </>
    )
};
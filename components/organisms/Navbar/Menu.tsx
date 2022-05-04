import React from 'react'
import cx from 'classnames'
import Link from 'next/link';

interface MenuProps {
    title: string;
    active?: boolean;
    href: string;
}

export default function Menu(props: Partial<MenuProps>) {
    const { title, active, href = '/' } = props;

    const classTitle = cx({
        'nav-link': true,
        active,
    });
    return (
        <>
            <li className="nav-item my-auto">
                <Link href={href}>

                </Link>
                <a className={classTitle} aria-current="page">{title}</a>
            </li>
        </>
    )
}

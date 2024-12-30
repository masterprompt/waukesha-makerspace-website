import { PropsWithChildren } from 'react';

interface DropdownProps extends PropsWithChildren {
    label: string;
}
export const NavDropdown = ({ children, label }: DropdownProps) => {
    return (
        <li>
            <a href="#">{label}</a>
            <ul>
                {children}
            </ul>
        </li>
    );
};

interface LinkProps extends PropsWithChildren {
    href: string;
    current?: boolean;
}
export const NavLink = ({
    href,
    children,
    current
}: LinkProps) => {
    return (
        <li className={current ? 'current' : ''}><a href={href}>{children}</a></li>
    )
}

export const Header = ({ children }: PropsWithChildren) => {
    return (
        <div id="header">

            <h1>
                <a href="/" id="logo">
                    Waukesha Makerspace
                </a>
            </h1>

            <nav id="nav">
                <ul>
                    {children}
                </ul>
            </nav>
        </div>
    );
};

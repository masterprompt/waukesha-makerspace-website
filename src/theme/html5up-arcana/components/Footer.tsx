import { PropsWithChildren } from 'react';

export const Copyright = ({ children }: PropsWithChildren) => {
    return (
        <div className="copyright">
            <ul className="menu">
                <li>&copy; {children}  All rights reserved</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
            </ul>
        </div>
    );
};

export const Brands = ({ children }: PropsWithChildren) => {
    return (
        <ul className="icons">
            {children}
        </ul>
    );
}


export enum BrandIcon {
    TWITTER = 'fa-twitter',
    FACEBOOK = 'fa-facebook-f',
    GITHUB = 'fa-github',
    LINKEDIN = 'fa-linkedin-in',
    GOOGLE = 'fa-google-plus-g'
}
export enum BrandName {
    TWITTER = 'Twitter',
    FACEBOOK = 'Facebook',
    GITHUB = 'GitHub',
    LINKEDIN = 'LinkedIn',
    GOOGLE = 'Google+'
}
interface BrandProps {
    href: string;
    icon: BrandIcon;
    label: BrandName;
}
export const Brand = ({
    href,
    icon,
    label
}: BrandProps) => (
    <li>
        <a href={href} className={`icon brands ${icon}`}>
            <span className="label">{label}</span>
        </a>
    </li>
);

export const FooterLinks = ({ children }: PropsWithChildren) => (
    <div className="container">
        {children}
    </div>
);

export const FooterLinksRow = ({ children }: PropsWithChildren) => (
    <div className="row">
        {children}
    </div>
);

interface FooterLinksSectionProps extends PropsWithChildren {
    title: string;
}
export const FooterLinksColumn = ({
    children,
    title
}: FooterLinksSectionProps) => {
    return (
        <section className="col-3 col-6-narrower col-12-mobilep">
            <h3>{title}</h3>
            <ul className="links">
                {children}
            </ul>
        </section>
    );
};

interface FooterLinkProps extends PropsWithChildren {
    href: string;
}
export const FooterLink = ({
    children,
    href
}: FooterLinkProps) => (
    <li><a href={href}>{children}</a></li>
);

export const Footer = ({ children }: PropsWithChildren) => {
    return (
        <div id="footer">
            {children}
        </div>
    );
};

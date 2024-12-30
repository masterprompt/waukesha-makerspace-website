import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
    href: string;
    label: string;
}
export const CallToAction = ({
    children,
    href,
    label,
}: Props) => {
    return (
        <section id="cta" className="wrapper style3">
            <div className="container">
                <header>
                    <h2>{children}</h2>
                    <a href={href} className="button">{label}</a>
                </header>
            </div>
        </section>
    );
};

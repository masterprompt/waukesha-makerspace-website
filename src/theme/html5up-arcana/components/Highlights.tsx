import { PropsWithChildren } from 'react';

interface HighlightsProps extends PropsWithChildren {
    label: string;
    faIconName: string;
}
export const Highlight = ({
    children,
    label,
    faIconName = 'fa-paper-plane'
}: HighlightsProps) => {
    return (
        <section className="col-4 col-12-narrower">
            <div className="box highlight">
                <i className={`icon solid major ${faIconName}`}></i>
                <h3>{label}</h3>
                <p>{children}</p>
            </div>
        </section>
    );
};


export const Highlights = ({ children }: PropsWithChildren) => {
    return (
        <section className="wrapper style1">
            <div className="container">
                <div className="row gtr-200">
                    {children}
                </div>
            </div>
        </section>
    );
};


interface Props {
    title: string;
    subtitle: string;
}

export const LargeHeading = ({
    title,
    subtitle,
}: Props) => {
    return (
        <section className="wrapper style2">
            <div className="container">
                <header className="major">
                    <h2>{title}</h2>
                    <p>{subtitle}</p>
                </header>
            </div>
        </section>
    );
};

import { PropsWithChildren, Children } from 'react';
import { chunk } from 'lodash';

interface PostProps extends PropsWithChildren {
    title: string;
    imageSrc: string;
}
export const Post = ({
    title,
    imageSrc,
    children
}: PostProps) => {
    return (
        <section className="col-6 col-12-narrower">
            <div className="box post">
                <a href="#" className="image left"><img src={imageSrc} alt="" /></a>
                <div className="inner">
                    <h3>{title}</h3>
                    <p>{children}</p>
                </div>
            </div>
        </section>
    );
};


export const Posts = ({ children }: PropsWithChildren) => {
    const chunks = chunk(Children.toArray(children), 2);

    return (
        <section className="wrapper style1">
            <div className="container">
                {chunks.map((chunk, i) => (
                    <div className="row" key={i}>
                        {chunk}
                    </div>
                ))}
            </div>
        </section>
    );
};

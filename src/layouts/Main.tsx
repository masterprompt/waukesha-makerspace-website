import { Banner, CallToAction, LargeHeading } from '../theme/html5up-arcana';
import { Footer } from './Footer';
import { Header } from './Header';
import { Highlights } from './Highlights';
import { Posts } from './Posts';


export const Main = () => {
    return (
        <>
            <Header />
            <Banner />
            <Highlights />
            <LargeHeading
                title='Innovate, Inspire, Achieve.'
                subtitle='Turn ideas into reality with endless possibilities at your fingertips.'
            />
            <Posts />
            <CallToAction href="https://wiki.waukeshamakers.com/Participation/Join" label="Join Today">
                Are you ready to continue your quest?
            </CallToAction>
            <Footer />
        </>
    );
};

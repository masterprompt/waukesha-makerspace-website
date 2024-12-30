import {
    Footer as FooterComponent,
    Copyright,
    Brands,
    Brand,
    BrandIcon,
    BrandName,
    FooterLinks,
    FooterLinksRow,
    FooterLinksColumn,
    FooterLink,
    ContactForm
} from '../theme/html5up-arcana';

export const Footer = () => {
    return (
        <FooterComponent>
            <FooterLinks>
                <FooterLinksRow>
                    <FooterLinksColumn title="About">
                        <FooterLink href="https://wiki.waukeshamakers.com/About">About Us</FooterLink>
                        <FooterLink href="https://wiki.waukeshamakers.com/Policies">Policies</FooterLink>
                        <FooterLink href="https://wiki.waukeshamakers.com/Safety">Safety</FooterLink>
                        <FooterLink href="https://wiki.waukeshamakers.com/Facilities">Facilities</FooterLink>
                        <FooterLink href="https://wiki.waukeshamakers.com/FAQ">FAQ</FooterLink>
                    </FooterLinksColumn>
                    <FooterLinksColumn title="Get Involved">
                        <FooterLink href="https://wiki.waukeshamakers.com/Participation/Join">Join Us</FooterLink>
                        <FooterLink href="https://discord.gg/mDKsBP3Tz5">Chat with us on Discord</FooterLink>
                        <FooterLink href="https://wiki.waukeshamakers.com/Donate">Donations</FooterLink>
                        <FooterLink href="https://wiki.waukeshamakers.com/Partnerships/Local">Partnerships</FooterLink>
                    </FooterLinksColumn>
                    <ContactForm />
                </FooterLinksRow>
            </FooterLinks>
            <Brands>
                <Brand href="https://wiki.waukeshamakers.com/" icon={BrandIcon.WIKI} label={BrandName.WIKI} />
                <Brand href="https://www.facebook.com/WaukeshaMakerspaces" icon={BrandIcon.FACEBOOK} label={BrandName.FACEBOOK} />
                <Brand href="https://discord.gg/mDKsBP3Tz5" icon={BrandIcon.DISCORD} label={BrandName.DISCORD} />
                <Brand href="https://www.linkedin.com/company/waukeshamakerspace" icon={BrandIcon.LINKEDIN} label={BrandName.LINKEDIN} />
                <Brand href="https://x.com/WaukeshaMakerS1" icon={BrandIcon.TWITTER} label={BrandName.TWITTER} />
            </Brands>
            <Copyright>Waukesha Makerspace Inc.</Copyright>
        </FooterComponent>
    );
};
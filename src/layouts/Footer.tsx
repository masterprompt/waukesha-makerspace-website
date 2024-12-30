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
    FooterLink
} from '../theme/html5up-arcana';

export const Footer = () => {
    return (
        <FooterComponent>
            <FooterLinks>
                <FooterLinksRow>
                    <FooterLinksColumn title="About">
                        <FooterLink href="/about">About Us</FooterLink>
                        <FooterLink href="/contact">Contact Us</FooterLink>
                    </FooterLinksColumn>
                </FooterLinksRow>
            </FooterLinks>
            <Brands>
                <Brand href="https://x.com/WaukeshaMakerS1" icon={BrandIcon.TWITTER} label={BrandName.TWITTER} />
                <Brand href="https://www.facebook.com/WaukeshaMakerspaces" icon={BrandIcon.FACEBOOK} label={BrandName.FACEBOOK} />
                <Brand href="https://www.linkedin.com/company/waukeshamakerspace" icon={BrandIcon.LINKEDIN} label={BrandName.LINKEDIN} />
            </Brands>
            <Copyright>Waukesha Makerspace Inc.</Copyright>
        </FooterComponent>
    );
};
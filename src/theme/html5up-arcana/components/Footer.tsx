import { PropsWithChildren, useState } from 'react';

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
    GOOGLE = 'fa-google-plus-g',
    WIKI = 'fa-wikipedia-w',
    DISCORD = 'fa-discord',
    X = 'fa-x-twitter',
}
export enum BrandName {
    TWITTER = 'Twitter',
    FACEBOOK = 'Facebook',
    GITHUB = 'GitHub',
    LINKEDIN = 'LinkedIn',
    GOOGLE = 'Google+',
    WIKI = 'WIKI',
    DISCORD = 'Discord',
    X = 'X',
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
        <a href={href} className={`icon brands ${icon}`} title={label}>
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

export const FooterContactUs = () => (
    <section className="col-6 col-12-narrower">
        <h3>Get In Touch</h3>
        <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="32ad7601-453c-437b-86d3-8af92699b24f" />
            <div className="row gtr-50">
                <div className="col-6 col-12-mobilep">
                    <input type="text" name="name" id="name" placeholder="Name" required />
                </div>
                <div className="col-6 col-12-mobilep">
                    <input type="email" name="email" id="email" placeholder="Email" required />
                </div>
                <div className="col-12">
                    <textarea name="message" id="message" placeholder="Message" rows={5} required></textarea>
                </div>
                <div className="col-12">
                    <ul className="actions">
                        <li><input type="submit" className="button alt" value="Send Message" /></li>
                    </ul>
                </div>
            </div>
        </form>
    </section>
);

export const ContactForm = () => {
    const [result, setResult] = useState("");
  
    const onSubmit = async (event: any) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "32ad7601-453c-437b-86d3-8af92699b24f");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (
        <section id="contact" className="col-6 col-12-narrower">
            <h3>Get In Touch</h3>
            <form onSubmit={onSubmit}>
                <div className="row gtr-50">
                    <div className="col-6 col-12-mobilep">
                        <input type="text" name="name" id="name" placeholder="Name" required />
                    </div>
                    <div className="col-6 col-12-mobilep">
                        <input type="email" name="email" id="email" placeholder="Email" required />
                    </div>
                    <div className="col-12">
                        <textarea name="message" id="message" placeholder="Message" rows={5} required></textarea>
                    </div>
                    <div className="col-12">
                        <ul className="actions">
                            <li><input type="submit" className="button alt" value="Send Message" /></li>
                        </ul>
                    </div>
                </div>
            </form>
            <span>{result}</span>
        </section>
    );
  }

export const Footer = ({ children }: PropsWithChildren) => {
    return (
        <div id="footer">
            {children}
        </div>
    );
};

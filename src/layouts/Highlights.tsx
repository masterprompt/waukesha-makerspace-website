import {
    Highlights as HighlightsComponent,
    Highlight
} from '../theme/html5up-arcana';

export const Highlights = () => {
    return (
        <HighlightsComponent>
            <Highlight label="Learn" faIconName="fa-graduation-cap">
                Discover new skills and unlock your creativity through hands-on workshops, tutorials, and mentorship opportunities at Waukesha Makerspace. With access to cutting-edge tools and a supportive community, you can explore ideas and turn curiosity into expertise.
            </Highlight>
            <Highlight label="Collaborate" faIconName="fa-users">
                Join a diverse community of makers, teachers, and innovators who share ideas, offer guidance, and work together on exciting projects. At Waukesha Makerspace, collaboration sparks innovation, turning individual talents into collective achievements.
            </Highlight>
            <Highlight label="Build" faIconName="fa-wrench">
                Bring your ideas to life using our state-of-the-art equipment, from 3D printers to woodworking tools, in a space designed to support your creativity. Whether you’re crafting a prototype, designing art, or building something new, Waukesha Makerspace is your workshop for innovation.
            </Highlight>
        </HighlightsComponent>
    );
};
import {
    Posts as PostsComponent,
    Post
} from '../theme/html5up-arcana';
import accessImage from '../assets/post-access.png';
import toolingImage from '../assets/post-tooling.png';
import collaborationImage from '../assets/post-collaboration.png';
import membershipImage from '../assets/post-membership.png';

export const Posts = () => {
    return (
        <PostsComponent>
            <Post title="24/7 Access with RFID Key Fobs" imageSrc={accessImage}>
            At Waukesha Makerspace, members enjoy round-the-clock access to the facility through RFID key fobs, ensuring ultimate flexibility. Whether you prefer to work on projects late at night or early in the morning, our space is always open to accommodate your schedule.
            </Post>
            <Post title="State-of-the-Art Tools & Equipment" imageSrc={toolingImage}>
            Our makerspace is equipped with professional-grade tools, including 3D printers, laser cutters, woodworking tools, and electronics stations. These resources empower makers of all skill levels to explore, innovate, and create projects with precision and efficiency.
            </Post>
            <Post title="Collaborative Community" imageSrc={collaborationImage}>
            Join a diverse group of creators, engineers, educators, and hobbyists who share knowledge, provide mentorship, and collaborate on exciting projects. Our community fosters a welcoming environment where ideas flourish, and everyone contributes to collective growth.
            </Post>
            <Post title="Free Membership & Learning Opportunities" imageSrc={membershipImage}>
            Currently, membership is free, making it accessible to everyone who wants to learn, build, and innovate. Members have access to workshops, events, and a wealth of resources to develop new skills and turn creative ideas into reality.
            </Post>
        </PostsComponent>
    );
};

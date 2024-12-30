import {
    Header as ThemeHeader,
    NavLink,
    NavDropdown
} from '../theme/html5up-arcana';

export const Header = () => {
    return (
        <ThemeHeader>
            <NavLink href='/' current>Home</NavLink>
            <NavLink href='https://wiki.waukeshamakers.com/About'>About</NavLink>
            <NavDropdown label='Membership'>
                <NavLink href='https://wiki.waukeshamakers.com/Participation/Join'>How to Join</NavLink>
                <NavLink href='https://wiki.waukeshamakers.com/Participation/Benefits'>Member Benefits</NavLink>
                <NavLink href='https://wiki.waukeshamakers.com/Participation/Expectations'>Expectations & Responsibilities</NavLink>
            </NavDropdown>
        </ThemeHeader>
    );
};

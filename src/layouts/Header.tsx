import {
    Header as ThemeHeader,
    NavLink,
} from '../theme/html5up-arcana';

export const Header = () => {
    return (
        <ThemeHeader>
            <NavLink href='/' current>Home</NavLink>
            <NavLink href='https://wiki.waukeshamakers.com/About'>About</NavLink>
            <NavLink href='https://wiki.waukeshamakers.com/Participation/Join'>Join</NavLink>
            <NavLink href='https://wiki.waukeshamakers.com'>WIKI</NavLink>
            <NavLink href='#contact'>Contact</NavLink>
            <NavLink href='https://wiki.waukeshamakers.com/FAQ'>FAQ</NavLink>
        </ThemeHeader>
    );
};

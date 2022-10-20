import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css'

function MainNavigation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>List All Meetup</Link>
                    </li>
                    <li>
                        <Link to='/add-meet-up'>Add meetup</Link>
                    </li>
                    <li>
                        <Link to='/favourites'>Favourites Meet Up</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;

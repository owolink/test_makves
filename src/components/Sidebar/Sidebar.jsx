import { useState, useEffect } from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';
import PropTypes from 'prop-types';
import './Sidebar.scss';

const routes = [
    { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
    { title: 'Sales', icon: 'chart-line', path: '/sales' },
    { title: 'Costs', icon: 'chart-column', path: '/costs' },
    { title: 'Payments', icon: 'wallet', path: '/payments' },
    { title: 'Finances', icon: 'chart-pie', path: '/finances' },
    { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const bottomRoutes = [
    { title: 'Settings', icon: 'sliders', path: '/settings' },
    { title: 'Support', icon: 'phone-volume', path: '/support' },
];

const Sidebar = (props) => {
    const { color, theme, onToggleTheme } = props;
    const [isOpened, setIsOpened] = useState(false);
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        setAnimate(true);
    }, []);
    const containerClassnames = classnames('sidebar', { opened: isOpened, [theme]: true });

    const goToRoute = (path) => {
        console.log(`going to "${path}"`);
    };

    const toggleSidebar = () => {
        setIsOpened(v => !v);
    };

    return (
        <div className="sidebar-wrapper">
            <div className={ containerClassnames }>
                <div className={classnames("sidebar-header", animate && "sidebar-animate sidebar-animate-delay-1") }>
                    <img src={ logo } alt="TensorFlow logo" className="sidebar-logo"/>
                    {isOpened && <span className={animate ? "sidebar-logo-text sidebar-animate sidebar-animate-delay-2" : "sidebar-logo-text"}>TensorFlow</span>}
                </div>
                <div className={classnames("sidebar-routes", animate && "sidebar-animate sidebar-animate-delay-3") }>
                    {
                        routes.map(route => (
                            <div
                                key={ route.title }
                                className="sidebar-route"
                                onClick={() => {
                                    goToRoute(route.path);
                                }}
                            >
                                <FontAwesomeIcon icon={ route.icon }/>
                                {isOpened && <span>{ route.title }</span>}
                            </div>
                        ))
                    }
                </div>
                <div className={classnames("sidebar-bottom", animate && "sidebar-animate sidebar-animate-delay-4") }>
                    <button className="sidebar-theme-toggle" onClick={onToggleTheme}>
                        <FontAwesomeIcon icon={ theme === 'dark' ? 'sun' : 'moon' }/>
                        {isOpened && <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>}
                    </button>
                    {
                        bottomRoutes.map(route => (
                            <div
                                key={ route.title }
                                className="sidebar-route"
                                onClick={() => {
                                    goToRoute(route.path);
                                }}
                            >
                                <FontAwesomeIcon icon={ route.icon }/>
                                {isOpened && <span>{ route.title }</span>}
                            </div>
                        ))
                    }
                </div>
            </div>
            <button
                className={`sidebar-fly-toggle${isOpened ? ' opened' : ''} ${theme} ${animate ? 'sidebar-animate sidebar-animate-delay-5' : ''}`}
                onClick={toggleSidebar}
                aria-label="Expand/collapse sidebar"
            >
                <FontAwesomeIcon icon={ isOpened ? 'angle-left' : 'angle-right' }/>
            </button>
        </div>
    );
};

Sidebar.propTypes = {
    color: PropTypes.string,
    theme: PropTypes.oneOf(['light', 'dark']),
    onToggleTheme: PropTypes.func,
};

export default Sidebar;

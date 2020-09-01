import { Route, NavigationGuardNext } from 'vue-router';

export default (to: Route, from: Route, next: NavigationGuardNext<Vue>) => {
    if (to.path === '/login' || to.path === 'register') {
        next();
        return;
    }
    const basic = localStorage.getItem('auth_token');
    if (basic === null) {
        window.location.replace('/login');
    }
}
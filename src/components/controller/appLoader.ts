import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '2fa64e2d73e64b1081d4f03a76dd922a',
        });
    }
}

export default AppLoader;

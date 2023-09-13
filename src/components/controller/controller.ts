import AppLoader from './appLoader';
import { Callback } from '../../../types';
interface Event {
    target: HTMLElement;
    currentTarget: HTMLElement;
}
class AppController extends AppLoader {
    getSources(callback: Callback) {
        super.getResp(
            {
                endpoint: 'sources',
                options: {},
            },
            callback
        );
    }

    getNews(e: Event, callback: Callback): void {
        let target = e.target;
        const newsContainer = e.currentTarget;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (sourceId !== null) {
                    if (newsContainer.getAttribute('data-source') !== sourceId) {
                        newsContainer.setAttribute('data-source', sourceId);
                        super.getResp(
                            {
                                endpoint: 'everything',
                                options: {
                                    sources: sourceId,
                                },
                            },
                            callback
                        );
                    }
                    return;
                }
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;

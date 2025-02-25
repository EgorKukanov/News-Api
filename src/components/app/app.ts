import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { AllData } from './../../../types';

class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        (document.querySelector('.sources') as HTMLElement).addEventListener('click', (e: MouseEvent) => {
            this.controller.getNews(e, (data) => this.view.drawNews(data));
        });
        this.controller.getSources((data: AllData) => this.view.drawSources(data));
    }
}

export default App;

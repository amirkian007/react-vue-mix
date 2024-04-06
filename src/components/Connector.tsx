import { ReactComponent } from "./ReactComponent";
import { Root, createRoot } from 'react-dom/client';

export class ReactConnector {
    root:Root;
    constructor(targetEl:HTMLElement){
        this.root = createRoot(targetEl);
    }
    render(){
        this.root.render(<ReactComponent/>)
    }
}
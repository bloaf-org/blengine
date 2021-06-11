import Blengine from "./Blengine";
import AppContainer from "./AppContainer";


declare global {
    interface Window {
      controls: any;
    }
  }

let bl : Blengine = new Blengine();

export default bl;

export {
    AppContainer
};

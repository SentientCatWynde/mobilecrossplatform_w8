import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonFab, IonFabButton, IonIcon, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import MemoriesTab from './pages/MemoriesTab';

import { addOutline } from 'ionicons/icons';

const App: React.FC = () => {
  /* const [ toastMessage, setToastMessage ] = useState(''); */

  // const fabButtonHandler = () => {
  //   console.log('FABolous!');
  //   /* setToastMessage('FAB Button Pressed.'); */
  // }
  return (
    <IonApp  >
      <IonReactRouter>
        <IonRouterOutlet > 
          <Route path = "/tabs" component = { MemoriesTab } />
          <Route exact path="/">
            <Redirect to="/tabs" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
      {/* <p>works?</p> */}
      <IonFab horizontal = 'end' vertical = 'bottom' slot = 'fixed' class = 'ion-padding ion-margin'>
        <IonFabButton href = '/tabs/newmemo' >
          <IonIcon icon = { addOutline } />
        </IonFabButton>
      </IonFab>
      {/* <IonToast isOpen = { !!toastMessage } 
        message = { toastMessage } 
        duration = { 2000 } 
        onDidDismiss = { ( ) => setToastMessage('')} /> */}
    </IonApp>
  );
}

export default App;

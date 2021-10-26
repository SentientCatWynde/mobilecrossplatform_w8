import { IonTabs, IonRouterOutlet, IonTabBar, IonIcon, IonLabel, IonTabButton } from "@ionic/react";
import { Redirect, Route } from "react-router";
import { happyOutline, sadOutline } from 'ionicons/icons';
import GoodMemories from './GoodMemories';
import BadMemories from './BadMemories';
import NewMemories from './NewMemories';


const MemoriesTab: React.FC = () => {
    return (
        <IonTabs>
            <IonRouterOutlet>
                <Redirect exact path = '/tabs' to = '/tabs/goodmemo' />
                <Route exact path = '/tabs/goodmemo' component = { GoodMemories } />
                <Route exact path = '/tabs/badmemo' component = { BadMemories } />
                <Route exact path = '/tabs/newmemo' component = { NewMemories } />
            </IonRouterOutlet>
            <IonTabBar color = 'warning' slot = "bottom" >
                <IonTabButton tab = 'mail' href = '/tabs/goodmemo' >
                    <IonIcon icon = { happyOutline } />
                    <IonLabel> Good Memories </IonLabel>
                </IonTabButton>
                <IonTabButton tab = 'meet' href = '/tabs/badmemo' >
                    <IonIcon icon = { sadOutline } />
                    <IonLabel> Bad Memories </IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    );
}

export default MemoriesTab;
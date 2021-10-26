import { IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar } from "@ionic/react";


const GoodMemories: React.FC = () => {
    const title = 'Good Memories';

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color = 'warning' >
                    <IonTitle>
                        { title }
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonLabel>
                    { title }
                </IonLabel>
            </IonContent>
        </IonPage>
    );
}

export default GoodMemories;
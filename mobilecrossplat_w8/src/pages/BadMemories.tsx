import { IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar } from "@ionic/react";


const BadMemories: React.FC = () => {
    const title = 'Bad Memories';

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

export default BadMemories;
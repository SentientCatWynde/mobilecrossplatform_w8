import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { arrowBack, camera } from "ionicons/icons";
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';


const NewMemories: React.FC = () => {
    const takePhotoHandler = async () => {
        const image = Camera.getPhoto ( {
            resultType: CameraResultType.Uri, 
            source: CameraSource.Camera, 
            quality: 80, width: 500
        }); console.log(image);
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar >
                    <IonItem color = 'warning' href = '/tabs'>
                        <IonIcon icon = { arrowBack } />
                        <IonTitle>
                            Add New Memory!
                        </IonTitle>
                    </IonItem>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol class = 'ion-padding'>
                            <IonLabel>
                                Memory Title
                            </IonLabel>
                        </IonCol>
                    </IonRow>
                    <IonRow className = 'ion-text-center'>
                        <IonCol>
                            <div className = "image-preview">
                                <h3> No photo choosen</h3>
                            </div>
                            <IonButton onClick = { takePhotoHandler } fill = 'clear'>
                                <IonIcon slot = 'start' icon = { camera } />
                                <IonLabel> Take Photo </IonLabel>
                            </IonButton>
                        </IonCol>
                    </IonRow>
                    <IonRow className = 'ion-margin-top'>
                        <IonCol className = 'ion-text-center' >
                            <IonButton>
                                Add Memory
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
}

export default NewMemories;
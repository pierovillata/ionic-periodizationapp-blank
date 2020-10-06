import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import EntrenadorContainer from '../components/EntrenadorContainer';
import './Entrenador.css';

const Entrenador: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Entrenadors</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Entrenadors</IonTitle>
          </IonToolbar>
        </IonHeader>
        <EntrenadorContainer />
      </IonContent>
    </IonPage>
  );
};

export default Entrenador;
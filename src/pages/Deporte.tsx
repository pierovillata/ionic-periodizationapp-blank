import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import DeporteContainer from "../components/DeporteContainer";
import "./Deporte.css";

const Deporte: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Deportes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Deportes</IonTitle>
          </IonToolbar>
        </IonHeader>
        <DeporteContainer />
      </IonContent>
    </IonPage>
  );
};

export default Deporte;

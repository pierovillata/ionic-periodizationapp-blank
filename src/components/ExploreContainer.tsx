import React from "react";
import "./ExploreContainer.css";
import { IonButton, IonIcon } from "@ionic/react";
import { star, person } from "ionicons/icons";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <strong>Bienvenidos a periodizationAPP</strong>
      <p></p>
      <IonButton href="/deporte" fill="solid">
        <IonIcon slot="start" icon={star} />
        Deportes
      </IonButton>
      <p></p>
      <IonButton href="/entrenador" fill="solid">
        <IonIcon slot="person" icon={person} />
        Entrenadores
      </IonButton>
    </div>
  );
};

export default ExploreContainer;

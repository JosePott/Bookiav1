import { 
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonTabBar, IonTabButton, IonIcon 
} from '@ionic/react';
import { playCircle, radio, library, heart } from 'ionicons/icons';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tus Libros</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <img alt="Silhouette of mountains" src="public/libro1.jpeg" />
          <IonCardHeader>
            <IonCardTitle>Romper el círculo</IonCardTitle>
            <IonCardSubtitle>COOLLEN HOVER</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            Lily no siempre ha tenido una vida fácil, pero eso nunca le ha impedido luchar por lo que quiere y ha recorrido un largo camino para llegar a donde está ahora.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <img alt="Silhouette of mountains" src="public/libro2.jpg" />
          <IonCardHeader>
            <IonCardTitle>Harry Potter y la piedra filosofal</IonCardTitle>
            <IonCardSubtitle>J.K ROWLING</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            El día en que cumple once años, Harry Potter descubre que es hijo de dos conocidos hechiceros.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <img alt="Silhouette of mountains" src="public/libro3.jpeg" />
          <IonCardHeader>
            <IonCardTitle>Divergente</IonCardTitle>
            <IonCardSubtitle>VERONICA ROTH</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            Divergente es una novela distópica donde la sociedad está dividida en cinco facciones según virtudes.
          </IonCardContent>
        </IonCard>
      </IonContent>


    </IonPage>
  );
};

export default Home;

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlmComponent } from './components/plm/plm.component';
import { CadComponent } from './components/cad/cad.component';
import { SviluppoSoftwareComponent } from './components/sviluppo-software/sviluppo-software.component';
import { IntelligenzaArtificialeComponent } from './components/intelligenza-artificiale/intelligenza-artificiale.component';
import { MultimediaComponent } from './components/multimedia/multimedia.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'plm',
    component: PlmComponent,
  },
  {
    path: 'cad',
    component: CadComponent,
  },
  {
    path: 'sviluppo-software',
    component: SviluppoSoftwareComponent,
  },
  {
    path: 'intelligenza-artificiale',
    component: IntelligenzaArtificialeComponent,
  },
  {
    path: 'multimedia',
    component: MultimediaComponent,
  },
];

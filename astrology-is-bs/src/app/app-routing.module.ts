import { Host, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AquariusInfoComponent } from './signs/aquarius-info/aquarius-info.component';
import { AriesInfoComponent } from './signs/aries-info/aries-info.component';
import { CancerInfoComponent } from './signs/cancer-info/cancer-info.component';
import { CapricornusInfoComponent } from './signs/capricornus-info/capricornus-info.component';
import { GeminiInfoComponent } from './signs/gemini-info/gemini-info.component';
import { LeoInfoComponent } from './signs/leo-info/leo-info.component';
import { LibraInfoComponent } from './signs/libra-info/libra-info.component';
import { PiscesInfoComponent } from './signs/pisces-info/pisces-info.component';
import { SagittariusInfoComponent } from './signs/sagittarius-info/sagittarius-info.component';
import { ScorpioInfoComponent } from './signs/scorpio-info/scorpio-info.component';
import { TaurusInfoComponent } from './signs/taurus-info/taurus-info.component';
import { VirgoInfoComponent } from './signs/virgo-info/virgo-info.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'aquarius-info', component: AquariusInfoComponent},
    {path: 'aries-info', component: AriesInfoComponent},
    {path: 'cancer-info', component: CancerInfoComponent},
    {path: 'capricornus-info', component: CapricornusInfoComponent},
    {path: 'gemini-info', component: GeminiInfoComponent},
    {path: 'leo-info', component: LeoInfoComponent},
    {path: 'libra-info', component: LibraInfoComponent},
    {path: 'pisces-info', component: PiscesInfoComponent},
    {path: 'sagittarius-info', component: SagittariusInfoComponent},
    {path: 'scorpio-info', component: ScorpioInfoComponent},
    {path: 'taurus-info', component: TaurusInfoComponent},
    {path: 'virgo-info', component: VirgoInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

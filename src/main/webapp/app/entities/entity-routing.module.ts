import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'owner',
        data: { pageTitle: 'proyectoPrueba01App.owner.home.title' },
        loadChildren: () => import('./owner/owner.module').then(m => m.OwnerModule),
      },
      {
        path: 'pet',
        data: { pageTitle: 'proyectoPrueba01App.pet.home.title' },
        loadChildren: () => import('./pet/pet.module').then(m => m.PetModule),
      },
      {
        path: 'photo',
        data: { pageTitle: 'proyectoPrueba01App.photo.home.title' },
        loadChildren: () => import('./photo/photo.module').then(m => m.PhotoModule),
      },
      {
        path: 'breed',
        data: { pageTitle: 'proyectoPrueba01App.breed.home.title' },
        loadChildren: () => import('./breed/breed.module').then(m => m.BreedModule),
      },
      {
        path: 'search-criteria',
        data: { pageTitle: 'proyectoPrueba01App.searchCriteria.home.title' },
        loadChildren: () => import('./search-criteria/search-criteria.module').then(m => m.SearchCriteriaModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}

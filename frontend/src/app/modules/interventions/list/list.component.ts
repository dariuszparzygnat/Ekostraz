import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Intervention, ListIntervention } from '@shared/domain/intervention.model';
import { InterventionsService } from '../interventions.service';
import { GTM_CONTEXTS } from '@shared/google-tag-manager/gtm-contexts';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  interventionsListGtmContext: string;
  interventions: ListIntervention[];
  loading$: Observable<ListIntervention[]> = this.interventionsService.getInterventions().pipe(
    map(toTableData),
    tap(data => {
      this.interventions = data;
    }),
  );

  constructor(
    private router: Router,
    private interventionsService: InterventionsService,
    @Inject(GTM_CONTEXTS) gtmContexts,
  ) {
    this.interventionsListGtmContext = gtmContexts.interventionList;
  }

  showMap() {
    this.router.navigate(['interwencje', 'mapa']);
  }
}

function toTableData(interventions: Intervention[]): ListIntervention[] {
  return interventions.map((intervention, index) => ({
    ...intervention,
    position: index + 1,
  }));
}

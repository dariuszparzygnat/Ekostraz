import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { first, tap } from 'rxjs/operators';

import { InterventionsService } from '../interventions.service';
import { Intervention } from '@shared/domain/intervention.model';

@Component({
  selector: 'eko-intervention-details-container',
  template: `
    <app-loader [loading$]="intervention$">
      <eko-intervention-details [intervention]="intervention"></eko-intervention-details>
    </app-loader>
  `,
})
export class DetailsContainerComponent {
  intervention: Intervention;
  intervention$ = this.interventionsService.getIntervention(this.activatedRoute.snapshot.params.interventionId).pipe(
    tap(data => {
      this.intervention = data;
    }),
    first(),
  );

  constructor(private interventionsService: InterventionsService, private activatedRoute: ActivatedRoute) {}
}

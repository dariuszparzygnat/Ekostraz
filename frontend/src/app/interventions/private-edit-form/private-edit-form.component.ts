import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {BehaviorSubject} from 'rxjs';
import {finalize, switchMapTo, take, tap} from 'rxjs/operators';

import {Intervention, InterventionFormSubmitData} from '../types';
import {InterventionsService} from '../interventions.service';
import {ComponentWithSubscriptions} from '@shared/base';

@Component({
  selector: 'app-private-edit-intervention-form',
  templateUrl: './private-edit-form.component.html',
  styleUrls: ['./private-edit-form.component.scss']
})
export class PrivateEditFormComponent extends ComponentWithSubscriptions implements OnInit {
  intervention: Intervention | null = null;
  loading$: BehaviorSubject<boolean | null> = new BehaviorSubject(true);

  constructor(
      private activatedRoute: ActivatedRoute,
      private interventionsService: InterventionsService,
  ) {
    super();
  }

  ngOnInit() {
    const intervention$ = this.interventionsService.getIntervention(this.activatedRoute.params).pipe(
        tap(intervention => this.setIntervention(intervention)),
    );

    const loadDataSubscription = this.loading$.pipe(
        take(1),
        switchMapTo(intervention$),
        finalize(() => this.finishLoading()),
    ).subscribe();

    this.subscriptions.add(loadDataSubscription);
  }

  private setIntervention(intervention: Intervention) {
    this.intervention = intervention;
  }

  private finishLoading() {
    this.loading$.next(false);
    this.loading$.complete();
  }

  onSubmit(eventData: InterventionFormSubmitData) {
    this.subscriptions.add(
        this.interventionsService.postPrivateForm(eventData)
    );
  }
}

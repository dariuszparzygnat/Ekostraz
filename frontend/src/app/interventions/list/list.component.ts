import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServerIntervention, ClientIntervention } from '../intervention';
import { InterventionsService } from '../interventions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class InterventionsListComponent implements OnInit, OnDestroy {
  private subscription: Subscription | null = null;

  displayedColumns = ['position', 'name', 'status', 'phone', 'date', 'description'];
  interventionsList: ClientIntervention[] = [];

  constructor(
    private interventionsService: InterventionsService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.subscription = this.interventionsService.getInterventions()
      .subscribe(
        (resp) => this.onSuccess(resp),
        () => this.onFailure(),
        () => this.onCompleted(),
      );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }

  private onSuccess(data: ServerIntervention[]) {
    this.interventionsList = data.map(this.mapToTableData);
    console.log(this.interventionsList);
  }

  private onFailure() {
    console.log('Something went wrong');
  }

  private onCompleted() {
    this.subscription = null;
  }

  private mapToTableData(intervention: ServerIntervention, index: number): ClientIntervention {
    return new ClientIntervention(intervention, index);
  }

  showDetails(intervention: ClientIntervention) {
    this.router.navigate(['interventions', intervention.id], {state: intervention});
  }
}

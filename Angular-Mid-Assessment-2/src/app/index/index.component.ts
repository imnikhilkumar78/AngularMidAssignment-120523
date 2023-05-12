import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { hallDetails } from '../hallDetails';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent {
  ownerName: string = '';
  trainingId: number | undefined = 0;
  trainingName: string = '';
  constructor(private router: Router) {}

  getTrainingHallName() {
    this.trainingId = this.getTrainingId();
    this.router.navigate(['/trainingHall', this.trainingId]);
  }
  getTrainingId() {
    const trainingDetails = hallDetails.find(
      (hallDetail) =>
        hallDetail.TrainingName.toLowerCase() ===
        this.trainingName.toLowerCase()
    );
    return trainingDetails?.TrainingId;
  }
}

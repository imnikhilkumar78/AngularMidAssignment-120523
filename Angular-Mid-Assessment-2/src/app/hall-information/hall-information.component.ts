import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { hallInfo } from '../hallInfo';
import { hallDetails } from '../hallDetails';

@Component({
  selector: 'app-hall-information',
  templateUrl: './hall-information.component.html',
  styleUrls: ['./hall-information.component.css'],
})
export class HallInformationComponent implements OnInit {
  id: string | null = '';
  hallName: string | undefined = '';
  constructor(private activatedroute: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.activatedroute.snapshot.paramMap.get('id');
    this.hallName = this.findInfo();
  }

  findInfo() {
    const trainingDetails = hallDetails.find(
      (hallDetail) => hallDetail.TrainingId.toString() === this.id
    );
    return trainingDetails?.hallName;
  }
}

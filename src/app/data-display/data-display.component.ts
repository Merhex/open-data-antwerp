import { Component, OnInit } from '@angular/core';
import { OvertredingService } from '../_services/overtreding.service';
import { Overtreding } from '../_models/overtreding';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit {
  theme = 'dark';
  options = {
    title: {
      text: 'Politie overtredingen',
      subtext: 'Een kleine illustratie voor overtredingen',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      x: 'center',
      y: 'bottom',
      data: ['Snelheid', 'Roodlicht', 'Totaal']
    },
    calculable: true,
    series: [{
      name: 'Overtredingen',
      type: 'pie',
      radius: [30, 110],
      roseType: 'area',
      data: [
        {value: 0, name: 'Snelheid'},
        {value: 0, name: 'Roodlicht'},
        {value: 0, name: 'Totaal'}
      ]
    }]
  };
  mergeOption: any;
  loading = false;

  constructor(private overtredingService: OvertredingService) { }

  ngOnInit(): void {
    this.loading = true;
    this.overtredingService.getOvertredingen().subscribe((data: Overtreding[]) => {
      console.log(data);
      this.mergeOption = {
        series: [{
          name: 'Overtredingen',
          type: 'pie',
          radius: [30, 110],
          roseType: 'area',
          data: [
            {
              value: data.reduce((a, b) => {
                return a + Number(b.aantal_overtredingen_snelheid);
              }, 0),
              name: 'Snelheid'},
            {
              value: data.reduce((a, b) => {
              return a + Number(b.aantal_overtredingen_roodlicht);
              }, 0),
            name: 'Roodlicht'},
            {
              value: data.reduce((a, b) => {
              return a + Number(b.aantal_passanten);
              }, 0),
              name: 'Totaal'}
          ]}]
      };
    });
  }
}

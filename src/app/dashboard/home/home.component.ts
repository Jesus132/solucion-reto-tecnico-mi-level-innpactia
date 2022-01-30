import { Component, OnInit } from '@angular/core';

import { DashboardService } from 'src/app/data/service/dashboard.service';
import { Storage } from 'src/app/data/schema/storage/storage.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { SettingService } from 'src/app/data/service/setting/setting.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  list: any[] = [];
  _list: any[] = [];

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  maxDate: Date = new Date(Date.now());
  minDate: Date = new Date("2000-1-1");

  constructor(
    private dashService: DashboardService,
    private settingService: SettingService
  ) {
    this.maxDate.setSeconds(71000);
  }

  ngAfterViewInit() {
    this.getSetting();
  }
  
  ngOnInit(): void {
  }

  getSetting(): void{
    this.settingService.getSetting().subscribe(
      (resp: any) => {
        console.log(resp);
        this.list = resp.settings;
        this._list = resp.settings;
        // this.dashService.storage = resp;
        // this.list = this.dashService.storage;
      },
      (err) => {
        console.log(err);
        // Swal.fire({
        //   icon: 'error',
        //   title: 'Error',
        //   text: this.TXT_ERROR
        // });
      });
  }

  filtre() {
    const filtDate = new Date(this.range.value.start);
    const filtDateM = new Date(this.range.value.end);

    this.list = this._list.filter(x => new Date(x.date) > filtDate && new Date(x.date) < filtDateM);
    console.log(this._list);
    
    // this.chart.updateOptions({
    //   min: new Date(this.range.value.start).getTime(),
    //   max: new Date(this.range.value.end).getTime()
    // }, false, true, true);

    // const data = dateFilter.map(x => [new Date(x.date).getTime(), x.monto]);
    // this.chartOptions.series = [{
    //   name: 'Monto de ventas',
    //   data
    // }];

    // setTimeout(() => {
    //   console.log(this.chartOptions);
    //   localStorage.setItem('Allwidgets', this.dash.Allwidgets.toString());
    // }, 1000);

  }
}

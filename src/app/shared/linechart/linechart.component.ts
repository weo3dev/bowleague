import { Component, OnInit } from '@angular/core';
import { OnChanges, ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';

import * as d3 from 'd3';


@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LinechartComponent implements OnInit {
	@ViewChild('chart') private chartContainer: ElementRef;
	@Input() private chartData = [
  	{ 'x': 1, 'y': 5 },
  	{ 'x': 20, 'y': 20 },
  	{ 'x': 40, 'y': 10 },
  	{ 'x': 60, 'y': 40 },
  	{ 'x': 80, 'y': 5 },
  	{ 'x': 100, 'y': 60 }
  ];

	private margin: any = { top: 20, bottom: 20, left: 20, right: 20 };
	private chart: any;
	private width: number;
	private height: number;
	private xScale: any;
	private yScale: any;
	private colors: any;
	private xAxis: any;
	private yAxis: any;

	xRange: any;
	yRange: any;

	private vis: any;


  constructor() { }

  ngOnInit() {
  	this.createChart();
  }

  createChart() {
    let element = this.chartContainer.nativeElement;
    this.width = element.offsetWidth - this.margin.left - this.margin.right;
    this.height = element.offsetHeight - this.margin.top - this.margin.bottom;
    let svg = d3.select(element).append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight);

    // chart plot area
    this.chart = svg.append('g')
      .attr('class', 'bars')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);

    // define X & Y domains
    let xDomain = this.chartData.map(d => d[0]);
    let yDomain = [0, d3.max(this.chartData, d => d[1])];

    // create scales
    this.xScale = d3.scaleBand().padding(0.1).domain(xDomain).rangeRound([0, this.width]);
    this.yScale = d3.scaleLinear().domain(yDomain).range([this.height, 0]);

    // x & y axis
    this.xAxis = svg.append('g')
      .attr('class', 'axis axis-x')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top + this.height})`)
      .call(d3.axisBottom(this.xScale));
    this.yAxis = svg.append('g')
      .attr('class', 'axis axis-y')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`)
      .call(d3.axisLeft(this.yScale));

		// var lineFunc = svg.line()
		// .x(function(d) {
		// return xRange(d.x);
		// })
		// .y(function(d) {
		// return yRange(d.y);
		// })
		// .interpolate('linear');

		// this.vis.append('svg:path')
		//   .attr('d', lineFunc(this.chartData))
		//   .attr('stroke', 'blue')
		//   .attr('stroke-width', 2)
		//   .attr('fill', 'none');
  }

}



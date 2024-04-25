var legal_person_data = {"uploadData":[{"count":547},{"count":711},{"count":964},{"count":1499},{"count":2130},{"count":3156}
					,{"count":4213},{"count":5331}],
		"updateData":[{"count":141},{"count":164},{"count":253},{"count":485},{"count":681},{"count":1026}
					,{"count":1057},{"count":1118}],
		"viewData":[{"count":161},{"count":842},{"count":223},{"count":223},{"count":221},{"count":812}
					,{"count":928},{"count":219}]};
var people_data = {"uploadData":[{"count":48377},{"count":49337},{"count":52457},{"count":56130},{"count":59457},{"count":62805}
				,{"count":66149},{"count":69616}],
	"updateData":[{"count":1290},{"count":960},{"count":3120},{"count":3673},{"count":3327},{"count":3348}
				,{"count":3344},{"count":3467}],
	"viewData":[{"count":651},{"count":842},{"count":223},{"count":223},{"count":221},{"count":812}
				,{"count":928},{"count":219}]};
var picture_data = {"uploadData":[{"count":17989},{"count":18982},{"count":20170},{"count":21154},{"count":22060},{"count":22903}
				,{"count":23674},{"count":24447}],
	"updateData":[{"count":1104},{"count":993},{"count":1188},{"count":984},{"count":906},{"count":843}
				,{"count":771},{"count":773}],
	"viewData":[{"count":1},{"count":342},{"count":523},{"count":323},{"count":421},{"count":812}
				,{"count":728},{"count":619}]};
			
var Tpl1 = '<li>' +
			'<p class="data-count">6249</p>' +
			'<span class="data-name">Total papers</span>' +
			'</li>' +
			'<li>' +
			'<p class="data-count">1331</p>' +
			'<span class="data-name">Annual update</span>' +
			'</li>' +
			'<li>' +
			'<p class="data-count">1991</p>' +
			'<span class="data-name">Year of birth</span>' +
			'</li>' ;		
var Tpl2 = '<li>' +
			'<p class="data-count">3971</p>' +
			'<span class="data-name">Total papers</span>' +
			'</li>' +
			'<li>' +
			'<p class="data-count">1141</p>' +
			'<span class="data-name">Annual update</span>' +
			'</li>' +
			'<li>' +
			'<p class="data-count">1983</p>' +
			'<span class="data-name">Year of birth</span>' +
			'</li>' ;
var Tpl3 = '<li>' +
			'<p class="data-count">4742</p>' +
			'<span class="data-name">Total papers</span>' +
			'</li>' +
			'<li>' +
			'<p class="data-count">1231</p>' +
			'<span class="data-name">Annual update</span>' +
			'</li>' +
			'<li>' +
			'<p class="data-count">1995</p>' +
			'<span class="data-name">Year of birth</span>' +
			'</li>' ;		
$('.com-screen-content .use-data').html(Tpl1);			
// 初始化echarts实例 initialize the echarts instance
var myChart1= echarts.init(document.getElementById('main1'));
var myChart2 = echarts.init(document.getElementById('main2'));
var myChart3 = echarts.init(document.getElementById('main3'));
//var myChart4 = echarts.init(document.getElementById('main4'));
var myChart5 = echarts.init(document.getElementById('main5'));
var myChart6 = echarts.init(document.getElementById('main6'));
var myChart7 = echarts.init(document.getElementById('main7'));

getNowFormatDate();
init_myChart1();
init_myChart2();
init_myChart3(legal_person_data);
init_myChart5();
init_myChart6();
init_myChart7();

//前三名编程基础数据统计
function init_myChart3(data) {

	var uploadCnt = [];
	var updateCnt = [];

	var viewCnt = [];
	if (data.uploadData != null) {
		for (var i = 0; i < data.uploadData.length; i++) {
			uploadCnt.push(data.uploadData[i].count);
		}
	}
	if (data.updateData != null) {
		for (var i = 0; i < data.updateData.length; i++) {
			updateCnt.push(data.updateData[i].count);
		}
	}

	if (data.viewData != null) {
		for (var i = 0; i < data.viewData.length; i++) {
			viewCnt.push(data.viewData[i].count);
		}
	}
	option = {

		tooltip: {
			trigger: 'axis',
			formatter: function (params, ticket, callback) {
				var res = '';
				for (var i = 0, l = params.length; i < l; i++) {
					res += '' + params[i].seriesName + ' : ' + params[i].value + '<br>';
				}
				return res;
			},
			transitionDuration: 0,
			backgroundColor: 'rgba(83,93,105,0.8)',
			borderColor: '#535b69',
			borderRadius: 8,
			borderWidth: 2,
			padding: [5, 10],
			axisPointer: {
				type: 'line',
				lineStyle: {
					type: 'dashed',
					color: '#ffff00'
				}
			}
		},
		legend: {
			icon: 'circle',
			itemWidth: 8,
			itemHeight: 8,
			itemGap: 10,
			top: '16',
			right: '10',
			data: ['Total papers','Annual update'],
			textStyle: {
				fontSize: 14,
				color: '#a0a8b9'
			}
		},
		grid: {
			top: '46',
			left: '13%',
			right: '10',
			//bottom: '10%',
			containLabel: false
		},
		xAxis: [{
			type: 'category',
			boundaryGap: false,
			axisLabel: {
				interval: 0,
				fontSize:14
			},
			axisLine: {
				show: false,
				lineStyle: {
					color: '#a0a8b9'
				}
			},
			axisTick: {
				show: false
			},
			data: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
			offset: 10
		}],
		yAxis: [{
			type: 'value',
			axisLine: {
				show: false,
				lineStyle: {
					color: '#a0a8b9'
				}
			},
			axisLabel: {
				margin: 10,
				textStyle: {
					fontSize: 14
				}
			},
			splitLine: {
				lineStyle: {
					color: '#2b3646'
				}
			},
			axisTick: {
				show: false
			}
		}],
		series: [{
			name: 'Total papers',
			type: 'line',
			smooth: true,
			showSymbol: false,
			lineStyle: {
				normal: {
					width: 2
				}
			},
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgba(137, 189, 27, 0.3)'
					}, {
						offset: 0.8,
						color: 'rgba(137, 189, 27, 0)'
					}], false),
					shadowColor: 'rgba(0, 0, 0, 0.1)',
					shadowBlur: 10
				}
			},
			itemStyle: {
				normal: {
					color: '#1cc840'
				}
			},
			data: uploadCnt
		}, 
		// {
		// 	name: '共享次数',
		// 	type: 'line',
		// 	smooth: true,
		// 	showSymbol: false,
		// 	lineStyle: {
		// 		normal: {
		// 			width: 2
		// 		}
		// 	},
		// 	areaStyle: {
		// 		normal: {
		// 			color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
		// 				offset: 0,
		// 				color: 'rgba(219, 50, 51, 0.3)'
		// 			}, {
		// 				offset: 0.8,
		// 				color: 'rgba(219, 50, 51, 0)'
		// 			}], false),
		// 			shadowColor: 'rgba(0, 0, 0, 0.1)',
		// 			shadowBlur: 10
		// 		}
		// 	},
		// 	itemStyle: {
		// 		normal: {
		// 			color: '#eb5690'
		// 		}
		// 	},
		// 	data: viewCnt
		// },  
		{
			name: 'Annual update',
			type: 'line',
			smooth: true,
			showSymbol: false,
			lineStyle: {
				normal: {
					width: 2
				}
			},
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgba(0, 136, 212, 0.3)'
					}, {
						offset: 0.8,
						color: 'rgba(0, 136, 212, 0)'
					}], false),
					shadowColor: 'rgba(0, 0, 0, 0.1)',
					shadowBlur: 10
				}
			},
			itemStyle: {
				normal: {
					color: '#43bbfb'
				}
			},
			data: updateCnt
		}
		]
	};
	myChart3.setOption(option);
}


//编程语言总量统计Programming Language IEEE Paper Statistics
function init_myChart2() {
	var data = {"uploadData":[{"count":96455},{"count":102835},{"count":112168},{"count":121675},{"count":130747},{"count":141046}
							,{"count":150147},{"count":158952}],
				"updateData":[{"count":6143},{"count":6380},{"count":9333},{"count":9507},{"count":9072},{"count":10299}
							,{"count":9101},{"count":8805}],
				"viewData":[{"count":1651},{"count":1842},{"count":2223},{"count":2123},{"count":2021},{"count":1812}
							,{"count":1928},{"count":2019}]};
	var uploadCnt = [];
	var updateCnt = [];

	var viewCnt = [];
	if (data.uploadData != null) {
		for (var i = 0; i < data.uploadData.length; i++) {
			uploadCnt.push(data.uploadData[i].count);
		}
	}
	if (data.updateData != null) {
		for (var i = 0; i < data.updateData.length; i++) {
			updateCnt.push(data.updateData[i].count);
		}
	}

	// if (data.viewData != null) {
	// 	for (var i = 0; i < data.viewData.length; i++) {
	// 		viewCnt.push(data.viewData[i].count);
	// 	}
	// }
	option = {
	
		tooltip: {
			trigger: 'axis',
			formatter: function (params, ticket, callback) {
				var res = '';
				for (var i = 0, l = params.length; i < l; i++) {
					res += '' + params[i].seriesName + ' : ' + params[i].value + '<br>';
				}
				return res;
			},
			transitionDuration: 0,
			backgroundColor: 'rgba(83,93,105,0.8)',
			borderColor: '#535b69',
			borderRadius: 8,
			borderWidth: 2,
			padding: [5, 10],
			axisPointer: {
				type: 'line',
				lineStyle: {
					type: 'dashed',
					color: '#ffff00'
				}
			}
		},
		legend: {
			icon: 'circle',
			itemWidth: 8,
			itemHeight: 8,
			itemGap: 10,
			top: '16',
			right: '10',
			// data: ['数据总量','2022年更新量','2023年更新量'],
			data: ['Total papers','Annual update'],
			textStyle: {
				fontSize: 14,
				color: '#a0a8b9'
			}
		},
		grid: {
			top:'46',
			left: '13%',
			right: '10',
			//bottom: '10%',
			containLabel: false
		},
		xAxis: [{
			type: 'category',
			boundaryGap: false,
			axisLabel: {
				interval: 0,
				fontSize:14
			},
			axisLine: {
				show: false,
				lineStyle: {
					color: '#a0a8b9'
				}
			},
			axisTick: {
				show: false
			},
			data: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
			offset: 10
		}],
		yAxis: [{
			type: 'value',
			axisLine: {
				show: false,
				lineStyle: {
					color: '#a0a8b9'
				}
			},
			axisLabel: {
				margin: 10,
				textStyle: {
					fontSize: 14
				}
			},
			splitLine: {
				lineStyle: {
					color: '#2b3646'
				}
			},
			axisTick: {
				show: false
			}
		}],
		series: [{
			name: 'Total papers',
			type: 'line',
			smooth: true,
			showSymbol: false,
			lineStyle: {
				normal: {
					width: 2
				}
			},
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgba(137, 189, 27, 0.3)'
					}, {
						offset: 0.8,
						color: 'rgba(137, 189, 27, 0)'
					}], false),
					shadowColor: 'rgba(0, 0, 0, 0.1)',
					shadowBlur: 10
				}
			},
			itemStyle: {
				normal: {
					color: '#1cc840'
				}
			},
			data: uploadCnt
		}, 
		{
			name: 'Annual update',
			type: 'line',
			smooth: true,
			showSymbol: false,
			lineStyle: {
				normal: {
					width: 2
				}
			},
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgba(219, 50, 51, 0.3)'
					}, {
						offset: 0.8,
						color: 'rgba(219, 50, 51, 0)'
					}], false),
					shadowColor: 'rgba(0, 0, 0, 0.1)',
					shadowBlur: 10
				}
			},
			itemStyle: {
				normal: {
					color: '#eb5690'
				}
			},
			data: viewCnt
		},  
		{
			name: 'Annual update',
			type: 'line',
			smooth: true,
			showSymbol: false,
			lineStyle: {
				normal: {
					width: 2
				}
			},
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgba(0, 136, 212, 0.3)'
					}, {
						offset: 0.8,
						color: 'rgba(0, 136, 212, 0)'
					}], false),
					shadowColor: 'rgba(0, 0, 0, 0.1)',
					shadowBlur: 10
				}
			},
			itemStyle: {
				normal: {
					color: '#ff69b4'
				}
			},
			data: updateCnt
		}
		]
	};
	myChart2.setOption(option);
}


//当前主流编程语言百分比Percentage of current mainstream programming languages
function init_myChart1(){
	option = {
			tooltip : {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			color:['#8fc31f','#f35833','#00ccff','#ffcc00','#f5e965','#a74faf','#ff9668'],
		   
			series : [
				{
					name: 'Percentage of programming languages',
					type: 'pie',
					radius : '40%',
					center: ['50%', '50%'],
					data:[
						{value:15.63, name:'Python'},
						{value:11.17, name:'C'},
						{value:10.7, name:'C++'},
						{value:8.95, name:'Java'},
						{value:7.54, name:'C#'},
						{value:3.38, name:'JavaScript'},
						{value:1.92, name:'SQL'},
						{value:1.56, name:'Go'},
						{value:1.42, name:'Visual Basic'},
						{value:1.18, name:'Scratch'},
						{value:36.55, name:'Others'},
					],
					itemStyle: {
						emphasis: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					},
					itemStyle: {
						normal: {
							label:{ 
								show: true, 
	//	                            position:'inside',

								// formatter: '{b} : {c} ({d}%)' ,
								formatter: '{b} : {d}%' ,
								fontSize : 14,    //文字的字体大小
							}
						},
						labelLine :{show:true}
					}
				}
			]
		};
// 使用刚指定的配置项和数据显示图表。
	myChart1.setOption(option);
}

//近九年当年年度最佳编程语言Best Programming Language of the Year in the Past Nine Years
function init_myChart5(){

	var MVLyData=[15.53,0.16,9.35,4.68,13.34,9.7,11.72,8.29,6.38];

	var XData=["Java\n(2015)","Go\n(2016)","C\n(2017)","Python\n(2018)","C\n(2019)","Python\n(2020)","Python\n(2021)","C++\n(2022)","C#\n(2023)"];
	
	option = {
		backgroundColor:"",
		xAxis: {
			axisTick: {
				show: false
			},
			splitLine: {
				show: false
			},
			splitArea: {
				show: false
			},
			data: XData,
			axisLabel: {
				formatter: function(value) {
					var ret = ""; //拼接加\n返回的类目项
					var maxLength = 20; //每项显示文字个数
					var valLength = value.length; //X轴类目项的文字个数
					var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
					if (rowN > 1) //如果类目项的文字大于3,
					{
						for (var i = 0; i < rowN; i++) {
							var temp = ""; //每次截取的字符串
							var start = i * maxLength; //开始截取的位置
							var end = start + maxLength; //结束截取的位置
							//这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
							temp = value.substring(start, end) + "\n";
							ret += temp; //凭借最终的字符串
						}
						return ret;
					} else {
						return value;
					}
				},
				interval: 0,
				fontSize: 14,
				fontWeight: 100,
				textStyle: {
					color: '#9faeb5',

				}
			},
			axisLine: {
				lineStyle: {
					color: '#4d4d4d'
				}
			}
		},

		yAxis: {
			axisTick: {
				show: false
			},
			splitLine: {
				show: false
			},
			splitArea: {
				show: false
			},
			axisLabel: {
				formatter: '{value}%', // 设置 Y 轴的标签格式为数值加上百分号
				textStyle: {
					color: '#9faeb5',
					fontSize: 16,
				}
			},
			axisLine: {
				lineStyle: {
					color: '#4d4d4d'
				}
			}
		},		
	
		"tooltip": {
			"trigger": "axis",
			transitionDuration: 0,
			backgroundColor: 'rgba(83,93,105,0.8)',
			borderColor: '#535b69',
			borderRadius: 8,
			borderWidth: 2,
			padding: [5, 10],
			
			axisPointer: {
				type: 'line',
				lineStyle: {
					type: 'dashed',
					color: '#ffff00'
				}
			}
		},
		
		
		
		series: [
			{
			name:'Percentage for the year',
			type:"bar",
			itemStyle: {
				normal: {
					color: {
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [{
							offset: 0,
							color: '#00d386' // 0% 处的颜色
						}, {
							offset: 1,
							color: '#0076fc' // 100% 处的颜色
						}],
						globalCoord: false // 缺省为 false
					},
					barBorderRadius: 15,
				}
			},
			label: {//数字的显示
					normal: {
						show: true,
						position: "top",
						textStyle: {
							color: "#ffc72b",
							fontSize: 10
						}
					}
				},
			data: MVLyData,
			barWidth: 16,
		},
		// {
		// 	name:'折线',
		// 	type:'line',
		// 	itemStyle : {  /*设置折线颜色*/
		// 		normal : {
		// 		   /* color:'#c4cddc'*/
		// 		}
		// 	},
		// 	data:[15.53,0.16,9.35,4.68,13.34,9.7,11.72,8.29,6.38]
		// }
	]
	};
	myChart5.setOption(option);
}


//Python在各个领域的占比The proportion of Python in various fields
function init_myChart6(){
	var data = {"uploadData":[{"count":2043,"areaName":"AI"},{"count":2844,"areaName":"Backend Development"},{"count":996,"areaName":"Data Science"},
							{"count":287,"areaName":"Feature Extraction"},{"count":470,"areaName":"Hardware"},
							{"count":150,"areaName":"Real-time systems"},{"count":358,"areaName":"Software Development"}]};
	var uploadCnt = [];
	var updateCnt = [];
	//var collectionCnt = [];
	//var dailyCnt = [];
	var viewCnt = [];
	var areaNameS = [];
	if (data.uploadData) {
		for (var i = 0; i < data.uploadData.length; i++) {
			uploadCnt.push(data.uploadData[i].count);
			areaNameS.push(data.uploadData[i].areaName);
		}
	}
	if (data.updateData) {
		for (var i = 0; i < data.updateData.length; i++) {
			updateCnt.push(data.updateData[i].count);
		}
	}
	if (data.viewData) {
		for (var i = 0; i < data.viewData.length; i++) {
			viewCnt.push(data.viewData[i].count);
		}
	}
	option = {
		"tooltip": {
			"trigger": "axis",
			transitionDuration: 0,
			backgroundColor: 'rgba(83,93,105,0.8)',
			borderColor: '#535b69',
			borderRadius: 8,
			borderWidth: 2,
			padding: [5, 10],
			formatter: function (params, ticket, callback) {
				var res = '';
				for (var i = 0, l = params.length; i < l; i++) {
					res += '' + params[i].seriesName + ' : ' + params[i].value + '<br>';
				}
				return res;
			},
			axisPointer: {
				type: 'line',
				lineStyle: {
					type: 'dashed',
					color: '#ffff00'
				}
			}
		},
		"grid": {
			"top": '40',
			"left": '30',
			"right": '10',
			"bottom": '40',
	
			textStyle: {
				color: "#fff"
			}
		},
		"legend": {
			right: '24',
			top: "24",
			itemWidth: 8,
			itemHeight: 12,
			textStyle: {
				color: '#fff',
				fontSize:14
			},
			"data": ['Total amount of resources'],
		
		},
		"calculable": true,
		xAxis: [{
			'type': 'category',
			"axisTick": {
				"show": false
			},
			"axisLine": {
				"show": false,
				lineStyle: {
					color: '#868c96'
				}
			},
			"axisLabel": {
				"interval": 0,
				fontSize:14,
				formatter:function(value)
				{
					var ret = "";//拼接加\n返回的类目项
					var maxLength = 10;//每项显示文字个数
					var valLength = value.length;//X轴类目项的文字个数
					var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
					if (rowN > 1)//如果类目项的文字大于3,
					{
						for (var i = 0; i < rowN; i++) {
							var temp = "";//每次截取的字符串
							var start = i * maxLength;//开始截取的位置
							var end = start + maxLength;//结束截取的位置
							//这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
							temp = value.substring(start, end) + "\n";
							ret += temp; //凭借最终的字符串
						}
						return ret;
					}
					else {
						return value;
					}
				}


			},
			"splitArea": {
				"show": false
			},
			'data': areaNameS,
			splitLine: {
				show: false
			}
		}],
		"yAxis": [
			{
				"type": "value",
				offset: -14,
				"splitLine": {
					"show": false
				},
				"axisLine": {
					"show": false,
					lineStyle: {
						color: '#868c96'
					}
				},
				"axisTick": {
					"show": false
				},
				"axisLabel": {
					"interval": 0,
					fontSize:14

				},
				"splitArea": {
					"show": false
				}
			}],
		
		"series": [
			{
				"name": "Total amount of resources",
				"type": "bar",
				"barGap": "10%",
				itemStyle: {//图形样式
					normal: {
						// "color": '#4a4df0'
						color: function(params) {
							    // build a color map as your need.
							    var colorList = [
							        '#ff2600',
							        '#ffc000',
							        '#00ad4e',
							        '#0073c2',
							        '#165868',
							        '#e76f00',
							        '#316194',
							        '#723761',
							        
							    ];
							    return colorList[params.dataIndex]
							},
						// color: function(params) {
                        //     // 预定义一个颜色数组
                        //     var colorList = ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83', '#ca8622', '#bda29a'];
                        //     // 返回这个数组的一个颜色
                        //     return colorList[params.dataIndex % colorList.length];
                        // }
					}
				},
				label: {
					normal: {
						show: true,
						position: "top",
						textStyle: {
							color: "#ffc72b",
							fontSize: 10
						}
					}
				},
				"data": uploadCnt,
				barWidth: 14,
			},{
			name:'percent',
			type:'line',
			itemStyle : {  /*设置折线颜色*/
				normal : {
				  color:'#c7b198'
				}
			},
			// data:[25.82%, 22.50%, 18.70%, 13.11%, 10.19%, 4.90%, 4.78%],
			// data:uploadCnt,


			
			data: [34.70, 26.89, 16.92, 4.88, 7.98, 2.55, 6.08],
			label: {
                normal: {
                    show: true,
                    position: 'top',

					
                    formatter: function(params) {
                        // 显示百分比
                        return params.value + '%';
                    },
                    textStyle: {
                        color: "#ffc72b", // 标签文字颜色
                        fontSize: 10      // 标签文字大小
                    }
                }
            },
			
		}
		]
	};

// 使用刚指定的配置项和数据显示图表。
	myChart6.setOption(option);
}

//Python占比变化图	Python proportion variation chart
function init_myChart7(){

	
var colorList = [
    '#ff2600',
    '#ffc000',
    '#00ad4e',
    '#0073c2',
    '#165868',
    '#e76f00',
    '#316194',
    '#723761',
    '#00b2f1',
    '#4d6022',
    '#4b83bf',
    '#f9c813',
    '#0176c0'
];
// var xData = ['公共服务','健康保障','安全生产','价格监督','能源安全','信用体系', '城乡建设', '社区治理', '生态环保','应急维稳'];
var xData = ['2015','2016','2017','2018','2019','2022','2021', '2022', '2023', '2024'];
var yData = [2.88,4.18,4.04,5.17,7.57,9.35,10.86,15.33,15.49,17.31];
option = {
    color:colorList,
    "tooltip": {
			"trigger": "axis",
			transitionDuration: 0,
			backgroundColor: 'rgba(83,93,105,0.8)',
			borderColor: '#535b69',
			borderRadius: 8,
			borderWidth: 2,
			padding: [5, 10],
			// formatter: function (params, ticket, callback) {
			// 	var res = '';
			// 	for (var i = 0, l = params.length; i < l; i++) {
			// 		res += '' + params[i].seriesName + ' : ' + params[i].value + '<br>';
			// 	}
			// 	return res;
			// },
			

			formatter: function (params) {
				var res = '';
				// 遍历所有系列
				params.forEach(function (item) {
					// 根据系列名称排除特定系列
					if (item.seriesName !== 'Year of birth') {
						res += item.seriesName + ' : ' + item.value + '<br>';
					}
				});
				return res;
			},


			axisPointer: {
				type: 'line',
				lineStyle: {
					type: 'dashed',
					color: '#ffff00'
				}
			}
		},
    toolbox: {
        show : true,
        feature : {
            mark : {
                show: true
            },

        }
    },
    grid: {
       "borderWidth": 0,
			"top": '40',
			"left": '30',
			"right": '10',
			"bottom": '40',
			textStyle: {
				color: "#fff"
			}
    },
    xAxis : [
       {
			'type': 'category',
			"axisTick": {
				"show": false
			},
			"axisLine": {
				"show": false,
				lineStyle: {
					color: '#868c96'
				}
			},
			"axisLabel": {
				"interval": 0,
				fontSize:14,
				formatter:function(value)
				{
					var ret = "";//拼接加\n返回的类目项
					var maxLength = 4;//每项显示文字个数
					var valLength = value.length;//X轴类目项的文字个数
					var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
					if (rowN > 1)//如果类目项的文字大于3,
					{
						for (var i = 0; i < rowN; i++) {
							var temp = "";//每次截取的字符串
							var start = i * maxLength;//开始截取的位置
							var end = start + maxLength;//结束截取的位置
							//这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
							temp = value.substring(start, end) + "\n";
							ret += temp; //凭借最终的字符串
						}
						return ret;
					}
					else {
						return value;
					}
				}
			},
			"splitArea": {
				"show": false
			},
			'data': xData,
			splitLine: {
				show: false
			},
		
		}
    ],
    yAxis : [
      {
				"type": "value",
				offset: -14,
				"splitLine": {
					"show": false
				},
				"axisLine": {
					"show": false,
					lineStyle: {
						color: '#868c96'
					}
				},
				"axisTick": {
					"show": false
				},
				"axisLabel": {
					"interval": 0,
					fontSize:14,
					formatter: '{value} %' // Add a space and a percent sign

				},
				"splitArea": {
					"show": false
				}
			}

    ],
    series : [
        {
            name:'Year of birth',
            type:'bar',
            data:yData,
            itemStyle: {
                normal: {
					"color": '#4a4df0'
                }
            },
			 barWidth: 14,
			 label: {
					normal: {
						show: true,
						position: "top",
						textStyle: {
							color: "#ffc72b",
							fontSize: 10
						}
					}
				},
        },
		

		{
			name:'percent',
			type:'line',

			// 2.88,4.18,4.04,5.17,7.57,9.35,10.86,15.33,15.49,17.31

			itemStyle : {  /*设置折线颜色*/
				normal : {
				  color:'#d3d5fd'
				}
			},
			data:yData
		}
     
    ]
};


// 使用刚指定的配置项和数据显示图表。
	myChart7.setOption(option);
}

//C在各个领域的占比The proportion of C in various fields
function init_myChartC1() {
    var myChartC1 = echarts.init(document.getElementById('mainC1'));
    var data = {"uploadData":[{"count":3275,"areaName":"AI"},{"count":1126,"areaName":"Backend Development"},{"count":3507,"areaName":"Data Science"},
								{"count":2844,"areaName":"Feature Extraction"},{"count":5293,"areaName":"Hardware"},
								{"count":1856,"areaName":"Real-time systems"},{"count":2057,"areaName":"Software Development"}]};
	var uploadCnt = [];
	var updateCnt = [];
	//var collectionCnt = [];
	//var dailyCnt = [];
	var viewCnt = [];
	var areaNameS = [];
	if (data.uploadData) {
		for (var i = 0; i < data.uploadData.length; i++) {
			uploadCnt.push(data.uploadData[i].count);
			areaNameS.push(data.uploadData[i].areaName);
		}
	}
	if (data.updateData) {
		for (var i = 0; i < data.updateData.length; i++) {
			updateCnt.push(data.updateData[i].count);
		}
	}
	if (data.viewData) {
		for (var i = 0; i < data.viewData.length; i++) {
			viewCnt.push(data.viewData[i].count);
		}
	}
	option = {
		"tooltip": {
			"trigger": "axis",
			transitionDuration: 0,
			backgroundColor: 'rgba(83,93,105,0.8)',
			borderColor: '#535b69',
			borderRadius: 8,
			borderWidth: 2,
			padding: [5, 10],
			formatter: function (params, ticket, callback) {
				var res = '';
				for (var i = 0, l = params.length; i < l; i++) {
					res += '' + params[i].seriesName + ' : ' + params[i].value + '<br>';
				}
				return res;
			},
			axisPointer: {
				type: 'line',
				lineStyle: {
					type: 'dashed',
					color: '#ffff00'
				}
			}
		},
		"grid": {
			"top": '40',
			"left": '30',
			"right": '10',
			"bottom": '40',
	
			textStyle: {
				color: "#fff"
			}
		},
		"legend": {
			right: '24',
			top: "24",
			itemWidth: 8,
			itemHeight: 12,
			textStyle: {
				color: '#fff',
				fontSize:14
			},
			"data": ['Total amount of resources'],
		
		},
		"calculable": true,
		xAxis: [{
			'type': 'category',
			"axisTick": {
				"show": false
			},
			"axisLine": {
				"show": false,
				lineStyle: {
					color: '#868c96'
				}
			},
			"axisLabel": {
				"interval": 0,
				fontSize:14,
				formatter:function(value)
				{
					var ret = "";//拼接加\n返回的类目项
					var maxLength = 10;//每项显示文字个数
					var valLength = value.length;//X轴类目项的文字个数
					var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
					if (rowN > 1)//如果类目项的文字大于3,
					{
						for (var i = 0; i < rowN; i++) {
							var temp = "";//每次截取的字符串
							var start = i * maxLength;//开始截取的位置
							var end = start + maxLength;//结束截取的位置
							//这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
							temp = value.substring(start, end) + "\n";
							ret += temp; //凭借最终的字符串
						}
						return ret;
					}
					else {
						return value;
					}
				}


			},
			"splitArea": {
				"show": false
			},
			'data': areaNameS,
			splitLine: {
				show: false
			}
		}],
		"yAxis": [
			{
				"type": "value",
				offset: -14,
				"splitLine": {
					"show": false
				},
				"axisLine": {
					"show": false,
					lineStyle: {
						color: '#868c96'
					}
				},
				"axisTick": {
					"show": false
				},
				"axisLabel": {
					"interval": 0,
					fontSize:14,

				},
				"splitArea": {
					"show": false
				}
			}],
		
		"series": [
			{
				"name": "Total amount of resources",
				"type": "bar",
				"barGap": "10%",
				itemStyle: {//图形样式
					normal: {
						// "color": '#4a4df0'
						color: function(params) {
							    // build a color map as your need.
							    var colorList = [
							        '#ff2600',
							        '#ffc000',
							        '#00ad4e',
							        '#0073c2',
							        '#165868',
							        '#e76f00',
							        '#316194',
							        '#723761',
							        
							    ];
							    return colorList[params.dataIndex]
							},
						// color: function(params) {
                        //     // 预定义一个颜色数组
                        //     var colorList = ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83', '#ca8622', '#bda29a'];
                        //     // 返回这个数组的一个颜色
                        //     return colorList[params.dataIndex % colorList.length];
                        // }
					}
				},
				label: {
					normal: {
						show: true,
						position: "top",
						textStyle: {
							color: "#ffc72b",
							fontSize: 10
						}
					}
				},
				"data": uploadCnt,
				barWidth: 14,
			},{
			name:'percent',
			type:'line',
			itemStyle : {  /*设置折线颜色*/
				normal : {
				  color:'#c7b198'
				}
			},
			// data:[25.82%, 22.50%, 18.70%, 13.11%, 10.19%, 4.90%, 4.78%],
			// data:uploadCnt,


			
			data: [16.41,
				5.64,
				17.57,
				14.25,
				26.52,9.30,
				10.31
				
				],
			label: {
                normal: {
                    show: true,
                    position: 'top',

					
                    formatter: function(params) {
                        // 显示百分比
                        return params.value + '%';
                    },
                    textStyle: {
                        color: "#ffc72b", // 标签文字颜色
                        fontSize: 10      // 标签文字大小
                    }
                }
            },
			
		}
		]
	};

// 使用刚指定的配置项和数据显示图表。
	myChartC1.setOption(option);
}
//C占比变化图	C proportion variation chart
function init_myChartC2() {
    var myChartC2 = echarts.init(document.getElementById('mainC2'));
    var colorList = [
		'#ff2600',
		'#ffc000',
		'#00ad4e',
		'#0073c2',
		'#165868',
		'#e76f00',
		'#316194',
		'#723761',
		'#00b2f1',
		'#4d6022',
		'#4b83bf',
		'#f9c813',
		'#0176c0'
	];
	// var xData = ['公共服务','健康保障','安全生产','价格监督','能源安全','信用体系', '城乡建设', '社区治理', '生态环保','应急维稳'];
	var xData = ['2015','2016','2017','2018','2019','2022','2021', '2022', '2023', '2024'];
	var yData = [16.49,15.59,8.44,11.86,12.42,16.77,16.34,14.08,15.39,11.38];
	option = {
		color:colorList,
		"tooltip": {
				"trigger": "axis",
				transitionDuration: 0,
				backgroundColor: 'rgba(83,93,105,0.8)',
				borderColor: '#535b69',
				borderRadius: 8,
				borderWidth: 2,
				padding: [5, 10],
				// formatter: function (params, ticket, callback) {
				// 	var res = '';
				// 	for (var i = 0, l = params.length; i < l; i++) {
				// 		res += '' + params[i].seriesName + ' : ' + params[i].value + '<br>';
				// 	}
				// 	return res;
				// },
				
	
				formatter: function (params) {
					var res = '';
					// 遍历所有系列
					params.forEach(function (item) {
						// 根据系列名称排除特定系列
						if (item.seriesName !== 'Year of birth') {
							res += item.seriesName + ' : ' + item.value + '<br>';
						}
					});
					return res;
				},
	
	
				axisPointer: {
					type: 'line',
					lineStyle: {
						type: 'dashed',
						color: '#ffff00'
					}
				}
			},
		toolbox: {
			show : true,
			feature : {
				mark : {
					show: true
				},
	
			}
		},
		grid: {
		   "borderWidth": 0,
				"top": '40',
				"left": '30',
				"right": '10',
				"bottom": '40',
				textStyle: {
					color: "#fff"
				}
		},
		xAxis : [
		   {
				'type': 'category',
				"axisTick": {
					"show": false
				},
				"axisLine": {
					"show": false,
					lineStyle: {
						color: '#868c96'
					}
				},
				"axisLabel": {
					
					"interval": 0,
					fontSize:14,
					
					formatter:function(value)
					{
						var ret = "";//拼接加\n返回的类目项
						var maxLength = 4;//每项显示文字个数
						var valLength = value.length;//X轴类目项的文字个数
						var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
						if (rowN > 1)//如果类目项的文字大于3,
						{
							for (var i = 0; i < rowN; i++) {
								var temp = "";//每次截取的字符串
								var start = i * maxLength;//开始截取的位置
								var end = start + maxLength;//结束截取的位置
								//这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
								temp = value.substring(start, end) + "\n";
								ret += temp; //凭借最终的字符串
							}
							return ret;
						}
						else {
							return value;
						}
					}
				},
				"splitArea": {
					"show": false
				},
				'data': xData,
				splitLine: {
					show: false
				},
			
			}
		],
		yAxis : [
		  {
					"type": "value",
					offset: -14,
					"splitLine": {
						"show": false
					},
					"axisLine": {
						"show": false,
						lineStyle: {
							color: '#868c96'
						}
					},
					"axisTick": {
						"show": false
					},
					"axisLabel": {
						"interval": 0,
						fontSize:14,
						formatter: '{value} %' // Add a space and a percent sign
	
					},
					"splitArea": {
						"show": false
					}
				}
	
		],
		series : [
			{
				name:'Year of birth',
				type:'bar',
				data:yData,
				itemStyle: {
					normal: {
						"color": '#4a4df0'
					}
				},
				 barWidth: 14,
				 label: {
						normal: {
							show: true,
							position: "top",
							textStyle: {
								color: "#ffc72b",
								fontSize: 10
							}
						}
					},
			},
			
	
			{
				name:'percent',
				type:'line',
	
				// 2.88,4.18,4.04,5.17,7.57,9.35,10.86,15.33,15.49,17.31
	
				itemStyle : {  /*设置折线颜色*/
					normal : {
					  color:'#d3d5fd'
					}
				},
				data:yData
			}
		 
		]
	};
	
	
	// 使用刚指定的配置项和数据显示图表。
		myChartC2.setOption(option);
}

//Java在各个领域的占比The proportion of Java in various fields
function init_myChartJava1() {
    var myChartJava1 = echarts.init(document.getElementById('mainJava1'));
    var data = {"uploadData":[{"count":2980,"areaName":"AI"},{"count":19584,"areaName":"Backend Development"},{"count":3520,"areaName":"Data Science"},
	{"count":448,"areaName":"Feature Extraction"},{"count":1816,"areaName":"Hardware"},
	{"count":1776,"areaName":"Real-time systems"},{"count":2390,"areaName":"Software Development"}]};
	var uploadCnt = [];
	var updateCnt = [];
	//var collectionCnt = [];
	//var dailyCnt = [];
	var viewCnt = [];
	var areaNameS = [];
	if (data.uploadData) {
		for (var i = 0; i < data.uploadData.length; i++) {
			uploadCnt.push(data.uploadData[i].count);
			areaNameS.push(data.uploadData[i].areaName);
		}
	}
	if (data.updateData) {
		for (var i = 0; i < data.updateData.length; i++) {
			updateCnt.push(data.updateData[i].count);
		}
	}
	if (data.viewData) {
		for (var i = 0; i < data.viewData.length; i++) {
			viewCnt.push(data.viewData[i].count);
		}
	}
	option = {
		"tooltip": {
			"trigger": "axis",
			transitionDuration: 0,
			backgroundColor: 'rgba(83,93,105,0.8)',
			borderColor: '#535b69',
			borderRadius: 8,
			borderWidth: 2,
			padding: [5, 10],
			formatter: function (params, ticket, callback) {
				var res = '';
				for (var i = 0, l = params.length; i < l; i++) {
					res += '' + params[i].seriesName + ' : ' + params[i].value + '<br>';
				}
				return res;
			},
			axisPointer: {
				type: 'line',
				lineStyle: {
					type: 'dashed',
					color: '#ffff00'
				}
			}
		},
		"grid": {
			"top": '40',
			"left": '30',
			"right": '10',
			"bottom": '40',
	
			textStyle: {
				color: "#fff"
			}
		},
		"legend": {
			right: '24',
			top: "24",
			itemWidth: 8,
			itemHeight: 12,
			textStyle: {
				color: '#fff',
				fontSize:14
			},
			"data": ['Total amount of resources'],
		
		},
		"calculable": true,
		xAxis: [{
			'type': 'category',
			"axisTick": {
				"show": false
			},
			"axisLine": {
				"show": false,
				lineStyle: {
					color: '#868c96'
				}
			},
			"axisLabel": {
				"interval": 0,
				fontSize:14,
				formatter:function(value)
				{
					var ret = "";//拼接加\n返回的类目项
					var maxLength = 10;//每项显示文字个数
					var valLength = value.length;//X轴类目项的文字个数
					var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
					if (rowN > 1)//如果类目项的文字大于3,
					{
						for (var i = 0; i < rowN; i++) {
							var temp = "";//每次截取的字符串
							var start = i * maxLength;//开始截取的位置
							var end = start + maxLength;//结束截取的位置
							//这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
							temp = value.substring(start, end) + "\n";
							ret += temp; //凭借最终的字符串
						}
						return ret;
					}
					else {
						return value;
					}
				}


			},
			"splitArea": {
				"show": false
			},
			'data': areaNameS,
			splitLine: {
				show: false
			}
		}],
		"yAxis": [
			{
				"type": "value",
				offset: -14,
				"splitLine": {
					"show": false
				},
				"axisLine": {
					"show": false,
					lineStyle: {
						color: '#868c96'
					}
				},
				"axisTick": {
					"show": false
				},
				"axisLabel": {
					"interval": 0,
					fontSize:14

				},
				"splitArea": {
					"show": false
				}
			}],
		
		"series": [
			{
				"name": "Total amount of resources",
				"type": "bar",
				"barGap": "10%",
				itemStyle: {//图形样式
					normal: {
						// "color": '#4a4df0'
						color: function(params) {
							    // build a color map as your need.
							    var colorList = [
							        '#ff2600',
							        '#ffc000',
							        '#00ad4e',
							        '#0073c2',
							        '#165868',
							        '#e76f00',
							        '#316194',
							        '#723761',
							        
							    ];
							    return colorList[params.dataIndex]
							},
						// color: function(params) {
                        //     // 预定义一个颜色数组
                        //     var colorList = ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83', '#ca8622', '#bda29a'];
                        //     // 返回这个数组的一个颜色
                        //     return colorList[params.dataIndex % colorList.length];
                        // }
					}
				},
				label: {
					normal: {
						show: true,
						position: "top",
						textStyle: {
							color: "#ffc72b",
							fontSize: 10
						}
					}
				},
				"data": uploadCnt,
				barWidth: 14,
			},{
			name:'percent',
			type:'line',
			itemStyle : {  /*设置折线颜色*/
				normal : {
				  color:'#c7b198'
				}
			},
			// data:[25.82%, 22.50%, 18.70%, 13.11%, 10.19%, 4.90%, 4.78%],
			// data:uploadCnt,
			
			data: [9.17,
				60.23,
				10.83,
				1.38,
				5.59,
				5.46,
				7.35
				],
			label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: function(params) {
                        // 显示百分比
                        return params.value + '%';
                    },
                    textStyle: {
                        color: "#ffc72b", // 标签文字颜色
                        fontSize: 10      // 标签文字大小
                    }
                }
            },
			
		}
		]
	};

// 使用刚指定的配置项和数据显示图表。
	myChartJava1.setOption(option);
}
//Java占比变化图	Java proportion variation chart
function init_myChartJava2() {
    var myChartJava2 = echarts.init(document.getElementById('mainJava2'));
    var colorList = [
		'#ff2600',
		'#ffc000',
		'#00ad4e',
		'#0073c2',
		'#165868',
		'#e76f00',
		'#316194',
		'#723761',
		'#00b2f1',
		'#4d6022',
		'#4b83bf',
		'#f9c813',
		'#0176c0'
	];
	// var xData = ['公共服务','健康保障','安全生产','价格监督','能源安全','信用体系', '城乡建设', '社区治理', '生态环保','应急维稳'];
	var xData = ['2015','2016','2017','2018','2019','2022','2021', '2022', '2023', '2024'];
	var yData = [15.34,21.14,16.68,14.99,15.88,17.36,11.29,12.13,13.21,13.63];
	option = {
		color:colorList,
		"tooltip": {
				"trigger": "axis",
				transitionDuration: 0,
				backgroundColor: 'rgba(83,93,105,0.8)',
				borderColor: '#535b69',
				borderRadius: 8,
				borderWidth: 2,
				padding: [5, 10],
				// formatter: function (params, ticket, callback) {
				// 	var res = '';
				// 	for (var i = 0, l = params.length; i < l; i++) {
				// 		res += '' + params[i].seriesName + ' : ' + params[i].value + '<br>';
				// 	}
				// 	return res;
				// },
				
	
				formatter: function (params) {
					var res = '';
					// 遍历所有系列
					params.forEach(function (item) {
						// 根据系列名称排除特定系列
						if (item.seriesName !== 'Year of birth') {
							res += item.seriesName + ' : ' + item.value + '<br>';
						}
					});
					return res;
				},
	
	
				axisPointer: {
					type: 'line',
					lineStyle: {
						type: 'dashed',
						color: '#ffff00'
					}
				}
			},
		toolbox: {
			show : true,
			feature : {
				mark : {
					show: true
				},
	
			}
		},
		grid: {
		   "borderWidth": 0,
				"top": '40',
				"left": '30',
				"right": '10',
				"bottom": '40',
				textStyle: {
					color: "#fff"
				}
		},
		xAxis : [
		   {
				'type': 'category',
				"axisTick": {
					"show": false
				},
				"axisLine": {
					"show": false,
					lineStyle: {
						color: '#868c96'
					}
				},
				"axisLabel": {
					"interval": 0,
					fontSize:14,
					formatter:function(value)
					{
						var ret = "";//拼接加\n返回的类目项
						var maxLength = 4;//每项显示文字个数
						var valLength = value.length;//X轴类目项的文字个数
						var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
						if (rowN > 1)//如果类目项的文字大于3,
						{
							for (var i = 0; i < rowN; i++) {
								var temp = "";//每次截取的字符串
								var start = i * maxLength;//开始截取的位置
								var end = start + maxLength;//结束截取的位置
								//这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
								temp = value.substring(start, end) + "\n";
								ret += temp; //凭借最终的字符串
							}
							return ret;
						}
						else {
							return value;
						}
					}
				},
				"splitArea": {
					"show": false
				},
				'data': xData,
				splitLine: {
					show: false
				},
			
			}
		],
		yAxis : [
		  {
					"type": "value",
					offset: -14,
					"splitLine": {
						"show": false
					},
					"axisLine": {
						"show": false,
						lineStyle: {
							color: '#868c96'
						}
					},
					"axisTick": {
						"show": false
					},
					"axisLabel": {
						formatter: '{value} %' ,// Add a space and a percent sign,
						"interval": 0,
						fontSize:14
	
					},
					"splitArea": {
						"show": false
					}
				}
	
		],
		series : [
			{
				name:'Year of birth',
				type:'bar',
				data:yData,
				itemStyle: {
					normal: {
						"color": '#4a4df0'
					}
				},
				 barWidth: 14,
				 label: {
						normal: {
							show: true,
							position: "top",
							textStyle: {
								color: "#ffc72b",
								fontSize: 10
							}
						}
					},
			},
			
	
			{
				name:'percent',
				type:'line',
	
				// 2.88,4.18,4.04,5.17,7.57,9.35,10.86,15.33,15.49,17.31
	
				itemStyle : {  /*设置折线颜色*/
					normal : {
					  color:'#d3d5fd'
					}
				},
				data:yData
			}
		 
		]
	};
	
	
	// 使用刚指定的配置项和数据显示图表。
		myChartJava2.setOption(option);
}


// 页面加载完成后，初始化图表After the page is loaded, initialize the chart
$(document).ready(function () {
    init_myChartC1();
	init_myChartC2();
    init_myChartJava2();
	init_myChartJava1();
});



//获取当前时间Get current time
function getNowFormatDate() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    var Hour =  date.getHours();       // 获取当前小时数(0-23)
    var Minute =  date.getMinutes();     // 获取当前分钟数(0-59)
    var Second = date.getSeconds();     // 获取当前秒数(0-59)
    var show_day=new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');
    var day=date.getDay();
    if (Hour<10) {
        Hour = "0" + Hour;
    }
    if (Minute <10) {
        Minute = "0" + Minute;
    }
    if (Second <10) {
        Second = "0" + Second;
    }
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = '<div><p>'+year + ' /' + month +' /' + strDate+' </p><p>'+show_day[day]+'</p></div>';
    var HMS = Hour + ':' + Minute +':' + Second;
	var temp_time = year+'-'+month+'-'+strDate+' '+HMS;
    $('.nowTime li:nth-child(1)').html(HMS);
    $('.nowTime li:nth-child(2)').html(currentdate);
	//$('.topRec_List li div:nth-child(3)').html(temp_time);
    setTimeout(getNowFormatDate,1000);//每隔1秒重新调用一次该函数
}
var resourceDataType = $('.data-label li.active').data('type');//用于切换基础库
function urlType() {
    resourceDataType = $('.data-label li.active').data('type');
    if (resourceDataType == 1) {
        init_myChart3(legal_person_data);
		$('.com-screen-content .use-data').html(Tpl1);
    } else if (resourceDataType == 2) {
        init_myChart3(people_data);
		$('.com-screen-content .use-data').html(Tpl2);
    } else if (resourceDataType == 3) {
        init_myChart3( picture_data);
		$('.com-screen-content .use-data').html(Tpl3);
    }
}
var num =0 ;
//    资源类型定时器
function resourceType() {
    $('.data-label li').eq(num).addClass('active').siblings().removeClass('active');
    //$('.active-data-label').html($('.canvas-pic-two .data-label li.active').html());
    urlType();
    num++;
    if (num >= 3) {
        num = 0;
    }
}

//    资源类型点击切换
$('.data-label').on('click', 'li', function () {
    $(this).addClass('active').siblings().removeClass('active');
    $('.active-data-label').html($('.data-label li.active').html());
    urlType();
});
var oTimer = setInterval(resourceType, 3000);
//    hover清除定时器
$('.data-label').hover(function () {
    clearInterval(oTimer);
}, function () {
    oTimer = setInterval(resourceType, 3000);
});

/*function resize(){
	window.addEventListener("resize", () => { 
  	this.myChart1.resize;
	this.myChart2.resize;
	this.myChart3.resize;
	this.myChart5.resize;
	this.myChart6.resize;
	this.myChart7.resize;
});
}*/

setInterval(function (){
    window.onresize = function () {
		this.myChart1.resize;
		this.myChart2.resize;
		this.myChart3.resize;
		this.myChart5.resize;
		this.myChart6.resize;
		this.myChart7.resize;
    }
},200)

//myChart7.resize();

var myChart = echarts.init(document.getElementById('main'));
var option = {
    legend: {
        orient: 'vertical',
        x: 'left',
        data: [{
            name: '0-1个月',
            icon: 'circle',
        },{
            name: '0-2个月',
            icon: 'circle',
        },{
            name: '0-3个月',
            icon: 'circle',
        }],
    },

    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['40%', '55%'],
            data:[
                {value:335, name:'0-1个月',itemStyle:{
                    normal:{color:'#2fd297'}
                }},
                {value:310, name:'0-2个月',itemStyle:{
                    normal:{color:'#25ad7c'}
                }},
                {value:234, name:'0-3个月',itemStyle:{
                    normal:{color:'#61dfb1'}
                }},
            ]
        }
    ]
};
myChart.setOption(option);

var index = echarts.init(document.getElementById('index'));
var opt = {
    legend: {
        orient: 'vertical',
        x: 'left',
        data: [{
            name: '10万以上',
            icon: 'circle',
        },{
            name: '11万以上',
            icon: 'circle',
        },{
            name: '12万以上',
            icon: 'circle',
        }],
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['40%', '55%'],
            data:[
                {value:335, name:'10万以上',itemStyle:{
                    normal:{color:'#2fd297'}
                }},
                {value:310, name:'11万以上',itemStyle:{
                    normal:{color:'#25ad7c'}
                }},
                {value:234, name:'12万以上',itemStyle:{
                    normal:{color:'#61dfb1'}
                }},
            ]
        }
    ]
};


index.setOption(opt);



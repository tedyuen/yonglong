yonglongApp.value('diyData',
  {
    uapply: [{name: '审核通过', id: '0'}, {name: '未审核', id: '1'}],
    ufriend: [{name: '进口', id: '0'}, {name: '出口', id: '1'}],
    orderType: [{name: '进口', id: 0}, {name: '出口', id: 1}, {name: '拖柜进洋山', id: 2}],
    boxType: [{name: 'GP', id: 0, v: 'GP'}
      , {name: 'HC', id: 1, v: 'HC'}, {name: 'OT(开顶箱)', id: 2, v: 'OT'}, {
        name: 'HT(挂衣箱)',
        id: 3, v: 'HT'
      }, {name: 'RF(冷冻箱)', id: 4, v: 'RF'}, {name: 'RH（冷冻高箱）', id: 5, v: 'RH'}, {
        name: 'TK（油罐箱）',
        id: 6,
        v: 'TK'
      }, {
        name: 'FR（框架箱）',
        id: 7, v: 'FR'
      }
    ],
    boxTypeN: [{name: '不限', id: -1, v: '不限'},{name: 'GP', id: 0, v: 'GP'}
      , {name: 'HC', id: 1, v: 'HC'}, {name: 'OT(开顶箱)', id: 2, v: 'OT'}, {
        name: 'HT(挂衣箱)',
        id: 3, v: 'HT'
      }, {name: 'RF(冷冻箱)', id: 4, v: 'RF'}, {name: 'RH（冷冻高箱）', id: 5, v: 'RH'}, {
        name: 'TK（油罐箱）',
        id: 6,
        v: 'TK'
      }, {
        name: 'FR（框架箱）',
        id: 7, v: 'FR'
      }
    ],
    //boxVol: [{name: '20', id: '0'}, {name: '40', id: '1'}, {name: '45', id: '2'}]
    boxVolReg: [{name: '20', id: 20, show: '短板车'}, {name: '40', id: 40, show: '12.6米'}, {name: '45', id: 45, show: '12.6米'}],
    boxVol: [{name: '20', id: 0, show: '短板车'}, {name: '40', id: 1, show: '12.6米'}, {name: '45', id: 2, show: '12.6米'}],
    boxVolN: [{name: '不限', id: -1, show: '不限'},{name: '20', id: 0, show: '短板车'}, {name: '40', id: 1, show: '12.6米'},{name: '45', id: 2, show: '12.6米'}],
    orderTypeN: [{name: '不限', id: -1},{name: '进口', id: 0}, {name: '出口', id: 1}, {name: '拖柜进洋山', id: 2}],
    reportTypeN1:[{name:'车主',id:0},{name:'车队',id:1}],
    reportTypeN2:[{name:'外发订单',id:0},{name:'外接订单',id:1}],
    temperatureUnit:[{name:'C摄氏',id:'C'},{name:'F华氏',id:'F'}],
    prerecordType:[{name:'4--空箱',id:'4'},{name:'7--拼箱',id:'7'},{name:'8--整箱',id:'8'}],
    packaddressType:[{name:'SN--市内',id:'SN'},{name:'SW--市外',id:'SW'},{name:'QT--其他',id:'QT'}],
    passengerlinerType:[{name:'Y-班轮',id:'Y'},{name:'N-非班轮',id:'N'},{name:'H-核心班轮',id:'H'}],
    impexpsignType:[{name:'E-出口',id:'E'},{name:'I-进口',id:'I'}],
    calltypeType:[{name:'M--机械封志',id:'M'},{name:'E--电子封志',id:'E'}],
    callmanType:[{name:'AA--拼箱人',id:'AA'},{name:'AB--未知',id:'AB'},{name:'AC--检疫',id:'AC'},
      {name:'CA--承运人',id:'CA'},{name:'CU--海关',id:'CU'},{name:'SH--发货人',id:'SH'},
      {name:'TO--码头',id:'TO'}],
    shiptypeType:[{name:'无',id:'无'},{name:'1--海铁联运',id:'1'},{name:'2--公路直通',id:'2'},{name:'3--内贸',id:'3'}],
    marinepollutionType:[{name:'Y-有污染',id:'Y'},{name:'N-无污染',id:'N'}],
    sizetypeData:
      [
        ['22G1','42G1','L2G1'],
        ['25G1','45G1','L5G1'],
        ['22U1','42U1','L2U1'],
        ['22V1','42V1','L2V1'],
        ['22R1','42R1','L2R1'],
        ['25R1','45R1','L5R1'],
        ['22T1','42T1','L2T1'],
        ['22P1','42P1','L2P1'],
      ]
  }
);

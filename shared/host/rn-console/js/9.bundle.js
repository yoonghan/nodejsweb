(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{247:function(e,t,a){"use strict";var n,r=a(0),i=a(23),l=a(263),s=a.n(l),c=a(264),o=a.n(c),d=a(257),m=a.n(d),u=a(358),h=a.n(u),p=a(253),y=a(285),g=a.n(y),E=a(318),C=a.n(E),S=a(299),b=a.n(S),v=a(357),R=a.n(v),w=a(24),k=a.n(w);!function(e){e[e.NONE=0]="NONE",e[e.CHECKBOX=1]="CHECKBOX",e[e.RADIO=2]="RADIO"}(n||(n={}));var O=a(5);var P=Object(O.withStyles)(e=>Object(O.createStyles)({root:{},chkStyle:{paddingBottom:0}}))(({rows:e,onRequestSort:t,selectType:a,numSelected:i,rowCount:l,onSelectAllClick:s,order:c,orderBy:o,classes:d})=>{function u(e){return function(a){t(a,e)}}const h=c||"desc";return r.createElement(b.a,null,r.createElement(p.a,null,function(){switch(a){case n.CHECKBOX:return r.createElement(m.a,{padding:"none"},r.createElement(g.a,{indeterminate:i>0&&i<l,checked:i===l,onChange:s,className:d.chkStyle}),r.createElement(k.a,{variant:"caption",align:"center"},"(",i,")"));case n.RADIO:return r.createElement(m.a,{padding:"none"})}}(),e.map(e=>r.createElement(m.a,{key:e.uniqueDataKey,numeric:e.numeric,sortDirection:o===e.uniqueDataKey&&c},r.createElement(R.a,{active:o===e.uniqueDataKey,direction:h,onClick:u(e.uniqueDataKey)},e.label)),void 0)))});function D(e,t,a){return t[a]<e[a]?1:t[a]>e[a]?-1:0}var f=function(e,t,a){const n=e.map((e,t)=>({data:e,index:t})),r=function(e,t){return"desc"===e?(e,a)=>D(e,a,t):(e,a)=>-D(e,a,t)}(t,a);return n.sort((e,t)=>{const a=r(e.data,t.data);return 0!==a?a:e.index-t.index}),n.map(e=>e.data)};a.d(t,"a",function(){return A});const x=[5,10,20,50],A=n;t.b=Object(O.withStyles)(e=>Object(O.createStyles)({root:{overflow:"auto"},clickableRow:{cursor:"pointer"},clickableCell:{color:e.palette.primary.main}}))(class extends r.PureComponent{constructor(e){super(e),this.handleRequestSort=(e,t)=>{const a=t;let n="desc";this.state.orderBy===t&&"desc"===this.state.order&&(n="asc"),this.setState(Object(i.a)(e=>{e.order=n,e.orderBy=a}))},this.handleChangePage=(e,t)=>{this.setState(Object(i.a)(e=>{e.page=t}))},this.handleChangeRowsPerPage=e=>{const t=Number(e.target.value);this.setState(Object(i.a)(e=>{e.rowsPerPage=t}))},this._sliceData=e=>{const{withPagination:t}=this.props,{rowsPerPage:a,page:n}=this.state;return t?e.slice(n*a,n*a+a):e},this._renderPagination=()=>{const{data:e,withPagination:t}=this.props,{rowsPerPage:a,page:n}=this.state;return t?r.createElement(h.a,{rowsPerPageOptions:x,component:"div",count:e.length,rowsPerPage:a,page:n,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onChangePage:this.handleChangePage,onChangeRowsPerPage:this.handleChangeRowsPerPage}):null},this._updateCheckBoxValue=e=>{const{callbackForSelectedCheckboxValues:t}=this.props;this.setState(Object(i.a)(a=>{a.selectedCheckbox=e,t&&t(a.selectedCheckbox)}))},this._handleSelectAllClick=e=>{e.target.checked?this._updateCheckBoxValue(this.props.data.map(e=>`${e.id}`)):this._updateCheckBoxValue([])},this._handleRadioChange=e=>{const{callbackForSelectedRadioValues:t}=this.props;this.setState(Object(i.a)(a=>{a.selectedRadio=e,t&&t(e)}))},this._handleCheckChange=e=>{const{selectedCheckbox:t}=this.state,a=t.indexOf(e);let n=[];-1===a?n=n.concat(t,e):0===a?n=n.concat(t.slice(1)):a===t.length-1?n=n.concat(t.slice(0,-1)):a>0&&(n=n.concat(t.slice(0,a),t.slice(a+1))),this._updateCheckBoxValue(n)},this._handleRowClick=e=>t=>{const{withSelection:a,callbackForClickableRow:r}=this.props,l=`${e}`;switch(a){case n.CHECKBOX:this._handleCheckChange(l);break;case n.RADIO:this._handleRadioChange(l)}r&&this.setState(Object(i.a)(e=>{e.singleSelectedRow=l,r(l)}))},this._renderSelectBox=(e,t)=>{const{selectedRadio:a,selectedCheckbox:i}=this.state,l=`${e}`,s=-1!==i.indexOf(l);switch(t){case n.CHECKBOX:return r.createElement(m.a,{padding:"none"},r.createElement(g.a,{value:l,checked:s,name:name,color:"primary","aria-label":l}));case n.RADIO:return r.createElement(m.a,{padding:"none"},r.createElement(C.a,{checked:a===l,value:l,name:name,color:"primary","aria-label":l}))}},this._decorateCell=()=>{const{callbackForClickableRow:e,classes:t}=this.props;return{r:e?{hover:t.clickableRow}:{},c:e?{body:t.clickableCell}:{}}},this._selectedRow=e=>{const{callbackForClickableRow:t}=this.props,{singleSelectedRow:a}=this.state;return!(!t||""===a||a!=e)},this.state={order:!1,orderBy:"",page:0,rowsPerPage:this.props.defaultRowsPerPage||5,selectedRadio:"",selectedCheckbox:[],singleSelectedRow:""}}render(){const{data:e,header:t,withPagination:a,withSelection:n,classes:i}=this.props,{selectedCheckbox:l,order:c,orderBy:d,rowsPerPage:u,page:h}=this.state;return r.createElement("div",null,r.createElement("div",{className:i.root},r.createElement(s.a,{"aria-labelledby":"tableTitle"},r.createElement(P,{rows:t,onRequestSort:this.handleRequestSort,order:c,orderBy:d,selectType:n,onSelectAllClick:this._handleSelectAllClick,numSelected:l.length,rowCount:e.length}),r.createElement(o.a,null,this._sliceData(f(e,c,d)).map(e=>r.createElement(p.a,{hover:!0,selected:this._selectedRow(e.id),tabIndex:-1,key:e.id,onClick:this._handleRowClick(e.id),materialUiTableRowClass:this._decorateCell().r},this._renderSelectBox(e.id,n),t.map((t,a)=>r.createElement(m.a,{key:`${t.uniqueDataKey}_${e.id}`,numeric:t.numeric,classes:this._decorateCell().c},e[t.uniqueDataKey]))))))),this._renderPagination())}})},253:function(e,t,a){"use strict";var n=a(0),r=a(19),i=a(298),l=a.n(i),s=a(5);t.a=Object(s.withStyles)(e=>Object(s.createStyles)({nopadding:{height:"unset"}}))(({classes:e,children:t,selected:a,hover:i,tabIndex:s,onClick:c,materialUiTableRowClass:o})=>{return n.createElement(r.a,null,r=>(function(r){return n.createElement(l.a,{classes:o,className:r?e.nopadding:"",selected:a,hover:i,tabIndex:s,onClick:c},t)})(r.isCompact))})},270:function(e,t,a){"use strict";var n=a(0),r=a(21),i=a(5),l=a(280),s=a.n(l),c=a(24),o=a.n(c),d=a(260),m=a.n(d),u=a(245);const h=Object(r.d)(u.a,Object(i.withStyles)(e=>Object(i.createStyles)({root:{position:"relative",width:"100%",padding:2*e.spacing.unit},closeBtn:{position:"absolute",width:"100%",textAlign:"right",cursor:"pointer",padding:2*e.spacing.unit,left:0,top:"5px"},divider:{marginTop:"5px"}})));t.a=h(({title:e,canClose:t,history:a,classes:r})=>{return n.createElement("div",{className:r.root},n.createElement(o.a,{variant:"h5",component:"h5"},e),t&&n.createElement("div",{className:r.closeBtn},n.createElement(s.a,{onClick:function(){a.length>1&&a.goBack()}})),n.createElement(m.a,{className:r.divider}))})},278:function(e,t,a){"use strict";var n=a(0),r=a(23),i=a(314),l=a.n(i),s=a(271),c=a.n(s),o=a(248),d=a.n(o);t.a=class extends n.Component{constructor(e){super(e),this._handleClick=e=>{const t=e.currentTarget;this.setState(Object(r.a)(e=>{e.anchorEl=t}))},this._handleClose=e=>()=>{this.setState(Object(r.a)(t=>{t.anchorEl=null,null!=e&&e()}))},this.state={anchorEl:null}}render(){const{anchorEl:e}=this.state,{id:t,btnLabel:a,options:r}=this.props;return n.createElement(n.Fragment,null,n.createElement(d.a,{variant:"contained",onClick:this._handleClick,id:t},a),n.createElement(l.a,{id:t,anchorEl:e,open:Boolean(e),onClose:this._handleClose(null),PaperProps:{style:{maxHeight:300,width:200,marginLeft:"20px"}}},r.map((e,t)=>n.createElement(c.a,{key:`${e.label}_${t}`,onClick:this._handleClose(e.handleClick)},e.label))))}}},287:function(e,t,a){"use strict";var n=a(0),r=a(5),i=a(63),l=a.n(i),s=a(272),c=a.n(s),o=a(248),d=a.n(o),m=a(319),u=a.n(m);t.a=Object(r.withStyles)(e=>Object(r.createStyles)({root:{marginLeft:e.spacing.unit}}))(({callbackForSearchTextChanged:e,handleSearchClick:t,displaySearchText:a,id:r,classes:i})=>{return n.createElement(c.a,{className:i.root,id:r,label:a,variant:"outlined",onChange:function(t){const a=t.target.value;e(a)},InputProps:{startAdornment:n.createElement(u.a,{position:"start"},n.createElement(l.a,null)),endAdornment:n.createElement(u.a,{position:"end"},n.createElement(d.a,{variant:"contained",color:"primary",onClick:t},"Search"))}})})},721:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(23),i=a(265),l=a.n(i),s=a(248),c=a.n(s),o=a(107),d=a.n(o),m=a(24),u=a.n(m),h=a(273),p=a.n(h),y=a(284),g=a.n(y),E=a(293),C=a.n(E),S=a(279),b=a.n(S),v=a(286),R=a.n(v),w=a(300),k=a.n(w),O=a(5),P=a(247),D=a(287),f=a(278),x=a(270),A=a(260),_=a.n(A),M=a(263),N=a.n(M),j=a(264),T=a.n(j),B=a(257),K=a.n(B),I=a(253);const H={Event:{ComponentType:"Memory",ConditionValue:"Warn",eventAttributes:1,Message:"Observed Attribute: Memory Utilization, Threshold: 90.0, Average Value: 91.409, since Mon Dec 17 12:18:53 SGT 2018",UserData:{Map:{MapEntry:[{MapEntryKey:{string:"Trigger"},MapEntryValue:{double:91.4}},{MapEntryKey:{string:"Observed metric"},MapEntryValue:{string:"Memory Utilization"}},{MapEntryKey:{string:"MonitorID"},MapEntryValue:{string:"WinMemoryUtil"}},{MapEntryKey:{string:"Threshold"},MapEntryValue:{double:90}}]}},Severity:10,OriginatingMO:{deviceType:17,agentID:"Store01-LAPTOP-QM1C0GQP",systemID:"ma-LAPTOP-QM1C0GQP.10150",agentType:1,mgmtPort:10150,agentVersion:22,storeID:"Store01",IPAddress:"192.168.169.1",deviceID:"LAPTOP-QM1C0GQP"},TimeStamp:1545020333424,Array:{numRecs:5,Qualifier:["Retail","Monitor","Memory","Utilization","Warn"],type:"Qualifier"},EventFamily:"",EventSender:"",ConditionType:"Utilization",CompCategoryArray:{numRecs:2,ComponentCategories:["Retail","Monitor"],type:"ComponentCategories"}}};var L=Object(O.withStyles)(e=>Object(O.createStyles)({root:Object.assign({marginTop:2*e.spacing.unit},e.mixins.gutters())}))(({classes:e})=>{const t=H;return n.createElement(d.a,{className:e.root},n.createElement(u.a,{variant:"subtitle1"},"Detail"),n.createElement(_.a,null),n.createElement(N.a,null,n.createElement(T.a,null,n.createElement(I.a,null,n.createElement(K.a,null,"System"),n.createElement(K.a,null,t.Event.OriginatingMO.systemID)),n.createElement(I.a,null,n.createElement(K.a,null,"Component"),n.createElement(K.a,null,t.Event.ComponentType)),n.createElement(I.a,null,n.createElement(K.a,null,"Condition Type"),n.createElement(K.a,null,t.Event.ConditionType)),n.createElement(I.a,null,n.createElement(K.a,null,"Condition Qualifier"),n.createElement(K.a,null,t.Event.Array.Qualifier.map(e=>`${e}, `))),n.createElement(I.a,null,n.createElement(K.a,null,"Details"),n.createElement(K.a,null,t.Event.Message)),n.createElement(I.a,null,n.createElement(K.a,null,"Event Source"),n.createElement(K.a,null,t.Event.OriginatingMO.IPAddress)),n.createElement(I.a,null,n.createElement(K.a,null,"Event Category"),n.createElement(K.a,null,"Alert")),n.createElement(I.a,null,n.createElement(K.a,null,"Event Sender Name"),n.createElement(K.a,null,t.Event.OriginatingMO.agentID)),function(e){return e.map(e=>n.createElement(I.a,null,n.createElement(K.a,null,e.MapEntryKey.string),n.createElement(K.a,null,e.MapEntryValue.string||e.MapEntryValue.double)))}(t.Event.UserData.Map.MapEntry))))});function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const W=({classes:e,setShowDisplayError:t,callbackForRowClick:a})=>{return n.createElement(l.a,{container:!0},n.createElement(x.a,{title:"System Warning",canClose:!0}),n.createElement(l.a,{item:!0,xs:12,className:e.root},n.createElement(d.a,{className:e.paper},n.createElement(u.a,{variant:"body2"},"View the active status reported for all discovered system."),n.createElement("div",{className:e.buttonContainer},n.createElement(f.a,{id:"actions",btnLabel:"Actions...",options:[{label:"Delete",handleClick:()=>{}},{label:"Ignore",handleClick:()=>{}}]}),n.createElement(c.a,{variant:"contained",color:"primary",onClick:t(!0)},"Refresh"),n.createElement(c.a,{variant:"contained",color:"primary",onClick:()=>alert("Download as CSV")},n.createElement(k.a,{fontSize:"small"})),n.createElement(D.a,{callbackForSearchTextChanged:()=>{},handleSearchClick:()=>{},displaySearchText:"Filter..."})),n.createElement("div",null,n.createElement(P.b,{data:[{id:0,name:"System Restart",severity:"Warning",system:"BOSS",component:"BOSS",category:"Hardware Status",timeReceived:"Dec 10, 2018 12:12",details:"System Restarted."},{id:1,name:"System Restart",severity:"Warning",system:"LANE",component:"192.168.169.1",category:"Hardware Status",timeReceived:"Dec 10, 2018 12:12",details:"System Restarted."},{id:2,name:"System Restart",severity:"Warning",system:"LANE",component:"192.168.169.1",category:"Hardware Status",timeReceived:"Dec 11, 2018 12:12",details:"System Restarted."},{id:3,name:"System Restart",severity:"Warning",system:"LANE",component:"192.168.169.1",category:"Hardware Status",timeReceived:"Dec 12, 2018 12:12",details:"System Restarted."},{id:4,name:"System Restart",severity:"Warning",system:"LANE",component:"192.168.169.1",category:"Hardware Status",timeReceived:"Dec 13, 2018 12:12",details:"System Restarted."},{id:5,name:"System Restart",severity:"Warning",system:"LANE",component:"192.168.169.1",category:"Hardware Status",timeReceived:"Dec 14, 2018 12:12",details:"System Restarted."},{id:6,name:"System Restart",severity:"Warning",system:"LANE",component:"192.168.169.1",category:"Hardware Status",timeReceived:"Dec 15, 2018 12:12",details:"System Restarted."},{id:7,name:"System Restart",severity:"Warning",system:"LANE",component:"192.168.169.1",category:"Hardware Status",timeReceived:"Dec 16, 2018 12:12",details:"System Restarted."},{id:8,name:"System Restart",severity:"Warning",system:"LANE",component:"192.168.169.1",category:"Hardware Status",timeReceived:"Dec 17, 2018 12:12",details:"System Restarted."},{id:9,name:"System Restart",severity:"Warning",system:"LANE",component:"192.168.169.1",category:"Hardware Status",timeReceived:"Dec 18, 2018 12:12",details:"System Restarted."},{id:10,name:"System Restart",severity:"Warning",system:"LANE",component:"192.168.169.1",category:"Hardware Status",timeReceived:"Dec 19, 2018 12:12",details:"System Restarted."},{id:11,name:"System Restart",severity:"Warning",system:"LANE",component:"192.168.169.1",category:"Hardware Status",timeReceived:"Dec 20, 2018 12:12",details:"System Restarted."},{id:12,name:"System Restart",severity:"Warning",system:"LANE",component:"192.168.169.1",category:"Hardware Status",timeReceived:"Dec 21, 2018 12:12",details:"System Restarted."},{id:13,name:"System Restart",severity:"Warning",system:"LANE",component:"192.168.169.1",category:"Hardware Status",timeReceived:"Dec 22, 2018 12:12",details:"System Restarted."}],header:[{uniqueDataKey:"name",numeric:!1,label:"Name"},{uniqueDataKey:"severity",numeric:!1,label:"Severity"},{uniqueDataKey:"system",numeric:!1,label:"System"},{uniqueDataKey:"component",numeric:!1,label:"Component"},{uniqueDataKey:"category",numeric:!1,label:"Category"},{uniqueDataKey:"timeReceived",numeric:!1,label:"Time Received"},{uniqueDataKey:"details",numeric:!1,label:"Details"}],defaultRowsPerPage:5,withPagination:!0,withSelection:P.a.CHECKBOX,callbackForClickableRow:a})))))};var V=Object(O.withStyles)(e=>Object(O.createStyles)({root:Object.assign({},e.mixins.gutters()),paper:Object.assign({},e.mixins.gutters(),{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit}),buttonContainer:{paddingTop:8*e.spacing.unit,paddingBottom:3*e.spacing.unit,display:"flex",alignItems:"center","& > button":{marginRight:e.spacing.unit}}}))(class extends n.PureComponent{constructor(e){super(e),this._displayError=e=>()=>{this.setState(Object(r.a)(t=>{t.dialogOpen=e}))},this._handleClose=()=>{this.setState(Object(r.a)(e=>{e.dialogOpen=!1}))},this._detailClick=e=>{this.setState(Object(r.a)(e=>{e.showDetail=!0}))},this.state={dialogOpen:!1,showDetail:!1}}render(){const{classes:e}=this.props,{showDetail:t}=this.state;return n.createElement(n.Fragment,null,n.createElement(W,q({},this.props,{setShowDisplayError:this._displayError,callbackForRowClick:this._detailClick})),t&&n.createElement(L,null),n.createElement(p.a,{open:this.state.dialogOpen,onClose:this._handleClose,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},n.createElement(b.a,{id:"alert-dialog-title"},"Selection error"),n.createElement(g.a,null,n.createElement(C.a,{id:"alert-dialog-description"},"You are required to select records before starting an action.")),n.createElement(R.a,null,n.createElement(c.a,{onClick:this._handleClose,color:"primary"},"Close"))))}});t.default=()=>n.createElement(V,null)}}]);
//# sourceMappingURL=9.bundle.js.map
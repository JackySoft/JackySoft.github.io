(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22c887"],{f447:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("wrapper",[a("search-form",{staticClass:"search-box",attrs:{json:e.form,model:e.queryForm},on:{"update:model":function(t){e.queryForm=t},handleQuery:e.getTableList}}),a("div",{staticClass:"table-box"},[a("rocket-table",{attrs:{json:e.tableJson},on:{"update:json":function(t){e.tableJson=t},handleChange:e.getTableList,handleAction:e.handleAction},scopedSlots:e._u([{key:"action",fn:function(){return[a("el-button",{attrs:{type:"primary"},on:{click:e.openModal}},[e._v("打开")])]},proxy:!0}])})],1),a("el-drawer",{attrs:{title:"我是标题",size:"60%",visible:e.showModal,"with-header":!1},on:{"update:visible":function(t){e.showModal=t},close:e.handleClose}},[a("div",{staticClass:"p20"},[a("rocket-form",{ref:"dialogForm",attrs:{json:e.dialogConfig},on:{handleSubmit:e.handleSubmit,handleClose:e.handleClose},model:{value:e.dialogForm,callback:function(t){e.dialogForm=t},expression:"dialogForm"}})],1)])],1)},o=[],r=a("1da1"),s=a("5530"),n=(a("96cf"),{name:"drawer-power",title:"抽屉表单",data:function(){return{queryForm:{register_date:["2023-09-01","2023-09-14"]},form:[{type:"select",model:"order_status",label:"用户状态",options:[{label:"全部",value:0},{label:"已注销",value:1},{label:"老用户",value:2},{label:"新用户",value:3}]},{type:"daterange",model:"register_date",label:"注册日期"},{type:"text",label:"用户名称",placeholder:"请输入用户名称",model:"cname"}],tableJson:{columns:[{prop:"uid",label:"用户ID",width:80},{prop:"cname",label:"用户名称",width:70},{prop:"user_img",label:"头像",width:240},{prop:"use_status",label:"当前状态",width:70,formatter:function(e){return{1:"在线",2:"离线"}[e.use_status]}},{prop:"user_email",label:"邮箱",width:120},{prop:"user_status_name",label:"用户状态",width:80,type:"badge",badge:{id:"user_status",state:{1:"warning",2:"primary",3:"danger"}}},{prop:"intrest_name",label:"兴趣"},{prop:"register_date",label:"注册时间"},{prop:"",label:"操作",width:"150px",type:"action",list:[{prop:"status",val:{2:"启用",1:{text:"禁用",color:"danger"}},permission:!0},{text:"编辑",permission:!0},{text:"删除",color:"danger",permission:!0}]}],data:[],pagination:{pageNum:1,pageSize:10,total:0}},showModal:!1,dialogForm:{intrest:[]},dialogConfig:{title:"创建用户",width:"800px",showFooter:!0,formList:[{type:"query",label:"用户ID",model:"uid"},{type:"text",label:"用户名称",placeholder:"请输入用户名称",model:"cname",maxlength:"10",showWordLimit:!0,rules:[{required:!0,message:"请输入用户名称",trigger:["change","blur"]},{pattern:/^[a-zA-Z0-9_\u4e00-\u9fa5]{1,10}$/,message:"1-10个字符，支持中文、字母、数字和下划线",trigger:["change","blur"]}]},{type:"select",label:"用户状态",placeholder:"请选择用户状态",model:"user_status",options:[{label:"已注销",value:1},{label:"老用户",value:2},{label:"新用户",value:3}]},{type:"text",label:"用户邮箱",placeholder:"请输入用户邮箱",model:"user_email",append:".com"},{type:"radio",label:"使用状态",placeholder:"请选择使用状态",model:"use_status",options:[{label:"在线",value:1},{label:"离线",value:2}]},{type:"switch",label:"启用状态",model:"status"},{type:"date",label:"注册日期",model:"register_date",shortcuts:!0},{type:"daterange",label:"日期范围",model:"register_date_range",shortcuts:!0},{type:"datetime",label:"注册时间",model:"register_datetime",shortcuts:!0},{type:"datetimerange",label:"时间范围",model:"register_datetime_range",shortcuts:!0},{type:"checkbox",label:"兴趣",model:"intrest",options:[{label:"游泳",value:1},{label:"打乒乓球",value:2},{label:"台球",value:3},{label:"篮球",value:4}]},{type:"textarea",label:"用户描述",placeholder:"请输入用户描述",model:"remark",rows:4}]}}},mounted:function(){this.getTableList()},methods:{getTableList:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.tableJson.pagination.pageNum=t;var a=Object(s["a"])(Object(s["a"])({},this.queryForm),this.tableJson.pagination);this.$api.getBasicList(a).then((function(t){e.tableJson.data=t.list,e.tableJson.pagination.total=t.total}))},handleAction:function(e){var t=e.index,a=e.row;1===t&&(this.showModal=!0,this.dialogForm=Object(s["a"])(Object(s["a"])({},a),{},{intrest:[]}))},openModal:function(){this.showModal=!0},handleSubmit:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$request.get("/user/submit",e.dialogForm);case 2:a=t.sent,a&&(e.$message.success("操作成功"),e.showModal=!1);case 4:case"end":return t.stop()}}),t)})))()},handleClose:function(){this.showModal=!1,this.$refs.dialogForm.handleReset()}}}),i=n,d=a("2877"),u=Object(d["a"])(i,l,o,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d22c887.d07e00e8.js.map
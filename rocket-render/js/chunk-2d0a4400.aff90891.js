(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a4400"],{"0648":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("wrapper",[a("search-box",[a("search-form",{attrs:{json:e.form,model:e.queryForm},on:{"update:model":function(t){e.queryForm=t},handleQuery:e.getTableList}})],1),a("rocket-table",{attrs:{loading:e.showLoading,column:e.mainColumn,data:e.mainData,pagination:e.pagination,"span-method":e.span.callback,"show-summary":"","summary-method":e.getSummaries},on:{"update:loading":function(t){e.showLoading=t},"update:column":function(t){e.mainColumn=t},"update:pagination":function(t){e.pagination=t},handleChange:e.getTableList,handleAction:e.handleAction,handleCellClick:e.handleCellClick,"selection-change":e.handleSelectionChange},scopedSlots:e._u([{key:"copy",fn:function(t){return[a("el-button",{attrs:{type:"text",icon:"el-icon-document-copy"},on:{click:function(a){return e.handleCopy(t.row)}}},[e._v(e._s(t.row.uid))])]}}])})],1)},o=[],l=a("5530"),i=(a("d81d"),{name:"HighTable",data:function(){return{showLoading:!1,queryForm:{user_name:"jack",register_date:"2020-11-20",match:1,use_status:1},form:[{type:"text",model:"user_name",label:"用户",placeholder:"请输入用户名称"},{type:"radio",label:"使用状态",placeholder:"请选择使用状态",model:"use_status",options:[{label:"在线",value:1},{label:"离线",value:2}]},{type:"date",model:"register_date",label:"注册日期",shortcuts:!0,width:"150px"},{type:"switch",model:"isCheck",label:"是否校验"}],mainColumn:[{prop:"selection",type:"selection",label:"选框"},{prop:"index",type:"slot",label:"自定义列",sortable:!0,slotName:"copy"},{prop:"uid",label:"用户ID",align:"center",type:"click",sortable:!0,tips:"测试一下"},{prop:"user-info",label:"用户信息",align:"center",span:[{prop:"cname",label:"用户名称",align:"left"},{prop:"user_img_list",label:"头像",showOverflowTooltip:!1,type:"image",image:{type:"list",width:60,height:40}}]},{prop:"site_url",label:"网址",type:"url",showOverflowTooltip:!1},{prop:"use_status",label:"当前状态",formatter:function(e){return{1:"在线",2:"离线"}[e.use_status]}},{prop:"user_link",label:"产品列表",width:150,type:"link",showOverflowTooltip:!1,empty:"00",link:{prop:"name",limit:3}},{prop:"user_status_name",label:"用户状态"},{prop:"intrest_name",label:"兴趣"},{prop:"register_date",label:"注册时间"}],mainData:[],pagination:{pageNum:1,pageSize:20,total:0},span:{callback:function(e){e.row,e.column;var t=e.rowIndex,a=e.columnIndex;if(a<3)return t%2===0?{rowspan:2,colspan:1}:{rowspan:0,colspan:0}}}}},mounted:function(){this.getTableList()},methods:{getTableList:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.showLoading=!0,this.pagination.page=t;var a=Object(l["a"])(Object(l["a"])({},this.queryForm),this.pagination);this.$api.getBasicList(a).then((function(t){e.mainData=t.list,e.showLoading=!1,e.pagination.total=t.total}))},getSummaries:function(e){var t=["","总价","20","Jack","头像","ali.com","在线","集碎片","老用户","游戏","2020-12-23"];return t},handleCellClick:function(e){var t=e.row;this.$message.success("单元格点击，值为："+t.uid)},handleSelectionChange:function(e){this.$message.success("勾选项id为"+e.map((function(e){return e.id})))},handleAction:function(e){var t=e.index,a=e.row;0===t?this.$message.success("你选择了第一个按钮"):1===t?this.$message.success("你选择了第二个按钮"):this.$message.success("你选择了第三个按钮"),console.log(a)},handleExport:function(){var e="/basic/export",t=this.query;this.$utils.handleExport(e,t)},handleCopy:function(e){var t=document.createElement("input");t.style="position:absolute;left:0;bottom:0;opacity:0;",document.body.append(t),t.value=e.uid,t.select(),document.execCommand("copy"),this.$message.success("复制成功"),setTimeout((function(){document.body.removeChild(t)}),50)}}}),s=i,r=a("2877"),c=Object(r["a"])(s,n,o,!1,null,null,null);t["default"]=c.exports}}]);
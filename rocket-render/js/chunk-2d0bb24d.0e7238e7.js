(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bb24d"],{"39e6":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("wrapper",[a("search-form",{attrs:{json:e.form,model:e.queryParams},on:{"update:model":function(t){e.queryParams=t},handleQuery:e.getTableList}}),a("div",{staticClass:"table-box"},[a("rocket-table",{attrs:{loading:e.showLoading,column:e.mainColumn,data:e.mainData,border:"",pagination:e.pagination},on:{"update:column":function(t){e.mainColumn=t},"update:pagination":function(t){e.pagination=t},handleChange:e.getTableList,handleAction:e.handleAction},scopedSlots:e._u([{key:"action",fn:function(){return[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.showModal1=!0}}},[e._v("动态创建一")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.showModal2=!0}}},[e._v("动态创建二")])]},proxy:!0}])})],1),a("el-dialog",{attrs:{title:"用户信息",visible:e.showModal1,width:"70%"},on:{"update:visible":function(t){e.showModal1=t},close:function(t){return e.handleClose("dialogForm1")}}},[a("rocket-form",{ref:"dialogForm1",attrs:{json:e.dialogConfig1},on:{handleClose:function(t){return e.handleClose("dialogForm1")},handleSubmit:e.handleSubmit},model:{value:e.userInfo1,callback:function(t){e.userInfo1=t},expression:"userInfo1"}})],1),a("el-dialog",{attrs:{title:"用户信息",visible:e.showModal2,width:"68%"},on:{"update:visible":function(t){e.showModal2=t},close:function(t){return e.handleClose("dialogForm2")}}},[a("rocket-form",{ref:"dialogForm2",attrs:{json:e.dialogConfig2},model:{value:e.userInfo2,callback:function(t){e.userInfo2=t},expression:"userInfo2"}}),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){return e.handleClose("dialogForm2")}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.handleSubmit2}},[e._v("确 定")])],1)],1)],1)},o=[],s=a("1da1"),i=a("5530"),n=(a("96cf"),{name:"dialog-power",title:"弹框表单2",data:function(){return{showLoading:!1,queryParams:{time_part_start:"",time_part_end:""},form:[{type:"select",model:"order_status",label:"用户状态",options:[{label:"全部",value:0},{label:"已注销",value:1},{label:"老用户",value:2},{label:"新用户",value:3}]},{type:"time-select",label:"注册时段",gutter:10,items:[{model:"time_part_start",placeholder:"起始",pickerOptions:{start:"00:00",step:"01:00",end:"23:00"}},{model:"time_part_end",placeholder:"结束",pickerOptions:{start:"00:00",step:"01:00",end:"23:00"}}]},{type:"text",label:"用户名称",placeholder:"请输入用户名称",model:"cname"},{type:"checkbox",model:"isChecked",label:"是否选择"}],mainColumn:[{prop:"uid",label:"用户ID",width:80,fixed:"left"},{prop:"cname",label:"用户名称",width:70},{prop:"user_img",label:"头像",width:240},{prop:"use_status",label:"当前状态",width:80,formatter:function(e){return{1:"在线",2:"离线"}[e.use_status]}},{prop:"user_email",label:"邮箱",width:120},{prop:"user_status_name",label:"用户状态",width:70,badge:{id:"user_status",state:{1:"warning",2:"primary",3:"danger"}}},{prop:"intrest_name",label:"兴趣",width:70},{prop:"register_date",label:"注册时间"},{prop:"",label:"操作",type:"action",minWidth:"200px",fixed:"right",list:[{prop:"status",val:{2:"启用",1:{text:"禁用",color:"danger"}},permission:!0},{text:"编辑",permission:!0},{text:"删除",color:"danger",permission:!0}]}],mainData:[],pagination:{total_count:0},showModal1:!1,showModal2:!1,dialogConfig1:{showFooter:!0,formList:[{type:"text",label:"用户名称",placeholder:"请输入用户名称",model:"cname",maxlength:"10",showWordLimit:!0,required:!0,width:"80%",tips:{align:"right",text:"长度最大6位"},disabled:!1,rules:[{required:!0,message:"请输入用户名称",trigger:["change","blur"]},{pattern:/^[a-zA-Z0-9_\u4e00-\u9fa5]{1,10}$/,message:"1-10个字符，支持中文、字母、数字和下划线",trigger:["change","blur"]}]},{type:"select",label:"用户状态",placeholder:"请选择用户状态",model:"user_status",tips:"至少选择一项",options:[{label:"已注销",value:1},{label:"老用户",value:2},{label:"新用户",value:3}]},{type:"text",label:"用户邮箱",placeholder:"请输入用户邮箱",model:"user_email",prepend:"https://",append:".com",prefixIcon:"el-icon-search",show:{model:"user_status",val:[1,2]}},{type:"inline",label:"城市",list:[{type:"select",span:11,model:"province",options:[{label:"湖北省",value:10001},{label:"上海市",value:20001},{label:"北京市",value:30001}]},{type:"label",span:2},{type:"select",model:"city",span:11,options:[{label:"襄阳",value:10001},{label:"武汉",value:20001}]}]},{type:"radio",label:"使用状态",placeholder:"请选择使用状态",model:"use_status",options:[{label:"在线",value:1},{label:"离线",value:2}]},{type:"radiogroup",label:"类型",model:"user_type",action:{type:"reset",model:["status","register_date","register_date_range"]},options:[{value:1,label:"少年"},{value:2,label:"青年"},{value:3,label:"中年"},{value:4,label:"老年"}]},{type:"switch",label:"启用状态",model:"status",value:1,show:{model:"user_type",val:[1,3,4]}},{type:"date",label:"注册日期",model:"register_date",shortcuts:!0,show:{model:"user_type",val:[1,3,4]}},{type:"daterange",label:"日期范围",model:"register_date_range",shortcuts:!0,show:{model:"user_type",val:[2]}},{type:"datetime",label:"注册时间",model:"register_datetime",shortcuts:!0},{type:"datetimerange",label:"时间范围",model:"register_datetime_range",shortcuts:!0},{type:"checkbox",label:"兴趣",model:"intrest",options:[{label:"游泳",value:1},{label:"打乒乓球",value:2},{label:"台球",value:3},{label:"篮球",value:4}]},{type:"textarea",label:"用户描述",placeholder:"请输入用户描述",model:"remark",rows:4}],btnGroup:{confirm:{text:"确定1",loading:!0},cancel1:{text:"取消1"}}},userInfo1:{uid:10001,intrest:[1,2],query_field:1},dialogConfig2:{formList:[{type:"detail",label:"用户ID",model:"uid"},{type:"time-select",label:"注册时段",items:[{model:"start_time",placeholder:"起始时段",pickerOptions:{start:"00:00",step:"01:00",end:"23:00"}},{model:"end_time",placeholder:"结束时段",pickerOptions:{start:"00:00",step:"01:00",end:"23:00"}}]},{type:"upload",label:"上传",model:"user_image",listType:"picture-card",action:"http://st1-helper.ued.2345.cn/api/v1/oss/upload?appCode=luban&stage=testing",token:"",fileType:["image/jpg","image/jpeg","image/png"],fileSize:10240,fileLimit:{ratio:1,tips:"文件尺寸不符合要求"},limit:5,tips:"只能上传jpg/png文件，且不超过500kb",response:{response:"",code:"code",data:"data",msg:"msg",codeVal:200}},{type:"transfer",label:"授权用户",model:"checkedUser",filterable:!0,placeholder:"请选择授权用户",titles:["未授权用户","已授权用户"],buttonTexts:["回左边","到右边"],leftDefaultChecked:["4"],rightDefaultChecked:["3"],data:[{key:"1",label:"Jack",disabled:!0},{key:"2",label:"Tom"},{key:"3",label:"Lucy"},{key:"4",label:"Lily"}]}]},userInfo2:{uid:10001,start_time:"",end_time:"",checkedUser:["3"],user_image:[{name:"8f49776a42e7766bed1ad9e87d1b7f5e.jpg",url:"//octopus-fe.2345cdn.net/fe/luban/2021/1/8f49776a42e7766bed1ad9e87d1b7f5e.jpg"}]},uploadConfig:{}}},mounted:function(){this.getTableList()},methods:{getTableList:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.showLoading=!0,this.pagination.page=t;var a=Object(i["a"])(Object(i["a"])({},this.queryParams),this.pagination);this.$api.getBasicList(a).then((function(t){e.showLoading=!1,e.mainData=t.list,e.pagination.total_count=t.total_count}))},handleSubmit:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.userInfo1,t.next=3,e.$request.get("/user/submit",a);case 3:l=t.sent,l&&(e.$message.success("操作成功"),e.showModal1=!1);case 5:case"end":return t.stop()}}),t)})))()},handleSubmit2:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.userInfo2,t.next=3,e.$request.get("/user/submit",a);case 3:l=t.sent,l&&(e.$message.success("操作成功"),e.showModal2=!1);case 5:case"end":return t.stop()}}),t)})))()},handleAction:function(e){var t=e.index,a=e.row;1===t&&(this.showModal1=!0,this.userInfo1=a)},handleClose:function(e){this.$refs[e].handleReset(),this.userInfo2={},this.showModal1=!1,this.showModal2=!1},getSelectList:function(){var e=this;this.$request.get("/select/list").then((function(t){e.dialogConfig2.formList[2].items[1].options=t}))}}}),r=n,d=a("2877"),u=Object(d["a"])(r,l,o,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0bb24d.0e7238e7.js.map
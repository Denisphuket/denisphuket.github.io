(self.webpackChunkblog=self.webpackChunkblog||[]).push([[228],{6635:(e,t,n)=>{"use strict";n.r(t),n.d(t,{DistGeneratePage:()=>F,default:()=>B});var r=n(5893),i=n(7294),o=n(4611),a=n(5443),c=n(3444),l=n(9959);const s=n.p+"download.png";var u=n(2099),d=function(){return d=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},d.apply(this,arguments)};l.Zx.register({family:"Arial",src:"/fonts/arial.ttf"});var f=(0,i.memo)((function(e){var t=e.data,n=e.pageSize,o=(0,a.$)().t,c=l.mM.create({page:{flexDirection:"column",margin:5},image:{paddingRight:15,width:3.779*n.width},headerText:{textAlign:"center",fontFamily:"Arial",marginTop:5,fontSize:11},qrCode:{margin:10,display:"flex",justifyContent:"center",alignItems:"center"},link:{fontFamily:"Arial",textAlign:"center"},pincode:{fontFamily:"Arial",textAlign:"center",fontSize:11},distImage:{width:130},section:{fontFamily:"Arial",marginTop:5},code:{textAlign:"center",border:1,marginTop:1,fontSize:15},telegram:{fontSize:11,fontFamily:"Arial",textAlign:"center",marginTop:10},supportBlock:{marginTop:5,display:"flex",justifyContent:"center",flexDirection:"row",alignItems:"center"},support:{fontSize:11,fontFamily:"Arial"},tgImage:{marginLeft:15,width:50,height:50}}),f=(0,i.useCallback)((function(){return t.map((function(e){return(0,r.jsxs)(l.T3,d({size:{width:3.779*n.width,height:3.779*n.height},style:c.page},{children:[(0,r.jsx)(l.G7,d({style:c.section},{children:(0,r.jsx)(l.Ee,{src:e.logo,style:c.image})})),(0,r.jsx)(l.G7,d({style:c.headerText},{children:(0,r.jsx)(l.xv,{children:e.name})})),(0,r.jsx)(l.G7,d({style:c.qrCode},{children:(0,r.jsx)(l.Ee,{src:s,style:c.distImage})})),(0,r.jsx)(l.G7,d({style:c.link},{children:(0,r.jsx)(l.xv,{children:o("cifra-product.ru/download")})})),(0,r.jsx)(l.G7,d({style:c.pincode},{children:(0,r.jsx)(l.xv,{children:o("СЕКРЕТНЫЙ НОМЕР")})})),(0,r.jsx)(l.G7,d({style:c.code},{children:(0,r.jsx)(l.xv,{children:e.key})})),(0,r.jsx)(l.G7,d({style:c.telegram},{children:(0,r.jsx)(l.xv,{children:o("Telegram: @like_win_2023_bot")})})),(0,r.jsxs)(l.G7,d({style:c.supportBlock},{children:[(0,r.jsxs)(l.G7,d({style:c.support},{children:[(0,r.jsx)(l.xv,{children:o("Вы найдете:")}),(0,r.jsx)(l.xv,{children:o("- Файлы для скачивания")}),(0,r.jsx)(l.xv,{children:o("- Инструкции по активации")}),(0,r.jsx)(l.xv,{children:o("- Поддержку продавца")})]})),(0,r.jsx)(l.Ee,{src:u.Z,style:c.tgImage})]}))]}),e.key)}))}),[t,n,c,o]);return(0,r.jsx)(l.BB,{children:f()})})),p=n(7168),h=(0,p.oM)({name:"getProductDist",initialState:{data:{},error:"",isLoading:!1},reducers:{setProductDist:function(e,t){e.data=t.payload}},extraReducers:function(e){e.addCase(x.pending,(function(e){e.error=void 0,e.isLoading=!0})).addCase(x.fulfilled,(function(e){e.isLoading=!1})).addCase(x.rejected,(function(e,t){e.isLoading=!1,e.error=t.payload}))}}),v=h.actions,g=h.reducer,x=(0,p.hg)("getProductDist/getAllProductDist",(function(e,t){return n=void 0,r=void 0,o=function(){var e,n,r,i,o,a;return function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}}(this,(function(c){switch(c.label){case 0:e=t.extra,n=t.rejectWithValue,r=t.dispatch,c.label=1;case 1:return c.trys.push([1,3,,4]),[4,e.api.get(e.helper.GET_ALL_PRODUCT_DIST)];case 2:if(!(i=c.sent()).data)throw new Error;return r(v.setProductDist(i.data)),[2,i.data];case 3:return o=c.sent(),(null===(a=o.response)||void 0===a?void 0:a.data)?[2,n(o.response.data.message)]:[2,n("Произошла ошибка")];case 4:return[2]}}))},new((i=void 0)||(i=Promise))((function(e,t){function a(e){try{l(o.next(e))}catch(e){t(e)}}function c(e){try{l(o.throw(e))}catch(e){t(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(a,c)}l((o=o.apply(n,r||[])).next())}));var n,r,i,o})),y=function(e){var t;return(null===(t=e.allProductDist)||void 0===t?void 0:t.error)||""},m=function(e){var t;return(null===(t=e.allProductDist)||void 0===t?void 0:t.isLoading)||!1},j=function(e){var t;return(null===(t=e.allProductDist)||void 0===t?void 0:t.data)||{}},b=n(7007),w=function(e){var t=e.children,n=e.reducers,o=e.removeAfterUnmount,a=(0,b.I0)(),c=(0,b.oR)();return(0,i.useEffect)((function(){return Object.entries(n).forEach((function(e){var t=e[0],n=e[1];c.reducerManager.add(t,n),a({type:"@INIT ".concat(t," reducer")})})),function(){o&&Object.entries(n).forEach((function(e){var t=e[0];c.reducerManager.remove(t),a({type:"@DESTROY ".concat(t," reducer")})}))}}),[a,n,o,c.reducerManager]),(0,r.jsx)("div",{children:t})},P=function(){return(0,b.I0)()},C=n(4002),S=function(e){var t;return(null===(t=e.pincode)||void 0===t?void 0:t.error)||""},k=function(e){var t;return(null===(t=e.pincode)||void 0===t?void 0:t.isLoading)||!1},A=(0,p.oM)({name:"getPinCode",initialState:{data:{},error:"",isLoading:!1},reducers:{setPincode:function(e,t){e.data=t.payload}},extraReducers:function(e){e.addCase(D.pending,(function(e){e.error=void 0,e.isLoading=!0})).addCase(D.fulfilled,(function(e){e.isLoading=!1})).addCase(D.rejected,(function(e,t){e.isLoading=!1,e.error=t.payload}))}}),E=A.actions,I=A.reducer,D=(0,p.hg)("getPinCode/getPinCodeByCount",(function(e,t){return n=void 0,r=void 0,o=function(){var n,r,i,o,a,c;return function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}}(this,(function(l){switch(l.label){case 0:n=t.extra,r=t.rejectWithValue,i=t.dispatch,l.label=1;case 1:return l.trys.push([1,3,,4]),[4,n.api.post(n.helper.GET_PINCODE,e)];case 2:if(!(o=l.sent()).data)throw new Error;return i(E.setPincode(o.data)),[2,o.data];case 3:return a=l.sent(),(null===(c=a.response)||void 0===c?void 0:c.data)?[2,r(a.response.data.message)]:[2,r("Произошла ошибка")];case 4:return[2]}}))},new((i=void 0)||(i=Promise))((function(e,t){function a(e){try{l(o.next(e))}catch(e){t(e)}}function c(e){try{l(o.throw(e))}catch(e){t(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(a,c)}l((o=o.apply(n,r||[])).next())}));var n,r,i,o})),T=function(e){var t;return(null===(t=e.pincode)||void 0===t?void 0:t.data)||{}};const G={loader:"Xi3wWTRp",error:"Ntzbo7_J"};var N=function(){return N=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},N.apply(this,arguments)},O=(0,i.memo)((function(e){var t=e.className,n=e.inputProps,l=e.inputCount,s=e.productId,u=(0,a.$)().t,d=P(),f=(0,b.v9)(T),p=(0,b.v9)(k),h=(0,b.v9)(S),v=(0,i.useState)(!1),g=v[0],x=v[1],y=(0,i.useState)(!0),m=y[0],j=y[1],w=(0,i.useState)(0),A=w[0],E=w[1],I=(0,i.useState)(""),O=I[0],_=I[1],L=(0,i.useCallback)((function(){n&&"Выберите продукт"!==n&&l>0&&d(D({count:l,uuid:"d6ba4191-ff45-4dcf-a923-07fffaf3d50e",productId:s}))}),[d,l,n,s]);return(0,i.useEffect)((function(){x(!!(n&&"Выберите продукт"!==n&&l>0))}),[l,n]),(0,i.useEffect)((function(){var e;console.log("pincodeDetail",f),(null===(e=null==f?void 0:f.items)||void 0===e?void 0:e.length)&&j(!1),E(l),_(n)}),[f,l,n]),(0,i.useEffect)((function(){O===n&&A===l||j(!0)}),[l,n,A,O]),p?(0,r.jsx)("div",N({className:(0,o.A)(G.loader,{},[t])},{children:(0,r.jsx)(C.a,{})})):(0,r.jsxs)("div",N({className:(0,o.A)(G.GetPincodeFromServer,{},[t])},{children:[h&&(0,r.jsx)("div",N({className:(0,o.A)(G.error)},{children:u("Произошла ошибка")})),m&&(0,r.jsx)(c.zx,N({color:g?"primary":"secondary",onClick:L,disabled:!g},{children:u("Загрузить Пинкоды")}))]}))}));const _={loader:"rhVG8zrP",footer:"SxK_olwJ"};var L=function(){return L=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},L.apply(this,arguments)},z=function(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))},R={allProductDist:g,pincode:I},F=(0,i.memo)((function(e){var t=e.className,n=(0,a.$)().t,s=P(),u=(0,b.v9)(j),d=(0,b.v9)(m),p=((0,b.v9)(y),(0,b.v9)(T)),h=(0,i.useState)(""),v=h[0],g=h[1],S=(0,i.useState)(0),k=S[0],A=S[1],E=(0,i.useState)(0),I=E[0],D=E[1],G=(0,i.useState)(!1),N=G[0],F=G[1],B=(0,i.useState)(!1),M=B[0],Z=B[1],W=(0,i.useState)(0),$=W[0],U=W[1],V=(0,i.useState)(""),q=V[0],J=V[1],K=(0,i.useState)([]),Q=K[0],X=K[1],Y=(0,i.useCallback)((function(e){var t;null===(t=null==u?void 0:u.items)||void 0===t||t.forEach((function(t){t.productName===e&&D(t.id)})),g(e)}),[u]),H=(0,i.useCallback)((function(e){A(e)}),[]),ee=function(){F(!N),N&&X([])},te=(0,i.useCallback)((function(){if(v&&"Выберите продукт"!==v&&k>0){var e=u.items.filter((function(e){return e.productName===v}))[0].productImage,t=p.items.map((function(t){return{name:"Скачать дистрибутив по ссылке\nили отсканируйте QR-код",key:t,logo:e}}));X(z(z([],Q,!0),t,!0)),F(!0)}U(k),J(v)}),[Q,k,v,p,u]);return(0,i.useEffect)((function(){s(x({}))}),[s]),(0,i.useEffect)((function(){var e;(null===(e=null==p?void 0:p.items)||void 0===e?void 0:e.length)&&Z(!0)}),[p]),(0,i.useEffect)((function(){q===v&&$===k||Z(!1)}),[k,v,$,q]),d?(0,r.jsx)("div",L({className:(0,o.A)(_.loader,{},[t])},{children:(0,r.jsx)(C.a,{})})):(0,r.jsx)(w,L({removeAfterUnmount:!1,reducers:R},{children:(0,r.jsx)("div",L({className:(0,o.A)(_.DistGeneratePage,{},[t])},{children:(0,r.jsxs)(c.Zb,{children:[(0,r.jsx)(c.Ol,{children:n("Генерация ссылок")}),(0,r.jsxs)(c.eW,{children:[(0,r.jsxs)(c.cw,{children:[(0,r.jsx)(c.__,L({for:"inputProduct"},{children:n("Выберите продукт")})),(0,r.jsx)(c.l0,{children:(0,r.jsxs)(c.II,L({type:"select",id:"inputProduct",onChange:function(e){return Y(e.target.value)}},{children:[(0,r.jsx)("option",{children:n("Выберите продукт")}),function(){var e;return null===(e=null==u?void 0:u.items)||void 0===e?void 0:e.map((function(e){return(0,r.jsx)("option",{children:e.productName},e.productName)}))}()]}))})]}),(0,r.jsxs)(c.cw,{children:[(0,r.jsx)(c.__,L({for:"inputNumber"},{children:n("Введите количество")})),(0,r.jsx)(c.l0,{children:(0,r.jsx)(c.II,{id:"inputNumber",type:"number",onChange:function(e){return H(e.target.value)}})})]})]}),(0,r.jsxs)(c.iR,L({className:(0,o.A)(_.footer)},{children:[(0,r.jsx)(O,{inputProps:v,inputCount:k,productId:I}),(0,r.jsx)(c.zx,L({color:M?"primary":"secondary",disabled:!M,onClick:te},{children:n("Создать PDF")})),(0,r.jsxs)(c.u_,L({isOpen:N,toggle:ee,fullscreen:!0},{children:[(0,r.jsx)(c.xB,L({toggle:ee},{children:n("Ваши ключи для скачивания")})),(0,r.jsx)(c.fe,{children:(0,r.jsx)(l.Z$,L({style:{width:"100%",height:"100%"}},{children:(0,r.jsx)(f,{data:Q,pageSize:{width:75,height:110}})}))})]}))]}))]})}))}))}));const B=F},2099:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"tg.png"},2480:()=>{}}]);
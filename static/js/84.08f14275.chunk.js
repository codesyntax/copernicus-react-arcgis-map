(this["webpackJsonpcopernicus-react-arcgis-map"]=this["webpackJsonpcopernicus-react-arcgis-map"]||[]).push([[84],{544:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return i}));var a=r(23),n=r(13),u=r(12),s=r(19),c=r(199);function i(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?c.a:"esriGeometryPolyline"===e?c.c:c.b}}}function o(e,t){if(Object(u.a)("csp-restrictions"))return function(){return Object(n.a)(Object(a.a)({},t,null),e)};try{var r="this.".concat(t," = null;");for(var s in e)r+="this".concat(s.indexOf(".")?'["'.concat(s,'"]'):".".concat(s)," = ").concat(JSON.stringify(e[s]),";");var c=new Function(r);return function(){return new c}}catch(i){return function(){return Object(n.a)(Object(a.a)({},t,null),e)}}}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:Object(s.a)(e)}}]}},793:function(e,t,r){"use strict";r.r(t);var a=r(13),n=r(10),u=r(38),s=r(8),c=r.n(s),i=r(2),o=r(3),l=r(4),d=r(5),p=r(18),h=r(0),b=r(12),y=r(19),f=r(60),v=r(7),m=(r(11),r(14),r(1)),O=r(6),j=r(17),g=r(9),k=(r(15),r(16),r(47)),x=r(50),F=r(80),R=r(145),I=r(238),q=r(353),w=r(385),_=r(544);function A(e){return S.apply(this,arguments)}function S(){return(S=Object(p.a)(c.a.mark((function e(t){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("string"!=typeof t){e.next=3;break}return r=Object(g.i)(t),e.abrupt("return",r||{data:t});case 3:return e.abrupt("return",new Promise((function(e,r){var a=new FileReader;a.readAsDataURL(t),a.onload=function(){return e(Object(g.i)(a.result))},a.onerror=function(e){return r(e)}})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E=new Set(["Feature Layer","Table"]),T=function(e){Object(l.a)(r,e);var t=Object(d.a)(r);function r(){var e;return Object(i.a)(this,r),(e=t.apply(this,arguments)).type="feature-layer",e}return Object(o.a)(r,[{key:"load",value:function(e){var t=Object(v.i)(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(t)),Promise.resolve(this)}},{key:"queryTask",get:function(){var e=this.layer,t=e.capabilities.query.supportsFormatPBF,r=e.parsedUrl,a=e.dynamicDataSource,n=e.gdbVersion,u=e.spatialReference,s=e.fieldsIndex,c=Object(b.a)("featurelayer-pbf")&&t?"pbf":"json";return new w.a({url:r.path,format:c,fieldsIndex:s,dynamicDataSource:a,gdbVersion:n,sourceSpatialReference:u})}},{key:"addAttachment",value:function(){var e=Object(p.a)(c.a.mark((function e(t,r){var a,n,u,s,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return a=t.attributes[this.layer.objectIdField],n=this.layer.parsedUrl.path+"/"+a+"/addAttachment",u=this._getLayerRequestOptions(),s=this._getFormDataForAttachment(r,u.query),e.prev=3,e.next=6,Object(x.default)(n,{body:s});case 6:return i=e.sent,e.abrupt("return",this._createFeatureEditResult(i.data.addAttachmentResult));case 10:throw e.prev=10,e.t0=e.catch(3),this._createAttachmentErrorResult(a,e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(t,r){return e.apply(this,arguments)}}()},{key:"updateAttachment",value:function(){var e=Object(p.a)(c.a.mark((function e(t,r,a){var n,u,s,i,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return n=t.attributes[this.layer.objectIdField],u=this.layer.parsedUrl.path+"/"+n+"/updateAttachment",s=this._getLayerRequestOptions({query:{attachmentId:r}}),i=this._getFormDataForAttachment(a,s.query),e.prev=3,e.next=6,Object(x.default)(u,{body:i});case 6:return o=e.sent,e.abrupt("return",this._createFeatureEditResult(o.data.updateAttachmentResult));case 10:throw e.prev=10,e.t0=e.catch(3),this._createAttachmentErrorResult(n,e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(t,r,a){return e.apply(this,arguments)}}()},{key:"applyEdits",value:function(){var e=Object(p.a)(c.a.mark((function e(t,r){var a,s,i,o,l,d,p,h,b,y,f,v,m,O,j;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:a=t.addFeatures.map(this._serializeFeature,this),s=t.updateFeatures.map(this._serializeFeature,this),i=this._getFeatureIds(t.deleteFeatures,null==r?void 0:r.globalIdUsed),Object(I.b)(a,s,this.layer.spatialReference),o=[],l=[],d=Object(u.a)(t.deleteAttachments),p=Object(n.a)(t.addAttachments),e.prev=6,p.s();case 8:if((h=p.n()).done){e.next=17;break}return b=h.value,e.t0=o,e.next=13,this._serializeAttachment(b);case 13:e.t1=e.sent,e.t0.push.call(e.t0,e.t1);case 15:e.next=8;break;case 17:e.next=22;break;case 19:e.prev=19,e.t2=e.catch(6),p.e(e.t2);case 22:return e.prev=22,p.f(),e.finish(22);case 25:y=Object(n.a)(t.updateAttachments),e.prev=26,y.s();case 28:if((f=y.n()).done){e.next=37;break}return v=f.value,e.t3=l,e.next=33,this._serializeAttachment(v);case 33:e.t4=e.sent,e.t3.push.call(e.t3,e.t4);case 35:e.next=28;break;case 37:e.next=42;break;case 39:e.prev=39,e.t5=e.catch(26),y.e(e.t5);case 42:return e.prev=42,y.f(),e.finish(42);case 45:return m=o.length||l.length||d.length?{adds:o,updates:l,deletes:d}:null,O=this._getLayerRequestOptions({method:"post",query:{adds:a.length?JSON.stringify(a):null,updates:s.length?JSON.stringify(s):null,deletes:i.length?null!=r&&r.globalIdUsed?JSON.stringify(i):i.join(","):null,gdbVersion:(null==r?void 0:r.gdbVersion)||this.layer.gdbVersion,rollbackOnFailure:null==r?void 0:r.rollbackOnFailureEnabled,useGlobalIds:null==r?void 0:r.globalIdUsed,attachments:m&&JSON.stringify(m)}}),e.next=49,Object(x.default)(this.layer.parsedUrl.path+"/applyEdits",O);case 49:return j=e.sent,e.abrupt("return",this._createEditsResult(j));case 51:case"end":return e.stop()}}),e,this,[[6,19,22,25],[26,39,42,45]])})));return function(t,r){return e.apply(this,arguments)}}()},{key:"deleteAttachments",value:function(){var e=Object(p.a)(c.a.mark((function e(t,r){var a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return a=t.attributes[this.layer.objectIdField],n=this.layer.parsedUrl.path+"/"+a+"/deleteAttachments",e.prev=3,e.next=6,Object(x.default)(n,this._getLayerRequestOptions({query:{attachmentIds:r.join(",")},method:"post"}));case 6:return e.abrupt("return",e.sent.data.deleteAttachmentResults.map(this._createFeatureEditResult));case 9:throw e.prev=9,e.t0=e.catch(3),this._createAttachmentErrorResult(a,e.t0);case 12:case"end":return e.stop()}}),e,this,[[3,9]])})));return function(t,r){return e.apply(this,arguments)}}()},{key:"fetchRecomputedExtents",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.signal;return this.load({signal:r}).then(Object(p.a)(c.a.mark((function r(){var n,u,s,i,o,l,d,p,h,b,y;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e._getLayerRequestOptions(Object(a.a)(Object(a.a)({},t),{},{query:{returnUpdates:!0}})),u=e.layer,s=u.layerId,i=u.url,r.next=6,Object(x.default)("".concat(i,"/").concat(s),n);case 6:return o=r.sent,l=o.data,d=l.id,p=l.extent,h=l.fullExtent,b=l.timeExtent,y=p||h,r.abrupt("return",{id:d,fullExtent:y&&k.a.fromJSON(y),timeExtent:b&&R.a.fromJSON({start:b[0],end:b[1]})});case 14:case"end":return r.stop()}}),r)}))))}},{key:"queryAttachments",value:function(){var e=Object(p.a)(c.a.mark((function e(t){var r,a,u,s,i,o,l,d,p,h,b=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=b.length>1&&void 0!==b[1]?b[1]:{},a=this.layer.parsedUrl,u=a.path,e.next=4,this.load();case 4:if(s=this._getLayerRequestOptions(r),this.layer.get("capabilities.operations.supportsQueryAttachments")){e.next=10;break}i=t.objectIds,o=[],l=Object(n.a)(i);try{for(l.s();!(d=l.n()).done;)p=d.value,h=u+"/"+p+"/attachments",o.push(Object(x.default)(h,s))}catch(c){l.e(c)}finally{l.f()}return e.abrupt("return",Promise.all(o).then((function(e){return i.map((function(t,r){return{parentObjectId:t,attachmentInfos:e[r].data.attachmentInfos}}))})).then((function(e){return Object(q.b)(e,u)})));case 10:return e.abrupt("return",this.queryTask.executeAttachmentQuery(t,s));case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"queryFeatures",value:function(){var e=Object(p.a)(c.a.mark((function e(t,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.execute(t,Object(a.a)(Object(a.a)({},r),{},{query:Object(a.a)(Object(a.a)({},this.layer.customParameters),null==r?void 0:r.query)})));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryFeaturesJSON",value:function(){var e=Object(p.a)(c.a.mark((function e(t,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeJSON(t,Object(a.a)(Object(a.a)({},r),{},{query:Object(a.a)(Object(a.a)({},this.layer.customParameters),null==r?void 0:r.query)})));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryObjectIds",value:function(){var e=Object(p.a)(c.a.mark((function e(t,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeForIds(t,Object(a.a)(Object(a.a)({},r),{},{query:Object(a.a)(Object(a.a)({},this.layer.customParameters),null==r?void 0:r.query)})));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryFeatureCount",value:function(){var e=Object(p.a)(c.a.mark((function e(t,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeForCount(t,Object(a.a)(Object(a.a)({},r),{},{query:Object(a.a)(Object(a.a)({},this.layer.customParameters),null==r?void 0:r.query)})));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryExtent",value:function(){var e=Object(p.a)(c.a.mark((function e(t,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeForExtent(t,Object(a.a)(Object(a.a)({},r),{},{query:Object(a.a)(Object(a.a)({},this.layer.customParameters),null==r?void 0:r.query)})));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryRelatedFeatures",value:function(){var e=Object(p.a)(c.a.mark((function e(t,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeRelationshipQuery(t,Object(a.a)(Object(a.a)({},r),{},{query:Object(a.a)(Object(a.a)({},this.layer.customParameters),null==r?void 0:r.query)})));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryRelatedFeaturesCount",value:function(){var e=Object(p.a)(c.a.mark((function e(t,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeRelationshipQueryForCount(t,Object(a.a)(Object(a.a)({},r),{},{query:Object(a.a)(Object(a.a)({},this.layer.customParameters),null==r?void 0:r.query)})));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_fetchService",value:function(){var e=Object(p.a)(c.a.mark((function e(t){var r,a,n,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.layer.sourceJSON){e.next=7;break}return e.next=4,Object(x.default)(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:Object(b.a)("featurelayer-advanced-symbols")?{returnAdvancedSymbols:!0}:{},signal:t}));case 4:a=e.sent,n=a.data,r=n;case 7:if(this.sourceJSON=this._patchServiceJSON(r),u=r.type,E.has(u)){e.next=11;break}throw new j.a("feature-layer-source:unsupported-type",'Source type "'.concat(u,'" is not supported'));case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_patchServiceJSON",value:function(e){var t;if("Table"!==e.type&&e.geometryType&&(null==e||null==(t=e.drawingInfo)||!t.renderer)&&!e.defaultSymbol){var r=Object(_.c)(e.geometryType).renderer;Object(f.c)("drawingInfo.renderer",r,e)}return e}},{key:"_serializeFeature",value:function(e){var t=e.geometry,r=e.attributes;return Object(v.h)(t)?{attributes:r}:"mesh"===t.type||"extent"===t.type?null:{geometry:t.toJSON(),attributes:r}}},{key:"_serializeAttachment",value:function(){var e=Object(p.a)(c.a.mark((function e(t){var r,a,n,u,s,i,o,l,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.feature,a=t.attachment,n=a.globalId,u=a.name,s=a.contentType,i=a.data,o=a.uploadId,l={globalId:n,parentGlobalId:null,contentType:null,name:null,uploadId:null,data:null},r&&(l.parentGlobalId="attributes"in r?r.attributes&&r.attributes[this.layer.globalIdField]:r.globalId),!o){e.next=5;break}l.uploadId=o,e.next=10;break;case 5:if(!i){e.next=10;break}return e.next=8,A(i);case 8:d=e.sent,l.contentType=d.mediaType,l.data=d.data,i instanceof File&&(l.name=i.name);case 10:return e.abrupt("return",(u&&(l.name=u),s&&(l.contentType=s),l));case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_getFeatureIds",value:function(e,t){var r=e[0];return r?this._canUseGlobalIds(t,e)?this._getGlobalIdsFromFeatureIdentifier(e):"objectId"in r?this._getObjectIdsFromFeatureIdentifier(e):this._getIdsFromFeatures(e):[]}},{key:"_getIdsFromFeatures",value:function(e){var t=this.layer.objectIdField;return e.map((function(e){return e.attributes&&e.attributes[t]}))}},{key:"_canUseGlobalIds",value:function(e,t){return e&&"globalId"in t[0]}},{key:"_getObjectIdsFromFeatureIdentifier",value:function(e){return e.map((function(e){return e.objectId}))}},{key:"_getGlobalIdsFromFeatureIdentifier",value:function(e){return e.map((function(e){return e.globalId}))}},{key:"_createEditsResult",value:function(e){var t=e.data,r=e.data&&e.data.attachments;return{addFeatureResults:t.addResults?t.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:t.updateResults?t.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:t.deleteResults?t.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:r&&r.addResults?r.addResults.map(this._createFeatureEditResult,this):[],updateAttachmentResults:r&&r.updateResults?r.updateResults.map(this._createFeatureEditResult,this):[],deleteAttachmentResults:r&&r.deleteResults?r.deleteResults.map(this._createFeatureEditResult,this):[]}}},{key:"_createFeatureEditResult",value:function(e){var t=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new j.a("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}},{key:"_createAttachmentErrorResult",value:function(e,t){var r=t.details.messages&&t.details.messages[0]||t.message,a=t.details.httpStatus||t.details.messageCode;return{objectId:e,globalId:null,error:new j.a("feature-layer-source:attachment-failure",r,{code:a})}}},{key:"_getFormDataForAttachment",value:function(e,t){var r=e instanceof FormData?e:e&&e.elements?new FormData(e):null;if(r)for(var a in t){var n=t[a];null!=n&&(r.set?r.set(a,n):r.append(a,n))}return r}},{key:"_getLayerRequestOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this.layer,r=t.parsedUrl,n=t.gdbVersion,u=t.dynamicDataSource;return Object(a.a)(Object(a.a)({},e),{},{query:Object(y.c)(Object(a.a)(Object(a.a)(Object(a.a)({gdbVersion:n,layer:u?JSON.stringify({source:u}):void 0},r.query),{},{f:"json"},this.layer.customParameters),null==e?void 0:e.query)),responseType:"json"})}}]),r}(F.a);Object(h.a)([Object(m.b)()],T.prototype,"type",void 0),Object(h.a)([Object(m.b)({constructOnly:!0})],T.prototype,"layer",void 0),Object(h.a)([Object(m.b)({readOnly:!0})],T.prototype,"queryTask",null);var J=T=Object(h.a)([Object(O.a)("esri.layers.graphics.sources.FeatureLayerSource")],T);t.default=J}}]);
//# sourceMappingURL=84.08f14275.chunk.js.map
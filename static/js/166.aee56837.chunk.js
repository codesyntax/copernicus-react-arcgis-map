(this["webpackJsonpcopernicus-react-arcgis-map"]=this["webpackJsonpcopernicus-react-arcgis-map"]||[]).push([[166],{804:function(e,t,r){"use strict";r.r(t);var n=r(8),a=r.n(n),i=r(18),o=r(13),c=r(2),s=r(3),l=r(40),u=r(39),p=r(4),y=r(5),d=r(0),h=(r(12),r(7)),v=(r(11),r(14),r(1)),f=r(6),O=r(17),b=(r(9),r(15),r(16),r(129)),m=r(653);function j(e,t){if(Object(h.h)(e)&&Object(h.h)(t))return null;var r={};return Object(h.i)(t)&&(r.geometry=t.toJSON()),Object(h.i)(e)&&(r.where=e),r}var g=function(e){Object(p.a)(r,e);var t=Object(y.a)(r);function r(){var e;return Object(c.a)(this,r),(e=t.apply(this,arguments))._enabledDataReceived=!1,e.errorString=null,e.connectionStatus="disconnected",e}return Object(s.a)(r,[{key:"initialize",value:function(){var e=this;this.handles.add([this.layer.watch("purgeOptions",(function(){return e._update()}))])}},{key:"destroy",value:function(){this.connectionStatus="disconnected"}},{key:"connectionError",get:function(){if(this.errorString)return new O.a("stream-controller",this.errorString)}},{key:"on",value:function(e,t){"data-received"===e&&(this._enabledDataReceived=!0,this._proxy.enableEvent("data-received",!0));var n=Object(l.a)(Object(u.a)(r.prototype),"on",this).call(this,e,t),a=this;return{remove:function(){n.remove(),"data-received"===e&&(a._proxy.closed||a.hasEventListener("data-received")||a._proxy.enableEvent("data-received",!1))}}}},{key:"queryLatestObservations",value:function(e,t){var r=this;if(!this.layer.timeInfo.endField&&!this.layer.timeInfo.startField)throw new O.a("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),t).then((function(e){var t=b.default.fromJSON(e);return t.features.forEach((function(e){e.layer=r.layer,e.sourceLayer=r.layer})),t}))}},{key:"_createClientOptions",value:function(){var e=this;return Object(o.a)(Object(o.a)({},Object(l.a)(Object(u.a)(r.prototype),"_createClientOptions",this).call(this)),{},{setProperty:function(t){e.set(t.propertyName,t.value)}})}},{key:"_createTileRendererHash",value:function(e){var t="".concat(JSON.stringify(this.layer.purgeOptions),".").concat(JSON.stringify(j(this.layer.definitionExpression,this.layer.geometryDefinition)),")");return Object(l.a)(Object(u.a)(r.prototype),"_createTileRendererHash",this).call(this,e)+t}},{key:"_createServiceOptions",value:function(){var e=Object(i.a)(a.a.mark((function e(){var t,r,n,i,o,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.layer,r=t.objectIdField,n=t.fields.map((function(e){return e.toJSON()})),i=Object(m.a)(t.geometryType),o=t.timeInfo&&t.timeInfo.toJSON()||null,c=t.spatialReference?t.spatialReference.toJSON():null,e.abrupt("return",{type:"stream",fields:n,geometryType:i,objectIdField:r,timeInfo:o,source:this.layer.parsedUrl,serviceFilter:j(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enableDataReceived:this._enabledDataReceived,spatialReference:c,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval});case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),r}(r(732).default);Object(d.a)([Object(v.b)()],g.prototype,"errorString",void 0),Object(d.a)([Object(v.b)({readOnly:!0})],g.prototype,"connectionError",null),Object(d.a)([Object(v.b)()],g.prototype,"connectionStatus",void 0);var S=g=Object(d.a)([Object(f.a)("esri.views.2d.layers.StreamLayerView2D")],g);t.default=S}}]);
//# sourceMappingURL=166.aee56837.chunk.js.map
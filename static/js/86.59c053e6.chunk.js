(this["webpackJsonpcopernicus-react-arcgis-map"]=this["webpackJsonpcopernicus-react-arcgis-map"]||[]).push([[86],{674:function(e,t,a){"use strict";a.d(t,"a",(function(){return y}));var r=a(2),i=a(3),n=a(4),s=a(5),o=a(0),u=(a(12),a(11),a(14),a(1)),c=a(6),l=(a(9),a(15),a(16),a(28)),h=a(121),p={visible:"visibleSublayers"},y=function(e){Object(n.a)(a,e);var t=Object(s.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).scale=0,i}return Object(i.a)(a,[{key:"layer",set:function(e){var t=this;this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.sublayers.on("change",(function(){return t.notifyChange("visibleSublayers")})),e.on("wms-sublayer-update",(function(e){return t.notifyChange(p[e.propertyName])}))],"layer"))}},{key:"layers",get:function(){return this.visibleSublayers.filter((function(e){return e.name})).map((function(e){return e.name})).join(",")}},{key:"version",get:function(){this.commitProperty("layers");var e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}},{key:"visibleSublayers",get:function(){var e=this.layer,t=this.scale,a=null==e?void 0:e.sublayers,r=[];return null==a||a.forEach((function e(a){var i=a.minScale,n=a.maxScale,s=a.sublayers;a.visible&&(0===t||(0===i||t<=i)&&(0===n||t>=n))&&(s?s.forEach(e):r.unshift(a))})),r}},{key:"toJSON",value:function(){var e=this.layer,t=this.layers;return{format:e.imageFormat,request:"GetMap",service:"WMS",styles:"",transparent:e.imageTransparency,version:e.version,layers:t}}}]),a}(Object(h.b)(l.a));Object(o.a)([Object(u.b)()],y.prototype,"layer",null),Object(o.a)([Object(u.b)({readOnly:!0})],y.prototype,"layers",null),Object(o.a)([Object(u.b)({type:Number})],y.prototype,"scale",void 0),Object(o.a)([Object(u.b)({readOnly:!0})],y.prototype,"version",null),Object(o.a)([Object(u.b)({readOnly:!0})],y.prototype,"visibleSublayers",null),y=Object(o.a)([Object(c.a)("esri.layers.support.ExportWMSImageParameters")],y)},915:function(e,t,a){"use strict";a.r(t);var r=a(13),i=a(8),n=a.n(i),s=a(18),o=a(2),u=a(3),c=a(4),l=a(5),h=a(0),p=(a(12),a(11)),y=(a(14),a(1)),b=a(6),m=a(17),v=(a(9),a(15),a(16),a(20)),f=a(47),d=a(288),g=a(470),O=a(81),j=a(674),w=function(e){var t=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"initialize",value:function(){this.exportImageParameters=new j.a({layer:this.layer})}},{key:"destroy",value:function(){this.exportImageParameters.destroy(),this.exportImageParameters=null}},{key:"exportImageVersion",get:function(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}},{key:"fetchPopupFeatures",value:function(e){var t=this.layer;if(!e)return Promise.reject(new m.a("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}));var a=t.popupEnabled;if(!a)return Promise.reject(new m.a("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:a}));var r=this.createFetchPopupFeaturesQuery(e);if(!r)return Promise.resolve([]);var i=r.extent,n=r.width,s=r.height,o=r.x,u=r.y;if(!(i&&n&&s))throw new m.a("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:i,width:n,height:s});var c=t.fetchFeatureInfo(i,n,s,o,u);return Promise.resolve(c?[c]:[])}}]),a}(e);return Object(h.a)([Object(y.b)()],t.prototype,"exportImageParameters",void 0),Object(h.a)([Object(y.b)({readOnly:!0})],t.prototype,"exportImageVersion",null),Object(h.a)([Object(y.b)()],t.prototype,"layer",void 0),Object(h.a)([Object(y.b)(O.a)],t.prototype,"timeExtent",void 0),t=Object(h.a)([Object(b.a)("esri.layers.mixins.WMSLayerView")],t)},x=a(547),k=a(471),P=a(566),S=p.a.getLogger("esri.views.2d.layers.WMSLayerView2D"),I=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"initialize",value:function(){var e=this.layer,t=this.view;e.supportsSpatialReference(t.spatialReference)||this.addResolvingPromise(Promise.reject(new m.a("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view",{layer:e})))}},{key:"hitTest",value:function(){return null}},{key:"update",value:function(e){this.strategy.update(e).catch((function(e){Object(v.m)(e)||S.error(e)}))}},{key:"attach",value:function(){var e=this,t=this.layer,a=t.imageMaxHeight,r=t.imageMaxWidth;this._bitmapContainer=new x.a,this.container.addChild(this._bitmapContainer),this.strategy=new P.a({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:a,imageMaxWidth:r,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.handles.add(this.watch("exportImageVersion",(function(){return e.requestUpdate()})),"exportImageVersion")}},{key:"detach",value:function(){this.handles.remove("exportImageVersion"),this.strategy.destroy(),this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}},{key:"moveStart",value:function(){}},{key:"viewChange",value:function(){}},{key:"moveEnd",value:function(){this.requestUpdate()}},{key:"createFetchPopupFeaturesQuery",value:function(e){var t=this.view,a=this._bitmapContainer,r=e.x,i=e.y,n=t.spatialReference,s=null,o=0,u=0;if(a.children.some((function(e){var t=e.width,a=e.height,c=e.resolution,l=e.x,h=e.y,p=l+c*t,y=h-c*a;return r>=l&&r<=p&&i<=h&&i>=y&&(s=new f.a({xmin:l,ymin:y,xmax:p,ymax:h,spatialReference:n}),o=t,u=a,!0)})),!s)return null;var c=s.width/o,l=Math.round((r-s.xmin)/c),h=Math.round((s.ymax-i)/c);return{extent:s,width:o,height:u,x:l,y:h}}},{key:"doRefresh",value:function(){var e=Object(s.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.requestUpdate();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"isUpdating",value:function(){return this.strategy.updating||this.updateRequested}},{key:"fetchImage",value:function(e,t,a,i){return this.layer.fetchImage(e,t,a,Object(r.a)({timeExtent:this.timeExtent,timestamp:this.refreshTimestamp},i))}}]),a}(w(Object(d.a)(Object(k.a)(g.a))));Object(h.a)([Object(y.b)()],I.prototype,"strategy",void 0),Object(h.a)([Object(y.b)()],I.prototype,"updating",void 0);var M=I=Object(h.a)([Object(b.a)("esri.views.2d.layers.WMSLayerView2D")],I);t.default=M}}]);
//# sourceMappingURL=86.59c053e6.chunk.js.map
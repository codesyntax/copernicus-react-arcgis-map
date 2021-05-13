(this["webpackJsonpcopernicus-react-arcgis-map"]=this["webpackJsonpcopernicus-react-arcgis-map"]||[]).push([[144],{632:function(e,t,a){"use strict";a.r(t);var r=a(8),n=a.n(r),i=a(18),o=a(2),l=a(3),s=a(4),c=a(5),u=a(0),b=(a(12),a(7)),p=(a(11),a(14),a(1)),d=a(35),g=a(6),y=a(17),h=(a(9),a(15),a(16),a(34)),v=a(50),j=a(158),O=a(189),f=a(232),m=a(84),M=a(47),w=a(135),k=a(112),S=a(283),T=a(231),x={id:"0/0/0",level:0,row:0,col:0,extent:null},B=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.apply(this,arguments)).tileInfo=m.a.create({spatialReference:h.a.WebMercator,size:256}),e.type="base-tile",e.fullExtent=new M.a(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,h.a.WebMercator),e.spatialReference=h.a.WebMercator,e}return Object(l.a)(a,[{key:"getTileBounds",value:function(e,t,a,r){var n=r||Object(k.g)();return x.level=e,x.row=t,x.col=a,x.extent=n,this.tileInfo.updateTileInfo(x),x.extent=null,n}},{key:"fetchTile",value:function(e,t,a){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=r.signal,i=r.timestamp,o=this.getTileUrl(e,t,a),l={responseType:"image",signal:n};return null!=i&&(l.query={_ts:r.timestamp}),Object(v.default)(o,l).then((function(e){return e.data}))}},{key:"getTileUrl",value:function(){throw new y.a("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")}}]),a}(Object(f.a)(Object(T.a)(Object(S.a)(w.a))));Object(u.a)([Object(p.b)({type:m.a})],B.prototype,"tileInfo",void 0),Object(u.a)([Object(p.b)({type:["show","hide"]})],B.prototype,"listMode",void 0),Object(u.a)([Object(p.b)({readOnly:!0,value:"base-tile"})],B.prototype,"type",void 0),Object(u.a)([Object(p.b)()],B.prototype,"fullExtent",void 0),Object(u.a)([Object(p.b)()],B.prototype,"spatialReference",void 0);var U=B=Object(u.a)([Object(g.a)("esri.layers.BaseTileLayer")],B),R=new d.a({BingMapsAerial:"aerial",BingMapsRoad:"road",BingMapsHybrid:"hybrid"}),P=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).type="bing-maps",r.tileInfo=new m.a({size:[256,256],dpi:96,origin:{x:-20037508.342787,y:20037508.342787,spatialReference:h.a.WebMercator},spatialReference:h.a.WebMercator,lods:[{level:1,resolution:78271.5169639999,scale:295828763.795777},{level:2,resolution:39135.7584820001,scale:147914381.897889},{level:3,resolution:19567.8792409999,scale:73957190.948944},{level:4,resolution:9783.93962049996,scale:36978595.474472},{level:5,resolution:4891.96981024998,scale:18489297.737236},{level:6,resolution:2445.98490512499,scale:9244648.868618},{level:7,resolution:1222.99245256249,scale:4622324.434309},{level:8,resolution:611.49622628138,scale:2311162.217155},{level:9,resolution:305.748113140558,scale:1155581.108577},{level:10,resolution:152.874056570411,scale:577790.554289},{level:11,resolution:76.4370282850732,scale:288895.277144},{level:12,resolution:38.2185141425366,scale:144447.638572},{level:13,resolution:19.1092570712683,scale:72223.819286},{level:14,resolution:9.55462853563415,scale:36111.909643},{level:15,resolution:4.77731426794937,scale:18055.954822},{level:16,resolution:2.38865713397468,scale:9027.977411},{level:17,resolution:1.19432856685505,scale:4513.988705},{level:18,resolution:.597164283559817,scale:2256.994353},{level:19,resolution:.298582141647617,scale:1128.497176},{level:20,resolution:.1492910708238085,scale:564.248588}]}),r.key=null,r.style="road",r.culture="en-US",r.region=null,r.portalUrl=null,r.hasAttributionData=!0,r}return Object(l.a)(a,[{key:"bingMetadata",get:function(){return this._get("bingMetadata")},set:function(e){this._set("bingMetadata",e)}},{key:"copyright",get:function(){return Object(b.i)(this.bingMetadata)?this.bingMetadata.copyright:null}},{key:"operationalLayerType",get:function(){return R.toJSON(this.style)}},{key:"bingLogo",get:function(){return Object(b.i)(this.bingMetadata)?this.bingMetadata.brandLogoUri:null}},{key:"load",value:function(e){var t=this;return this.key?this.addResolvingPromise(this._getMetadata()):this.portalUrl?this.addResolvingPromise(this._getPortalBingKey().then((function(){return t._getMetadata()}))):this.addResolvingPromise(Promise.reject(new y.a("bingmapslayer:load","Bing layer must have bing key."))),Promise.resolve(this)}},{key:"getTileUrl",value:function(e,t,a){if(!this.loaded||Object(b.h)(this.bingMetadata))return null;var r=this.bingMetadata.resourceSets[0].resources[0],n=r.imageUrlSubdomains[t%r.imageUrlSubdomains.length],i=this._getQuadKey(e,t,a);return r.imageUrl.replace("{subdomain}",n).replace("{quadkey}",i)}},{key:"fetchAttributionData",value:function(){var e=Object(i.a)(n.a.mark((function e(){var t=this;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.load().then((function(){return Object(b.h)(t.bingMetadata)?null:{contributors:t.bingMetadata.resourceSets[0].resources[0].imageryProviders.map((function(e){return{attribution:e.attribution,coverageAreas:e.coverageAreas.map((function(e){return{zoomMin:e.zoomMin,zoomMax:e.zoomMax,score:1,bbox:[e.bbox[0],e.bbox[1],e.bbox[2],e.bbox[3]]}}))}}))}})));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_getMetadata",value:function(){var e=this,t={road:"roadOnDemand",aerial:"aerial",hybrid:"aerialWithLabelsOnDemand"}[this.style];return Object(v.default)("".concat("https://dev.virtualearth.net","/REST/v1/Imagery/Metadata/").concat(t),{responseType:"json",query:{include:"ImageryProviders",uriScheme:"https",key:this.key,suppressStatus:!0,output:"json",culture:this.culture,userRegion:this.region}}).then((function(t){var a=t.data;if(200!==a.statusCode)throw new y.a("bingmapslayer:getmetadata",a.statusDescription);if(e.bingMetadata=a,0===e.bingMetadata.resourceSets.length)throw new y.a("bingmapslayer:getmetadata","no bing resourcesets");if(0===e.bingMetadata.resourceSets[0].resources.length)throw new y.a("bingmapslayer:getmetadata","no bing resources")})).catch((function(e){throw new y.a("bingmapslayer:getmetadata",e.message)}))}},{key:"_getPortalBingKey",value:function(){var e=this;return Object(v.default)(this.portalUrl,{responseType:"json",authMode:"no-prompt",query:{f:"json"}}).then((function(t){if(!t.data.bingKey)throw new y.a("bingmapslayer:getportalbingkey","The referenced Portal does not contain a valid bing key");e.key=t.data.bingKey})).catch((function(e){throw new y.a("bingmapslayer:getportalbingkey",e.message)}))}},{key:"_getQuadKey",value:function(e,t,a){for(var r="",n=e;n>0;n--){var i=0,o=1<<n-1;0!=(a&o)&&(i+=1),0!=(t&o)&&(i+=2),r+=i.toString()}return r}}]),a}(Object(f.a)(Object(O.a)(Object(j.a)(U))));Object(u.a)([Object(p.b)({json:{read:!1,write:!1},value:null})],P.prototype,"bingMetadata",null),Object(u.a)([Object(p.b)({json:{read:!1,write:!1},value:"bing-maps",readOnly:!0})],P.prototype,"type",void 0),Object(u.a)([Object(p.b)({type:m.a})],P.prototype,"tileInfo",void 0),Object(u.a)([Object(p.b)({type:String,readOnly:!0,json:{read:!1,write:!1}})],P.prototype,"copyright",null),Object(u.a)([Object(p.b)({type:String,json:{write:!1,read:!1}})],P.prototype,"key",void 0),Object(u.a)([Object(p.b)({type:R.apiValues,nonNullable:!0,json:{read:{source:"layerType",reader:R.read}}})],P.prototype,"style",void 0),Object(u.a)([Object(p.b)({type:["BingMapsAerial","BingMapsHybrid","BingMapsRoad"]})],P.prototype,"operationalLayerType",null),Object(u.a)([Object(p.b)({type:String,json:{write:!1,read:!1}})],P.prototype,"culture",void 0),Object(u.a)([Object(p.b)({type:String,json:{write:!1,read:!1}})],P.prototype,"region",void 0),Object(u.a)([Object(p.b)({type:String,json:{write:!0,read:!0}})],P.prototype,"portalUrl",void 0),Object(u.a)([Object(p.b)({type:Boolean,json:{write:!1,read:!1}})],P.prototype,"hasAttributionData",void 0),Object(u.a)([Object(p.b)({type:String,readOnly:!0})],P.prototype,"bingLogo",null);var _=P=Object(u.a)([Object(g.a)("esri.layers.BingMapsLayer")],P);t.default=_}}]);
//# sourceMappingURL=144.1cd15479.chunk.js.map
(this["webpackJsonpcopernicus-react-arcgis-map"]=this["webpackJsonpcopernicus-react-arcgis-map"]||[]).push([[158],{647:function(t,e,r){"use strict";var a=r(2),o=r(3),i=r(4),n=r(5),s=r(0),c=(r(12),r(11),r(14),r(1)),p=r(6),u=(r(9),r(15),r(16),r(21)),f=r(62),O=function(t){Object(i.a)(r,t);var e=Object(n.a)(r);function r(t){var o;return Object(a.a)(this,r),(o=e.call(this,t)).geometries=null,o.outSpatialReference=null,o.transformation=null,o.transformForward=null,o}return Object(o.a)(r,[{key:"toJSON",value:function(){var t=this.geometries.map((function(t){return t.toJSON()})),e=this.geometries[0],r={};return r.outSR=this.outSpatialReference.wkid||JSON.stringify(this.outSpatialReference.toJSON()),r.inSR=e.spatialReference.wkid||JSON.stringify(e.spatialReference.toJSON()),r.geometries=JSON.stringify({geometryType:Object(f.c)(e),geometries:t}),this.transformation&&(r.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),null!=this.transformForward&&(r.transformForward=this.transformForward),r}}]),r}(u.a);Object(s.a)([Object(c.b)()],O.prototype,"geometries",void 0),Object(s.a)([Object(c.b)({json:{read:{source:"outSR"}}})],O.prototype,"outSpatialReference",void 0),Object(s.a)([Object(c.b)()],O.prototype,"transformation",void 0),Object(s.a)([Object(c.b)()],O.prototype,"transformForward",void 0);var m=O=Object(s.a)([Object(p.a)("esri.tasks.support.ProjectParameters")],O);e.a=m}}]);
//# sourceMappingURL=158.55454909.chunk.js.map
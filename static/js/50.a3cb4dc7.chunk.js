(this["webpackJsonpcopernicus-react-arcgis-map"]=this["webpackJsonpcopernicus-react-arcgis-map"]||[]).push([[50],{540:function(e,t,r){"use strict";var n,o=r(2),a=r(3),i=r(4),u=r(5),c=r(0),l=(r(12),r(19)),s=(r(11),r(14),r(1)),f=r(35),b=r(6),d=(r(9),r(15),r(16),r(21)),p=n=function(e){Object(i.a)(r,e);var t=Object(u.a)(r);function r(){var e;return Object(o.a)(this,r),(e=t.apply(this,arguments)).field=null,e.minValue=0,e.maxValue=255,e}return Object(a.a)(r,[{key:"clone",value:function(){return new n({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}}]),r}(d.a);Object(c.a)([Object(s.b)({type:String,json:{write:!0}})],p.prototype,"field",void 0),Object(c.a)([Object(s.b)({type:Number,nonNullable:!0,json:{write:!0}})],p.prototype,"minValue",void 0),Object(c.a)([Object(s.b)({type:Number,nonNullable:!0,json:{write:!0}})],p.prototype,"maxValue",void 0);var y=p=n=Object(c.a)([Object(b.a)("esri.renderers.support.pointCloud.ColorModulation")],p),v=new f.a({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"}),h=function(e){Object(i.a)(r,e);var t=Object(u.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return r}(d.a);Object(c.a)([Object(s.b)({type:v.apiValues,readOnly:!0,nonNullable:!0,json:{type:v.jsonValues,read:!1,write:v.write}})],h.prototype,"type",void 0);var O,j=h=Object(c.a)([Object(b.a)("esri.renderers.support.pointCloud.PointSizeAlgorithm")],h),w=r(31),g=O=function(e){Object(i.a)(r,e);var t=Object(u.a)(r);function r(){var e;return Object(o.a)(this,r),(e=t.apply(this,arguments)).type="fixed-size",e.size=0,e.useRealWorldSymbolSizes=null,e}return Object(a.a)(r,[{key:"clone",value:function(){return new O({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}}]),r}(j);Object(c.a)([Object(w.a)({pointCloudFixedSizeAlgorithm:"fixed-size"})],g.prototype,"type",void 0),Object(c.a)([Object(s.b)({type:Number,nonNullable:!0,json:{write:!0}})],g.prototype,"size",void 0),Object(c.a)([Object(s.b)({type:Boolean,json:{write:!0}})],g.prototype,"useRealWorldSymbolSizes",void 0);var m,C=g=O=Object(c.a)([Object(b.a)("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],g),M=m=function(e){Object(i.a)(r,e);var t=Object(u.a)(r);function r(){var e;return Object(o.a)(this,r),(e=t.apply(this,arguments)).type="splat",e.scaleFactor=1,e}return Object(a.a)(r,[{key:"clone",value:function(){return new m({scaleFactor:this.scaleFactor})}}]),r}(j);Object(c.a)([Object(w.a)({pointCloudSplatAlgorithm:"splat"})],M.prototype,"type",void 0),Object(c.a)([Object(s.b)({type:Number,value:1,nonNullable:!0,json:{write:!0}})],M.prototype,"scaleFactor",void 0);var T={key:"type",base:j,typeMap:{"fixed-size":C,splat:M=m=Object(c.a)([Object(b.a)("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],M)}},U=Object(f.b)()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"}),A=function(e){Object(i.a)(r,e);var t=Object(u.a)(r);function r(e){var n;return Object(o.a)(this,r),(n=t.call(this,e)).type=void 0,n.pointSizeAlgorithm=null,n.colorModulation=null,n.pointsPerInch=10,n}return Object(a.a)(r,[{key:"clone",value:function(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}},{key:"cloneProperties",value:function(){return{pointSizeAlgorithm:Object(l.a)(this.pointSizeAlgorithm),colorModulation:Object(l.a)(this.colorModulation),pointsPerInch:Object(l.a)(this.pointsPerInch)}}}]),r}(d.a);Object(c.a)([Object(s.b)({type:U.apiValues,readOnly:!0,nonNullable:!0,json:{type:U.jsonValues,read:!1,write:U.write}})],A.prototype,"type",void 0),Object(c.a)([Object(s.b)({types:T,json:{write:!0}})],A.prototype,"pointSizeAlgorithm",void 0),Object(c.a)([Object(s.b)({type:y,json:{write:!0}})],A.prototype,"colorModulation",void 0),Object(c.a)([Object(s.b)({json:{write:!0},nonNullable:!0,type:Number})],A.prototype,"pointsPerInch",void 0),A=Object(c.a)([Object(b.a)("esri.renderers.PointCloudRenderer")],A),(A||(A={})).fieldTransformTypeKebabDict=new f.a({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});var I=A;t.a=I},545:function(e,t,r){"use strict";function n(){return[1,0,0,0,1,0,0,0,1]}function o(e,t){return new Float64Array(e,t,9)}r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o}));Object.freeze({__proto__:null,create:n,clone:function(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]},fromValues:function(e,t,r,n,o,a,i,u,c){return[e,t,r,n,o,a,i,u,c]},createView:o})},559:function(e,t,r){"use strict";function n(){return[0,0,0,1]}function o(e,t){return new Float64Array(e,t,4)}r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o}));var a=[0,0,0,1];Object.freeze({__proto__:null,create:n,clone:function(e){return[e[0],e[1],e[2],e[3]]},fromValues:function(e,t,r,n){return[e,t,r,n]},createView:o,IDENTITY:a})},600:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return s}));var n=r(64),o=r(44),a=r(48),i=r(545),u=r(559),c=r(338);function l(e,t,r){r*=.5;var n=Math.sin(r);return e[0]=n*t[0],e[1]=n*t[1],e[2]=n*t[2],e[3]=Math.cos(r),e}function s(e,t){var r=2*Math.acos(t[3]),n=Math.sin(r/2);return n>o.a?(e[0]=t[0]/n,e[1]=t[1]/n,e[2]=t[2]/n):(e[0]=1,e[1]=0,e[2]=0),r}function f(e,t,r){var n=t[0],o=t[1],a=t[2],i=t[3],u=r[0],c=r[1],l=r[2],s=r[3];return e[0]=n*s+i*u+o*l-a*c,e[1]=o*s+i*c+a*u-n*l,e[2]=a*s+i*l+n*c-o*u,e[3]=i*s-n*u-o*c-a*l,e}function b(e,t,r,n){var a,i,u,c,l,s=t[0],f=t[1],b=t[2],d=t[3],p=r[0],y=r[1],v=r[2],h=r[3];return(i=s*p+f*y+b*v+d*h)<0&&(i=-i,p=-p,y=-y,v=-v,h=-h),1-i>o.a?(a=Math.acos(i),u=Math.sin(a),c=Math.sin((1-n)*a)/u,l=Math.sin(n*a)/u):(c=1-n,l=n),e[0]=c*s+l*p,e[1]=c*f+l*y,e[2]=c*b+l*v,e[3]=c*d+l*h,e}function d(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e}function p(e,t){var r,n=t[0]+t[4]+t[8];if(n>0)r=Math.sqrt(n+1),e[3]=.5*r,r=.5/r,e[0]=(t[5]-t[7])*r,e[1]=(t[6]-t[2])*r,e[2]=(t[1]-t[3])*r;else{var o=0;t[4]>t[0]&&(o=1),t[8]>t[3*o+o]&&(o=2);var a=(o+1)%3,i=(o+2)%3;r=Math.sqrt(t[3*o+o]-t[3*a+a]-t[3*i+i]+1),e[o]=.5*r,r=.5/r,e[3]=(t[3*a+i]-t[3*i+a])*r,e[a]=(t[3*a+o]+t[3*o+a])*r,e[i]=(t[3*i+o]+t[3*o+i])*r}return e}var y=c.c,v=c.k,h=c.a,O=f,j=c.b,w=c.d,g=c.i,m=c.e,C=m,M=c.f,T=M,U=c.j,A=c.g,I=c.h;var S=Object(n.e)(),V=Object(n.g)(1,0,0),z=Object(n.g)(0,1,0);var F=Object(u.a)(),k=Object(u.a)();var B=Object(i.a)();Object.freeze({__proto__:null,identity:function(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e},setAxisAngle:l,getAxisAngle:s,multiply:f,rotateX:function(e,t,r){r*=.5;var n=t[0],o=t[1],a=t[2],i=t[3],u=Math.sin(r),c=Math.cos(r);return e[0]=n*c+i*u,e[1]=o*c+a*u,e[2]=a*c-o*u,e[3]=i*c-n*u,e},rotateY:function(e,t,r){r*=.5;var n=t[0],o=t[1],a=t[2],i=t[3],u=Math.sin(r),c=Math.cos(r);return e[0]=n*c-a*u,e[1]=o*c+i*u,e[2]=a*c+n*u,e[3]=i*c-o*u,e},rotateZ:function(e,t,r){r*=.5;var n=t[0],o=t[1],a=t[2],i=t[3],u=Math.sin(r),c=Math.cos(r);return e[0]=n*c+o*u,e[1]=o*c-n*u,e[2]=a*c+i*u,e[3]=i*c-a*u,e},calculateW:function(e,t){var r=t[0],n=t[1],o=t[2];return e[0]=r,e[1]=n,e[2]=o,e[3]=Math.sqrt(Math.abs(1-r*r-n*n-o*o)),e},slerp:b,random:function(e){var t=Object(o.b)(),r=Object(o.b)(),n=Object(o.b)(),a=Math.sqrt(1-t),i=Math.sqrt(t);return e[0]=a*Math.sin(2*Math.PI*r),e[1]=a*Math.cos(2*Math.PI*r),e[2]=i*Math.sin(2*Math.PI*n),e[3]=i*Math.cos(2*Math.PI*n),e},invert:function(e,t){var r=t[0],n=t[1],o=t[2],a=t[3],i=r*r+n*n+o*o+a*a,u=i?1/i:0;return e[0]=-r*u,e[1]=-n*u,e[2]=-o*u,e[3]=a*u,e},conjugate:d,fromMat3:p,fromEuler:function(e,t,r,n){var o=.5*Math.PI/180;t*=o,r*=o,n*=o;var a=Math.sin(t),i=Math.cos(t),u=Math.sin(r),c=Math.cos(r),l=Math.sin(n),s=Math.cos(n);return e[0]=a*c*s-i*u*l,e[1]=i*u*s+a*c*l,e[2]=i*c*l-a*u*s,e[3]=i*c*s+a*u*l,e},str:function(e){return"quat("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"},copy:y,set:v,add:h,mul:O,scale:j,dot:w,lerp:g,length:m,len:C,squaredLength:M,sqrLen:T,normalize:U,exactEquals:A,equals:I,rotationTo:function(e,t,r){var n=Object(a.e)(t,r);return n<-.999999?(Object(a.d)(S,V,t),Object(a.k)(S)<1e-6&&Object(a.d)(S,z,t),Object(a.o)(S,S),l(e,S,Math.PI),e):n>.999999?(e[0]=0,e[1]=0,e[2]=0,e[3]=1,e):(Object(a.d)(S,t,r),e[0]=S[0],e[1]=S[1],e[2]=S[2],e[3]=1+n,U(e,e))},sqlerp:function(e,t,r,n,o,a){return b(F,t,o,a),b(k,r,n,a),b(e,F,k,2*a*(1-a)),e},setAxes:function(e,t,r,n){var o=B;return o[0]=r[0],o[3]=r[1],o[6]=r[2],o[1]=n[0],o[4]=n[1],o[7]=n[2],o[2]=-t[0],o[5]=-t[1],o[8]=-t[2],U(e,p(e,o))}})},601:function(e,t,r){"use strict";function n(){return new Float32Array(3)}function o(e,t,r){var n=new Float32Array(3);return n[0]=e,n[1]=t,n[2]=r,n}function a(){return n()}function i(){return o(1,1,1)}function u(){return o(1,0,0)}function c(){return o(0,1,0)}function l(){return o(0,0,1)}r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o}));var s=a(),f=i(),b=u(),d=c(),p=l();Object.freeze({__proto__:null,create:n,clone:function(e){var t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t},fromValues:o,createView:function(e,t){return new Float32Array(e,t,3)},zeros:a,ones:i,unitX:u,unitY:c,unitZ:l,ZEROS:s,ONES:f,UNIT_X:b,UNIT_Y:d,UNIT_Z:p})},669:function(e,t,r){"use strict";var n,o=r(13),a=r(2),i=r(3),u=r(4),c=r(5),l=r(0),s=(r(12),r(19)),f=(r(11),r(14),r(1)),b=r(31),d=r(6),p=(r(9),r(15),r(16),r(540)),y=r(236),v=r(388),h=n=function(e){Object(u.a)(r,e);var t=Object(c.a)(r);function r(e){var n;return Object(a.a)(this,r),(n=t.call(this,e)).type="point-cloud-stretch",n.field=null,n.legendOptions=null,n.fieldTransformType=null,n.stops=null,n}return Object(i.a)(r,[{key:"clone",value:function(){return new n(Object(o.a)(Object(o.a)({},this.cloneProperties()),{},{field:Object(s.a)(this.field),fieldTransformType:Object(s.a)(this.fieldTransformType),stops:Object(s.a)(this.stops),legendOptions:Object(s.a)(this.legendOptions)}))}}]),r}(p.a);Object(l.a)([Object(b.a)({pointCloudStretchRenderer:"point-cloud-stretch"})],h.prototype,"type",void 0),Object(l.a)([Object(f.b)({json:{write:!0},type:String})],h.prototype,"field",void 0),Object(l.a)([Object(f.b)({type:y.a,json:{write:!0}})],h.prototype,"legendOptions",void 0),Object(l.a)([Object(f.b)({type:p.a.fieldTransformTypeKebabDict.apiValues,json:{type:p.a.fieldTransformTypeKebabDict.jsonValues,read:p.a.fieldTransformTypeKebabDict.read,write:p.a.fieldTransformTypeKebabDict.write}})],h.prototype,"fieldTransformType",void 0),Object(l.a)([Object(f.b)({type:[v.a],json:{write:!0}})],h.prototype,"stops",void 0);var O=h=n=Object(l.a)([Object(d.a)("esri.renderers.PointCloudStretchRenderer")],h);t.a=O},699:function(e,t,r){"use strict";var n,o=r(13),a=r(2),i=r(3),u=r(4),c=r(5),l=r(0),s=(r(12),r(19)),f=(r(11),r(14)),b=r(1),d=r(31),p=r(6),y=(r(9),r(15),r(16),r(540)),v=r(236),h=r(21),O=r(32),j=n=function(e){Object(u.a)(r,e);var t=Object(c.a)(r);function r(){var e;return Object(a.a)(this,r),(e=t.apply(this,arguments)).description=null,e.label=null,e.minValue=0,e.maxValue=0,e.color=null,e}return Object(i.a)(r,[{key:"clone",value:function(){return new n({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:Object(s.a)(this.color)})}}]),r}(h.a);Object(l.a)([Object(b.b)({type:String,json:{write:!0}})],j.prototype,"description",void 0),Object(l.a)([Object(b.b)({type:String,json:{write:!0}})],j.prototype,"label",void 0),Object(l.a)([Object(b.b)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],j.prototype,"minValue",void 0),Object(l.a)([Object(b.b)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],j.prototype,"maxValue",void 0),Object(l.a)([Object(b.b)({type:O.a,json:{type:[f.a],write:!0}})],j.prototype,"color",void 0);var w,g=j=n=Object(l.a)([Object(p.a)("esri.renderers.support.pointCloud.ColorClassBreakInfo")],j),m=w=function(e){Object(u.a)(r,e);var t=Object(c.a)(r);function r(e){var n;return Object(a.a)(this,r),(n=t.call(this,e)).type="point-cloud-class-breaks",n.field=null,n.legendOptions=null,n.fieldTransformType=null,n.colorClassBreakInfos=null,n}return Object(i.a)(r,[{key:"clone",value:function(){return new w(Object(o.a)(Object(o.a)({},this.cloneProperties()),{},{field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:Object(s.a)(this.colorClassBreakInfos),legendOptions:Object(s.a)(this.legendOptions)}))}}]),r}(y.a);Object(l.a)([Object(d.a)({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],m.prototype,"type",void 0),Object(l.a)([Object(b.b)({json:{write:!0},type:String})],m.prototype,"field",void 0),Object(l.a)([Object(b.b)({type:v.a,json:{write:!0}})],m.prototype,"legendOptions",void 0),Object(l.a)([Object(b.b)({type:y.a.fieldTransformTypeKebabDict.apiValues,json:{type:y.a.fieldTransformTypeKebabDict.jsonValues,read:y.a.fieldTransformTypeKebabDict.read,write:y.a.fieldTransformTypeKebabDict.write}})],m.prototype,"fieldTransformType",void 0),Object(l.a)([Object(b.b)({type:[g],json:{write:!0}})],m.prototype,"colorClassBreakInfos",void 0);var C=m=w=Object(l.a)([Object(p.a)("esri.renderers.PointCloudClassBreaksRenderer")],m);t.a=C},700:function(e,t,r){"use strict";var n,o=r(13),a=r(2),i=r(3),u=r(4),c=r(5),l=r(0),s=(r(12),r(19)),f=(r(11),r(14)),b=r(1),d=r(31),p=r(6),y=(r(9),r(15),r(16),r(540)),v=r(236),h=r(21),O=r(32),j=n=function(e){Object(u.a)(r,e);var t=Object(c.a)(r);function r(){var e;return Object(a.a)(this,r),(e=t.apply(this,arguments)).description=null,e.label=null,e.values=null,e.color=null,e}return Object(i.a)(r,[{key:"clone",value:function(){return new n({description:this.description,label:this.label,values:Object(s.a)(this.values),color:Object(s.a)(this.color)})}}]),r}(h.a);Object(l.a)([Object(b.b)({type:String,json:{write:!0}})],j.prototype,"description",void 0),Object(l.a)([Object(b.b)({type:String,json:{write:!0}})],j.prototype,"label",void 0),Object(l.a)([Object(b.b)({type:[String],json:{write:!0}})],j.prototype,"values",void 0),Object(l.a)([Object(b.b)({type:O.a,json:{type:[f.a],write:!0}})],j.prototype,"color",void 0);var w,g=j=n=Object(l.a)([Object(p.a)("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],j),m=w=function(e){Object(u.a)(r,e);var t=Object(c.a)(r);function r(e){var n;return Object(a.a)(this,r),(n=t.call(this,e)).type="point-cloud-unique-value",n.field=null,n.fieldTransformType=null,n.colorUniqueValueInfos=null,n.legendOptions=null,n}return Object(i.a)(r,[{key:"clone",value:function(){return new w(Object(o.a)(Object(o.a)({},this.cloneProperties()),{},{field:Object(s.a)(this.field),fieldTransformType:Object(s.a)(this.fieldTransformType),colorUniqueValueInfos:Object(s.a)(this.colorUniqueValueInfos),legendOptions:Object(s.a)(this.legendOptions)}))}}]),r}(y.a);Object(l.a)([Object(d.a)({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],m.prototype,"type",void 0),Object(l.a)([Object(b.b)({json:{write:!0},type:String})],m.prototype,"field",void 0),Object(l.a)([Object(b.b)({type:y.a.fieldTransformTypeKebabDict.apiValues,json:{type:y.a.fieldTransformTypeKebabDict.jsonValues,read:y.a.fieldTransformTypeKebabDict.read,write:y.a.fieldTransformTypeKebabDict.write}})],m.prototype,"fieldTransformType",void 0),Object(l.a)([Object(b.b)({type:[g],json:{write:!0}})],m.prototype,"colorUniqueValueInfos",void 0),Object(l.a)([Object(b.b)({type:v.a,json:{write:!0}})],m.prototype,"legendOptions",void 0);var C=m=w=Object(l.a)([Object(p.a)("esri.renderers.PointCloudUniqueValueRenderer")],m);t.a=C},902:function(e,t,r){"use strict";r.r(t);var n=r(10),o=r(2),a=r(3),i=r(108),u=r(7),c=r(34),l=r(48),s=r(213),f=r(600),b=r(601);function d(){var e=new Float32Array(4);return e[3]=1,e}Object.freeze({__proto__:null,create:d,clone:function(e){var t=new Float32Array(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t},fromValues:function(e,t,r,n){var o=new Float32Array(4);return o[0]=e,o[1]=t,o[2]=r,o[3]=n,o},createView:function(e,t){return new Float32Array(e,t,4)}});var p=r(699),y=r(669),v=r(700),h=r(17),O=!0,j=0,w=10,g=10,m=12,C=16;function M(e,t,r){return{identifier:String.fromCharCode.apply(null,new Uint8Array(e,r+j,w)),version:t.getUint16(r+g,O),checksum:t.getUint32(r+m,O)}}var T=0,U=4,A=8,I=16,S=24,V=32,z=40,F=48,k=56,B=64,x=72,D=80,P=84,_=88;function R(e){var t=new DataView(e,0),r=0,n=M(e,t,r),o=n.identifier,a=n.version;if(r+=C,"LEPCC     "!==o)throw new h.a("lepcc-decode-error","Bad identifier");if(a>1)throw new h.a("lepcc-decode-error","Unknown version");var i,u,c=(u=r,{sizeLo:(i=t).getUint32(u+T,O),sizeHi:i.getUint32(u+U,O),minX:i.getFloat64(u+A,O),minY:i.getFloat64(u+I,O),minZ:i.getFloat64(u+S,O),maxX:i.getFloat64(u+V,O),maxY:i.getFloat64(u+z,O),maxZ:i.getFloat64(u+F,O),errorX:i.getFloat64(u+k,O),errorY:i.getFloat64(u+B,O),errorZ:i.getFloat64(u+x,O),count:i.getUint32(u+D,O),reserved:i.getUint32(u+P,O)});if(r+=_,c.sizeHi*Math.pow(2,32)+c.sizeLo!==e.byteLength)throw new h.a("lepcc-decode-error","Bad size");var l=new Float64Array(3*c.count),s=[],f=[],b=[],d=[];if(r=q(e,r,s),r=q(e,r,f),r=q(e,r,b),(r=q(e,r,d))!==e.byteLength)throw new h.a("lepcc-decode-error","Bad length");for(var p=0,y=0,v=0;v<s.length;v++){y+=s[v];for(var j=0,w=0;w<f[v];w++){j+=b[p];var g=d[p];l[3*p]=Math.min(c.maxX,c.minX+2*c.errorX*j),l[3*p+1]=Math.min(c.maxY,c.minY+2*c.errorY*y),l[3*p+2]=Math.min(c.maxZ,c.minZ+2*c.errorZ*g),p++}}return{errorX:c.errorX,errorY:c.errorY,errorZ:c.errorZ,result:l}}function q(e,t,r){var n=[];t=N(e,t,n);for(var o=[],a=0;a<n.length;a++){o.length=0,t=N(e,t,o);for(var i=0;i<o.length;i++)r.push(o[i]+n[a])}return t}function N(e,t,r){var n=new DataView(e,t),o=n.getUint8(0),a=31&o,i=!!(32&o),u=(192&o)>>6,c=0;if(0===u)c=n.getUint32(1,O),t+=5;else if(1===u)c=n.getUint16(1,O),t+=3;else{if(2!==u)throw new h.a("lepcc-decode-error","Bad count type");c=n.getUint8(1),t+=2}if(i)throw new h.a("lepcc-decode-error","LUT not implemented");for(var l=Math.ceil(c*a/8),s=new Uint8Array(e,t,l),f=0,b=0,d=0,p=-1>>>32-a,y=0;y<c;y++){for(;b<a;)f|=s[d]<<b,b+=8,d+=1;r[y]=f&p,f>>>=a,(b-=a)+a>32&&(f|=s[d-1]>>8-b)}return t+d}var E=0,L=4,Y=8,Z=12,K=14,X=15,J=16;function W(e){var t=new DataView(e,0),r=0,n=M(e,t,r),o=n.identifier,a=n.version;if(r+=C,"ClusterRGB"!==o)throw new h.a("lepcc-decode-error","Bad identifier");if(a>1)throw new h.a("lepcc-decode-error","Unknown version");var i,u,c=(u=r,{sizeLo:(i=t).getUint32(u+E,O),sizeHi:i.getUint32(u+L,O),count:i.getUint32(u+Y,O),colorMapCount:i.getUint16(u+Z,O),lookupMethod:i.getUint8(u+K),compressionMethod:i.getUint8(u+X)});if(r+=J,c.sizeHi*Math.pow(2,32)+c.sizeLo!==e.byteLength)throw new h.a("lepcc-decode-error","Bad size");if((2===c.lookupMethod||1===c.lookupMethod)&&0===c.compressionMethod){if(3*c.colorMapCount+c.count+r!==e.byteLength||c.colorMapCount>256)throw new h.a("lepcc-decode-error","Bad count");for(var l=new Uint8Array(e,r,3*c.colorMapCount),s=new Uint8Array(e,r+3*c.colorMapCount,c.count),f=new Uint8Array(3*c.count),b=0;b<c.count;b++){var d=s[b];f[3*b]=l[3*d],f[3*b+1]=l[3*d+1],f[3*b+2]=l[3*d+2]}return f}if(0===c.lookupMethod&&0===c.compressionMethod){if(3*c.count+r!==e.byteLength||0!==c.colorMapCount)throw new h.a("lepcc-decode-error","Bad count");return new Uint8Array(e,r).slice()}if(c.lookupMethod<=2&&1===c.compressionMethod){if(r+3!==e.byteLength||1!==c.colorMapCount)throw new h.a("lepcc-decode-error","Bad count");for(var p=t.getUint8(r),y=t.getUint8(r+1),v=t.getUint8(r+2),j=new Uint8Array(3*c.count),w=0;w<c.count;w++)j[3*w]=p,j[3*w+1]=y,j[3*w+2]=v;return j}throw new h.a("lepcc-decode-error","Bad method "+c.lookupMethod+","+c.compressionMethod)}var H=0,G=4,Q=8,$=12,ee=14,te=15,re=16;function ne(e){var t=new DataView(e,0),r=0,n=M(e,t,r),o=n.identifier,a=n.version;if(r+=C,"Intensity "!==o)throw new h.a("lepcc-decode-error","Bad identifier");if(a>1)throw new h.a("lepcc-decode-error","Unknown version");var i,u,c=(u=r,{sizeLo:(i=t).getUint32(u+H,O),sizeHi:i.getUint32(u+G,O),count:i.getUint32(u+Q,O),scaleFactor:i.getUint16(u+$,O),bitsPerPoint:i.getUint8(u+ee),reserved:i.getUint8(u+te)});if(r+=re,c.sizeHi*Math.pow(2,32)+c.sizeLo!==e.byteLength)throw new h.a("lepcc-decode-error","Bad size");var l=new Uint16Array(c.count);if(8===c.bitsPerPoint){if(c.count+r!==e.byteLength)throw new h.a("lepcc-decode-error","Bad size");for(var s=new Uint8Array(e,r,c.count),f=0;f<c.count;f++)l[f]=s[f]*c.scaleFactor}else if(16===c.bitsPerPoint){if(2*c.count+r!==e.byteLength)throw new h.a("lepcc-decode-error","Bad size");for(var b=new Uint16Array(e,r,c.count),d=0;d<c.count;d++)l[d]=b[d]*c.scaleFactor}else{var p=[];if(N(e,r,p)!==e.byteLength)throw new h.a("lepcc-decode-error","Bad size");for(var y=0;y<c.count;y++)l[y]=p[y]*c.scaleFactor}return l}var oe=r(13),ae=r(19),ie=r(11).a.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function ue(e,t,r){for(var n="",o=0;o<r;){var a=e[t+o];if(a<128)n+=String.fromCharCode(a),o++;else if(a>=192&&a<224){if(o+1>=r)throw new h.a("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");var i=(31&a)<<6|63&e[t+o+1];n+=String.fromCharCode(i),o+=2}else if(a>=224&&a<240){if(o+2>=r)throw new h.a("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");var u=(15&a)<<12|(63&e[t+o+1])<<6|63&e[t+o+2];n+=String.fromCharCode(u),o+=3}else{if(!(a>=240&&a<248))throw new h.a("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");if(o+3>=r)throw new h.a("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");var c=(7&a)<<18|(63&e[t+o+1])<<12|(63&e[t+o+2])<<6|63&e[t+o+3];if(c>=65536){var l=55296+(c-65536>>10),s=56320+(1023&c);n+=String.fromCharCode(l,s)}else n+=String.fromCharCode(c);o+=4}}return n}function ce(e,t){for(var r={byteOffset:0,byteCount:0,fields:Object.create(null)},n=0,o=0;o<t.length;o++){var a=t[o],i=a.valueType||a.type,u=pe[i];r.fields[a.property]=u(e,n),n+=de[i].BYTES_PER_ELEMENT}return r.byteCount=n,r}function le(e,t){return new(0,de[t.valueType])(e,t.byteOffset,t.count*t.valuesPerElement)}function se(e,t,r){if(t!==e&&ie.error("Invalid ".concat(r," buffer size\n expected: ").concat(e,", actual: ").concat(t,")")),t<e)throw new h.a("buffer-too-small","Binary buffer is too small",{expectedSize:e,actualSize:t})}var fe={position:"position",normal:"normal",color:"color",uv0:"uv0",region:"uvRegion"};function be(e,t,r){if("lepcc-rgb"===e.encoding)return W(t);if("lepcc-intensity"===e.encoding)return ne(t);if(null!=e.encoding&&""!==e.encoding)throw new h.a("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");e["attributeByteCounts "]&&!e.attributeByteCounts&&(ie.warn("Warning: Trailing space in 'attributeByteCounts '."),e.attributeByteCounts=e["attributeByteCounts "]),"ObjectIds"===e.ordering[0]&&e.hasOwnProperty("objectIds")&&(ie.warn("Warning: Case error in objectIds"),e.ordering[0]="objectIds");var n=function(e,t,r){for(var n=null!=t.header?ce(e,t.header):{byteOffset:0,byteCount:0,fields:{count:r}},o={header:n,byteOffset:n.byteCount,byteCount:0,entries:Object.create(null)},a=n.byteCount,i=0;i<t.ordering.length;i++){var u=t.ordering[i],c=Object(ae.a)(t[u]);if(c.count=n.fields.count,"String"===c.valueType){if(c.byteOffset=a,c.byteCount=n.fields[u+"ByteCount"],"UTF-8"!==c.encoding)throw new h.a("unsupported-encoding","Unsupported String encoding.",{encoding:c.encoding})}else{if(!ye(c.valueType))throw new h.a("unsupported-value-type","Unsupported binary valueType",{valueType:c.valueType});var l=ve(c.valueType);a+=a%l!=0?l-a%l:0,c.byteOffset=a,c.byteCount=l*c.valuesPerElement*c.count}a+=c.byteCount,o.entries[u]=c}return o.byteCount=a-o.byteOffset,o}(t,e,r);se(n.byteOffset+n.byteCount,t.byteLength,"attribute");var o=n.entries.attributeValues||n.entries.objectIds;if(o){if("String"===o.valueType){var a=n.entries.attributeByteCounts,i=le(t,a),u=function(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}(t,o);return function(e,t,r){var n,o,a=[],i=0;for(o=0;o<e;o+=1){if((n=t[o])>0){if(a.push(ue(r,i,n-1)),0!==r[i+n-1])throw new h.a("string-array-error","Invalid string array: missing null termination.")}else a.push(null);i+=n}return a}(a.count,i,u)}return le(t,o)}throw new h.a("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}var de={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},pe={Float32:function(e,t){return new DataView(e,0).getFloat32(t,!0)},Float64:function(e,t){return new DataView(e,0).getFloat64(t,!0)},UInt8:function(e,t){return new DataView(e,0).getUint8(t)},Int8:function(e,t){return new DataView(e,0).getInt8(t)},UInt16:function(e,t){return new DataView(e,0).getUint16(t,!0)},Int16:function(e,t){return new DataView(e,0).getInt16(t,!0)},UInt32:function(e,t){return new DataView(e,0).getUint32(t,!0)},Int32:function(e,t){return new DataView(e,0).getInt32(t,!0)}};function ye(e){return de.hasOwnProperty(e)}function ve(e){return ye(e)?de[e].BYTES_PER_ELEMENT:0}function he(e,t){if(null==e.encoding||""===e.encoding){var r=function(e,t){var r,o=ce(e,t&&t.header),a=o.byteCount,i={isDraco:!1,header:o,byteOffset:o.byteCount,byteCount:0,vertexAttributes:{}},u=o.fields,c=null!=u.vertexCount?u.vertexCount:u.count,l=Object(n.a)(t.ordering);try{for(l.s();!(r=l.n()).done;){var s=r.value;if(t.vertexAttributes[s]){var f=Object(oe.a)(Object(oe.a)({},t.vertexAttributes[s]),{},{byteOffset:a,count:c}),b=fe[s]?fe[s]:"_"+s;i.vertexAttributes[b]=f,a+=ve(f.valueType)*f.valuesPerElement*c}}}catch(C){l.e(C)}finally{l.f()}var d=u.faceCount;if(t.faces&&d){i.faces={};var p,y=Object(n.a)(t.ordering);try{for(y.s();!(p=y.n()).done;){var v=p.value;if(t.faces[v]){var h=Object(oe.a)(Object(oe.a)({},t.faces[v]),{},{byteOffset:a,count:d});i.faces[v]=h,a+=ve(h.valueType)*h.valuesPerElement*d}}}catch(C){y.e(C)}finally{y.f()}}var O=u.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&O){i.featureAttributes={};var j,w=Object(n.a)(t.featureAttributeOrder);try{for(w.s();!(j=w.n()).done;){var g=j.value;if(t.featureAttributes[g]){var m=Object(oe.a)(Object(oe.a)({},t.featureAttributes[g]),{},{byteOffset:a,count:O});i.featureAttributes[g]=m,a+=("UInt64"===m.valueType?8:ve(m.valueType))*m.valuesPerElement*O}}}catch(C){w.e(C)}finally{w.f()}}return se(a,e.byteLength,"geometry"),i.byteCount=a-i.byteOffset,i}(t,e);if(Object(u.h)(r.vertexAttributes.position))return;for(var o=le(t,r.vertexAttributes.position),a=r.header.fields,i=[a.offsetX,a.offsetY,a.offsetZ],c=[a.scaleX,a.scaleY,a.scaleZ],l=o.length/3,s=new Float64Array(3*l),f=0;f<l;f++)s[3*f]=o[3*f]*c[0]+i[0],s[3*f+1]=o[3*f+1]*c[1]+i[1],s[3*f+2]=o[3*f+2]*c[2]+i[2];return s}if("lepcc-xyz"===e.encoding)return R(t).result}function Oe(e,t,r){return Object(u.i)(e)&&e.attributeInfo.useElevation?function(e,t){for(var r=new Float64Array(t),n=0;n<t;n++)r[n]=e[3*n+2];return r}(t,r):Object(u.i)(e)?be(e.attributeInfo.storageInfo,e.buffer,r):null}function je(e){return null==e||"none"===e?null:"low-four-bit"===e?function(e){return 15&e}:"high-four-bit"===e?function(e){return(240&e)>>4}:"absolute-value"===e?function(e){return Math.abs(e)}:"modulo-ten"===e?function(e){return e%10}:null}function we(e){var t,r=0,o=Object(n.a)(e||[]);try{for(o.s();!(t=o.n()).done;){r|=1<<t.value}}catch(a){o.e(a)}finally{o.f()}return r}var ge=function(){function e(){Object(o.a)(this,e)}return Object(a.a)(e,[{key:"transform",value:function(e){var t=this._transform(e),r=[t.points.buffer,t.rgb.buffer];Object(u.i)(t.pointIdFilterMap)&&r.push(t.pointIdFilterMap.buffer);var o,a=Object(n.a)(t.attributes);try{for(a.s();!(o=a.n()).done;){var c=o.value;"buffer"in c.values&&Object(i.c)(c.values.buffer)&&c.values.buffer!==t.rgb.buffer&&r.push(c.values.buffer)}}catch(l){a.e(l)}finally{a.f()}return Promise.resolve({result:t,transferList:r})}},{key:"_transform",value:function(e){var t=he(e.schema,e.geometryBuffer),r=t.length/3,o=null,a=[],i=Oe(e.primaryAttributeData,t,r);Object(u.i)(e.primaryAttributeData)&&i&&a.push({attributeInfo:e.primaryAttributeData.attributeInfo,values:i});var l=Oe(e.modulationAttributeData,t,r);Object(u.i)(e.modulationAttributeData)&&l&&a.push({attributeInfo:e.modulationAttributeData.attributeInfo,values:l});var s=function(e,t,r,n){var o=e.rendererJSON,a=e.isRGBRenderer,i=null,u=null;if(t&&a)i=t;else if(t&&"pointCloudUniqueValueRenderer"===o.type){var c=(u=v.a.fromJSON(o)).colorUniqueValueInfos;i=new Uint8Array(3*n);for(var l=je(u.fieldTransformType),s=0;s<n;s++)for(var f=(l?l(t[s]):t[s])+"",b=0;b<c.length;b++)if(c[b].values.indexOf(f)>=0){i[3*s]=c[b].color.r,i[3*s+1]=c[b].color.g,i[3*s+2]=c[b].color.b;break}}else if(t&&"pointCloudStretchRenderer"===o.type){var d=(u=y.a.fromJSON(o)).stops;i=new Uint8Array(3*n);for(var h=je(u.fieldTransformType),O=0;O<n;O++){var j=h?h(t[O]):t[O],w=d.length-1;if(j<d[0].value)i[3*O]=d[0].color.r,i[3*O+1]=d[0].color.g,i[3*O+2]=d[0].color.b;else if(j>=d[w].value)i[3*O]=d[w].color.r,i[3*O+1]=d[w].color.g,i[3*O+2]=d[w].color.b;else for(var g=1;g<d.length;g++)if(j<d[g].value){var m=(j-d[g-1].value)/(d[g].value-d[g-1].value);i[3*O]=d[g].color.r*m+d[g-1].color.r*(1-m),i[3*O+1]=d[g].color.g*m+d[g-1].color.g*(1-m),i[3*O+2]=d[g].color.b*m+d[g-1].color.b*(1-m);break}}}else if(t&&"pointCloudClassBreaksRenderer"===o.type){var C=(u=p.a.fromJSON(o)).colorClassBreakInfos;i=new Uint8Array(3*n);for(var M=je(u.fieldTransformType),T=0;T<n;T++)for(var U=M?M(t[T]):t[T],A=0;A<C.length;A++)if(U>=C[A].minValue&&U<=C[A].maxValue){i[3*T]=C[A].color.r,i[3*T+1]=C[A].color.g,i[3*T+2]=C[A].color.b;break}}else{i=new Uint8Array(3*n);for(var I=0;I<i.length;I++)i[I]=255}if(r&&u&&u.colorModulation)for(var S=u.colorModulation.minValue,V=u.colorModulation.maxValue,z=0;z<n;z++){var F=r[z],k=F>=V?1:F<=S?.3:.3+.7*(F-S)/(V-S);i[3*z]=k*i[3*z],i[3*z+1]=k*i[3*z+1],i[3*z+2]=k*i[3*z+2]}return i}(e.rendererInfo,i,l,r);if(e.filterInfo&&e.filterInfo.length>0&&Object(u.i)(e.filterAttributesData)){var f=e.filterAttributesData.map((function(e){var n=Oe(e,t,r),o={attributeInfo:e.attributeInfo,values:n};return a.push(o),o}));o=new Uint32Array(r),r=function(e,t,r,o,a){for(var i=e.length/3,u=0,c=0;c<i;c++){for(var l=!0,s=0;s<o.length&&l;s++){var f=o[s].filterJSON,b=a[s].values[c];switch(f.type){case"pointCloudValueFilter":var d="exclude"===f.mode;-1!==f.values.indexOf(b)===d&&(l=!1);break;case"pointCloudBitfieldFilter":var p=we(f.requiredSetBits),y=we(f.requiredClearBits);(b&p)===p&&0==(b&y)||(l=!1);break;case"pointCloudReturnFilter":var v,h=15&b,O=b>>>4&15,j=O>1,w=1===h,g=h===O,m=!1,C=Object(n.a)(f.includedReturns);try{for(C.s();!(v=C.n()).done;){var M=v.value;if("last"===M&&g||"firstOfMany"===M&&w&&j||"lastOfMany"===M&&g&&j||"single"===M&&!j){m=!0;break}}}catch(T){C.e(T)}finally{C.f()}m||(l=!1)}}l&&(r[u]=c,e[3*u]=e[3*c],e[3*u+1]=e[3*c+1],e[3*u+2]=e[3*c+2],t[3*u]=t[3*c],t[3*u+1]=t[3*c+1],t[3*u+2]=t[3*c+2],u++)}return u}(t,s,o,e.filterInfo,f)}var b,d=Object(n.a)(e.userAttributesData);try{for(d.s();!(b=d.n()).done;){var h=b.value,O=Oe(h,t,r);a.push({attributeInfo:h.attributeInfo,values:O})}}catch(w){d.e(w)}finally{d.f()}3*r<s.length&&(s=new Uint8Array(s.buffer.slice(0,3*r))),this._applyElevationOffsetInPlace(t,r,e.elevationOffset);var j=this._transformCoordinates(t,r,e.obb,c.a.fromJSON(e.inSR),c.a.fromJSON(e.outSR));return{obb:e.obb,points:j,rgb:s,attributes:a,pointIdFilterMap:o}}},{key:"_transformCoordinates",value:function(e,t,r,n,o){if(!Object(s.i)(e,n,0,e,o,0,t))throw Error("Can't reproject");var a=Object(b.b)(r.center[0],r.center[1],r.center[2]),i=Object(b.a)(),u=Object(b.a)();Object(f.a)(me,r.quaternion);for(var c=new Float32Array(3*t),d=0;d<t;d++)i[0]=e[3*d]-a[0],i[1]=e[3*d+1]-a[1],i[2]=e[3*d+2]-a[2],Object(l.q)(u,i,me),r.halfSize[0]=Math.max(r.halfSize[0],Math.abs(u[0])),r.halfSize[1]=Math.max(r.halfSize[1],Math.abs(u[1])),r.halfSize[2]=Math.max(r.halfSize[2],Math.abs(u[2])),c[3*d]=i[0],c[3*d+1]=i[1],c[3*d+2]=i[2];return c}},{key:"_applyElevationOffsetInPlace",value:function(e,t,r){if(0!==r)for(var n=0;n<t;n++)e[3*n+2]+=r}}]),e}(),me=d();t.default=function(){return new ge}}}]);
//# sourceMappingURL=50.a3cb4dc7.chunk.js.map
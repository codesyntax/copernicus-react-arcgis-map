(this["webpackJsonpcopernicus-react-arcgis-map"]=this["webpackJsonpcopernicus-react-arcgis-map"]||[]).push([[163],{811:function(e,t,i){"use strict";i.r(t),i.d(t,"Opacity",(function(){return n}));var r=i(2),s=i(3),a=(i(12),i(358),i(336),i(92)),n=(i(334),function(){function e(){Object(r.a)(this,e),this._size=[0,0]}return Object(s.a)(e,[{key:"dispose",value:function(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null)}},{key:"draw",value:function(e,t,i){var r=t.width,s=t.height;this._createOrResizeResources(e,r,s);var a=e.context,n=e.painter,u=i.amount,c=a.gl,l=this._layerFBOTexture;a.bindFramebuffer(t),t.copyToTexture(0,0,r,s,0,0,l),a.setBlendingEnabled(!0),a.setStencilTestEnabled(!1),a.setDepthTestEnabled(!1),a.setClearColor(0,0,0,0),a.clear(c.COLOR_BUFFER_BIT),n.blitTexture(a,l,9728,u)}},{key:"_createOrResizeResources",value:function(e,t,i){var r=e.context;this._layerFBOTexture&&this._size[0]===t&&this._size[1]===i||(this._size[0]=t,this._size[1]=i,this._layerFBOTexture?this._layerFBOTexture.resize(t,i):this._layerFBOTexture=new a.a(r,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9728,flipped:!1,width:t,height:i}))}}]),e}())}}]);
//# sourceMappingURL=163.6f900da8.chunk.js.map
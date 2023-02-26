// Created by iWeb 3.0.4 local-build-20230226

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-5,5,10,270),url:'Welcome_files/stroke.png'},{rect:new IWRect(-5,-5,10,10),url:'Welcome_files/stroke_1.png'},{rect:new IWRect(5,-5,389,10),url:'Welcome_files/stroke_2.png'},{rect:new IWRect(394,-5,10,10),url:'Welcome_files/stroke_3.png'},{rect:new IWRect(394,5,10,270),url:'Welcome_files/stroke_4.png'},{rect:new IWRect(394,275,10,10),url:'Welcome_files/stroke_5.png'},{rect:new IWRect(5,275,389,10),url:'Welcome_files/stroke_6.png'},{rect:new IWRect(-5,275,10,10),url:'Welcome_files/stroke_7.png'}],new IWSize(399,280))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Welcome_files/WelcomeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}

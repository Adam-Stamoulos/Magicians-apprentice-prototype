gdjs.StartCode = {};
gdjs.StartCode.GDBossCardObjects1= [];
gdjs.StartCode.GDBossCardObjects2= [];
gdjs.StartCode.GDCardObjects1= [];
gdjs.StartCode.GDCardObjects2= [];
gdjs.StartCode.GDMagicianBossObjects1= [];
gdjs.StartCode.GDMagicianBossObjects2= [];
gdjs.StartCode.GDEnemyObjects1= [];
gdjs.StartCode.GDEnemyObjects2= [];
gdjs.StartCode.GDStageArenaObjects1= [];
gdjs.StartCode.GDStageArenaObjects2= [];
gdjs.StartCode.GDBackgroundFloorObjects1= [];
gdjs.StartCode.GDBackgroundFloorObjects2= [];
gdjs.StartCode.GDBackgroundHighObjects1= [];
gdjs.StartCode.GDBackgroundHighObjects2= [];
gdjs.StartCode.GDAprenticeObjects1= [];
gdjs.StartCode.GDAprenticeObjects2= [];
gdjs.StartCode.GDBarrierObjects1= [];
gdjs.StartCode.GDBarrierObjects2= [];
gdjs.StartCode.GDCooldownObjects1= [];
gdjs.StartCode.GDCooldownObjects2= [];
gdjs.StartCode.GDHealthBorderObjects1= [];
gdjs.StartCode.GDHealthBorderObjects2= [];
gdjs.StartCode.GDHealthObjects1= [];
gdjs.StartCode.GDHealthObjects2= [];
gdjs.StartCode.GDBossHealthObjects1= [];
gdjs.StartCode.GDBossHealthObjects2= [];
gdjs.StartCode.GDBossBorderObjects1= [];
gdjs.StartCode.GDBossBorderObjects2= [];
gdjs.StartCode.GDBossAppearObjects1= [];
gdjs.StartCode.GDBossAppearObjects2= [];
gdjs.StartCode.GDWallsObjects1= [];
gdjs.StartCode.GDWallsObjects2= [];
gdjs.StartCode.GDBackgroundTempObjects1= [];
gdjs.StartCode.GDBackgroundTempObjects2= [];
gdjs.StartCode.GDStartBtnObjects1= [];
gdjs.StartCode.GDStartBtnObjects2= [];
gdjs.StartCode.GDStartObjects1= [];
gdjs.StartCode.GDStartObjects2= [];
gdjs.StartCode.GDControlsObjects1= [];
gdjs.StartCode.GDControlsObjects2= [];

gdjs.StartCode.conditionTrue_0 = {val:false};
gdjs.StartCode.condition0IsTrue_0 = {val:false};
gdjs.StartCode.condition1IsTrue_0 = {val:false};
gdjs.StartCode.condition2IsTrue_0 = {val:false};


gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDStartObjects1Objects = Hashtable.newFrom({"Start": gdjs.StartCode.GDStartObjects1});gdjs.StartCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.StartCode.GDStartObjects1);

gdjs.StartCode.condition0IsTrue_0.val = false;
gdjs.StartCode.condition1IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDStartObjects1Objects, runtimeScene, true, false);
}if ( gdjs.StartCode.condition0IsTrue_0.val ) {
{
gdjs.StartCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.StartCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};

gdjs.StartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartCode.GDBossCardObjects1.length = 0;
gdjs.StartCode.GDBossCardObjects2.length = 0;
gdjs.StartCode.GDCardObjects1.length = 0;
gdjs.StartCode.GDCardObjects2.length = 0;
gdjs.StartCode.GDMagicianBossObjects1.length = 0;
gdjs.StartCode.GDMagicianBossObjects2.length = 0;
gdjs.StartCode.GDEnemyObjects1.length = 0;
gdjs.StartCode.GDEnemyObjects2.length = 0;
gdjs.StartCode.GDStageArenaObjects1.length = 0;
gdjs.StartCode.GDStageArenaObjects2.length = 0;
gdjs.StartCode.GDBackgroundFloorObjects1.length = 0;
gdjs.StartCode.GDBackgroundFloorObjects2.length = 0;
gdjs.StartCode.GDBackgroundHighObjects1.length = 0;
gdjs.StartCode.GDBackgroundHighObjects2.length = 0;
gdjs.StartCode.GDAprenticeObjects1.length = 0;
gdjs.StartCode.GDAprenticeObjects2.length = 0;
gdjs.StartCode.GDBarrierObjects1.length = 0;
gdjs.StartCode.GDBarrierObjects2.length = 0;
gdjs.StartCode.GDCooldownObjects1.length = 0;
gdjs.StartCode.GDCooldownObjects2.length = 0;
gdjs.StartCode.GDHealthBorderObjects1.length = 0;
gdjs.StartCode.GDHealthBorderObjects2.length = 0;
gdjs.StartCode.GDHealthObjects1.length = 0;
gdjs.StartCode.GDHealthObjects2.length = 0;
gdjs.StartCode.GDBossHealthObjects1.length = 0;
gdjs.StartCode.GDBossHealthObjects2.length = 0;
gdjs.StartCode.GDBossBorderObjects1.length = 0;
gdjs.StartCode.GDBossBorderObjects2.length = 0;
gdjs.StartCode.GDBossAppearObjects1.length = 0;
gdjs.StartCode.GDBossAppearObjects2.length = 0;
gdjs.StartCode.GDWallsObjects1.length = 0;
gdjs.StartCode.GDWallsObjects2.length = 0;
gdjs.StartCode.GDBackgroundTempObjects1.length = 0;
gdjs.StartCode.GDBackgroundTempObjects2.length = 0;
gdjs.StartCode.GDStartBtnObjects1.length = 0;
gdjs.StartCode.GDStartBtnObjects2.length = 0;
gdjs.StartCode.GDStartObjects1.length = 0;
gdjs.StartCode.GDStartObjects2.length = 0;
gdjs.StartCode.GDControlsObjects1.length = 0;
gdjs.StartCode.GDControlsObjects2.length = 0;

gdjs.StartCode.eventsList0(runtimeScene);
return;

}

gdjs['StartCode'] = gdjs.StartCode;

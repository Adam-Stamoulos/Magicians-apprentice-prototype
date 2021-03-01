
gdjs.evtsExt__DungeonTools__BossWeapons = gdjs.evtsExt__DungeonTools__BossWeapons || {};

/**
 * Behavior generated from 
 */
gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons = class BossWeapons extends gdjs.RuntimeBehavior {
  constructor(runtimeScene, behaviorData, owner) {
    super(runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    

    return true;
  }

  // Properties:
  
}

// Methods:
gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext = {};
gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.GDObjectObjects1= [];
gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.GDObjectObjects2= [];
gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.GDObjectObjects3= [];
gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.GDCardObjects1= [];
gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.GDCardObjects2= [];
gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.GDCardObjects3= [];

gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.mapOfGDgdjs_46evtsExt_95_95DungeonTools_95_95BossWeapons_46BossWeapons_46prototype_46BossCardContext_46GDCardObjects1Objects = Hashtable.newFrom({"Card": gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.GDCardObjects1});gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.conditionTrue_1 = gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.condition0IsTrue_0;
gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.conditionTrue_1.val = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Flipped") : false);
}
}if (gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.GDCardObjects1, gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.GDCardObjects2);

{for(var i = 0, len = gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.GDCardObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.GDCardObjects2[i].addPolarForce(360, 750 * ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Phase")) || 0 : 0) / 2), 1);
}
}}

}


{


gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.conditionTrue_1 = gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.condition0IsTrue_0;
gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.conditionTrue_1.val = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Flipped") : false);
}
}if (gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.GDCardObjects1 */
{for(var i = 0, len = gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.GDCardObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.GDCardObjects1[i].addPolarForce(180, 750 * ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Phase")) || 0 : 0) / 2), 1);
}
}}

}


};gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.GDObjectObjects1);

gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.GDObjectObjects1[i].timerElapsedTime("Cooldown", 2.5 / (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Phase")) || 0 : 0)) ) {
        gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.GDObjectObjects1[k] = gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.GDObjectObjects1 */
gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.GDCardObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.mapOfGDgdjs_46evtsExt_95_95DungeonTools_95_95BossWeapons_46BossWeapons_46prototype_46BossCardContext_46GDCardObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("XPos")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("YPos")) || 0 : 0), "");
}{for(var i = 0, len = gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.GDObjectObjects1[i].resetTimer("Cooldown");
}
}
{ //Subevents
gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCard = function(Card, Flipped, XPos, YPos, Phase, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Card": Card
},
  _objectArraysMap: {
"Object": thisObjectList
, "Card": gdjs.objectsListsToArray(Card)
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Flipped") return Flipped;
if (argName === "XPos") return XPos;
if (argName === "YPos") return YPos;
if (argName === "Phase") return Phase;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.GDCardObjects1.length = 0;
gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.GDCardObjects2.length = 0;
gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.GDCardObjects3.length = 0;

gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.BossCardContext.eventsList1(runtimeScene, eventsFunctionContext);
return;
}

gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("DungeonTools::BossWeapons", gdjs.evtsExt__DungeonTools__BossWeapons.BossWeapons);

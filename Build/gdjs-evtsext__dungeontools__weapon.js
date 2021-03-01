
gdjs.evtsExt__DungeonTools__Weapon = gdjs.evtsExt__DungeonTools__Weapon || {};

/**
 * Behavior generated from 
 */
gdjs.evtsExt__DungeonTools__Weapon.Weapon = class Weapon extends gdjs.RuntimeBehavior {
  constructor(runtimeScene, behaviorData, owner) {
    super(runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    
    this._behaviorData.Cooldown = behaviorData.Cooldown !== undefined ? behaviorData.Cooldown : Number("1") || 0;
    this._behaviorData.Level = behaviorData.Level !== undefined ? behaviorData.Level : Number("1") || 0;
    this._behaviorData.Damage = behaviorData.Damage !== undefined ? behaviorData.Damage : Number("10") || 0;
    this._behaviorData.Type = behaviorData.Type !== undefined ? behaviorData.Type : "Ranged";
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Cooldown !== newBehaviorData.Cooldown)
      this._behaviorData.Cooldown = newBehaviorData.Cooldown;
    if (oldBehaviorData.Level !== newBehaviorData.Level)
      this._behaviorData.Level = newBehaviorData.Level;
    if (oldBehaviorData.Damage !== newBehaviorData.Damage)
      this._behaviorData.Damage = newBehaviorData.Damage;
    if (oldBehaviorData.Type !== newBehaviorData.Type)
      this._behaviorData.Type = newBehaviorData.Type;

    return true;
  }

  // Properties:
  
  _getCooldown() {
    return this._behaviorData.Cooldown !== undefined ? this._behaviorData.Cooldown : Number("1") || 0;
  }
  _setCooldown(newValue) {
    this._behaviorData.Cooldown = newValue;
  }
  _getLevel() {
    return this._behaviorData.Level !== undefined ? this._behaviorData.Level : Number("1") || 0;
  }
  _setLevel(newValue) {
    this._behaviorData.Level = newValue;
  }
  _getDamage() {
    return this._behaviorData.Damage !== undefined ? this._behaviorData.Damage : Number("10") || 0;
  }
  _setDamage(newValue) {
    this._behaviorData.Damage = newValue;
  }
  _getType() {
    return this._behaviorData.Type !== undefined ? this._behaviorData.Type : "Ranged";
  }
  _setType(newValue) {
    this._behaviorData.Type = newValue;
  }
}

// Methods:
gdjs.evtsExt__DungeonTools__Weapon.Weapon.prototype.AttackContext = {};
gdjs.evtsExt__DungeonTools__Weapon.Weapon.prototype.AttackContext.GDObjectObjects1= [];
gdjs.evtsExt__DungeonTools__Weapon.Weapon.prototype.AttackContext.GDObjectObjects2= [];

gdjs.evtsExt__DungeonTools__Weapon.Weapon.prototype.AttackContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DungeonTools__Weapon.Weapon.prototype.AttackContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__DungeonTools__Weapon.Weapon.prototype.AttackContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__DungeonTools__Weapon.Weapon.prototype.AttackContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__DungeonTools__Weapon.Weapon.prototype.AttackContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__DungeonTools__Weapon.Weapon.prototype.AttackContext.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__DungeonTools__Weapon.Weapon.prototype.AttackContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DungeonTools__Weapon.Weapon.prototype.AttackContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__DungeonTools__Weapon.Weapon.prototype.AttackContext.conditionTrue_1 = gdjs.evtsExt__DungeonTools__Weapon.Weapon.prototype.AttackContext.condition0IsTrue_0;
gdjs.evtsExt__DungeonTools__Weapon.Weapon.prototype.AttackContext.conditionTrue_1.val = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Right") : false);
}
}if (gdjs.evtsExt__DungeonTools__Weapon.Weapon.prototype.AttackContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DungeonTools__Weapon.Weapon.prototype.AttackContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DungeonTools__Weapon.Weapon.prototype.AttackContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DungeonTools__Weapon.Weapon.prototype.AttackContext.GDObjectObjects1[i].addPolarForce(0, 500, 1);
}
}}

}


{


gdjs.evtsExt__DungeonTools__Weapon.Weapon.prototype.AttackContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__DungeonTools__Weapon.Weapon.prototype.AttackContext.conditionTrue_1 = gdjs.evtsExt__DungeonTools__Weapon.Weapon.prototype.AttackContext.condition0IsTrue_0;
gdjs.evtsExt__DungeonTools__Weapon.Weapon.prototype.AttackContext.conditionTrue_1.val = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Right") : false);
}
}if (gdjs.evtsExt__DungeonTools__Weapon.Weapon.prototype.AttackContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DungeonTools__Weapon.Weapon.prototype.AttackContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DungeonTools__Weapon.Weapon.prototype.AttackContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DungeonTools__Weapon.Weapon.prototype.AttackContext.GDObjectObjects1[i].addPolarForce(180, 500, 1);
}
}}

}


};

gdjs.evtsExt__DungeonTools__Weapon.Weapon.prototype.Attack = function(Right, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
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
if (argName === "Right") return Right;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DungeonTools__Weapon.Weapon.prototype.AttackContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DungeonTools__Weapon.Weapon.prototype.AttackContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DungeonTools__Weapon.Weapon.prototype.AttackContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__DungeonTools__Weapon.Weapon.prototype.UpgradeContext = {};

gdjs.evtsExt__DungeonTools__Weapon.Weapon.prototype.UpgradeContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DungeonTools__Weapon.Weapon.prototype.UpgradeContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__DungeonTools__Weapon.Weapon.prototype.UpgradeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};

gdjs.evtsExt__DungeonTools__Weapon.Weapon.prototype.Upgrade = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};


gdjs.evtsExt__DungeonTools__Weapon.Weapon.prototype.UpgradeContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

gdjs.evtsExt__DungeonTools__Weapon.Weapon.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("DungeonTools::Weapon", gdjs.evtsExt__DungeonTools__Weapon.Weapon);

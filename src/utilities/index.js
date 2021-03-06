import attempt from "./attempt.js";
import parseHTML from "./parseHTML.js";
import pluck from "./pluck.js";
import unique from "./unique.js";
//import getScript from "./getScript.js";
//import grep from "./grep.js";
import merge from "./merge.js";
//import storage from "./storage.js";
import core from "../setup";
//import Queue from "./Queue";
import plainObject from "./plainObject";

core.attempt   = attempt;
core.parseHTML = parseHTML;
core.pluck     = pluck;
core.unique    = unique;
core.merge     = merge;
//core.grep      = grep;
/*
core.getScript   = getScript;
core.storage     = storage;
core.Queue       = Queue;
*/
core.plainObject = plainObject;

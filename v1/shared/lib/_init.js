//===============================================
// Initialize shared state (client and server)
//===============================================

// Global Scope (namespace)
DigitalHV = {};

// Global log function (debug)
// src=filename, msg=log message, data=arguments for log message
DigitalHV.log = function(src, msg, data){
	console.log("[" + (src || "-dhv-") +"] "+msg, data || "" );
}

// source: service.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.service.APIKey', null, global);
goog.exportSymbol('proto.service.AbuseChIOC', null, global);
goog.exportSymbol('proto.service.AbuseChScanResult', null, global);
goog.exportSymbol('proto.service.AbuseChSecurityResult', null, global);
goog.exportSymbol('proto.service.ActivateAPIKeyRequest', null, global);
goog.exportSymbol('proto.service.ActivateAPIKeyResponse', null, global);
goog.exportSymbol('proto.service.CalculateRiskScoreRequest', null, global);
goog.exportSymbol('proto.service.CalculateRiskScoreResponse', null, global);
goog.exportSymbol('proto.service.ChaosScanResult', null, global);
goog.exportSymbol('proto.service.ChaosSecurityResult', null, global);
goog.exportSymbol('proto.service.CreateAPIKeyRequest', null, global);
goog.exportSymbol('proto.service.CreateAPIKeyResponse', null, global);
goog.exportSymbol('proto.service.CreateUserRequest', null, global);
goog.exportSymbol('proto.service.CreateUserResponse', null, global);
goog.exportSymbol('proto.service.CrtShCertificate', null, global);
goog.exportSymbol('proto.service.CrtShScanResult', null, global);
goog.exportSymbol('proto.service.CrtShSecurityResult', null, global);
goog.exportSymbol('proto.service.DNSScanResult', null, global);
goog.exportSymbol('proto.service.DNSSecurityResult', null, global);
goog.exportSymbol('proto.service.DeactivateAPIKeyRequest', null, global);
goog.exportSymbol('proto.service.DeactivateAPIKeyResponse', null, global);
goog.exportSymbol('proto.service.DeleteUserRequest', null, global);
goog.exportSymbol('proto.service.DeleteUserResponse', null, global);
goog.exportSymbol('proto.service.GenerateReportRequest', null, global);
goog.exportSymbol('proto.service.GenerateReportResponse', null, global);
goog.exportSymbol('proto.service.GetAbuseChScanResultsByDomainRequest', null, global);
goog.exportSymbol('proto.service.GetAbuseChScanResultsByDomainResponse', null, global);
goog.exportSymbol('proto.service.GetChaosScanResultsByDomainRequest', null, global);
goog.exportSymbol('proto.service.GetChaosScanResultsByDomainResponse', null, global);
goog.exportSymbol('proto.service.GetCrtShScanResultsByDomainRequest', null, global);
goog.exportSymbol('proto.service.GetCrtShScanResultsByDomainResponse', null, global);
goog.exportSymbol('proto.service.GetDNSScanResultByIDRequest', null, global);
goog.exportSymbol('proto.service.GetDNSScanResultByIDResponse', null, global);
goog.exportSymbol('proto.service.GetDNSScanResultsByDomainRequest', null, global);
goog.exportSymbol('proto.service.GetDNSScanResultsByDomainResponse', null, global);
goog.exportSymbol('proto.service.GetISCScanResultsByDomainRequest', null, global);
goog.exportSymbol('proto.service.GetISCScanResultsByDomainResponse', null, global);
goog.exportSymbol('proto.service.GetOTXScanResultsByDomainRequest', null, global);
goog.exportSymbol('proto.service.GetOTXScanResultsByDomainResponse', null, global);
goog.exportSymbol('proto.service.GetReportByIdRequest', null, global);
goog.exportSymbol('proto.service.GetReportByIdResponse', null, global);
goog.exportSymbol('proto.service.GetShodanScanResultsByDomainRequest', null, global);
goog.exportSymbol('proto.service.GetShodanScanResultsByDomainResponse', null, global);
goog.exportSymbol('proto.service.GetTLSScanResultsByDomainRequest', null, global);
goog.exportSymbol('proto.service.GetTLSScanResultsByDomainResponse', null, global);
goog.exportSymbol('proto.service.GetUserRequest', null, global);
goog.exportSymbol('proto.service.GetUserResponse', null, global);
goog.exportSymbol('proto.service.GetWhoisScanResultsByDomainRequest', null, global);
goog.exportSymbol('proto.service.GetWhoisScanResultsByDomainResponse', null, global);
goog.exportSymbol('proto.service.ISCIncident', null, global);
goog.exportSymbol('proto.service.ISCScanResult', null, global);
goog.exportSymbol('proto.service.ISCSecurityResult', null, global);
goog.exportSymbol('proto.service.InviteUserRequest', null, global);
goog.exportSymbol('proto.service.InviteUserResponse', null, global);
goog.exportSymbol('proto.service.ListAPIKeysRequest', null, global);
goog.exportSymbol('proto.service.ListAPIKeysResponse', null, global);
goog.exportSymbol('proto.service.ListReportsRequest', null, global);
goog.exportSymbol('proto.service.ListReportsResponse', null, global);
goog.exportSymbol('proto.service.ListUsersRequest', null, global);
goog.exportSymbol('proto.service.ListUsersResponse', null, global);
goog.exportSymbol('proto.service.LoginRequest', null, global);
goog.exportSymbol('proto.service.LoginResponse', null, global);
goog.exportSymbol('proto.service.OTXGeneralInfo', null, global);
goog.exportSymbol('proto.service.OTXMalware', null, global);
goog.exportSymbol('proto.service.OTXPassiveDNS', null, global);
goog.exportSymbol('proto.service.OTXScanResult', null, global);
goog.exportSymbol('proto.service.OTXSecurityResult', null, global);
goog.exportSymbol('proto.service.OTXURL', null, global);
goog.exportSymbol('proto.service.Report', null, global);
goog.exportSymbol('proto.service.RotateAPIKeyRequest', null, global);
goog.exportSymbol('proto.service.RotateAPIKeyResponse', null, global);
goog.exportSymbol('proto.service.ScanAbuseChRequest', null, global);
goog.exportSymbol('proto.service.ScanAbuseChResponse', null, global);
goog.exportSymbol('proto.service.ScanChaosRequest', null, global);
goog.exportSymbol('proto.service.ScanChaosResponse', null, global);
goog.exportSymbol('proto.service.ScanCrtShRequest', null, global);
goog.exportSymbol('proto.service.ScanCrtShResponse', null, global);
goog.exportSymbol('proto.service.ScanDomainRequest', null, global);
goog.exportSymbol('proto.service.ScanDomainResponse', null, global);
goog.exportSymbol('proto.service.ScanISCRequest', null, global);
goog.exportSymbol('proto.service.ScanISCResponse', null, global);
goog.exportSymbol('proto.service.ScanOTXRequest', null, global);
goog.exportSymbol('proto.service.ScanOTXResponse', null, global);
goog.exportSymbol('proto.service.ScanShodanRequest', null, global);
goog.exportSymbol('proto.service.ScanShodanResponse', null, global);
goog.exportSymbol('proto.service.ScanTLSRequest', null, global);
goog.exportSymbol('proto.service.ScanTLSResponse', null, global);
goog.exportSymbol('proto.service.ScanWhoisRequest', null, global);
goog.exportSymbol('proto.service.ScanWhoisResponse', null, global);
goog.exportSymbol('proto.service.ShodanHost', null, global);
goog.exportSymbol('proto.service.ShodanLocation', null, global);
goog.exportSymbol('proto.service.ShodanMetadata', null, global);
goog.exportSymbol('proto.service.ShodanSSL', null, global);
goog.exportSymbol('proto.service.ShodanScanResult', null, global);
goog.exportSymbol('proto.service.ShodanSecurityResult', null, global);
goog.exportSymbol('proto.service.TLSScanResult', null, global);
goog.exportSymbol('proto.service.TLSSecurityResult', null, global);
goog.exportSymbol('proto.service.UpdateUserRequest', null, global);
goog.exportSymbol('proto.service.UpdateUserResponse', null, global);
goog.exportSymbol('proto.service.User', null, global);
goog.exportSymbol('proto.service.ValidateInviteRequest', null, global);
goog.exportSymbol('proto.service.ValidateInviteResponse', null, global);
goog.exportSymbol('proto.service.WhoisScanResult', null, global);
goog.exportSymbol('proto.service.WhoisSecurityResult', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.GenerateReportRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.GenerateReportRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.GenerateReportRequest.displayName = 'proto.service.GenerateReportRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.GenerateReportResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.GenerateReportResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.GenerateReportResponse.displayName = 'proto.service.GenerateReportResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.ListReportsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.ListReportsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.ListReportsRequest.displayName = 'proto.service.ListReportsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.Report = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.Report, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.Report.displayName = 'proto.service.Report';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.ListReportsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.service.ListReportsResponse.repeatedFields_, null);
};
goog.inherits(proto.service.ListReportsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.ListReportsResponse.displayName = 'proto.service.ListReportsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.GetReportByIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.GetReportByIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.GetReportByIdRequest.displayName = 'proto.service.GetReportByIdRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.GetReportByIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.GetReportByIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.GetReportByIdResponse.displayName = 'proto.service.GetReportByIdResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.CalculateRiskScoreRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.CalculateRiskScoreRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.CalculateRiskScoreRequest.displayName = 'proto.service.CalculateRiskScoreRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.CalculateRiskScoreResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.CalculateRiskScoreResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.CalculateRiskScoreResponse.displayName = 'proto.service.CalculateRiskScoreResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.CreateUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.CreateUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.CreateUserRequest.displayName = 'proto.service.CreateUserRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.CreateUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.CreateUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.CreateUserResponse.displayName = 'proto.service.CreateUserResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.GetUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.GetUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.GetUserRequest.displayName = 'proto.service.GetUserRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.GetUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.GetUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.GetUserResponse.displayName = 'proto.service.GetUserResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.UpdateUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.UpdateUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.UpdateUserRequest.displayName = 'proto.service.UpdateUserRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.UpdateUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.UpdateUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.UpdateUserResponse.displayName = 'proto.service.UpdateUserResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.DeleteUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.DeleteUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.DeleteUserRequest.displayName = 'proto.service.DeleteUserRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.DeleteUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.DeleteUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.DeleteUserResponse.displayName = 'proto.service.DeleteUserResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.ListUsersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.ListUsersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.ListUsersRequest.displayName = 'proto.service.ListUsersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.ListUsersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.service.ListUsersResponse.repeatedFields_, null);
};
goog.inherits(proto.service.ListUsersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.ListUsersResponse.displayName = 'proto.service.ListUsersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.User = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.User, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.User.displayName = 'proto.service.User';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.CreateAPIKeyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.CreateAPIKeyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.CreateAPIKeyRequest.displayName = 'proto.service.CreateAPIKeyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.CreateAPIKeyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.CreateAPIKeyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.CreateAPIKeyResponse.displayName = 'proto.service.CreateAPIKeyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.RotateAPIKeyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.RotateAPIKeyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.RotateAPIKeyRequest.displayName = 'proto.service.RotateAPIKeyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.RotateAPIKeyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.RotateAPIKeyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.RotateAPIKeyResponse.displayName = 'proto.service.RotateAPIKeyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.ActivateAPIKeyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.ActivateAPIKeyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.ActivateAPIKeyRequest.displayName = 'proto.service.ActivateAPIKeyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.ActivateAPIKeyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.ActivateAPIKeyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.ActivateAPIKeyResponse.displayName = 'proto.service.ActivateAPIKeyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.DeactivateAPIKeyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.DeactivateAPIKeyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.DeactivateAPIKeyRequest.displayName = 'proto.service.DeactivateAPIKeyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.DeactivateAPIKeyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.DeactivateAPIKeyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.DeactivateAPIKeyResponse.displayName = 'proto.service.DeactivateAPIKeyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.ListAPIKeysRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.ListAPIKeysRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.ListAPIKeysRequest.displayName = 'proto.service.ListAPIKeysRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.ListAPIKeysResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.service.ListAPIKeysResponse.repeatedFields_, null);
};
goog.inherits(proto.service.ListAPIKeysResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.ListAPIKeysResponse.displayName = 'proto.service.ListAPIKeysResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.APIKey = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.APIKey, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.APIKey.displayName = 'proto.service.APIKey';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.LoginRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.LoginRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.LoginRequest.displayName = 'proto.service.LoginRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.LoginResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.LoginResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.LoginResponse.displayName = 'proto.service.LoginResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.InviteUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.InviteUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.InviteUserRequest.displayName = 'proto.service.InviteUserRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.InviteUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.InviteUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.InviteUserResponse.displayName = 'proto.service.InviteUserResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.ValidateInviteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.ValidateInviteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.ValidateInviteRequest.displayName = 'proto.service.ValidateInviteRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.ValidateInviteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.ValidateInviteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.ValidateInviteResponse.displayName = 'proto.service.ValidateInviteResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.ScanDomainRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.ScanDomainRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.ScanDomainRequest.displayName = 'proto.service.ScanDomainRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.ScanDomainResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.ScanDomainResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.ScanDomainResponse.displayName = 'proto.service.ScanDomainResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.GetDNSScanResultsByDomainRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.GetDNSScanResultsByDomainRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.GetDNSScanResultsByDomainRequest.displayName = 'proto.service.GetDNSScanResultsByDomainRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.GetDNSScanResultsByDomainResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.service.GetDNSScanResultsByDomainResponse.repeatedFields_, null);
};
goog.inherits(proto.service.GetDNSScanResultsByDomainResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.GetDNSScanResultsByDomainResponse.displayName = 'proto.service.GetDNSScanResultsByDomainResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.GetDNSScanResultByIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.GetDNSScanResultByIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.GetDNSScanResultByIDRequest.displayName = 'proto.service.GetDNSScanResultByIDRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.GetDNSScanResultByIDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.GetDNSScanResultByIDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.GetDNSScanResultByIDResponse.displayName = 'proto.service.GetDNSScanResultByIDResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.DNSScanResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.DNSScanResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.DNSScanResult.displayName = 'proto.service.DNSScanResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.ScanTLSRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.ScanTLSRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.ScanTLSRequest.displayName = 'proto.service.ScanTLSRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.ScanTLSResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.ScanTLSResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.ScanTLSResponse.displayName = 'proto.service.ScanTLSResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.GetTLSScanResultsByDomainRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.GetTLSScanResultsByDomainRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.GetTLSScanResultsByDomainRequest.displayName = 'proto.service.GetTLSScanResultsByDomainRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.GetTLSScanResultsByDomainResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.service.GetTLSScanResultsByDomainResponse.repeatedFields_, null);
};
goog.inherits(proto.service.GetTLSScanResultsByDomainResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.GetTLSScanResultsByDomainResponse.displayName = 'proto.service.GetTLSScanResultsByDomainResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.TLSScanResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.TLSScanResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.TLSScanResult.displayName = 'proto.service.TLSScanResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.ScanCrtShRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.ScanCrtShRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.ScanCrtShRequest.displayName = 'proto.service.ScanCrtShRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.ScanCrtShResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.ScanCrtShResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.ScanCrtShResponse.displayName = 'proto.service.ScanCrtShResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.GetCrtShScanResultsByDomainRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.GetCrtShScanResultsByDomainRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.GetCrtShScanResultsByDomainRequest.displayName = 'proto.service.GetCrtShScanResultsByDomainRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.GetCrtShScanResultsByDomainResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.service.GetCrtShScanResultsByDomainResponse.repeatedFields_, null);
};
goog.inherits(proto.service.GetCrtShScanResultsByDomainResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.GetCrtShScanResultsByDomainResponse.displayName = 'proto.service.GetCrtShScanResultsByDomainResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.CrtShScanResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.CrtShScanResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.CrtShScanResult.displayName = 'proto.service.CrtShScanResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.ScanChaosRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.ScanChaosRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.ScanChaosRequest.displayName = 'proto.service.ScanChaosRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.ScanChaosResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.ScanChaosResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.ScanChaosResponse.displayName = 'proto.service.ScanChaosResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.GetChaosScanResultsByDomainRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.GetChaosScanResultsByDomainRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.GetChaosScanResultsByDomainRequest.displayName = 'proto.service.GetChaosScanResultsByDomainRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.GetChaosScanResultsByDomainResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.service.GetChaosScanResultsByDomainResponse.repeatedFields_, null);
};
goog.inherits(proto.service.GetChaosScanResultsByDomainResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.GetChaosScanResultsByDomainResponse.displayName = 'proto.service.GetChaosScanResultsByDomainResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.ChaosScanResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.ChaosScanResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.ChaosScanResult.displayName = 'proto.service.ChaosScanResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.ScanShodanRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.ScanShodanRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.ScanShodanRequest.displayName = 'proto.service.ScanShodanRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.ScanShodanResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.ScanShodanResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.ScanShodanResponse.displayName = 'proto.service.ScanShodanResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.GetShodanScanResultsByDomainRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.GetShodanScanResultsByDomainRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.GetShodanScanResultsByDomainRequest.displayName = 'proto.service.GetShodanScanResultsByDomainRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.GetShodanScanResultsByDomainResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.service.GetShodanScanResultsByDomainResponse.repeatedFields_, null);
};
goog.inherits(proto.service.GetShodanScanResultsByDomainResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.GetShodanScanResultsByDomainResponse.displayName = 'proto.service.GetShodanScanResultsByDomainResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.ShodanScanResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.ShodanScanResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.ShodanScanResult.displayName = 'proto.service.ShodanScanResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.ScanOTXRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.ScanOTXRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.ScanOTXRequest.displayName = 'proto.service.ScanOTXRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.ScanOTXResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.ScanOTXResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.ScanOTXResponse.displayName = 'proto.service.ScanOTXResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.GetOTXScanResultsByDomainRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.GetOTXScanResultsByDomainRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.GetOTXScanResultsByDomainRequest.displayName = 'proto.service.GetOTXScanResultsByDomainRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.GetOTXScanResultsByDomainResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.service.GetOTXScanResultsByDomainResponse.repeatedFields_, null);
};
goog.inherits(proto.service.GetOTXScanResultsByDomainResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.GetOTXScanResultsByDomainResponse.displayName = 'proto.service.GetOTXScanResultsByDomainResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.OTXScanResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.OTXScanResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.OTXScanResult.displayName = 'proto.service.OTXScanResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.ScanWhoisRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.ScanWhoisRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.ScanWhoisRequest.displayName = 'proto.service.ScanWhoisRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.ScanWhoisResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.ScanWhoisResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.ScanWhoisResponse.displayName = 'proto.service.ScanWhoisResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.GetWhoisScanResultsByDomainRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.GetWhoisScanResultsByDomainRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.GetWhoisScanResultsByDomainRequest.displayName = 'proto.service.GetWhoisScanResultsByDomainRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.GetWhoisScanResultsByDomainResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.service.GetWhoisScanResultsByDomainResponse.repeatedFields_, null);
};
goog.inherits(proto.service.GetWhoisScanResultsByDomainResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.GetWhoisScanResultsByDomainResponse.displayName = 'proto.service.GetWhoisScanResultsByDomainResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.WhoisScanResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.WhoisScanResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.WhoisScanResult.displayName = 'proto.service.WhoisScanResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.ScanAbuseChRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.ScanAbuseChRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.ScanAbuseChRequest.displayName = 'proto.service.ScanAbuseChRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.ScanAbuseChResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.ScanAbuseChResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.ScanAbuseChResponse.displayName = 'proto.service.ScanAbuseChResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.GetAbuseChScanResultsByDomainRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.GetAbuseChScanResultsByDomainRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.GetAbuseChScanResultsByDomainRequest.displayName = 'proto.service.GetAbuseChScanResultsByDomainRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.GetAbuseChScanResultsByDomainResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.service.GetAbuseChScanResultsByDomainResponse.repeatedFields_, null);
};
goog.inherits(proto.service.GetAbuseChScanResultsByDomainResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.GetAbuseChScanResultsByDomainResponse.displayName = 'proto.service.GetAbuseChScanResultsByDomainResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.AbuseChScanResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.AbuseChScanResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.AbuseChScanResult.displayName = 'proto.service.AbuseChScanResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.ScanISCRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.ScanISCRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.ScanISCRequest.displayName = 'proto.service.ScanISCRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.ScanISCResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.ScanISCResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.ScanISCResponse.displayName = 'proto.service.ScanISCResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.GetISCScanResultsByDomainRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.GetISCScanResultsByDomainRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.GetISCScanResultsByDomainRequest.displayName = 'proto.service.GetISCScanResultsByDomainRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.GetISCScanResultsByDomainResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.service.GetISCScanResultsByDomainResponse.repeatedFields_, null);
};
goog.inherits(proto.service.GetISCScanResultsByDomainResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.GetISCScanResultsByDomainResponse.displayName = 'proto.service.GetISCScanResultsByDomainResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.ISCScanResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.ISCScanResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.ISCScanResult.displayName = 'proto.service.ISCScanResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.ISCIncident = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.ISCIncident, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.ISCIncident.displayName = 'proto.service.ISCIncident';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.ISCSecurityResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.service.ISCSecurityResult.repeatedFields_, null);
};
goog.inherits(proto.service.ISCSecurityResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.ISCSecurityResult.displayName = 'proto.service.ISCSecurityResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.DNSSecurityResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.service.DNSSecurityResult.repeatedFields_, null);
};
goog.inherits(proto.service.DNSSecurityResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.DNSSecurityResult.displayName = 'proto.service.DNSSecurityResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.TLSSecurityResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.service.TLSSecurityResult.repeatedFields_, null);
};
goog.inherits(proto.service.TLSSecurityResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.TLSSecurityResult.displayName = 'proto.service.TLSSecurityResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.CrtShCertificate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.service.CrtShCertificate.repeatedFields_, null);
};
goog.inherits(proto.service.CrtShCertificate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.CrtShCertificate.displayName = 'proto.service.CrtShCertificate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.CrtShSecurityResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.service.CrtShSecurityResult.repeatedFields_, null);
};
goog.inherits(proto.service.CrtShSecurityResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.CrtShSecurityResult.displayName = 'proto.service.CrtShSecurityResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.ChaosSecurityResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.service.ChaosSecurityResult.repeatedFields_, null);
};
goog.inherits(proto.service.ChaosSecurityResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.ChaosSecurityResult.displayName = 'proto.service.ChaosSecurityResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.ShodanLocation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.ShodanLocation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.ShodanLocation.displayName = 'proto.service.ShodanLocation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.ShodanSSL = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.ShodanSSL, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.ShodanSSL.displayName = 'proto.service.ShodanSSL';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.ShodanMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.ShodanMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.ShodanMetadata.displayName = 'proto.service.ShodanMetadata';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.ShodanHost = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.service.ShodanHost.repeatedFields_, null);
};
goog.inherits(proto.service.ShodanHost, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.ShodanHost.displayName = 'proto.service.ShodanHost';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.ShodanSecurityResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.service.ShodanSecurityResult.repeatedFields_, null);
};
goog.inherits(proto.service.ShodanSecurityResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.ShodanSecurityResult.displayName = 'proto.service.ShodanSecurityResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.OTXGeneralInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.service.OTXGeneralInfo.repeatedFields_, null);
};
goog.inherits(proto.service.OTXGeneralInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.OTXGeneralInfo.displayName = 'proto.service.OTXGeneralInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.OTXMalware = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.OTXMalware, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.OTXMalware.displayName = 'proto.service.OTXMalware';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.OTXURL = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.OTXURL, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.OTXURL.displayName = 'proto.service.OTXURL';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.OTXPassiveDNS = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.service.OTXPassiveDNS, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.OTXPassiveDNS.displayName = 'proto.service.OTXPassiveDNS';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.OTXSecurityResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.service.OTXSecurityResult.repeatedFields_, null);
};
goog.inherits(proto.service.OTXSecurityResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.OTXSecurityResult.displayName = 'proto.service.OTXSecurityResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.WhoisSecurityResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.service.WhoisSecurityResult.repeatedFields_, null);
};
goog.inherits(proto.service.WhoisSecurityResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.WhoisSecurityResult.displayName = 'proto.service.WhoisSecurityResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.AbuseChIOC = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.service.AbuseChIOC.repeatedFields_, null);
};
goog.inherits(proto.service.AbuseChIOC, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.AbuseChIOC.displayName = 'proto.service.AbuseChIOC';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.service.AbuseChSecurityResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.service.AbuseChSecurityResult.repeatedFields_, null);
};
goog.inherits(proto.service.AbuseChSecurityResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.AbuseChSecurityResult.displayName = 'proto.service.AbuseChSecurityResult';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.GenerateReportRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.service.GenerateReportRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.GenerateReportRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GenerateReportRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
domain: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.GenerateReportRequest}
 */
proto.service.GenerateReportRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.GenerateReportRequest;
  return proto.service.GenerateReportRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.GenerateReportRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.GenerateReportRequest}
 */
proto.service.GenerateReportRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.GenerateReportRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.GenerateReportRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.GenerateReportRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GenerateReportRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string domain = 1;
 * @return {string}
 */
proto.service.GenerateReportRequest.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.GenerateReportRequest} returns this
 */
proto.service.GenerateReportRequest.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.GenerateReportResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.service.GenerateReportResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.GenerateReportResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GenerateReportResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
reportId: jspb.Message.getFieldWithDefault(msg, 1, ""),
dnsScanId: jspb.Message.getFieldWithDefault(msg, 2, ""),
score: jspb.Message.getFieldWithDefault(msg, 3, 0),
riskTier: jspb.Message.getFieldWithDefault(msg, 4, ""),
createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.GenerateReportResponse}
 */
proto.service.GenerateReportResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.GenerateReportResponse;
  return proto.service.GenerateReportResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.GenerateReportResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.GenerateReportResponse}
 */
proto.service.GenerateReportResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReportId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDnsScanId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setScore(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRiskTier(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.GenerateReportResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.GenerateReportResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.GenerateReportResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GenerateReportResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReportId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDnsScanId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getScore();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getRiskTier();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string report_id = 1;
 * @return {string}
 */
proto.service.GenerateReportResponse.prototype.getReportId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.GenerateReportResponse} returns this
 */
proto.service.GenerateReportResponse.prototype.setReportId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string dns_scan_id = 2;
 * @return {string}
 */
proto.service.GenerateReportResponse.prototype.getDnsScanId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.GenerateReportResponse} returns this
 */
proto.service.GenerateReportResponse.prototype.setDnsScanId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 score = 3;
 * @return {number}
 */
proto.service.GenerateReportResponse.prototype.getScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.service.GenerateReportResponse} returns this
 */
proto.service.GenerateReportResponse.prototype.setScore = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string risk_tier = 4;
 * @return {string}
 */
proto.service.GenerateReportResponse.prototype.getRiskTier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.GenerateReportResponse} returns this
 */
proto.service.GenerateReportResponse.prototype.setRiskTier = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.service.GenerateReportResponse.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.service.GenerateReportResponse} returns this
*/
proto.service.GenerateReportResponse.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.GenerateReportResponse} returns this
 */
proto.service.GenerateReportResponse.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.GenerateReportResponse.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.ListReportsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.service.ListReportsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.ListReportsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ListReportsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
domain: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.ListReportsRequest}
 */
proto.service.ListReportsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.ListReportsRequest;
  return proto.service.ListReportsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.ListReportsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.ListReportsRequest}
 */
proto.service.ListReportsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.ListReportsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.ListReportsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.ListReportsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ListReportsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string domain = 1;
 * @return {string}
 */
proto.service.ListReportsRequest.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ListReportsRequest} returns this
 */
proto.service.ListReportsRequest.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.Report.prototype.toObject = function(opt_includeInstance) {
  return proto.service.Report.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.Report} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.Report.toObject = function(includeInstance, msg) {
  var f, obj = {
reportId: jspb.Message.getFieldWithDefault(msg, 1, ""),
domain: jspb.Message.getFieldWithDefault(msg, 2, ""),
dnsScanId: jspb.Message.getFieldWithDefault(msg, 3, ""),
score: jspb.Message.getFieldWithDefault(msg, 4, 0),
riskTier: jspb.Message.getFieldWithDefault(msg, 5, ""),
createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.Report}
 */
proto.service.Report.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.Report;
  return proto.service.Report.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.Report} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.Report}
 */
proto.service.Report.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReportId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDnsScanId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setScore(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setRiskTier(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.Report.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.Report.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.Report} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.Report.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReportId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDnsScanId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getScore();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getRiskTier();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string report_id = 1;
 * @return {string}
 */
proto.service.Report.prototype.getReportId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.Report} returns this
 */
proto.service.Report.prototype.setReportId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string domain = 2;
 * @return {string}
 */
proto.service.Report.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.Report} returns this
 */
proto.service.Report.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string dns_scan_id = 3;
 * @return {string}
 */
proto.service.Report.prototype.getDnsScanId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.Report} returns this
 */
proto.service.Report.prototype.setDnsScanId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 score = 4;
 * @return {number}
 */
proto.service.Report.prototype.getScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.service.Report} returns this
 */
proto.service.Report.prototype.setScore = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string risk_tier = 5;
 * @return {string}
 */
proto.service.Report.prototype.getRiskTier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.Report} returns this
 */
proto.service.Report.prototype.setRiskTier = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.service.Report.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.service.Report} returns this
*/
proto.service.Report.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.Report} returns this
 */
proto.service.Report.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.Report.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.service.ListReportsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.ListReportsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.service.ListReportsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.ListReportsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ListReportsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
reportsList: jspb.Message.toObjectList(msg.getReportsList(),
    proto.service.Report.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.ListReportsResponse}
 */
proto.service.ListReportsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.ListReportsResponse;
  return proto.service.ListReportsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.ListReportsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.ListReportsResponse}
 */
proto.service.ListReportsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.service.Report;
      reader.readMessage(value,proto.service.Report.deserializeBinaryFromReader);
      msg.addReports(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.ListReportsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.ListReportsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.ListReportsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ListReportsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReportsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.service.Report.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Report reports = 1;
 * @return {!Array<!proto.service.Report>}
 */
proto.service.ListReportsResponse.prototype.getReportsList = function() {
  return /** @type{!Array<!proto.service.Report>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.service.Report, 1));
};


/**
 * @param {!Array<!proto.service.Report>} value
 * @return {!proto.service.ListReportsResponse} returns this
*/
proto.service.ListReportsResponse.prototype.setReportsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.service.Report=} opt_value
 * @param {number=} opt_index
 * @return {!proto.service.Report}
 */
proto.service.ListReportsResponse.prototype.addReports = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.service.Report, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.service.ListReportsResponse} returns this
 */
proto.service.ListReportsResponse.prototype.clearReportsList = function() {
  return this.setReportsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.GetReportByIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.service.GetReportByIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.GetReportByIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GetReportByIdRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
reportId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.GetReportByIdRequest}
 */
proto.service.GetReportByIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.GetReportByIdRequest;
  return proto.service.GetReportByIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.GetReportByIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.GetReportByIdRequest}
 */
proto.service.GetReportByIdRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReportId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.GetReportByIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.GetReportByIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.GetReportByIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GetReportByIdRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReportId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string report_id = 1;
 * @return {string}
 */
proto.service.GetReportByIdRequest.prototype.getReportId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.GetReportByIdRequest} returns this
 */
proto.service.GetReportByIdRequest.prototype.setReportId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.GetReportByIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.service.GetReportByIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.GetReportByIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GetReportByIdResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
report: (f = msg.getReport()) && proto.service.Report.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.GetReportByIdResponse}
 */
proto.service.GetReportByIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.GetReportByIdResponse;
  return proto.service.GetReportByIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.GetReportByIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.GetReportByIdResponse}
 */
proto.service.GetReportByIdResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.service.Report;
      reader.readMessage(value,proto.service.Report.deserializeBinaryFromReader);
      msg.setReport(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.GetReportByIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.GetReportByIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.GetReportByIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GetReportByIdResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReport();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.service.Report.serializeBinaryToWriter
    );
  }
};


/**
 * optional Report report = 1;
 * @return {?proto.service.Report}
 */
proto.service.GetReportByIdResponse.prototype.getReport = function() {
  return /** @type{?proto.service.Report} */ (
    jspb.Message.getWrapperField(this, proto.service.Report, 1));
};


/**
 * @param {?proto.service.Report|undefined} value
 * @return {!proto.service.GetReportByIdResponse} returns this
*/
proto.service.GetReportByIdResponse.prototype.setReport = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.GetReportByIdResponse} returns this
 */
proto.service.GetReportByIdResponse.prototype.clearReport = function() {
  return this.setReport(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.GetReportByIdResponse.prototype.hasReport = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.CalculateRiskScoreRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.service.CalculateRiskScoreRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.CalculateRiskScoreRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.CalculateRiskScoreRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
domain: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.CalculateRiskScoreRequest}
 */
proto.service.CalculateRiskScoreRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.CalculateRiskScoreRequest;
  return proto.service.CalculateRiskScoreRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.CalculateRiskScoreRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.CalculateRiskScoreRequest}
 */
proto.service.CalculateRiskScoreRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.CalculateRiskScoreRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.CalculateRiskScoreRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.CalculateRiskScoreRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.CalculateRiskScoreRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string domain = 1;
 * @return {string}
 */
proto.service.CalculateRiskScoreRequest.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.CalculateRiskScoreRequest} returns this
 */
proto.service.CalculateRiskScoreRequest.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.CalculateRiskScoreResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.service.CalculateRiskScoreResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.CalculateRiskScoreResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.CalculateRiskScoreResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
score: jspb.Message.getFieldWithDefault(msg, 1, 0),
riskTier: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.CalculateRiskScoreResponse}
 */
proto.service.CalculateRiskScoreResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.CalculateRiskScoreResponse;
  return proto.service.CalculateRiskScoreResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.CalculateRiskScoreResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.CalculateRiskScoreResponse}
 */
proto.service.CalculateRiskScoreResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setScore(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRiskTier(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.CalculateRiskScoreResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.CalculateRiskScoreResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.CalculateRiskScoreResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.CalculateRiskScoreResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScore();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getRiskTier();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 score = 1;
 * @return {number}
 */
proto.service.CalculateRiskScoreResponse.prototype.getScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.service.CalculateRiskScoreResponse} returns this
 */
proto.service.CalculateRiskScoreResponse.prototype.setScore = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string risk_tier = 2;
 * @return {string}
 */
proto.service.CalculateRiskScoreResponse.prototype.getRiskTier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.CalculateRiskScoreResponse} returns this
 */
proto.service.CalculateRiskScoreResponse.prototype.setRiskTier = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.CreateUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.service.CreateUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.CreateUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.CreateUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
firstName: jspb.Message.getFieldWithDefault(msg, 1, ""),
lastName: jspb.Message.getFieldWithDefault(msg, 2, ""),
email: jspb.Message.getFieldWithDefault(msg, 3, ""),
password: jspb.Message.getFieldWithDefault(msg, 4, ""),
isAdmin: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.CreateUserRequest}
 */
proto.service.CreateUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.CreateUserRequest;
  return proto.service.CreateUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.CreateUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.CreateUserRequest}
 */
proto.service.CreateUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAdmin(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.CreateUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.CreateUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.CreateUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.CreateUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFirstName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLastName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getIsAdmin();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional string first_name = 1;
 * @return {string}
 */
proto.service.CreateUserRequest.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.CreateUserRequest} returns this
 */
proto.service.CreateUserRequest.prototype.setFirstName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string last_name = 2;
 * @return {string}
 */
proto.service.CreateUserRequest.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.CreateUserRequest} returns this
 */
proto.service.CreateUserRequest.prototype.setLastName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string email = 3;
 * @return {string}
 */
proto.service.CreateUserRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.CreateUserRequest} returns this
 */
proto.service.CreateUserRequest.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string password = 4;
 * @return {string}
 */
proto.service.CreateUserRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.CreateUserRequest} returns this
 */
proto.service.CreateUserRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool is_admin = 5;
 * @return {boolean}
 */
proto.service.CreateUserRequest.prototype.getIsAdmin = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.service.CreateUserRequest} returns this
 */
proto.service.CreateUserRequest.prototype.setIsAdmin = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.CreateUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.service.CreateUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.CreateUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.CreateUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.CreateUserResponse}
 */
proto.service.CreateUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.CreateUserResponse;
  return proto.service.CreateUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.CreateUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.CreateUserResponse}
 */
proto.service.CreateUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.CreateUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.CreateUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.CreateUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.CreateUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.service.CreateUserResponse.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.CreateUserResponse} returns this
 */
proto.service.CreateUserResponse.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.GetUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.service.GetUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.GetUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GetUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.GetUserRequest}
 */
proto.service.GetUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.GetUserRequest;
  return proto.service.GetUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.GetUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.GetUserRequest}
 */
proto.service.GetUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.GetUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.GetUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.GetUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GetUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.service.GetUserRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.GetUserRequest} returns this
 */
proto.service.GetUserRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.GetUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.service.GetUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.GetUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GetUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
firstName: jspb.Message.getFieldWithDefault(msg, 2, ""),
lastName: jspb.Message.getFieldWithDefault(msg, 3, ""),
email: jspb.Message.getFieldWithDefault(msg, 4, ""),
isAdmin: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.GetUserResponse}
 */
proto.service.GetUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.GetUserResponse;
  return proto.service.GetUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.GetUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.GetUserResponse}
 */
proto.service.GetUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAdmin(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.GetUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.GetUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.GetUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GetUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFirstName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLastName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getIsAdmin();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.service.GetUserResponse.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.GetUserResponse} returns this
 */
proto.service.GetUserResponse.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string first_name = 2;
 * @return {string}
 */
proto.service.GetUserResponse.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.GetUserResponse} returns this
 */
proto.service.GetUserResponse.prototype.setFirstName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string last_name = 3;
 * @return {string}
 */
proto.service.GetUserResponse.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.GetUserResponse} returns this
 */
proto.service.GetUserResponse.prototype.setLastName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string email = 4;
 * @return {string}
 */
proto.service.GetUserResponse.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.GetUserResponse} returns this
 */
proto.service.GetUserResponse.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool is_admin = 5;
 * @return {boolean}
 */
proto.service.GetUserResponse.prototype.getIsAdmin = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.service.GetUserResponse} returns this
 */
proto.service.GetUserResponse.prototype.setIsAdmin = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.service.GetUserResponse.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.service.GetUserResponse} returns this
*/
proto.service.GetUserResponse.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.GetUserResponse} returns this
 */
proto.service.GetUserResponse.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.GetUserResponse.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.UpdateUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.service.UpdateUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.UpdateUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.UpdateUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
firstName: jspb.Message.getFieldWithDefault(msg, 2, ""),
lastName: jspb.Message.getFieldWithDefault(msg, 3, ""),
email: jspb.Message.getFieldWithDefault(msg, 4, ""),
password: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.UpdateUserRequest}
 */
proto.service.UpdateUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.UpdateUserRequest;
  return proto.service.UpdateUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.UpdateUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.UpdateUserRequest}
 */
proto.service.UpdateUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.UpdateUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.UpdateUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.UpdateUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.UpdateUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFirstName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLastName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.service.UpdateUserRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.UpdateUserRequest} returns this
 */
proto.service.UpdateUserRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string first_name = 2;
 * @return {string}
 */
proto.service.UpdateUserRequest.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.UpdateUserRequest} returns this
 */
proto.service.UpdateUserRequest.prototype.setFirstName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string last_name = 3;
 * @return {string}
 */
proto.service.UpdateUserRequest.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.UpdateUserRequest} returns this
 */
proto.service.UpdateUserRequest.prototype.setLastName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string email = 4;
 * @return {string}
 */
proto.service.UpdateUserRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.UpdateUserRequest} returns this
 */
proto.service.UpdateUserRequest.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string password = 5;
 * @return {string}
 */
proto.service.UpdateUserRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.UpdateUserRequest} returns this
 */
proto.service.UpdateUserRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.UpdateUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.service.UpdateUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.UpdateUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.UpdateUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.UpdateUserResponse}
 */
proto.service.UpdateUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.UpdateUserResponse;
  return proto.service.UpdateUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.UpdateUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.UpdateUserResponse}
 */
proto.service.UpdateUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.UpdateUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.UpdateUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.UpdateUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.UpdateUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.DeleteUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.service.DeleteUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.DeleteUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.DeleteUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.DeleteUserRequest}
 */
proto.service.DeleteUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.DeleteUserRequest;
  return proto.service.DeleteUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.DeleteUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.DeleteUserRequest}
 */
proto.service.DeleteUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.DeleteUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.DeleteUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.DeleteUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.DeleteUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.service.DeleteUserRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.DeleteUserRequest} returns this
 */
proto.service.DeleteUserRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.DeleteUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.service.DeleteUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.DeleteUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.DeleteUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.DeleteUserResponse}
 */
proto.service.DeleteUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.DeleteUserResponse;
  return proto.service.DeleteUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.DeleteUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.DeleteUserResponse}
 */
proto.service.DeleteUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.DeleteUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.DeleteUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.DeleteUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.DeleteUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.ListUsersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.service.ListUsersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.ListUsersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ListUsersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.ListUsersRequest}
 */
proto.service.ListUsersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.ListUsersRequest;
  return proto.service.ListUsersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.ListUsersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.ListUsersRequest}
 */
proto.service.ListUsersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.ListUsersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.ListUsersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.ListUsersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ListUsersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.service.ListUsersResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.ListUsersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.service.ListUsersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.ListUsersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ListUsersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
usersList: jspb.Message.toObjectList(msg.getUsersList(),
    proto.service.User.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.ListUsersResponse}
 */
proto.service.ListUsersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.ListUsersResponse;
  return proto.service.ListUsersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.ListUsersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.ListUsersResponse}
 */
proto.service.ListUsersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.service.User;
      reader.readMessage(value,proto.service.User.deserializeBinaryFromReader);
      msg.addUsers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.ListUsersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.ListUsersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.ListUsersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ListUsersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.service.User.serializeBinaryToWriter
    );
  }
};


/**
 * repeated User users = 1;
 * @return {!Array<!proto.service.User>}
 */
proto.service.ListUsersResponse.prototype.getUsersList = function() {
  return /** @type{!Array<!proto.service.User>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.service.User, 1));
};


/**
 * @param {!Array<!proto.service.User>} value
 * @return {!proto.service.ListUsersResponse} returns this
*/
proto.service.ListUsersResponse.prototype.setUsersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.service.User=} opt_value
 * @param {number=} opt_index
 * @return {!proto.service.User}
 */
proto.service.ListUsersResponse.prototype.addUsers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.service.User, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.service.ListUsersResponse} returns this
 */
proto.service.ListUsersResponse.prototype.clearUsersList = function() {
  return this.setUsersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.User.prototype.toObject = function(opt_includeInstance) {
  return proto.service.User.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.User} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.User.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
firstName: jspb.Message.getFieldWithDefault(msg, 2, ""),
lastName: jspb.Message.getFieldWithDefault(msg, 3, ""),
email: jspb.Message.getFieldWithDefault(msg, 4, ""),
isAdmin: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.User}
 */
proto.service.User.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.User;
  return proto.service.User.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.User} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.User}
 */
proto.service.User.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAdmin(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.User.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.User.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.User} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.User.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFirstName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLastName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getIsAdmin();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.service.User.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.User} returns this
 */
proto.service.User.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string first_name = 2;
 * @return {string}
 */
proto.service.User.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.User} returns this
 */
proto.service.User.prototype.setFirstName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string last_name = 3;
 * @return {string}
 */
proto.service.User.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.User} returns this
 */
proto.service.User.prototype.setLastName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string email = 4;
 * @return {string}
 */
proto.service.User.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.User} returns this
 */
proto.service.User.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool is_admin = 5;
 * @return {boolean}
 */
proto.service.User.prototype.getIsAdmin = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.service.User} returns this
 */
proto.service.User.prototype.setIsAdmin = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.service.User.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.service.User} returns this
*/
proto.service.User.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.User} returns this
 */
proto.service.User.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.User.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.CreateAPIKeyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.service.CreateAPIKeyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.CreateAPIKeyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.CreateAPIKeyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
role: jspb.Message.getFieldWithDefault(msg, 2, ""),
isServiceKey: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.CreateAPIKeyRequest}
 */
proto.service.CreateAPIKeyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.CreateAPIKeyRequest;
  return proto.service.CreateAPIKeyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.CreateAPIKeyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.CreateAPIKeyRequest}
 */
proto.service.CreateAPIKeyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRole(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsServiceKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.CreateAPIKeyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.CreateAPIKeyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.CreateAPIKeyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.CreateAPIKeyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRole();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIsServiceKey();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.service.CreateAPIKeyRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.CreateAPIKeyRequest} returns this
 */
proto.service.CreateAPIKeyRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string role = 2;
 * @return {string}
 */
proto.service.CreateAPIKeyRequest.prototype.getRole = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.CreateAPIKeyRequest} returns this
 */
proto.service.CreateAPIKeyRequest.prototype.setRole = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool is_service_key = 3;
 * @return {boolean}
 */
proto.service.CreateAPIKeyRequest.prototype.getIsServiceKey = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.service.CreateAPIKeyRequest} returns this
 */
proto.service.CreateAPIKeyRequest.prototype.setIsServiceKey = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.CreateAPIKeyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.service.CreateAPIKeyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.CreateAPIKeyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.CreateAPIKeyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
apiKey: jspb.Message.getFieldWithDefault(msg, 1, ""),
role: jspb.Message.getFieldWithDefault(msg, 2, ""),
isServiceKey: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
expiresAt: (f = msg.getExpiresAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.CreateAPIKeyResponse}
 */
proto.service.CreateAPIKeyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.CreateAPIKeyResponse;
  return proto.service.CreateAPIKeyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.CreateAPIKeyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.CreateAPIKeyResponse}
 */
proto.service.CreateAPIKeyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setApiKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRole(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsServiceKey(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpiresAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.CreateAPIKeyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.CreateAPIKeyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.CreateAPIKeyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.CreateAPIKeyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApiKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRole();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIsServiceKey();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getExpiresAt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string api_key = 1;
 * @return {string}
 */
proto.service.CreateAPIKeyResponse.prototype.getApiKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.CreateAPIKeyResponse} returns this
 */
proto.service.CreateAPIKeyResponse.prototype.setApiKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string role = 2;
 * @return {string}
 */
proto.service.CreateAPIKeyResponse.prototype.getRole = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.CreateAPIKeyResponse} returns this
 */
proto.service.CreateAPIKeyResponse.prototype.setRole = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool is_service_key = 3;
 * @return {boolean}
 */
proto.service.CreateAPIKeyResponse.prototype.getIsServiceKey = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.service.CreateAPIKeyResponse} returns this
 */
proto.service.CreateAPIKeyResponse.prototype.setIsServiceKey = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp expires_at = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.service.CreateAPIKeyResponse.prototype.getExpiresAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.service.CreateAPIKeyResponse} returns this
*/
proto.service.CreateAPIKeyResponse.prototype.setExpiresAt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.CreateAPIKeyResponse} returns this
 */
proto.service.CreateAPIKeyResponse.prototype.clearExpiresAt = function() {
  return this.setExpiresAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.CreateAPIKeyResponse.prototype.hasExpiresAt = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.RotateAPIKeyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.service.RotateAPIKeyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.RotateAPIKeyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.RotateAPIKeyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
apiKey: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.RotateAPIKeyRequest}
 */
proto.service.RotateAPIKeyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.RotateAPIKeyRequest;
  return proto.service.RotateAPIKeyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.RotateAPIKeyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.RotateAPIKeyRequest}
 */
proto.service.RotateAPIKeyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setApiKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.RotateAPIKeyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.RotateAPIKeyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.RotateAPIKeyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.RotateAPIKeyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApiKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string api_key = 1;
 * @return {string}
 */
proto.service.RotateAPIKeyRequest.prototype.getApiKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.RotateAPIKeyRequest} returns this
 */
proto.service.RotateAPIKeyRequest.prototype.setApiKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.RotateAPIKeyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.service.RotateAPIKeyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.RotateAPIKeyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.RotateAPIKeyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
newApiKey: jspb.Message.getFieldWithDefault(msg, 1, ""),
expiresAt: (f = msg.getExpiresAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.RotateAPIKeyResponse}
 */
proto.service.RotateAPIKeyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.RotateAPIKeyResponse;
  return proto.service.RotateAPIKeyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.RotateAPIKeyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.RotateAPIKeyResponse}
 */
proto.service.RotateAPIKeyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewApiKey(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpiresAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.RotateAPIKeyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.RotateAPIKeyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.RotateAPIKeyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.RotateAPIKeyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNewApiKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getExpiresAt();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string new_api_key = 1;
 * @return {string}
 */
proto.service.RotateAPIKeyResponse.prototype.getNewApiKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.RotateAPIKeyResponse} returns this
 */
proto.service.RotateAPIKeyResponse.prototype.setNewApiKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp expires_at = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.service.RotateAPIKeyResponse.prototype.getExpiresAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.service.RotateAPIKeyResponse} returns this
*/
proto.service.RotateAPIKeyResponse.prototype.setExpiresAt = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.RotateAPIKeyResponse} returns this
 */
proto.service.RotateAPIKeyResponse.prototype.clearExpiresAt = function() {
  return this.setExpiresAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.RotateAPIKeyResponse.prototype.hasExpiresAt = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.ActivateAPIKeyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.service.ActivateAPIKeyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.ActivateAPIKeyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ActivateAPIKeyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
apiKey: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.ActivateAPIKeyRequest}
 */
proto.service.ActivateAPIKeyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.ActivateAPIKeyRequest;
  return proto.service.ActivateAPIKeyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.ActivateAPIKeyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.ActivateAPIKeyRequest}
 */
proto.service.ActivateAPIKeyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setApiKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.ActivateAPIKeyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.ActivateAPIKeyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.ActivateAPIKeyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ActivateAPIKeyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApiKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string api_key = 1;
 * @return {string}
 */
proto.service.ActivateAPIKeyRequest.prototype.getApiKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ActivateAPIKeyRequest} returns this
 */
proto.service.ActivateAPIKeyRequest.prototype.setApiKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.ActivateAPIKeyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.service.ActivateAPIKeyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.ActivateAPIKeyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ActivateAPIKeyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.ActivateAPIKeyResponse}
 */
proto.service.ActivateAPIKeyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.ActivateAPIKeyResponse;
  return proto.service.ActivateAPIKeyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.ActivateAPIKeyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.ActivateAPIKeyResponse}
 */
proto.service.ActivateAPIKeyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.ActivateAPIKeyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.ActivateAPIKeyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.ActivateAPIKeyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ActivateAPIKeyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.DeactivateAPIKeyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.service.DeactivateAPIKeyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.DeactivateAPIKeyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.DeactivateAPIKeyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
apiKey: jspb.Message.getFieldWithDefault(msg, 1, ""),
deactivationMessage: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.DeactivateAPIKeyRequest}
 */
proto.service.DeactivateAPIKeyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.DeactivateAPIKeyRequest;
  return proto.service.DeactivateAPIKeyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.DeactivateAPIKeyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.DeactivateAPIKeyRequest}
 */
proto.service.DeactivateAPIKeyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setApiKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeactivationMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.DeactivateAPIKeyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.DeactivateAPIKeyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.DeactivateAPIKeyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.DeactivateAPIKeyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApiKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDeactivationMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string api_key = 1;
 * @return {string}
 */
proto.service.DeactivateAPIKeyRequest.prototype.getApiKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.DeactivateAPIKeyRequest} returns this
 */
proto.service.DeactivateAPIKeyRequest.prototype.setApiKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string deactivation_message = 2;
 * @return {string}
 */
proto.service.DeactivateAPIKeyRequest.prototype.getDeactivationMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.DeactivateAPIKeyRequest} returns this
 */
proto.service.DeactivateAPIKeyRequest.prototype.setDeactivationMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.DeactivateAPIKeyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.service.DeactivateAPIKeyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.DeactivateAPIKeyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.DeactivateAPIKeyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.DeactivateAPIKeyResponse}
 */
proto.service.DeactivateAPIKeyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.DeactivateAPIKeyResponse;
  return proto.service.DeactivateAPIKeyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.DeactivateAPIKeyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.DeactivateAPIKeyResponse}
 */
proto.service.DeactivateAPIKeyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.DeactivateAPIKeyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.DeactivateAPIKeyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.DeactivateAPIKeyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.DeactivateAPIKeyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.ListAPIKeysRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.service.ListAPIKeysRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.ListAPIKeysRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ListAPIKeysRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.ListAPIKeysRequest}
 */
proto.service.ListAPIKeysRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.ListAPIKeysRequest;
  return proto.service.ListAPIKeysRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.ListAPIKeysRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.ListAPIKeysRequest}
 */
proto.service.ListAPIKeysRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.ListAPIKeysRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.ListAPIKeysRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.ListAPIKeysRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ListAPIKeysRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.service.ListAPIKeysRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ListAPIKeysRequest} returns this
 */
proto.service.ListAPIKeysRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.service.ListAPIKeysResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.ListAPIKeysResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.service.ListAPIKeysResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.ListAPIKeysResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ListAPIKeysResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
apiKeysList: jspb.Message.toObjectList(msg.getApiKeysList(),
    proto.service.APIKey.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.ListAPIKeysResponse}
 */
proto.service.ListAPIKeysResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.ListAPIKeysResponse;
  return proto.service.ListAPIKeysResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.ListAPIKeysResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.ListAPIKeysResponse}
 */
proto.service.ListAPIKeysResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.service.APIKey;
      reader.readMessage(value,proto.service.APIKey.deserializeBinaryFromReader);
      msg.addApiKeys(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.ListAPIKeysResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.ListAPIKeysResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.ListAPIKeysResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ListAPIKeysResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApiKeysList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.service.APIKey.serializeBinaryToWriter
    );
  }
};


/**
 * repeated APIKey api_keys = 1;
 * @return {!Array<!proto.service.APIKey>}
 */
proto.service.ListAPIKeysResponse.prototype.getApiKeysList = function() {
  return /** @type{!Array<!proto.service.APIKey>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.service.APIKey, 1));
};


/**
 * @param {!Array<!proto.service.APIKey>} value
 * @return {!proto.service.ListAPIKeysResponse} returns this
*/
proto.service.ListAPIKeysResponse.prototype.setApiKeysList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.service.APIKey=} opt_value
 * @param {number=} opt_index
 * @return {!proto.service.APIKey}
 */
proto.service.ListAPIKeysResponse.prototype.addApiKeys = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.service.APIKey, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.service.ListAPIKeysResponse} returns this
 */
proto.service.ListAPIKeysResponse.prototype.clearApiKeysList = function() {
  return this.setApiKeysList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.APIKey.prototype.toObject = function(opt_includeInstance) {
  return proto.service.APIKey.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.APIKey} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.APIKey.toObject = function(includeInstance, msg) {
  var f, obj = {
apiKey: jspb.Message.getFieldWithDefault(msg, 1, ""),
userId: jspb.Message.getFieldWithDefault(msg, 2, ""),
role: jspb.Message.getFieldWithDefault(msg, 3, ""),
isServiceKey: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
isActive: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
deactivationMessage: jspb.Message.getFieldWithDefault(msg, 6, ""),
createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
expiresAt: (f = msg.getExpiresAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.APIKey}
 */
proto.service.APIKey.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.APIKey;
  return proto.service.APIKey.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.APIKey} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.APIKey}
 */
proto.service.APIKey.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setApiKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRole(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsServiceKey(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsActive(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeactivationMessage(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpiresAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.APIKey.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.APIKey.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.APIKey} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.APIKey.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApiKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRole();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIsServiceKey();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getIsActive();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getDeactivationMessage();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getExpiresAt();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string api_key = 1;
 * @return {string}
 */
proto.service.APIKey.prototype.getApiKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.APIKey} returns this
 */
proto.service.APIKey.prototype.setApiKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.service.APIKey.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.APIKey} returns this
 */
proto.service.APIKey.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string role = 3;
 * @return {string}
 */
proto.service.APIKey.prototype.getRole = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.APIKey} returns this
 */
proto.service.APIKey.prototype.setRole = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool is_service_key = 4;
 * @return {boolean}
 */
proto.service.APIKey.prototype.getIsServiceKey = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.service.APIKey} returns this
 */
proto.service.APIKey.prototype.setIsServiceKey = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool is_active = 5;
 * @return {boolean}
 */
proto.service.APIKey.prototype.getIsActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.service.APIKey} returns this
 */
proto.service.APIKey.prototype.setIsActive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional string deactivation_message = 6;
 * @return {string}
 */
proto.service.APIKey.prototype.getDeactivationMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.APIKey} returns this
 */
proto.service.APIKey.prototype.setDeactivationMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.service.APIKey.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.service.APIKey} returns this
*/
proto.service.APIKey.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.APIKey} returns this
 */
proto.service.APIKey.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.APIKey.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Timestamp expires_at = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.service.APIKey.prototype.getExpiresAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.service.APIKey} returns this
*/
proto.service.APIKey.prototype.setExpiresAt = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.APIKey} returns this
 */
proto.service.APIKey.prototype.clearExpiresAt = function() {
  return this.setExpiresAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.APIKey.prototype.hasExpiresAt = function() {
  return jspb.Message.getField(this, 8) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.LoginRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.service.LoginRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.LoginRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.LoginRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
email: jspb.Message.getFieldWithDefault(msg, 1, ""),
password: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.LoginRequest}
 */
proto.service.LoginRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.LoginRequest;
  return proto.service.LoginRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.LoginRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.LoginRequest}
 */
proto.service.LoginRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.LoginRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.LoginRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.LoginRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.LoginRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string email = 1;
 * @return {string}
 */
proto.service.LoginRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.LoginRequest} returns this
 */
proto.service.LoginRequest.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.service.LoginRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.LoginRequest} returns this
 */
proto.service.LoginRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.LoginResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.service.LoginResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.LoginResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.LoginResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
firstName: jspb.Message.getFieldWithDefault(msg, 2, ""),
lastName: jspb.Message.getFieldWithDefault(msg, 3, ""),
isAdmin: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
token: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.LoginResponse}
 */
proto.service.LoginResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.LoginResponse;
  return proto.service.LoginResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.LoginResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.LoginResponse}
 */
proto.service.LoginResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastName(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAdmin(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.LoginResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.LoginResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.LoginResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.LoginResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFirstName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLastName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIsAdmin();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.service.LoginResponse.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.LoginResponse} returns this
 */
proto.service.LoginResponse.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string first_name = 2;
 * @return {string}
 */
proto.service.LoginResponse.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.LoginResponse} returns this
 */
proto.service.LoginResponse.prototype.setFirstName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string last_name = 3;
 * @return {string}
 */
proto.service.LoginResponse.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.LoginResponse} returns this
 */
proto.service.LoginResponse.prototype.setLastName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool is_admin = 4;
 * @return {boolean}
 */
proto.service.LoginResponse.prototype.getIsAdmin = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.service.LoginResponse} returns this
 */
proto.service.LoginResponse.prototype.setIsAdmin = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional string token = 5;
 * @return {string}
 */
proto.service.LoginResponse.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.LoginResponse} returns this
 */
proto.service.LoginResponse.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.InviteUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.service.InviteUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.InviteUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.InviteUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
email: jspb.Message.getFieldWithDefault(msg, 1, ""),
isAdmin: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.InviteUserRequest}
 */
proto.service.InviteUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.InviteUserRequest;
  return proto.service.InviteUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.InviteUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.InviteUserRequest}
 */
proto.service.InviteUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAdmin(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.InviteUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.InviteUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.InviteUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.InviteUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIsAdmin();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string email = 1;
 * @return {string}
 */
proto.service.InviteUserRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.InviteUserRequest} returns this
 */
proto.service.InviteUserRequest.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool is_admin = 2;
 * @return {boolean}
 */
proto.service.InviteUserRequest.prototype.getIsAdmin = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.service.InviteUserRequest} returns this
 */
proto.service.InviteUserRequest.prototype.setIsAdmin = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.InviteUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.service.InviteUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.InviteUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.InviteUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
invitationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
token: jspb.Message.getFieldWithDefault(msg, 2, ""),
expiresAt: (f = msg.getExpiresAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.InviteUserResponse}
 */
proto.service.InviteUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.InviteUserResponse;
  return proto.service.InviteUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.InviteUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.InviteUserResponse}
 */
proto.service.InviteUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInvitationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpiresAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.InviteUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.InviteUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.InviteUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.InviteUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInvitationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getExpiresAt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string invitation_id = 1;
 * @return {string}
 */
proto.service.InviteUserResponse.prototype.getInvitationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.InviteUserResponse} returns this
 */
proto.service.InviteUserResponse.prototype.setInvitationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.service.InviteUserResponse.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.InviteUserResponse} returns this
 */
proto.service.InviteUserResponse.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp expires_at = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.service.InviteUserResponse.prototype.getExpiresAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.service.InviteUserResponse} returns this
*/
proto.service.InviteUserResponse.prototype.setExpiresAt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.InviteUserResponse} returns this
 */
proto.service.InviteUserResponse.prototype.clearExpiresAt = function() {
  return this.setExpiresAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.InviteUserResponse.prototype.hasExpiresAt = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.ValidateInviteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.service.ValidateInviteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.ValidateInviteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ValidateInviteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
token: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.ValidateInviteRequest}
 */
proto.service.ValidateInviteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.ValidateInviteRequest;
  return proto.service.ValidateInviteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.ValidateInviteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.ValidateInviteRequest}
 */
proto.service.ValidateInviteRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.ValidateInviteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.ValidateInviteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.ValidateInviteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ValidateInviteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.service.ValidateInviteRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ValidateInviteRequest} returns this
 */
proto.service.ValidateInviteRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.ValidateInviteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.service.ValidateInviteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.ValidateInviteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ValidateInviteResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
email: jspb.Message.getFieldWithDefault(msg, 1, ""),
isAdmin: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.ValidateInviteResponse}
 */
proto.service.ValidateInviteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.ValidateInviteResponse;
  return proto.service.ValidateInviteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.ValidateInviteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.ValidateInviteResponse}
 */
proto.service.ValidateInviteResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAdmin(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.ValidateInviteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.ValidateInviteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.ValidateInviteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ValidateInviteResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIsAdmin();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string email = 1;
 * @return {string}
 */
proto.service.ValidateInviteResponse.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ValidateInviteResponse} returns this
 */
proto.service.ValidateInviteResponse.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool is_admin = 2;
 * @return {boolean}
 */
proto.service.ValidateInviteResponse.prototype.getIsAdmin = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.service.ValidateInviteResponse} returns this
 */
proto.service.ValidateInviteResponse.prototype.setIsAdmin = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.ScanDomainRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.service.ScanDomainRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.ScanDomainRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ScanDomainRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
domain: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.ScanDomainRequest}
 */
proto.service.ScanDomainRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.ScanDomainRequest;
  return proto.service.ScanDomainRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.ScanDomainRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.ScanDomainRequest}
 */
proto.service.ScanDomainRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.ScanDomainRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.ScanDomainRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.ScanDomainRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ScanDomainRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string domain = 1;
 * @return {string}
 */
proto.service.ScanDomainRequest.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ScanDomainRequest} returns this
 */
proto.service.ScanDomainRequest.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.ScanDomainResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.service.ScanDomainResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.ScanDomainResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ScanDomainResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
scanId: jspb.Message.getFieldWithDefault(msg, 1, ""),
result: (f = msg.getResult()) && proto.service.DNSSecurityResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.ScanDomainResponse}
 */
proto.service.ScanDomainResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.ScanDomainResponse;
  return proto.service.ScanDomainResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.ScanDomainResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.ScanDomainResponse}
 */
proto.service.ScanDomainResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setScanId(value);
      break;
    case 2:
      var value = new proto.service.DNSSecurityResult;
      reader.readMessage(value,proto.service.DNSSecurityResult.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.ScanDomainResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.ScanDomainResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.ScanDomainResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ScanDomainResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScanId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.service.DNSSecurityResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional string scan_id = 1;
 * @return {string}
 */
proto.service.ScanDomainResponse.prototype.getScanId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ScanDomainResponse} returns this
 */
proto.service.ScanDomainResponse.prototype.setScanId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional DNSSecurityResult result = 2;
 * @return {?proto.service.DNSSecurityResult}
 */
proto.service.ScanDomainResponse.prototype.getResult = function() {
  return /** @type{?proto.service.DNSSecurityResult} */ (
    jspb.Message.getWrapperField(this, proto.service.DNSSecurityResult, 2));
};


/**
 * @param {?proto.service.DNSSecurityResult|undefined} value
 * @return {!proto.service.ScanDomainResponse} returns this
*/
proto.service.ScanDomainResponse.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.ScanDomainResponse} returns this
 */
proto.service.ScanDomainResponse.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.ScanDomainResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.GetDNSScanResultsByDomainRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.service.GetDNSScanResultsByDomainRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.GetDNSScanResultsByDomainRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GetDNSScanResultsByDomainRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
domain: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.GetDNSScanResultsByDomainRequest}
 */
proto.service.GetDNSScanResultsByDomainRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.GetDNSScanResultsByDomainRequest;
  return proto.service.GetDNSScanResultsByDomainRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.GetDNSScanResultsByDomainRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.GetDNSScanResultsByDomainRequest}
 */
proto.service.GetDNSScanResultsByDomainRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.GetDNSScanResultsByDomainRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.GetDNSScanResultsByDomainRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.GetDNSScanResultsByDomainRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GetDNSScanResultsByDomainRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string domain = 1;
 * @return {string}
 */
proto.service.GetDNSScanResultsByDomainRequest.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.GetDNSScanResultsByDomainRequest} returns this
 */
proto.service.GetDNSScanResultsByDomainRequest.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.service.GetDNSScanResultsByDomainResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.GetDNSScanResultsByDomainResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.service.GetDNSScanResultsByDomainResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.GetDNSScanResultsByDomainResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GetDNSScanResultsByDomainResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    proto.service.DNSScanResult.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.GetDNSScanResultsByDomainResponse}
 */
proto.service.GetDNSScanResultsByDomainResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.GetDNSScanResultsByDomainResponse;
  return proto.service.GetDNSScanResultsByDomainResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.GetDNSScanResultsByDomainResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.GetDNSScanResultsByDomainResponse}
 */
proto.service.GetDNSScanResultsByDomainResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.service.DNSScanResult;
      reader.readMessage(value,proto.service.DNSScanResult.deserializeBinaryFromReader);
      msg.addResults(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.GetDNSScanResultsByDomainResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.GetDNSScanResultsByDomainResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.GetDNSScanResultsByDomainResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GetDNSScanResultsByDomainResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.service.DNSScanResult.serializeBinaryToWriter
    );
  }
};


/**
 * repeated DNSScanResult results = 1;
 * @return {!Array<!proto.service.DNSScanResult>}
 */
proto.service.GetDNSScanResultsByDomainResponse.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.service.DNSScanResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.service.DNSScanResult, 1));
};


/**
 * @param {!Array<!proto.service.DNSScanResult>} value
 * @return {!proto.service.GetDNSScanResultsByDomainResponse} returns this
*/
proto.service.GetDNSScanResultsByDomainResponse.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.service.DNSScanResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.service.DNSScanResult}
 */
proto.service.GetDNSScanResultsByDomainResponse.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.service.DNSScanResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.service.GetDNSScanResultsByDomainResponse} returns this
 */
proto.service.GetDNSScanResultsByDomainResponse.prototype.clearResultsList = function() {
  return this.setResultsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.GetDNSScanResultByIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.service.GetDNSScanResultByIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.GetDNSScanResultByIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GetDNSScanResultByIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
dnsScanId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.GetDNSScanResultByIDRequest}
 */
proto.service.GetDNSScanResultByIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.GetDNSScanResultByIDRequest;
  return proto.service.GetDNSScanResultByIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.GetDNSScanResultByIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.GetDNSScanResultByIDRequest}
 */
proto.service.GetDNSScanResultByIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDnsScanId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.GetDNSScanResultByIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.GetDNSScanResultByIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.GetDNSScanResultByIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GetDNSScanResultByIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDnsScanId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string dns_scan_id = 1;
 * @return {string}
 */
proto.service.GetDNSScanResultByIDRequest.prototype.getDnsScanId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.GetDNSScanResultByIDRequest} returns this
 */
proto.service.GetDNSScanResultByIDRequest.prototype.setDnsScanId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.GetDNSScanResultByIDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.service.GetDNSScanResultByIDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.GetDNSScanResultByIDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GetDNSScanResultByIDResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
result: (f = msg.getResult()) && proto.service.DNSScanResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.GetDNSScanResultByIDResponse}
 */
proto.service.GetDNSScanResultByIDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.GetDNSScanResultByIDResponse;
  return proto.service.GetDNSScanResultByIDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.GetDNSScanResultByIDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.GetDNSScanResultByIDResponse}
 */
proto.service.GetDNSScanResultByIDResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.service.DNSScanResult;
      reader.readMessage(value,proto.service.DNSScanResult.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.GetDNSScanResultByIDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.GetDNSScanResultByIDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.GetDNSScanResultByIDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GetDNSScanResultByIDResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.service.DNSScanResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional DNSScanResult result = 1;
 * @return {?proto.service.DNSScanResult}
 */
proto.service.GetDNSScanResultByIDResponse.prototype.getResult = function() {
  return /** @type{?proto.service.DNSScanResult} */ (
    jspb.Message.getWrapperField(this, proto.service.DNSScanResult, 1));
};


/**
 * @param {?proto.service.DNSScanResult|undefined} value
 * @return {!proto.service.GetDNSScanResultByIDResponse} returns this
*/
proto.service.GetDNSScanResultByIDResponse.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.GetDNSScanResultByIDResponse} returns this
 */
proto.service.GetDNSScanResultByIDResponse.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.GetDNSScanResultByIDResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.DNSScanResult.prototype.toObject = function(opt_includeInstance) {
  return proto.service.DNSScanResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.DNSScanResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.DNSScanResult.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
domain: jspb.Message.getFieldWithDefault(msg, 2, ""),
dnsScanId: jspb.Message.getFieldWithDefault(msg, 3, ""),
result: (f = msg.getResult()) && proto.service.DNSSecurityResult.toObject(includeInstance, f),
createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.DNSScanResult}
 */
proto.service.DNSScanResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.DNSScanResult;
  return proto.service.DNSScanResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.DNSScanResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.DNSScanResult}
 */
proto.service.DNSScanResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDnsScanId(value);
      break;
    case 4:
      var value = new proto.service.DNSSecurityResult;
      reader.readMessage(value,proto.service.DNSSecurityResult.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.DNSScanResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.DNSScanResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.DNSScanResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.DNSScanResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDnsScanId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.service.DNSSecurityResult.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.service.DNSScanResult.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.DNSScanResult} returns this
 */
proto.service.DNSScanResult.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string domain = 2;
 * @return {string}
 */
proto.service.DNSScanResult.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.DNSScanResult} returns this
 */
proto.service.DNSScanResult.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string dns_scan_id = 3;
 * @return {string}
 */
proto.service.DNSScanResult.prototype.getDnsScanId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.DNSScanResult} returns this
 */
proto.service.DNSScanResult.prototype.setDnsScanId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional DNSSecurityResult result = 4;
 * @return {?proto.service.DNSSecurityResult}
 */
proto.service.DNSScanResult.prototype.getResult = function() {
  return /** @type{?proto.service.DNSSecurityResult} */ (
    jspb.Message.getWrapperField(this, proto.service.DNSSecurityResult, 4));
};


/**
 * @param {?proto.service.DNSSecurityResult|undefined} value
 * @return {!proto.service.DNSScanResult} returns this
*/
proto.service.DNSScanResult.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.DNSScanResult} returns this
 */
proto.service.DNSScanResult.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.DNSScanResult.prototype.hasResult = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.service.DNSScanResult.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.service.DNSScanResult} returns this
*/
proto.service.DNSScanResult.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.DNSScanResult} returns this
 */
proto.service.DNSScanResult.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.DNSScanResult.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.ScanTLSRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.service.ScanTLSRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.ScanTLSRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ScanTLSRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
domain: jspb.Message.getFieldWithDefault(msg, 1, ""),
dnsScanId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.ScanTLSRequest}
 */
proto.service.ScanTLSRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.ScanTLSRequest;
  return proto.service.ScanTLSRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.ScanTLSRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.ScanTLSRequest}
 */
proto.service.ScanTLSRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDnsScanId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.ScanTLSRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.ScanTLSRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.ScanTLSRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ScanTLSRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDnsScanId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string domain = 1;
 * @return {string}
 */
proto.service.ScanTLSRequest.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ScanTLSRequest} returns this
 */
proto.service.ScanTLSRequest.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string dns_scan_id = 2;
 * @return {string}
 */
proto.service.ScanTLSRequest.prototype.getDnsScanId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ScanTLSRequest} returns this
 */
proto.service.ScanTLSRequest.prototype.setDnsScanId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.ScanTLSResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.service.ScanTLSResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.ScanTLSResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ScanTLSResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
scanId: jspb.Message.getFieldWithDefault(msg, 1, ""),
result: (f = msg.getResult()) && proto.service.TLSSecurityResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.ScanTLSResponse}
 */
proto.service.ScanTLSResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.ScanTLSResponse;
  return proto.service.ScanTLSResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.ScanTLSResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.ScanTLSResponse}
 */
proto.service.ScanTLSResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setScanId(value);
      break;
    case 2:
      var value = new proto.service.TLSSecurityResult;
      reader.readMessage(value,proto.service.TLSSecurityResult.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.ScanTLSResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.ScanTLSResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.ScanTLSResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ScanTLSResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScanId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.service.TLSSecurityResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional string scan_id = 1;
 * @return {string}
 */
proto.service.ScanTLSResponse.prototype.getScanId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ScanTLSResponse} returns this
 */
proto.service.ScanTLSResponse.prototype.setScanId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional TLSSecurityResult result = 2;
 * @return {?proto.service.TLSSecurityResult}
 */
proto.service.ScanTLSResponse.prototype.getResult = function() {
  return /** @type{?proto.service.TLSSecurityResult} */ (
    jspb.Message.getWrapperField(this, proto.service.TLSSecurityResult, 2));
};


/**
 * @param {?proto.service.TLSSecurityResult|undefined} value
 * @return {!proto.service.ScanTLSResponse} returns this
*/
proto.service.ScanTLSResponse.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.ScanTLSResponse} returns this
 */
proto.service.ScanTLSResponse.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.ScanTLSResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.GetTLSScanResultsByDomainRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.service.GetTLSScanResultsByDomainRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.GetTLSScanResultsByDomainRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GetTLSScanResultsByDomainRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
domain: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.GetTLSScanResultsByDomainRequest}
 */
proto.service.GetTLSScanResultsByDomainRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.GetTLSScanResultsByDomainRequest;
  return proto.service.GetTLSScanResultsByDomainRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.GetTLSScanResultsByDomainRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.GetTLSScanResultsByDomainRequest}
 */
proto.service.GetTLSScanResultsByDomainRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.GetTLSScanResultsByDomainRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.GetTLSScanResultsByDomainRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.GetTLSScanResultsByDomainRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GetTLSScanResultsByDomainRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string domain = 1;
 * @return {string}
 */
proto.service.GetTLSScanResultsByDomainRequest.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.GetTLSScanResultsByDomainRequest} returns this
 */
proto.service.GetTLSScanResultsByDomainRequest.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.service.GetTLSScanResultsByDomainResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.GetTLSScanResultsByDomainResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.service.GetTLSScanResultsByDomainResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.GetTLSScanResultsByDomainResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GetTLSScanResultsByDomainResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    proto.service.TLSScanResult.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.GetTLSScanResultsByDomainResponse}
 */
proto.service.GetTLSScanResultsByDomainResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.GetTLSScanResultsByDomainResponse;
  return proto.service.GetTLSScanResultsByDomainResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.GetTLSScanResultsByDomainResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.GetTLSScanResultsByDomainResponse}
 */
proto.service.GetTLSScanResultsByDomainResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.service.TLSScanResult;
      reader.readMessage(value,proto.service.TLSScanResult.deserializeBinaryFromReader);
      msg.addResults(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.GetTLSScanResultsByDomainResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.GetTLSScanResultsByDomainResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.GetTLSScanResultsByDomainResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GetTLSScanResultsByDomainResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.service.TLSScanResult.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TLSScanResult results = 1;
 * @return {!Array<!proto.service.TLSScanResult>}
 */
proto.service.GetTLSScanResultsByDomainResponse.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.service.TLSScanResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.service.TLSScanResult, 1));
};


/**
 * @param {!Array<!proto.service.TLSScanResult>} value
 * @return {!proto.service.GetTLSScanResultsByDomainResponse} returns this
*/
proto.service.GetTLSScanResultsByDomainResponse.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.service.TLSScanResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.service.TLSScanResult}
 */
proto.service.GetTLSScanResultsByDomainResponse.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.service.TLSScanResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.service.GetTLSScanResultsByDomainResponse} returns this
 */
proto.service.GetTLSScanResultsByDomainResponse.prototype.clearResultsList = function() {
  return this.setResultsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.TLSScanResult.prototype.toObject = function(opt_includeInstance) {
  return proto.service.TLSScanResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.TLSScanResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.TLSScanResult.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
domain: jspb.Message.getFieldWithDefault(msg, 2, ""),
dnsScanId: jspb.Message.getFieldWithDefault(msg, 3, ""),
result: (f = msg.getResult()) && proto.service.TLSSecurityResult.toObject(includeInstance, f),
createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.TLSScanResult}
 */
proto.service.TLSScanResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.TLSScanResult;
  return proto.service.TLSScanResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.TLSScanResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.TLSScanResult}
 */
proto.service.TLSScanResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDnsScanId(value);
      break;
    case 4:
      var value = new proto.service.TLSSecurityResult;
      reader.readMessage(value,proto.service.TLSSecurityResult.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.TLSScanResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.TLSScanResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.TLSScanResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.TLSScanResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDnsScanId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.service.TLSSecurityResult.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.service.TLSScanResult.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.TLSScanResult} returns this
 */
proto.service.TLSScanResult.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string domain = 2;
 * @return {string}
 */
proto.service.TLSScanResult.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.TLSScanResult} returns this
 */
proto.service.TLSScanResult.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string dns_scan_id = 3;
 * @return {string}
 */
proto.service.TLSScanResult.prototype.getDnsScanId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.TLSScanResult} returns this
 */
proto.service.TLSScanResult.prototype.setDnsScanId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional TLSSecurityResult result = 4;
 * @return {?proto.service.TLSSecurityResult}
 */
proto.service.TLSScanResult.prototype.getResult = function() {
  return /** @type{?proto.service.TLSSecurityResult} */ (
    jspb.Message.getWrapperField(this, proto.service.TLSSecurityResult, 4));
};


/**
 * @param {?proto.service.TLSSecurityResult|undefined} value
 * @return {!proto.service.TLSScanResult} returns this
*/
proto.service.TLSScanResult.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.TLSScanResult} returns this
 */
proto.service.TLSScanResult.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.TLSScanResult.prototype.hasResult = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.service.TLSScanResult.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.service.TLSScanResult} returns this
*/
proto.service.TLSScanResult.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.TLSScanResult} returns this
 */
proto.service.TLSScanResult.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.TLSScanResult.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.ScanCrtShRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.service.ScanCrtShRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.ScanCrtShRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ScanCrtShRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
domain: jspb.Message.getFieldWithDefault(msg, 1, ""),
dnsScanId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.ScanCrtShRequest}
 */
proto.service.ScanCrtShRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.ScanCrtShRequest;
  return proto.service.ScanCrtShRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.ScanCrtShRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.ScanCrtShRequest}
 */
proto.service.ScanCrtShRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDnsScanId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.ScanCrtShRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.ScanCrtShRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.ScanCrtShRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ScanCrtShRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDnsScanId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string domain = 1;
 * @return {string}
 */
proto.service.ScanCrtShRequest.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ScanCrtShRequest} returns this
 */
proto.service.ScanCrtShRequest.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string dns_scan_id = 2;
 * @return {string}
 */
proto.service.ScanCrtShRequest.prototype.getDnsScanId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ScanCrtShRequest} returns this
 */
proto.service.ScanCrtShRequest.prototype.setDnsScanId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.ScanCrtShResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.service.ScanCrtShResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.ScanCrtShResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ScanCrtShResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
scanId: jspb.Message.getFieldWithDefault(msg, 1, ""),
result: (f = msg.getResult()) && proto.service.CrtShSecurityResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.ScanCrtShResponse}
 */
proto.service.ScanCrtShResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.ScanCrtShResponse;
  return proto.service.ScanCrtShResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.ScanCrtShResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.ScanCrtShResponse}
 */
proto.service.ScanCrtShResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setScanId(value);
      break;
    case 2:
      var value = new proto.service.CrtShSecurityResult;
      reader.readMessage(value,proto.service.CrtShSecurityResult.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.ScanCrtShResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.ScanCrtShResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.ScanCrtShResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ScanCrtShResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScanId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.service.CrtShSecurityResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional string scan_id = 1;
 * @return {string}
 */
proto.service.ScanCrtShResponse.prototype.getScanId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ScanCrtShResponse} returns this
 */
proto.service.ScanCrtShResponse.prototype.setScanId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CrtShSecurityResult result = 2;
 * @return {?proto.service.CrtShSecurityResult}
 */
proto.service.ScanCrtShResponse.prototype.getResult = function() {
  return /** @type{?proto.service.CrtShSecurityResult} */ (
    jspb.Message.getWrapperField(this, proto.service.CrtShSecurityResult, 2));
};


/**
 * @param {?proto.service.CrtShSecurityResult|undefined} value
 * @return {!proto.service.ScanCrtShResponse} returns this
*/
proto.service.ScanCrtShResponse.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.ScanCrtShResponse} returns this
 */
proto.service.ScanCrtShResponse.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.ScanCrtShResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.GetCrtShScanResultsByDomainRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.service.GetCrtShScanResultsByDomainRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.GetCrtShScanResultsByDomainRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GetCrtShScanResultsByDomainRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
domain: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.GetCrtShScanResultsByDomainRequest}
 */
proto.service.GetCrtShScanResultsByDomainRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.GetCrtShScanResultsByDomainRequest;
  return proto.service.GetCrtShScanResultsByDomainRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.GetCrtShScanResultsByDomainRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.GetCrtShScanResultsByDomainRequest}
 */
proto.service.GetCrtShScanResultsByDomainRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.GetCrtShScanResultsByDomainRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.GetCrtShScanResultsByDomainRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.GetCrtShScanResultsByDomainRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GetCrtShScanResultsByDomainRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string domain = 1;
 * @return {string}
 */
proto.service.GetCrtShScanResultsByDomainRequest.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.GetCrtShScanResultsByDomainRequest} returns this
 */
proto.service.GetCrtShScanResultsByDomainRequest.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.service.GetCrtShScanResultsByDomainResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.GetCrtShScanResultsByDomainResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.service.GetCrtShScanResultsByDomainResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.GetCrtShScanResultsByDomainResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GetCrtShScanResultsByDomainResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    proto.service.CrtShScanResult.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.GetCrtShScanResultsByDomainResponse}
 */
proto.service.GetCrtShScanResultsByDomainResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.GetCrtShScanResultsByDomainResponse;
  return proto.service.GetCrtShScanResultsByDomainResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.GetCrtShScanResultsByDomainResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.GetCrtShScanResultsByDomainResponse}
 */
proto.service.GetCrtShScanResultsByDomainResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.service.CrtShScanResult;
      reader.readMessage(value,proto.service.CrtShScanResult.deserializeBinaryFromReader);
      msg.addResults(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.GetCrtShScanResultsByDomainResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.GetCrtShScanResultsByDomainResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.GetCrtShScanResultsByDomainResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GetCrtShScanResultsByDomainResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.service.CrtShScanResult.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CrtShScanResult results = 1;
 * @return {!Array<!proto.service.CrtShScanResult>}
 */
proto.service.GetCrtShScanResultsByDomainResponse.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.service.CrtShScanResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.service.CrtShScanResult, 1));
};


/**
 * @param {!Array<!proto.service.CrtShScanResult>} value
 * @return {!proto.service.GetCrtShScanResultsByDomainResponse} returns this
*/
proto.service.GetCrtShScanResultsByDomainResponse.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.service.CrtShScanResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.service.CrtShScanResult}
 */
proto.service.GetCrtShScanResultsByDomainResponse.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.service.CrtShScanResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.service.GetCrtShScanResultsByDomainResponse} returns this
 */
proto.service.GetCrtShScanResultsByDomainResponse.prototype.clearResultsList = function() {
  return this.setResultsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.CrtShScanResult.prototype.toObject = function(opt_includeInstance) {
  return proto.service.CrtShScanResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.CrtShScanResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.CrtShScanResult.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
domain: jspb.Message.getFieldWithDefault(msg, 2, ""),
dnsScanId: jspb.Message.getFieldWithDefault(msg, 3, ""),
result: (f = msg.getResult()) && proto.service.CrtShSecurityResult.toObject(includeInstance, f),
createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.CrtShScanResult}
 */
proto.service.CrtShScanResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.CrtShScanResult;
  return proto.service.CrtShScanResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.CrtShScanResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.CrtShScanResult}
 */
proto.service.CrtShScanResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDnsScanId(value);
      break;
    case 4:
      var value = new proto.service.CrtShSecurityResult;
      reader.readMessage(value,proto.service.CrtShSecurityResult.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.CrtShScanResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.CrtShScanResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.CrtShScanResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.CrtShScanResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDnsScanId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.service.CrtShSecurityResult.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.service.CrtShScanResult.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.CrtShScanResult} returns this
 */
proto.service.CrtShScanResult.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string domain = 2;
 * @return {string}
 */
proto.service.CrtShScanResult.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.CrtShScanResult} returns this
 */
proto.service.CrtShScanResult.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string dns_scan_id = 3;
 * @return {string}
 */
proto.service.CrtShScanResult.prototype.getDnsScanId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.CrtShScanResult} returns this
 */
proto.service.CrtShScanResult.prototype.setDnsScanId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional CrtShSecurityResult result = 4;
 * @return {?proto.service.CrtShSecurityResult}
 */
proto.service.CrtShScanResult.prototype.getResult = function() {
  return /** @type{?proto.service.CrtShSecurityResult} */ (
    jspb.Message.getWrapperField(this, proto.service.CrtShSecurityResult, 4));
};


/**
 * @param {?proto.service.CrtShSecurityResult|undefined} value
 * @return {!proto.service.CrtShScanResult} returns this
*/
proto.service.CrtShScanResult.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.CrtShScanResult} returns this
 */
proto.service.CrtShScanResult.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.CrtShScanResult.prototype.hasResult = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.service.CrtShScanResult.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.service.CrtShScanResult} returns this
*/
proto.service.CrtShScanResult.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.CrtShScanResult} returns this
 */
proto.service.CrtShScanResult.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.CrtShScanResult.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.ScanChaosRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.service.ScanChaosRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.ScanChaosRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ScanChaosRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
domain: jspb.Message.getFieldWithDefault(msg, 1, ""),
dnsScanId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.ScanChaosRequest}
 */
proto.service.ScanChaosRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.ScanChaosRequest;
  return proto.service.ScanChaosRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.ScanChaosRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.ScanChaosRequest}
 */
proto.service.ScanChaosRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDnsScanId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.ScanChaosRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.ScanChaosRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.ScanChaosRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ScanChaosRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDnsScanId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string domain = 1;
 * @return {string}
 */
proto.service.ScanChaosRequest.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ScanChaosRequest} returns this
 */
proto.service.ScanChaosRequest.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string dns_scan_id = 2;
 * @return {string}
 */
proto.service.ScanChaosRequest.prototype.getDnsScanId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ScanChaosRequest} returns this
 */
proto.service.ScanChaosRequest.prototype.setDnsScanId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.ScanChaosResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.service.ScanChaosResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.ScanChaosResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ScanChaosResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
scanId: jspb.Message.getFieldWithDefault(msg, 1, ""),
result: (f = msg.getResult()) && proto.service.ChaosSecurityResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.ScanChaosResponse}
 */
proto.service.ScanChaosResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.ScanChaosResponse;
  return proto.service.ScanChaosResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.ScanChaosResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.ScanChaosResponse}
 */
proto.service.ScanChaosResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setScanId(value);
      break;
    case 2:
      var value = new proto.service.ChaosSecurityResult;
      reader.readMessage(value,proto.service.ChaosSecurityResult.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.ScanChaosResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.ScanChaosResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.ScanChaosResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ScanChaosResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScanId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.service.ChaosSecurityResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional string scan_id = 1;
 * @return {string}
 */
proto.service.ScanChaosResponse.prototype.getScanId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ScanChaosResponse} returns this
 */
proto.service.ScanChaosResponse.prototype.setScanId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ChaosSecurityResult result = 2;
 * @return {?proto.service.ChaosSecurityResult}
 */
proto.service.ScanChaosResponse.prototype.getResult = function() {
  return /** @type{?proto.service.ChaosSecurityResult} */ (
    jspb.Message.getWrapperField(this, proto.service.ChaosSecurityResult, 2));
};


/**
 * @param {?proto.service.ChaosSecurityResult|undefined} value
 * @return {!proto.service.ScanChaosResponse} returns this
*/
proto.service.ScanChaosResponse.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.ScanChaosResponse} returns this
 */
proto.service.ScanChaosResponse.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.ScanChaosResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.GetChaosScanResultsByDomainRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.service.GetChaosScanResultsByDomainRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.GetChaosScanResultsByDomainRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GetChaosScanResultsByDomainRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
domain: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.GetChaosScanResultsByDomainRequest}
 */
proto.service.GetChaosScanResultsByDomainRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.GetChaosScanResultsByDomainRequest;
  return proto.service.GetChaosScanResultsByDomainRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.GetChaosScanResultsByDomainRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.GetChaosScanResultsByDomainRequest}
 */
proto.service.GetChaosScanResultsByDomainRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.GetChaosScanResultsByDomainRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.GetChaosScanResultsByDomainRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.GetChaosScanResultsByDomainRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GetChaosScanResultsByDomainRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string domain = 1;
 * @return {string}
 */
proto.service.GetChaosScanResultsByDomainRequest.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.GetChaosScanResultsByDomainRequest} returns this
 */
proto.service.GetChaosScanResultsByDomainRequest.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.service.GetChaosScanResultsByDomainResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.GetChaosScanResultsByDomainResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.service.GetChaosScanResultsByDomainResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.GetChaosScanResultsByDomainResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GetChaosScanResultsByDomainResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    proto.service.ChaosScanResult.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.GetChaosScanResultsByDomainResponse}
 */
proto.service.GetChaosScanResultsByDomainResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.GetChaosScanResultsByDomainResponse;
  return proto.service.GetChaosScanResultsByDomainResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.GetChaosScanResultsByDomainResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.GetChaosScanResultsByDomainResponse}
 */
proto.service.GetChaosScanResultsByDomainResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.service.ChaosScanResult;
      reader.readMessage(value,proto.service.ChaosScanResult.deserializeBinaryFromReader);
      msg.addResults(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.GetChaosScanResultsByDomainResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.GetChaosScanResultsByDomainResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.GetChaosScanResultsByDomainResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GetChaosScanResultsByDomainResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.service.ChaosScanResult.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ChaosScanResult results = 1;
 * @return {!Array<!proto.service.ChaosScanResult>}
 */
proto.service.GetChaosScanResultsByDomainResponse.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.service.ChaosScanResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.service.ChaosScanResult, 1));
};


/**
 * @param {!Array<!proto.service.ChaosScanResult>} value
 * @return {!proto.service.GetChaosScanResultsByDomainResponse} returns this
*/
proto.service.GetChaosScanResultsByDomainResponse.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.service.ChaosScanResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.service.ChaosScanResult}
 */
proto.service.GetChaosScanResultsByDomainResponse.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.service.ChaosScanResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.service.GetChaosScanResultsByDomainResponse} returns this
 */
proto.service.GetChaosScanResultsByDomainResponse.prototype.clearResultsList = function() {
  return this.setResultsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.ChaosScanResult.prototype.toObject = function(opt_includeInstance) {
  return proto.service.ChaosScanResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.ChaosScanResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ChaosScanResult.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
domain: jspb.Message.getFieldWithDefault(msg, 2, ""),
dnsScanId: jspb.Message.getFieldWithDefault(msg, 3, ""),
result: (f = msg.getResult()) && proto.service.ChaosSecurityResult.toObject(includeInstance, f),
createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.ChaosScanResult}
 */
proto.service.ChaosScanResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.ChaosScanResult;
  return proto.service.ChaosScanResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.ChaosScanResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.ChaosScanResult}
 */
proto.service.ChaosScanResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDnsScanId(value);
      break;
    case 4:
      var value = new proto.service.ChaosSecurityResult;
      reader.readMessage(value,proto.service.ChaosSecurityResult.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.ChaosScanResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.ChaosScanResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.ChaosScanResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ChaosScanResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDnsScanId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.service.ChaosSecurityResult.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.service.ChaosScanResult.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ChaosScanResult} returns this
 */
proto.service.ChaosScanResult.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string domain = 2;
 * @return {string}
 */
proto.service.ChaosScanResult.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ChaosScanResult} returns this
 */
proto.service.ChaosScanResult.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string dns_scan_id = 3;
 * @return {string}
 */
proto.service.ChaosScanResult.prototype.getDnsScanId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ChaosScanResult} returns this
 */
proto.service.ChaosScanResult.prototype.setDnsScanId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional ChaosSecurityResult result = 4;
 * @return {?proto.service.ChaosSecurityResult}
 */
proto.service.ChaosScanResult.prototype.getResult = function() {
  return /** @type{?proto.service.ChaosSecurityResult} */ (
    jspb.Message.getWrapperField(this, proto.service.ChaosSecurityResult, 4));
};


/**
 * @param {?proto.service.ChaosSecurityResult|undefined} value
 * @return {!proto.service.ChaosScanResult} returns this
*/
proto.service.ChaosScanResult.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.ChaosScanResult} returns this
 */
proto.service.ChaosScanResult.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.ChaosScanResult.prototype.hasResult = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.service.ChaosScanResult.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.service.ChaosScanResult} returns this
*/
proto.service.ChaosScanResult.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.ChaosScanResult} returns this
 */
proto.service.ChaosScanResult.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.ChaosScanResult.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.ScanShodanRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.service.ScanShodanRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.ScanShodanRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ScanShodanRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
domain: jspb.Message.getFieldWithDefault(msg, 1, ""),
dnsScanId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.ScanShodanRequest}
 */
proto.service.ScanShodanRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.ScanShodanRequest;
  return proto.service.ScanShodanRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.ScanShodanRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.ScanShodanRequest}
 */
proto.service.ScanShodanRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDnsScanId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.ScanShodanRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.ScanShodanRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.ScanShodanRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ScanShodanRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDnsScanId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string domain = 1;
 * @return {string}
 */
proto.service.ScanShodanRequest.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ScanShodanRequest} returns this
 */
proto.service.ScanShodanRequest.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string dns_scan_id = 2;
 * @return {string}
 */
proto.service.ScanShodanRequest.prototype.getDnsScanId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ScanShodanRequest} returns this
 */
proto.service.ScanShodanRequest.prototype.setDnsScanId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.ScanShodanResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.service.ScanShodanResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.ScanShodanResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ScanShodanResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
scanId: jspb.Message.getFieldWithDefault(msg, 1, ""),
result: (f = msg.getResult()) && proto.service.ShodanSecurityResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.ScanShodanResponse}
 */
proto.service.ScanShodanResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.ScanShodanResponse;
  return proto.service.ScanShodanResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.ScanShodanResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.ScanShodanResponse}
 */
proto.service.ScanShodanResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setScanId(value);
      break;
    case 2:
      var value = new proto.service.ShodanSecurityResult;
      reader.readMessage(value,proto.service.ShodanSecurityResult.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.ScanShodanResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.ScanShodanResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.ScanShodanResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ScanShodanResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScanId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.service.ShodanSecurityResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional string scan_id = 1;
 * @return {string}
 */
proto.service.ScanShodanResponse.prototype.getScanId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ScanShodanResponse} returns this
 */
proto.service.ScanShodanResponse.prototype.setScanId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ShodanSecurityResult result = 2;
 * @return {?proto.service.ShodanSecurityResult}
 */
proto.service.ScanShodanResponse.prototype.getResult = function() {
  return /** @type{?proto.service.ShodanSecurityResult} */ (
    jspb.Message.getWrapperField(this, proto.service.ShodanSecurityResult, 2));
};


/**
 * @param {?proto.service.ShodanSecurityResult|undefined} value
 * @return {!proto.service.ScanShodanResponse} returns this
*/
proto.service.ScanShodanResponse.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.ScanShodanResponse} returns this
 */
proto.service.ScanShodanResponse.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.ScanShodanResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.GetShodanScanResultsByDomainRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.service.GetShodanScanResultsByDomainRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.GetShodanScanResultsByDomainRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GetShodanScanResultsByDomainRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
domain: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.GetShodanScanResultsByDomainRequest}
 */
proto.service.GetShodanScanResultsByDomainRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.GetShodanScanResultsByDomainRequest;
  return proto.service.GetShodanScanResultsByDomainRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.GetShodanScanResultsByDomainRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.GetShodanScanResultsByDomainRequest}
 */
proto.service.GetShodanScanResultsByDomainRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.GetShodanScanResultsByDomainRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.GetShodanScanResultsByDomainRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.GetShodanScanResultsByDomainRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GetShodanScanResultsByDomainRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string domain = 1;
 * @return {string}
 */
proto.service.GetShodanScanResultsByDomainRequest.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.GetShodanScanResultsByDomainRequest} returns this
 */
proto.service.GetShodanScanResultsByDomainRequest.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.service.GetShodanScanResultsByDomainResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.GetShodanScanResultsByDomainResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.service.GetShodanScanResultsByDomainResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.GetShodanScanResultsByDomainResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GetShodanScanResultsByDomainResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    proto.service.ShodanScanResult.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.GetShodanScanResultsByDomainResponse}
 */
proto.service.GetShodanScanResultsByDomainResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.GetShodanScanResultsByDomainResponse;
  return proto.service.GetShodanScanResultsByDomainResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.GetShodanScanResultsByDomainResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.GetShodanScanResultsByDomainResponse}
 */
proto.service.GetShodanScanResultsByDomainResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.service.ShodanScanResult;
      reader.readMessage(value,proto.service.ShodanScanResult.deserializeBinaryFromReader);
      msg.addResults(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.GetShodanScanResultsByDomainResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.GetShodanScanResultsByDomainResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.GetShodanScanResultsByDomainResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GetShodanScanResultsByDomainResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.service.ShodanScanResult.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ShodanScanResult results = 1;
 * @return {!Array<!proto.service.ShodanScanResult>}
 */
proto.service.GetShodanScanResultsByDomainResponse.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.service.ShodanScanResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.service.ShodanScanResult, 1));
};


/**
 * @param {!Array<!proto.service.ShodanScanResult>} value
 * @return {!proto.service.GetShodanScanResultsByDomainResponse} returns this
*/
proto.service.GetShodanScanResultsByDomainResponse.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.service.ShodanScanResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.service.ShodanScanResult}
 */
proto.service.GetShodanScanResultsByDomainResponse.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.service.ShodanScanResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.service.GetShodanScanResultsByDomainResponse} returns this
 */
proto.service.GetShodanScanResultsByDomainResponse.prototype.clearResultsList = function() {
  return this.setResultsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.ShodanScanResult.prototype.toObject = function(opt_includeInstance) {
  return proto.service.ShodanScanResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.ShodanScanResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ShodanScanResult.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
domain: jspb.Message.getFieldWithDefault(msg, 2, ""),
dnsScanId: jspb.Message.getFieldWithDefault(msg, 3, ""),
result: (f = msg.getResult()) && proto.service.ShodanSecurityResult.toObject(includeInstance, f),
createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.ShodanScanResult}
 */
proto.service.ShodanScanResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.ShodanScanResult;
  return proto.service.ShodanScanResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.ShodanScanResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.ShodanScanResult}
 */
proto.service.ShodanScanResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDnsScanId(value);
      break;
    case 4:
      var value = new proto.service.ShodanSecurityResult;
      reader.readMessage(value,proto.service.ShodanSecurityResult.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.ShodanScanResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.ShodanScanResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.ShodanScanResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ShodanScanResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDnsScanId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.service.ShodanSecurityResult.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.service.ShodanScanResult.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ShodanScanResult} returns this
 */
proto.service.ShodanScanResult.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string domain = 2;
 * @return {string}
 */
proto.service.ShodanScanResult.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ShodanScanResult} returns this
 */
proto.service.ShodanScanResult.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string dns_scan_id = 3;
 * @return {string}
 */
proto.service.ShodanScanResult.prototype.getDnsScanId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ShodanScanResult} returns this
 */
proto.service.ShodanScanResult.prototype.setDnsScanId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional ShodanSecurityResult result = 4;
 * @return {?proto.service.ShodanSecurityResult}
 */
proto.service.ShodanScanResult.prototype.getResult = function() {
  return /** @type{?proto.service.ShodanSecurityResult} */ (
    jspb.Message.getWrapperField(this, proto.service.ShodanSecurityResult, 4));
};


/**
 * @param {?proto.service.ShodanSecurityResult|undefined} value
 * @return {!proto.service.ShodanScanResult} returns this
*/
proto.service.ShodanScanResult.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.ShodanScanResult} returns this
 */
proto.service.ShodanScanResult.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.ShodanScanResult.prototype.hasResult = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.service.ShodanScanResult.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.service.ShodanScanResult} returns this
*/
proto.service.ShodanScanResult.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.ShodanScanResult} returns this
 */
proto.service.ShodanScanResult.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.ShodanScanResult.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.ScanOTXRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.service.ScanOTXRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.ScanOTXRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ScanOTXRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
domain: jspb.Message.getFieldWithDefault(msg, 1, ""),
dnsScanId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.ScanOTXRequest}
 */
proto.service.ScanOTXRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.ScanOTXRequest;
  return proto.service.ScanOTXRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.ScanOTXRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.ScanOTXRequest}
 */
proto.service.ScanOTXRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDnsScanId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.ScanOTXRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.ScanOTXRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.ScanOTXRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ScanOTXRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDnsScanId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string domain = 1;
 * @return {string}
 */
proto.service.ScanOTXRequest.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ScanOTXRequest} returns this
 */
proto.service.ScanOTXRequest.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string dns_scan_id = 2;
 * @return {string}
 */
proto.service.ScanOTXRequest.prototype.getDnsScanId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ScanOTXRequest} returns this
 */
proto.service.ScanOTXRequest.prototype.setDnsScanId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.ScanOTXResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.service.ScanOTXResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.ScanOTXResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ScanOTXResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
scanId: jspb.Message.getFieldWithDefault(msg, 1, ""),
result: (f = msg.getResult()) && proto.service.OTXSecurityResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.ScanOTXResponse}
 */
proto.service.ScanOTXResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.ScanOTXResponse;
  return proto.service.ScanOTXResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.ScanOTXResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.ScanOTXResponse}
 */
proto.service.ScanOTXResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setScanId(value);
      break;
    case 2:
      var value = new proto.service.OTXSecurityResult;
      reader.readMessage(value,proto.service.OTXSecurityResult.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.ScanOTXResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.ScanOTXResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.ScanOTXResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ScanOTXResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScanId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.service.OTXSecurityResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional string scan_id = 1;
 * @return {string}
 */
proto.service.ScanOTXResponse.prototype.getScanId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ScanOTXResponse} returns this
 */
proto.service.ScanOTXResponse.prototype.setScanId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional OTXSecurityResult result = 2;
 * @return {?proto.service.OTXSecurityResult}
 */
proto.service.ScanOTXResponse.prototype.getResult = function() {
  return /** @type{?proto.service.OTXSecurityResult} */ (
    jspb.Message.getWrapperField(this, proto.service.OTXSecurityResult, 2));
};


/**
 * @param {?proto.service.OTXSecurityResult|undefined} value
 * @return {!proto.service.ScanOTXResponse} returns this
*/
proto.service.ScanOTXResponse.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.ScanOTXResponse} returns this
 */
proto.service.ScanOTXResponse.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.ScanOTXResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.GetOTXScanResultsByDomainRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.service.GetOTXScanResultsByDomainRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.GetOTXScanResultsByDomainRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GetOTXScanResultsByDomainRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
domain: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.GetOTXScanResultsByDomainRequest}
 */
proto.service.GetOTXScanResultsByDomainRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.GetOTXScanResultsByDomainRequest;
  return proto.service.GetOTXScanResultsByDomainRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.GetOTXScanResultsByDomainRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.GetOTXScanResultsByDomainRequest}
 */
proto.service.GetOTXScanResultsByDomainRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.GetOTXScanResultsByDomainRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.GetOTXScanResultsByDomainRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.GetOTXScanResultsByDomainRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GetOTXScanResultsByDomainRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string domain = 1;
 * @return {string}
 */
proto.service.GetOTXScanResultsByDomainRequest.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.GetOTXScanResultsByDomainRequest} returns this
 */
proto.service.GetOTXScanResultsByDomainRequest.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.service.GetOTXScanResultsByDomainResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.GetOTXScanResultsByDomainResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.service.GetOTXScanResultsByDomainResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.GetOTXScanResultsByDomainResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GetOTXScanResultsByDomainResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    proto.service.OTXScanResult.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.GetOTXScanResultsByDomainResponse}
 */
proto.service.GetOTXScanResultsByDomainResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.GetOTXScanResultsByDomainResponse;
  return proto.service.GetOTXScanResultsByDomainResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.GetOTXScanResultsByDomainResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.GetOTXScanResultsByDomainResponse}
 */
proto.service.GetOTXScanResultsByDomainResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.service.OTXScanResult;
      reader.readMessage(value,proto.service.OTXScanResult.deserializeBinaryFromReader);
      msg.addResults(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.GetOTXScanResultsByDomainResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.GetOTXScanResultsByDomainResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.GetOTXScanResultsByDomainResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GetOTXScanResultsByDomainResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.service.OTXScanResult.serializeBinaryToWriter
    );
  }
};


/**
 * repeated OTXScanResult results = 1;
 * @return {!Array<!proto.service.OTXScanResult>}
 */
proto.service.GetOTXScanResultsByDomainResponse.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.service.OTXScanResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.service.OTXScanResult, 1));
};


/**
 * @param {!Array<!proto.service.OTXScanResult>} value
 * @return {!proto.service.GetOTXScanResultsByDomainResponse} returns this
*/
proto.service.GetOTXScanResultsByDomainResponse.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.service.OTXScanResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.service.OTXScanResult}
 */
proto.service.GetOTXScanResultsByDomainResponse.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.service.OTXScanResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.service.GetOTXScanResultsByDomainResponse} returns this
 */
proto.service.GetOTXScanResultsByDomainResponse.prototype.clearResultsList = function() {
  return this.setResultsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.OTXScanResult.prototype.toObject = function(opt_includeInstance) {
  return proto.service.OTXScanResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.OTXScanResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.OTXScanResult.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
domain: jspb.Message.getFieldWithDefault(msg, 2, ""),
dnsScanId: jspb.Message.getFieldWithDefault(msg, 3, ""),
result: (f = msg.getResult()) && proto.service.OTXSecurityResult.toObject(includeInstance, f),
createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.OTXScanResult}
 */
proto.service.OTXScanResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.OTXScanResult;
  return proto.service.OTXScanResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.OTXScanResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.OTXScanResult}
 */
proto.service.OTXScanResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDnsScanId(value);
      break;
    case 4:
      var value = new proto.service.OTXSecurityResult;
      reader.readMessage(value,proto.service.OTXSecurityResult.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.OTXScanResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.OTXScanResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.OTXScanResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.OTXScanResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDnsScanId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.service.OTXSecurityResult.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.service.OTXScanResult.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.OTXScanResult} returns this
 */
proto.service.OTXScanResult.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string domain = 2;
 * @return {string}
 */
proto.service.OTXScanResult.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.OTXScanResult} returns this
 */
proto.service.OTXScanResult.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string dns_scan_id = 3;
 * @return {string}
 */
proto.service.OTXScanResult.prototype.getDnsScanId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.OTXScanResult} returns this
 */
proto.service.OTXScanResult.prototype.setDnsScanId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional OTXSecurityResult result = 4;
 * @return {?proto.service.OTXSecurityResult}
 */
proto.service.OTXScanResult.prototype.getResult = function() {
  return /** @type{?proto.service.OTXSecurityResult} */ (
    jspb.Message.getWrapperField(this, proto.service.OTXSecurityResult, 4));
};


/**
 * @param {?proto.service.OTXSecurityResult|undefined} value
 * @return {!proto.service.OTXScanResult} returns this
*/
proto.service.OTXScanResult.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.OTXScanResult} returns this
 */
proto.service.OTXScanResult.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.OTXScanResult.prototype.hasResult = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.service.OTXScanResult.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.service.OTXScanResult} returns this
*/
proto.service.OTXScanResult.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.OTXScanResult} returns this
 */
proto.service.OTXScanResult.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.OTXScanResult.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.ScanWhoisRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.service.ScanWhoisRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.ScanWhoisRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ScanWhoisRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
domain: jspb.Message.getFieldWithDefault(msg, 1, ""),
dnsScanId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.ScanWhoisRequest}
 */
proto.service.ScanWhoisRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.ScanWhoisRequest;
  return proto.service.ScanWhoisRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.ScanWhoisRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.ScanWhoisRequest}
 */
proto.service.ScanWhoisRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDnsScanId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.ScanWhoisRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.ScanWhoisRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.ScanWhoisRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ScanWhoisRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDnsScanId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string domain = 1;
 * @return {string}
 */
proto.service.ScanWhoisRequest.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ScanWhoisRequest} returns this
 */
proto.service.ScanWhoisRequest.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string dns_scan_id = 2;
 * @return {string}
 */
proto.service.ScanWhoisRequest.prototype.getDnsScanId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ScanWhoisRequest} returns this
 */
proto.service.ScanWhoisRequest.prototype.setDnsScanId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.ScanWhoisResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.service.ScanWhoisResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.ScanWhoisResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ScanWhoisResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
scanId: jspb.Message.getFieldWithDefault(msg, 1, ""),
result: (f = msg.getResult()) && proto.service.WhoisSecurityResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.ScanWhoisResponse}
 */
proto.service.ScanWhoisResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.ScanWhoisResponse;
  return proto.service.ScanWhoisResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.ScanWhoisResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.ScanWhoisResponse}
 */
proto.service.ScanWhoisResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setScanId(value);
      break;
    case 2:
      var value = new proto.service.WhoisSecurityResult;
      reader.readMessage(value,proto.service.WhoisSecurityResult.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.ScanWhoisResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.ScanWhoisResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.ScanWhoisResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ScanWhoisResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScanId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.service.WhoisSecurityResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional string scan_id = 1;
 * @return {string}
 */
proto.service.ScanWhoisResponse.prototype.getScanId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ScanWhoisResponse} returns this
 */
proto.service.ScanWhoisResponse.prototype.setScanId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional WhoisSecurityResult result = 2;
 * @return {?proto.service.WhoisSecurityResult}
 */
proto.service.ScanWhoisResponse.prototype.getResult = function() {
  return /** @type{?proto.service.WhoisSecurityResult} */ (
    jspb.Message.getWrapperField(this, proto.service.WhoisSecurityResult, 2));
};


/**
 * @param {?proto.service.WhoisSecurityResult|undefined} value
 * @return {!proto.service.ScanWhoisResponse} returns this
*/
proto.service.ScanWhoisResponse.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.ScanWhoisResponse} returns this
 */
proto.service.ScanWhoisResponse.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.ScanWhoisResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.GetWhoisScanResultsByDomainRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.service.GetWhoisScanResultsByDomainRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.GetWhoisScanResultsByDomainRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GetWhoisScanResultsByDomainRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
domain: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.GetWhoisScanResultsByDomainRequest}
 */
proto.service.GetWhoisScanResultsByDomainRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.GetWhoisScanResultsByDomainRequest;
  return proto.service.GetWhoisScanResultsByDomainRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.GetWhoisScanResultsByDomainRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.GetWhoisScanResultsByDomainRequest}
 */
proto.service.GetWhoisScanResultsByDomainRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.GetWhoisScanResultsByDomainRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.GetWhoisScanResultsByDomainRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.GetWhoisScanResultsByDomainRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GetWhoisScanResultsByDomainRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string domain = 1;
 * @return {string}
 */
proto.service.GetWhoisScanResultsByDomainRequest.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.GetWhoisScanResultsByDomainRequest} returns this
 */
proto.service.GetWhoisScanResultsByDomainRequest.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.service.GetWhoisScanResultsByDomainResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.GetWhoisScanResultsByDomainResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.service.GetWhoisScanResultsByDomainResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.GetWhoisScanResultsByDomainResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GetWhoisScanResultsByDomainResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    proto.service.WhoisScanResult.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.GetWhoisScanResultsByDomainResponse}
 */
proto.service.GetWhoisScanResultsByDomainResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.GetWhoisScanResultsByDomainResponse;
  return proto.service.GetWhoisScanResultsByDomainResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.GetWhoisScanResultsByDomainResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.GetWhoisScanResultsByDomainResponse}
 */
proto.service.GetWhoisScanResultsByDomainResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.service.WhoisScanResult;
      reader.readMessage(value,proto.service.WhoisScanResult.deserializeBinaryFromReader);
      msg.addResults(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.GetWhoisScanResultsByDomainResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.GetWhoisScanResultsByDomainResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.GetWhoisScanResultsByDomainResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GetWhoisScanResultsByDomainResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.service.WhoisScanResult.serializeBinaryToWriter
    );
  }
};


/**
 * repeated WhoisScanResult results = 1;
 * @return {!Array<!proto.service.WhoisScanResult>}
 */
proto.service.GetWhoisScanResultsByDomainResponse.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.service.WhoisScanResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.service.WhoisScanResult, 1));
};


/**
 * @param {!Array<!proto.service.WhoisScanResult>} value
 * @return {!proto.service.GetWhoisScanResultsByDomainResponse} returns this
*/
proto.service.GetWhoisScanResultsByDomainResponse.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.service.WhoisScanResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.service.WhoisScanResult}
 */
proto.service.GetWhoisScanResultsByDomainResponse.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.service.WhoisScanResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.service.GetWhoisScanResultsByDomainResponse} returns this
 */
proto.service.GetWhoisScanResultsByDomainResponse.prototype.clearResultsList = function() {
  return this.setResultsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.WhoisScanResult.prototype.toObject = function(opt_includeInstance) {
  return proto.service.WhoisScanResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.WhoisScanResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.WhoisScanResult.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
domain: jspb.Message.getFieldWithDefault(msg, 2, ""),
dnsScanId: jspb.Message.getFieldWithDefault(msg, 3, ""),
result: (f = msg.getResult()) && proto.service.WhoisSecurityResult.toObject(includeInstance, f),
createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.WhoisScanResult}
 */
proto.service.WhoisScanResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.WhoisScanResult;
  return proto.service.WhoisScanResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.WhoisScanResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.WhoisScanResult}
 */
proto.service.WhoisScanResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDnsScanId(value);
      break;
    case 4:
      var value = new proto.service.WhoisSecurityResult;
      reader.readMessage(value,proto.service.WhoisSecurityResult.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.WhoisScanResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.WhoisScanResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.WhoisScanResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.WhoisScanResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDnsScanId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.service.WhoisSecurityResult.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.service.WhoisScanResult.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.WhoisScanResult} returns this
 */
proto.service.WhoisScanResult.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string domain = 2;
 * @return {string}
 */
proto.service.WhoisScanResult.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.WhoisScanResult} returns this
 */
proto.service.WhoisScanResult.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string dns_scan_id = 3;
 * @return {string}
 */
proto.service.WhoisScanResult.prototype.getDnsScanId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.WhoisScanResult} returns this
 */
proto.service.WhoisScanResult.prototype.setDnsScanId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional WhoisSecurityResult result = 4;
 * @return {?proto.service.WhoisSecurityResult}
 */
proto.service.WhoisScanResult.prototype.getResult = function() {
  return /** @type{?proto.service.WhoisSecurityResult} */ (
    jspb.Message.getWrapperField(this, proto.service.WhoisSecurityResult, 4));
};


/**
 * @param {?proto.service.WhoisSecurityResult|undefined} value
 * @return {!proto.service.WhoisScanResult} returns this
*/
proto.service.WhoisScanResult.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.WhoisScanResult} returns this
 */
proto.service.WhoisScanResult.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.WhoisScanResult.prototype.hasResult = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.service.WhoisScanResult.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.service.WhoisScanResult} returns this
*/
proto.service.WhoisScanResult.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.WhoisScanResult} returns this
 */
proto.service.WhoisScanResult.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.WhoisScanResult.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.ScanAbuseChRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.service.ScanAbuseChRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.ScanAbuseChRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ScanAbuseChRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
domain: jspb.Message.getFieldWithDefault(msg, 1, ""),
dnsScanId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.ScanAbuseChRequest}
 */
proto.service.ScanAbuseChRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.ScanAbuseChRequest;
  return proto.service.ScanAbuseChRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.ScanAbuseChRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.ScanAbuseChRequest}
 */
proto.service.ScanAbuseChRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDnsScanId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.ScanAbuseChRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.ScanAbuseChRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.ScanAbuseChRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ScanAbuseChRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDnsScanId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string domain = 1;
 * @return {string}
 */
proto.service.ScanAbuseChRequest.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ScanAbuseChRequest} returns this
 */
proto.service.ScanAbuseChRequest.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string dns_scan_id = 2;
 * @return {string}
 */
proto.service.ScanAbuseChRequest.prototype.getDnsScanId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ScanAbuseChRequest} returns this
 */
proto.service.ScanAbuseChRequest.prototype.setDnsScanId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.ScanAbuseChResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.service.ScanAbuseChResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.ScanAbuseChResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ScanAbuseChResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
scanId: jspb.Message.getFieldWithDefault(msg, 1, ""),
result: (f = msg.getResult()) && proto.service.AbuseChSecurityResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.ScanAbuseChResponse}
 */
proto.service.ScanAbuseChResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.ScanAbuseChResponse;
  return proto.service.ScanAbuseChResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.ScanAbuseChResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.ScanAbuseChResponse}
 */
proto.service.ScanAbuseChResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setScanId(value);
      break;
    case 2:
      var value = new proto.service.AbuseChSecurityResult;
      reader.readMessage(value,proto.service.AbuseChSecurityResult.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.ScanAbuseChResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.ScanAbuseChResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.ScanAbuseChResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ScanAbuseChResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScanId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.service.AbuseChSecurityResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional string scan_id = 1;
 * @return {string}
 */
proto.service.ScanAbuseChResponse.prototype.getScanId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ScanAbuseChResponse} returns this
 */
proto.service.ScanAbuseChResponse.prototype.setScanId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional AbuseChSecurityResult result = 2;
 * @return {?proto.service.AbuseChSecurityResult}
 */
proto.service.ScanAbuseChResponse.prototype.getResult = function() {
  return /** @type{?proto.service.AbuseChSecurityResult} */ (
    jspb.Message.getWrapperField(this, proto.service.AbuseChSecurityResult, 2));
};


/**
 * @param {?proto.service.AbuseChSecurityResult|undefined} value
 * @return {!proto.service.ScanAbuseChResponse} returns this
*/
proto.service.ScanAbuseChResponse.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.ScanAbuseChResponse} returns this
 */
proto.service.ScanAbuseChResponse.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.ScanAbuseChResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.GetAbuseChScanResultsByDomainRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.service.GetAbuseChScanResultsByDomainRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.GetAbuseChScanResultsByDomainRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GetAbuseChScanResultsByDomainRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
domain: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.GetAbuseChScanResultsByDomainRequest}
 */
proto.service.GetAbuseChScanResultsByDomainRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.GetAbuseChScanResultsByDomainRequest;
  return proto.service.GetAbuseChScanResultsByDomainRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.GetAbuseChScanResultsByDomainRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.GetAbuseChScanResultsByDomainRequest}
 */
proto.service.GetAbuseChScanResultsByDomainRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.GetAbuseChScanResultsByDomainRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.GetAbuseChScanResultsByDomainRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.GetAbuseChScanResultsByDomainRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GetAbuseChScanResultsByDomainRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string domain = 1;
 * @return {string}
 */
proto.service.GetAbuseChScanResultsByDomainRequest.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.GetAbuseChScanResultsByDomainRequest} returns this
 */
proto.service.GetAbuseChScanResultsByDomainRequest.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.service.GetAbuseChScanResultsByDomainResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.GetAbuseChScanResultsByDomainResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.service.GetAbuseChScanResultsByDomainResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.GetAbuseChScanResultsByDomainResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GetAbuseChScanResultsByDomainResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    proto.service.AbuseChScanResult.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.GetAbuseChScanResultsByDomainResponse}
 */
proto.service.GetAbuseChScanResultsByDomainResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.GetAbuseChScanResultsByDomainResponse;
  return proto.service.GetAbuseChScanResultsByDomainResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.GetAbuseChScanResultsByDomainResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.GetAbuseChScanResultsByDomainResponse}
 */
proto.service.GetAbuseChScanResultsByDomainResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.service.AbuseChScanResult;
      reader.readMessage(value,proto.service.AbuseChScanResult.deserializeBinaryFromReader);
      msg.addResults(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.GetAbuseChScanResultsByDomainResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.GetAbuseChScanResultsByDomainResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.GetAbuseChScanResultsByDomainResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GetAbuseChScanResultsByDomainResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.service.AbuseChScanResult.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AbuseChScanResult results = 1;
 * @return {!Array<!proto.service.AbuseChScanResult>}
 */
proto.service.GetAbuseChScanResultsByDomainResponse.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.service.AbuseChScanResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.service.AbuseChScanResult, 1));
};


/**
 * @param {!Array<!proto.service.AbuseChScanResult>} value
 * @return {!proto.service.GetAbuseChScanResultsByDomainResponse} returns this
*/
proto.service.GetAbuseChScanResultsByDomainResponse.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.service.AbuseChScanResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.service.AbuseChScanResult}
 */
proto.service.GetAbuseChScanResultsByDomainResponse.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.service.AbuseChScanResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.service.GetAbuseChScanResultsByDomainResponse} returns this
 */
proto.service.GetAbuseChScanResultsByDomainResponse.prototype.clearResultsList = function() {
  return this.setResultsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.AbuseChScanResult.prototype.toObject = function(opt_includeInstance) {
  return proto.service.AbuseChScanResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.AbuseChScanResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.AbuseChScanResult.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
domain: jspb.Message.getFieldWithDefault(msg, 2, ""),
dnsScanId: jspb.Message.getFieldWithDefault(msg, 3, ""),
result: (f = msg.getResult()) && proto.service.AbuseChSecurityResult.toObject(includeInstance, f),
createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.AbuseChScanResult}
 */
proto.service.AbuseChScanResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.AbuseChScanResult;
  return proto.service.AbuseChScanResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.AbuseChScanResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.AbuseChScanResult}
 */
proto.service.AbuseChScanResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDnsScanId(value);
      break;
    case 4:
      var value = new proto.service.AbuseChSecurityResult;
      reader.readMessage(value,proto.service.AbuseChSecurityResult.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.AbuseChScanResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.AbuseChScanResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.AbuseChScanResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.AbuseChScanResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDnsScanId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.service.AbuseChSecurityResult.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.service.AbuseChScanResult.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.AbuseChScanResult} returns this
 */
proto.service.AbuseChScanResult.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string domain = 2;
 * @return {string}
 */
proto.service.AbuseChScanResult.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.AbuseChScanResult} returns this
 */
proto.service.AbuseChScanResult.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string dns_scan_id = 3;
 * @return {string}
 */
proto.service.AbuseChScanResult.prototype.getDnsScanId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.AbuseChScanResult} returns this
 */
proto.service.AbuseChScanResult.prototype.setDnsScanId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional AbuseChSecurityResult result = 4;
 * @return {?proto.service.AbuseChSecurityResult}
 */
proto.service.AbuseChScanResult.prototype.getResult = function() {
  return /** @type{?proto.service.AbuseChSecurityResult} */ (
    jspb.Message.getWrapperField(this, proto.service.AbuseChSecurityResult, 4));
};


/**
 * @param {?proto.service.AbuseChSecurityResult|undefined} value
 * @return {!proto.service.AbuseChScanResult} returns this
*/
proto.service.AbuseChScanResult.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.AbuseChScanResult} returns this
 */
proto.service.AbuseChScanResult.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.AbuseChScanResult.prototype.hasResult = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.service.AbuseChScanResult.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.service.AbuseChScanResult} returns this
*/
proto.service.AbuseChScanResult.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.AbuseChScanResult} returns this
 */
proto.service.AbuseChScanResult.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.AbuseChScanResult.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.ScanISCRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.service.ScanISCRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.ScanISCRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ScanISCRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
domain: jspb.Message.getFieldWithDefault(msg, 1, ""),
dnsScanId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.ScanISCRequest}
 */
proto.service.ScanISCRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.ScanISCRequest;
  return proto.service.ScanISCRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.ScanISCRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.ScanISCRequest}
 */
proto.service.ScanISCRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDnsScanId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.ScanISCRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.ScanISCRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.ScanISCRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ScanISCRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDnsScanId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string domain = 1;
 * @return {string}
 */
proto.service.ScanISCRequest.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ScanISCRequest} returns this
 */
proto.service.ScanISCRequest.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string dns_scan_id = 2;
 * @return {string}
 */
proto.service.ScanISCRequest.prototype.getDnsScanId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ScanISCRequest} returns this
 */
proto.service.ScanISCRequest.prototype.setDnsScanId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.ScanISCResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.service.ScanISCResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.ScanISCResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ScanISCResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
scanId: jspb.Message.getFieldWithDefault(msg, 1, ""),
result: (f = msg.getResult()) && proto.service.ISCSecurityResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.ScanISCResponse}
 */
proto.service.ScanISCResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.ScanISCResponse;
  return proto.service.ScanISCResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.ScanISCResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.ScanISCResponse}
 */
proto.service.ScanISCResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setScanId(value);
      break;
    case 2:
      var value = new proto.service.ISCSecurityResult;
      reader.readMessage(value,proto.service.ISCSecurityResult.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.ScanISCResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.ScanISCResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.ScanISCResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ScanISCResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScanId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.service.ISCSecurityResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional string scan_id = 1;
 * @return {string}
 */
proto.service.ScanISCResponse.prototype.getScanId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ScanISCResponse} returns this
 */
proto.service.ScanISCResponse.prototype.setScanId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ISCSecurityResult result = 2;
 * @return {?proto.service.ISCSecurityResult}
 */
proto.service.ScanISCResponse.prototype.getResult = function() {
  return /** @type{?proto.service.ISCSecurityResult} */ (
    jspb.Message.getWrapperField(this, proto.service.ISCSecurityResult, 2));
};


/**
 * @param {?proto.service.ISCSecurityResult|undefined} value
 * @return {!proto.service.ScanISCResponse} returns this
*/
proto.service.ScanISCResponse.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.ScanISCResponse} returns this
 */
proto.service.ScanISCResponse.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.ScanISCResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.GetISCScanResultsByDomainRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.service.GetISCScanResultsByDomainRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.GetISCScanResultsByDomainRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GetISCScanResultsByDomainRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
domain: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.GetISCScanResultsByDomainRequest}
 */
proto.service.GetISCScanResultsByDomainRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.GetISCScanResultsByDomainRequest;
  return proto.service.GetISCScanResultsByDomainRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.GetISCScanResultsByDomainRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.GetISCScanResultsByDomainRequest}
 */
proto.service.GetISCScanResultsByDomainRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.GetISCScanResultsByDomainRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.GetISCScanResultsByDomainRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.GetISCScanResultsByDomainRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GetISCScanResultsByDomainRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string domain = 1;
 * @return {string}
 */
proto.service.GetISCScanResultsByDomainRequest.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.GetISCScanResultsByDomainRequest} returns this
 */
proto.service.GetISCScanResultsByDomainRequest.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.service.GetISCScanResultsByDomainResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.GetISCScanResultsByDomainResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.service.GetISCScanResultsByDomainResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.GetISCScanResultsByDomainResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GetISCScanResultsByDomainResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    proto.service.ISCScanResult.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.GetISCScanResultsByDomainResponse}
 */
proto.service.GetISCScanResultsByDomainResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.GetISCScanResultsByDomainResponse;
  return proto.service.GetISCScanResultsByDomainResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.GetISCScanResultsByDomainResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.GetISCScanResultsByDomainResponse}
 */
proto.service.GetISCScanResultsByDomainResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.service.ISCScanResult;
      reader.readMessage(value,proto.service.ISCScanResult.deserializeBinaryFromReader);
      msg.addResults(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.GetISCScanResultsByDomainResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.GetISCScanResultsByDomainResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.GetISCScanResultsByDomainResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.GetISCScanResultsByDomainResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.service.ISCScanResult.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ISCScanResult results = 1;
 * @return {!Array<!proto.service.ISCScanResult>}
 */
proto.service.GetISCScanResultsByDomainResponse.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.service.ISCScanResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.service.ISCScanResult, 1));
};


/**
 * @param {!Array<!proto.service.ISCScanResult>} value
 * @return {!proto.service.GetISCScanResultsByDomainResponse} returns this
*/
proto.service.GetISCScanResultsByDomainResponse.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.service.ISCScanResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.service.ISCScanResult}
 */
proto.service.GetISCScanResultsByDomainResponse.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.service.ISCScanResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.service.GetISCScanResultsByDomainResponse} returns this
 */
proto.service.GetISCScanResultsByDomainResponse.prototype.clearResultsList = function() {
  return this.setResultsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.ISCScanResult.prototype.toObject = function(opt_includeInstance) {
  return proto.service.ISCScanResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.ISCScanResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ISCScanResult.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
domain: jspb.Message.getFieldWithDefault(msg, 2, ""),
dnsScanId: jspb.Message.getFieldWithDefault(msg, 3, ""),
result: (f = msg.getResult()) && proto.service.ISCSecurityResult.toObject(includeInstance, f),
createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.ISCScanResult}
 */
proto.service.ISCScanResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.ISCScanResult;
  return proto.service.ISCScanResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.ISCScanResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.ISCScanResult}
 */
proto.service.ISCScanResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDnsScanId(value);
      break;
    case 4:
      var value = new proto.service.ISCSecurityResult;
      reader.readMessage(value,proto.service.ISCSecurityResult.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.ISCScanResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.ISCScanResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.ISCScanResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ISCScanResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDnsScanId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.service.ISCSecurityResult.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.service.ISCScanResult.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ISCScanResult} returns this
 */
proto.service.ISCScanResult.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string domain = 2;
 * @return {string}
 */
proto.service.ISCScanResult.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ISCScanResult} returns this
 */
proto.service.ISCScanResult.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string dns_scan_id = 3;
 * @return {string}
 */
proto.service.ISCScanResult.prototype.getDnsScanId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ISCScanResult} returns this
 */
proto.service.ISCScanResult.prototype.setDnsScanId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional ISCSecurityResult result = 4;
 * @return {?proto.service.ISCSecurityResult}
 */
proto.service.ISCScanResult.prototype.getResult = function() {
  return /** @type{?proto.service.ISCSecurityResult} */ (
    jspb.Message.getWrapperField(this, proto.service.ISCSecurityResult, 4));
};


/**
 * @param {?proto.service.ISCSecurityResult|undefined} value
 * @return {!proto.service.ISCScanResult} returns this
*/
proto.service.ISCScanResult.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.ISCScanResult} returns this
 */
proto.service.ISCScanResult.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.ISCScanResult.prototype.hasResult = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.service.ISCScanResult.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.service.ISCScanResult} returns this
*/
proto.service.ISCScanResult.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.ISCScanResult} returns this
 */
proto.service.ISCScanResult.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.ISCScanResult.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.ISCIncident.prototype.toObject = function(opt_includeInstance) {
  return proto.service.ISCIncident.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.ISCIncident} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ISCIncident.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
date: (f = msg.getDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
description: jspb.Message.getFieldWithDefault(msg, 3, ""),
severity: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.ISCIncident}
 */
proto.service.ISCIncident.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.ISCIncident;
  return proto.service.ISCIncident.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.ISCIncident} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.ISCIncident}
 */
proto.service.ISCIncident.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDate(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSeverity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.ISCIncident.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.ISCIncident.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.ISCIncident} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ISCIncident.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSeverity();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.service.ISCIncident.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ISCIncident} returns this
 */
proto.service.ISCIncident.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp date = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.service.ISCIncident.prototype.getDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.service.ISCIncident} returns this
*/
proto.service.ISCIncident.prototype.setDate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.ISCIncident} returns this
 */
proto.service.ISCIncident.prototype.clearDate = function() {
  return this.setDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.ISCIncident.prototype.hasDate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.service.ISCIncident.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ISCIncident} returns this
 */
proto.service.ISCIncident.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string severity = 4;
 * @return {string}
 */
proto.service.ISCIncident.prototype.getSeverity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ISCIncident} returns this
 */
proto.service.ISCIncident.prototype.setSeverity = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.service.ISCSecurityResult.repeatedFields_ = [1,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.ISCSecurityResult.prototype.toObject = function(opt_includeInstance) {
  return proto.service.ISCSecurityResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.ISCSecurityResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ISCSecurityResult.toObject = function(includeInstance, msg) {
  var f, obj = {
incidentsList: jspb.Message.toObjectList(msg.getIncidentsList(),
    proto.service.ISCIncident.toObject, includeInstance),
overallRisk: jspb.Message.getFieldWithDefault(msg, 2, ""),
errorsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.ISCSecurityResult}
 */
proto.service.ISCSecurityResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.ISCSecurityResult;
  return proto.service.ISCSecurityResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.ISCSecurityResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.ISCSecurityResult}
 */
proto.service.ISCSecurityResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.service.ISCIncident;
      reader.readMessage(value,proto.service.ISCIncident.deserializeBinaryFromReader);
      msg.addIncidents(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOverallRisk(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addErrors(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.ISCSecurityResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.ISCSecurityResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.ISCSecurityResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ISCSecurityResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIncidentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.service.ISCIncident.serializeBinaryToWriter
    );
  }
  f = message.getOverallRisk();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getErrorsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * repeated ISCIncident incidents = 1;
 * @return {!Array<!proto.service.ISCIncident>}
 */
proto.service.ISCSecurityResult.prototype.getIncidentsList = function() {
  return /** @type{!Array<!proto.service.ISCIncident>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.service.ISCIncident, 1));
};


/**
 * @param {!Array<!proto.service.ISCIncident>} value
 * @return {!proto.service.ISCSecurityResult} returns this
*/
proto.service.ISCSecurityResult.prototype.setIncidentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.service.ISCIncident=} opt_value
 * @param {number=} opt_index
 * @return {!proto.service.ISCIncident}
 */
proto.service.ISCSecurityResult.prototype.addIncidents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.service.ISCIncident, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.service.ISCSecurityResult} returns this
 */
proto.service.ISCSecurityResult.prototype.clearIncidentsList = function() {
  return this.setIncidentsList([]);
};


/**
 * optional string overall_risk = 2;
 * @return {string}
 */
proto.service.ISCSecurityResult.prototype.getOverallRisk = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ISCSecurityResult} returns this
 */
proto.service.ISCSecurityResult.prototype.setOverallRisk = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string errors = 3;
 * @return {!Array<string>}
 */
proto.service.ISCSecurityResult.prototype.getErrorsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.service.ISCSecurityResult} returns this
 */
proto.service.ISCSecurityResult.prototype.setErrorsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.service.ISCSecurityResult} returns this
 */
proto.service.ISCSecurityResult.prototype.addErrors = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.service.ISCSecurityResult} returns this
 */
proto.service.ISCSecurityResult.prototype.clearErrorsList = function() {
  return this.setErrorsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.service.DNSSecurityResult.repeatedFields_ = [14,15,16,17];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.DNSSecurityResult.prototype.toObject = function(opt_includeInstance) {
  return proto.service.DNSSecurityResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.DNSSecurityResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.DNSSecurityResult.toObject = function(includeInstance, msg) {
  var f, obj = {
spfRecord: jspb.Message.getFieldWithDefault(msg, 1, ""),
spfValid: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
spfPolicy: jspb.Message.getFieldWithDefault(msg, 3, ""),
dkimRecord: jspb.Message.getFieldWithDefault(msg, 4, ""),
dkimValid: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
dkimValidationError: jspb.Message.getFieldWithDefault(msg, 6, ""),
dmarcRecord: jspb.Message.getFieldWithDefault(msg, 7, ""),
dmarcPolicy: jspb.Message.getFieldWithDefault(msg, 8, ""),
dmarcValid: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
dmarcValidationError: jspb.Message.getFieldWithDefault(msg, 10, ""),
dnssecEnabled: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
dnssecValid: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
dnssecValidationError: jspb.Message.getFieldWithDefault(msg, 13, ""),
ipAddressesList: (f = jspb.Message.getRepeatedField(msg, 14)) == null ? undefined : f,
mxRecordsList: (f = jspb.Message.getRepeatedField(msg, 15)) == null ? undefined : f,
nsRecordsList: (f = jspb.Message.getRepeatedField(msg, 16)) == null ? undefined : f,
errorsList: (f = jspb.Message.getRepeatedField(msg, 17)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.DNSSecurityResult}
 */
proto.service.DNSSecurityResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.DNSSecurityResult;
  return proto.service.DNSSecurityResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.DNSSecurityResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.DNSSecurityResult}
 */
proto.service.DNSSecurityResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSpfRecord(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSpfValid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSpfPolicy(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDkimRecord(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDkimValid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDkimValidationError(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDmarcRecord(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDmarcPolicy(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDmarcValid(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setDmarcValidationError(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDnssecEnabled(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDnssecValid(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setDnssecValidationError(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.addIpAddresses(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.addMxRecords(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.addNsRecords(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.addErrors(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.DNSSecurityResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.DNSSecurityResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.DNSSecurityResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.DNSSecurityResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpfRecord();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSpfValid();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getSpfPolicy();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDkimRecord();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDkimValid();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getDkimValidationError();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getDmarcRecord();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getDmarcPolicy();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getDmarcValid();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getDmarcValidationError();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getDnssecEnabled();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getDnssecValid();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getDnssecValidationError();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getIpAddressesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      14,
      f
    );
  }
  f = message.getMxRecordsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      15,
      f
    );
  }
  f = message.getNsRecordsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      16,
      f
    );
  }
  f = message.getErrorsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      17,
      f
    );
  }
};


/**
 * optional string spf_record = 1;
 * @return {string}
 */
proto.service.DNSSecurityResult.prototype.getSpfRecord = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.DNSSecurityResult} returns this
 */
proto.service.DNSSecurityResult.prototype.setSpfRecord = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool spf_valid = 2;
 * @return {boolean}
 */
proto.service.DNSSecurityResult.prototype.getSpfValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.service.DNSSecurityResult} returns this
 */
proto.service.DNSSecurityResult.prototype.setSpfValid = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string spf_policy = 3;
 * @return {string}
 */
proto.service.DNSSecurityResult.prototype.getSpfPolicy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.DNSSecurityResult} returns this
 */
proto.service.DNSSecurityResult.prototype.setSpfPolicy = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string dkim_record = 4;
 * @return {string}
 */
proto.service.DNSSecurityResult.prototype.getDkimRecord = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.DNSSecurityResult} returns this
 */
proto.service.DNSSecurityResult.prototype.setDkimRecord = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool dkim_valid = 5;
 * @return {boolean}
 */
proto.service.DNSSecurityResult.prototype.getDkimValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.service.DNSSecurityResult} returns this
 */
proto.service.DNSSecurityResult.prototype.setDkimValid = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional string dkim_validation_error = 6;
 * @return {string}
 */
proto.service.DNSSecurityResult.prototype.getDkimValidationError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.DNSSecurityResult} returns this
 */
proto.service.DNSSecurityResult.prototype.setDkimValidationError = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string dmarc_record = 7;
 * @return {string}
 */
proto.service.DNSSecurityResult.prototype.getDmarcRecord = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.DNSSecurityResult} returns this
 */
proto.service.DNSSecurityResult.prototype.setDmarcRecord = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string dmarc_policy = 8;
 * @return {string}
 */
proto.service.DNSSecurityResult.prototype.getDmarcPolicy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.DNSSecurityResult} returns this
 */
proto.service.DNSSecurityResult.prototype.setDmarcPolicy = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional bool dmarc_valid = 9;
 * @return {boolean}
 */
proto.service.DNSSecurityResult.prototype.getDmarcValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.service.DNSSecurityResult} returns this
 */
proto.service.DNSSecurityResult.prototype.setDmarcValid = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional string dmarc_validation_error = 10;
 * @return {string}
 */
proto.service.DNSSecurityResult.prototype.getDmarcValidationError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.DNSSecurityResult} returns this
 */
proto.service.DNSSecurityResult.prototype.setDmarcValidationError = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional bool dnssec_enabled = 11;
 * @return {boolean}
 */
proto.service.DNSSecurityResult.prototype.getDnssecEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.service.DNSSecurityResult} returns this
 */
proto.service.DNSSecurityResult.prototype.setDnssecEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional bool dnssec_valid = 12;
 * @return {boolean}
 */
proto.service.DNSSecurityResult.prototype.getDnssecValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.service.DNSSecurityResult} returns this
 */
proto.service.DNSSecurityResult.prototype.setDnssecValid = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional string dnssec_validation_error = 13;
 * @return {string}
 */
proto.service.DNSSecurityResult.prototype.getDnssecValidationError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.DNSSecurityResult} returns this
 */
proto.service.DNSSecurityResult.prototype.setDnssecValidationError = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * repeated string ip_addresses = 14;
 * @return {!Array<string>}
 */
proto.service.DNSSecurityResult.prototype.getIpAddressesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 14));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.service.DNSSecurityResult} returns this
 */
proto.service.DNSSecurityResult.prototype.setIpAddressesList = function(value) {
  return jspb.Message.setField(this, 14, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.service.DNSSecurityResult} returns this
 */
proto.service.DNSSecurityResult.prototype.addIpAddresses = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 14, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.service.DNSSecurityResult} returns this
 */
proto.service.DNSSecurityResult.prototype.clearIpAddressesList = function() {
  return this.setIpAddressesList([]);
};


/**
 * repeated string mx_records = 15;
 * @return {!Array<string>}
 */
proto.service.DNSSecurityResult.prototype.getMxRecordsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 15));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.service.DNSSecurityResult} returns this
 */
proto.service.DNSSecurityResult.prototype.setMxRecordsList = function(value) {
  return jspb.Message.setField(this, 15, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.service.DNSSecurityResult} returns this
 */
proto.service.DNSSecurityResult.prototype.addMxRecords = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 15, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.service.DNSSecurityResult} returns this
 */
proto.service.DNSSecurityResult.prototype.clearMxRecordsList = function() {
  return this.setMxRecordsList([]);
};


/**
 * repeated string ns_records = 16;
 * @return {!Array<string>}
 */
proto.service.DNSSecurityResult.prototype.getNsRecordsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 16));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.service.DNSSecurityResult} returns this
 */
proto.service.DNSSecurityResult.prototype.setNsRecordsList = function(value) {
  return jspb.Message.setField(this, 16, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.service.DNSSecurityResult} returns this
 */
proto.service.DNSSecurityResult.prototype.addNsRecords = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 16, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.service.DNSSecurityResult} returns this
 */
proto.service.DNSSecurityResult.prototype.clearNsRecordsList = function() {
  return this.setNsRecordsList([]);
};


/**
 * repeated string errors = 17;
 * @return {!Array<string>}
 */
proto.service.DNSSecurityResult.prototype.getErrorsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 17));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.service.DNSSecurityResult} returns this
 */
proto.service.DNSSecurityResult.prototype.setErrorsList = function(value) {
  return jspb.Message.setField(this, 17, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.service.DNSSecurityResult} returns this
 */
proto.service.DNSSecurityResult.prototype.addErrors = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 17, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.service.DNSSecurityResult} returns this
 */
proto.service.DNSSecurityResult.prototype.clearErrorsList = function() {
  return this.setErrorsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.service.TLSSecurityResult.repeatedFields_ = [9,12];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.TLSSecurityResult.prototype.toObject = function(opt_includeInstance) {
  return proto.service.TLSSecurityResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.TLSSecurityResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.TLSSecurityResult.toObject = function(includeInstance, msg) {
  var f, obj = {
tlsVersion: jspb.Message.getFieldWithDefault(msg, 1, ""),
cipherSuite: jspb.Message.getFieldWithDefault(msg, 2, ""),
hstsHeader: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
certificateValid: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
certIssuer: jspb.Message.getFieldWithDefault(msg, 5, ""),
certSubject: jspb.Message.getFieldWithDefault(msg, 6, ""),
certNotBefore: (f = msg.getCertNotBefore()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
certNotAfter: (f = msg.getCertNotAfter()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
certDnsNamesList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
certKeyStrength: jspb.Message.getFieldWithDefault(msg, 10, 0),
certSignatureAlgorithm: jspb.Message.getFieldWithDefault(msg, 11, ""),
errorsList: (f = jspb.Message.getRepeatedField(msg, 12)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.TLSSecurityResult}
 */
proto.service.TLSSecurityResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.TLSSecurityResult;
  return proto.service.TLSSecurityResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.TLSSecurityResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.TLSSecurityResult}
 */
proto.service.TLSSecurityResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTlsVersion(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCipherSuite(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHstsHeader(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCertificateValid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCertIssuer(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCertSubject(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCertNotBefore(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCertNotAfter(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addCertDnsNames(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCertKeyStrength(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setCertSignatureAlgorithm(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.addErrors(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.TLSSecurityResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.TLSSecurityResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.TLSSecurityResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.TLSSecurityResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTlsVersion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCipherSuite();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getHstsHeader();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getCertificateValid();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getCertIssuer();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCertSubject();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCertNotBefore();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCertNotAfter();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCertDnsNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
  f = message.getCertKeyStrength();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getCertSignatureAlgorithm();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getErrorsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      12,
      f
    );
  }
};


/**
 * optional string tls_version = 1;
 * @return {string}
 */
proto.service.TLSSecurityResult.prototype.getTlsVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.TLSSecurityResult} returns this
 */
proto.service.TLSSecurityResult.prototype.setTlsVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string cipher_suite = 2;
 * @return {string}
 */
proto.service.TLSSecurityResult.prototype.getCipherSuite = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.TLSSecurityResult} returns this
 */
proto.service.TLSSecurityResult.prototype.setCipherSuite = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool hsts_header = 3;
 * @return {boolean}
 */
proto.service.TLSSecurityResult.prototype.getHstsHeader = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.service.TLSSecurityResult} returns this
 */
proto.service.TLSSecurityResult.prototype.setHstsHeader = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool certificate_valid = 4;
 * @return {boolean}
 */
proto.service.TLSSecurityResult.prototype.getCertificateValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.service.TLSSecurityResult} returns this
 */
proto.service.TLSSecurityResult.prototype.setCertificateValid = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional string cert_issuer = 5;
 * @return {string}
 */
proto.service.TLSSecurityResult.prototype.getCertIssuer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.TLSSecurityResult} returns this
 */
proto.service.TLSSecurityResult.prototype.setCertIssuer = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string cert_subject = 6;
 * @return {string}
 */
proto.service.TLSSecurityResult.prototype.getCertSubject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.TLSSecurityResult} returns this
 */
proto.service.TLSSecurityResult.prototype.setCertSubject = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional google.protobuf.Timestamp cert_not_before = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.service.TLSSecurityResult.prototype.getCertNotBefore = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.service.TLSSecurityResult} returns this
*/
proto.service.TLSSecurityResult.prototype.setCertNotBefore = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.TLSSecurityResult} returns this
 */
proto.service.TLSSecurityResult.prototype.clearCertNotBefore = function() {
  return this.setCertNotBefore(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.TLSSecurityResult.prototype.hasCertNotBefore = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Timestamp cert_not_after = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.service.TLSSecurityResult.prototype.getCertNotAfter = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.service.TLSSecurityResult} returns this
*/
proto.service.TLSSecurityResult.prototype.setCertNotAfter = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.TLSSecurityResult} returns this
 */
proto.service.TLSSecurityResult.prototype.clearCertNotAfter = function() {
  return this.setCertNotAfter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.TLSSecurityResult.prototype.hasCertNotAfter = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated string cert_dns_names = 9;
 * @return {!Array<string>}
 */
proto.service.TLSSecurityResult.prototype.getCertDnsNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.service.TLSSecurityResult} returns this
 */
proto.service.TLSSecurityResult.prototype.setCertDnsNamesList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.service.TLSSecurityResult} returns this
 */
proto.service.TLSSecurityResult.prototype.addCertDnsNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.service.TLSSecurityResult} returns this
 */
proto.service.TLSSecurityResult.prototype.clearCertDnsNamesList = function() {
  return this.setCertDnsNamesList([]);
};


/**
 * optional int32 cert_key_strength = 10;
 * @return {number}
 */
proto.service.TLSSecurityResult.prototype.getCertKeyStrength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.service.TLSSecurityResult} returns this
 */
proto.service.TLSSecurityResult.prototype.setCertKeyStrength = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional string cert_signature_algorithm = 11;
 * @return {string}
 */
proto.service.TLSSecurityResult.prototype.getCertSignatureAlgorithm = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.TLSSecurityResult} returns this
 */
proto.service.TLSSecurityResult.prototype.setCertSignatureAlgorithm = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * repeated string errors = 12;
 * @return {!Array<string>}
 */
proto.service.TLSSecurityResult.prototype.getErrorsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 12));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.service.TLSSecurityResult} returns this
 */
proto.service.TLSSecurityResult.prototype.setErrorsList = function(value) {
  return jspb.Message.setField(this, 12, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.service.TLSSecurityResult} returns this
 */
proto.service.TLSSecurityResult.prototype.addErrors = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 12, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.service.TLSSecurityResult} returns this
 */
proto.service.TLSSecurityResult.prototype.clearErrorsList = function() {
  return this.setErrorsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.service.CrtShCertificate.repeatedFields_ = [7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.CrtShCertificate.prototype.toObject = function(opt_includeInstance) {
  return proto.service.CrtShCertificate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.CrtShCertificate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.CrtShCertificate.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, 0),
commonName: jspb.Message.getFieldWithDefault(msg, 2, ""),
issuer: jspb.Message.getFieldWithDefault(msg, 3, ""),
notBefore: (f = msg.getNotBefore()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
notAfter: (f = msg.getNotAfter()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
serialNumber: jspb.Message.getFieldWithDefault(msg, 6, ""),
dnsNamesList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
signatureAlgorithm: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.CrtShCertificate}
 */
proto.service.CrtShCertificate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.CrtShCertificate;
  return proto.service.CrtShCertificate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.CrtShCertificate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.CrtShCertificate}
 */
proto.service.CrtShCertificate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommonName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIssuer(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setNotBefore(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setNotAfter(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setSerialNumber(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addDnsNames(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setSignatureAlgorithm(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.CrtShCertificate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.CrtShCertificate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.CrtShCertificate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.CrtShCertificate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getCommonName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIssuer();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNotBefore();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getNotAfter();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getSerialNumber();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getDnsNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = message.getSignatureAlgorithm();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.service.CrtShCertificate.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.service.CrtShCertificate} returns this
 */
proto.service.CrtShCertificate.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string common_name = 2;
 * @return {string}
 */
proto.service.CrtShCertificate.prototype.getCommonName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.CrtShCertificate} returns this
 */
proto.service.CrtShCertificate.prototype.setCommonName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string issuer = 3;
 * @return {string}
 */
proto.service.CrtShCertificate.prototype.getIssuer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.CrtShCertificate} returns this
 */
proto.service.CrtShCertificate.prototype.setIssuer = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp not_before = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.service.CrtShCertificate.prototype.getNotBefore = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.service.CrtShCertificate} returns this
*/
proto.service.CrtShCertificate.prototype.setNotBefore = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.CrtShCertificate} returns this
 */
proto.service.CrtShCertificate.prototype.clearNotBefore = function() {
  return this.setNotBefore(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.CrtShCertificate.prototype.hasNotBefore = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp not_after = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.service.CrtShCertificate.prototype.getNotAfter = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.service.CrtShCertificate} returns this
*/
proto.service.CrtShCertificate.prototype.setNotAfter = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.CrtShCertificate} returns this
 */
proto.service.CrtShCertificate.prototype.clearNotAfter = function() {
  return this.setNotAfter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.CrtShCertificate.prototype.hasNotAfter = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string serial_number = 6;
 * @return {string}
 */
proto.service.CrtShCertificate.prototype.getSerialNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.CrtShCertificate} returns this
 */
proto.service.CrtShCertificate.prototype.setSerialNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * repeated string dns_names = 7;
 * @return {!Array<string>}
 */
proto.service.CrtShCertificate.prototype.getDnsNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.service.CrtShCertificate} returns this
 */
proto.service.CrtShCertificate.prototype.setDnsNamesList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.service.CrtShCertificate} returns this
 */
proto.service.CrtShCertificate.prototype.addDnsNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.service.CrtShCertificate} returns this
 */
proto.service.CrtShCertificate.prototype.clearDnsNamesList = function() {
  return this.setDnsNamesList([]);
};


/**
 * optional string signature_algorithm = 8;
 * @return {string}
 */
proto.service.CrtShCertificate.prototype.getSignatureAlgorithm = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.CrtShCertificate} returns this
 */
proto.service.CrtShCertificate.prototype.setSignatureAlgorithm = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.service.CrtShSecurityResult.repeatedFields_ = [1,2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.CrtShSecurityResult.prototype.toObject = function(opt_includeInstance) {
  return proto.service.CrtShSecurityResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.CrtShSecurityResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.CrtShSecurityResult.toObject = function(includeInstance, msg) {
  var f, obj = {
certificatesList: jspb.Message.toObjectList(msg.getCertificatesList(),
    proto.service.CrtShCertificate.toObject, includeInstance),
subdomainsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
errorsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.CrtShSecurityResult}
 */
proto.service.CrtShSecurityResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.CrtShSecurityResult;
  return proto.service.CrtShSecurityResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.CrtShSecurityResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.CrtShSecurityResult}
 */
proto.service.CrtShSecurityResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.service.CrtShCertificate;
      reader.readMessage(value,proto.service.CrtShCertificate.deserializeBinaryFromReader);
      msg.addCertificates(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addSubdomains(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addErrors(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.CrtShSecurityResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.CrtShSecurityResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.CrtShSecurityResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.CrtShSecurityResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCertificatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.service.CrtShCertificate.serializeBinaryToWriter
    );
  }
  f = message.getSubdomainsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getErrorsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * repeated CrtShCertificate certificates = 1;
 * @return {!Array<!proto.service.CrtShCertificate>}
 */
proto.service.CrtShSecurityResult.prototype.getCertificatesList = function() {
  return /** @type{!Array<!proto.service.CrtShCertificate>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.service.CrtShCertificate, 1));
};


/**
 * @param {!Array<!proto.service.CrtShCertificate>} value
 * @return {!proto.service.CrtShSecurityResult} returns this
*/
proto.service.CrtShSecurityResult.prototype.setCertificatesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.service.CrtShCertificate=} opt_value
 * @param {number=} opt_index
 * @return {!proto.service.CrtShCertificate}
 */
proto.service.CrtShSecurityResult.prototype.addCertificates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.service.CrtShCertificate, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.service.CrtShSecurityResult} returns this
 */
proto.service.CrtShSecurityResult.prototype.clearCertificatesList = function() {
  return this.setCertificatesList([]);
};


/**
 * repeated string subdomains = 2;
 * @return {!Array<string>}
 */
proto.service.CrtShSecurityResult.prototype.getSubdomainsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.service.CrtShSecurityResult} returns this
 */
proto.service.CrtShSecurityResult.prototype.setSubdomainsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.service.CrtShSecurityResult} returns this
 */
proto.service.CrtShSecurityResult.prototype.addSubdomains = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.service.CrtShSecurityResult} returns this
 */
proto.service.CrtShSecurityResult.prototype.clearSubdomainsList = function() {
  return this.setSubdomainsList([]);
};


/**
 * repeated string errors = 3;
 * @return {!Array<string>}
 */
proto.service.CrtShSecurityResult.prototype.getErrorsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.service.CrtShSecurityResult} returns this
 */
proto.service.CrtShSecurityResult.prototype.setErrorsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.service.CrtShSecurityResult} returns this
 */
proto.service.CrtShSecurityResult.prototype.addErrors = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.service.CrtShSecurityResult} returns this
 */
proto.service.CrtShSecurityResult.prototype.clearErrorsList = function() {
  return this.setErrorsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.service.ChaosSecurityResult.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.ChaosSecurityResult.prototype.toObject = function(opt_includeInstance) {
  return proto.service.ChaosSecurityResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.ChaosSecurityResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ChaosSecurityResult.toObject = function(includeInstance, msg) {
  var f, obj = {
subdomainsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
errorsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.ChaosSecurityResult}
 */
proto.service.ChaosSecurityResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.ChaosSecurityResult;
  return proto.service.ChaosSecurityResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.ChaosSecurityResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.ChaosSecurityResult}
 */
proto.service.ChaosSecurityResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addSubdomains(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addErrors(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.ChaosSecurityResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.ChaosSecurityResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.ChaosSecurityResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ChaosSecurityResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubdomainsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getErrorsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * repeated string subdomains = 1;
 * @return {!Array<string>}
 */
proto.service.ChaosSecurityResult.prototype.getSubdomainsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.service.ChaosSecurityResult} returns this
 */
proto.service.ChaosSecurityResult.prototype.setSubdomainsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.service.ChaosSecurityResult} returns this
 */
proto.service.ChaosSecurityResult.prototype.addSubdomains = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.service.ChaosSecurityResult} returns this
 */
proto.service.ChaosSecurityResult.prototype.clearSubdomainsList = function() {
  return this.setSubdomainsList([]);
};


/**
 * repeated string errors = 2;
 * @return {!Array<string>}
 */
proto.service.ChaosSecurityResult.prototype.getErrorsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.service.ChaosSecurityResult} returns this
 */
proto.service.ChaosSecurityResult.prototype.setErrorsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.service.ChaosSecurityResult} returns this
 */
proto.service.ChaosSecurityResult.prototype.addErrors = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.service.ChaosSecurityResult} returns this
 */
proto.service.ChaosSecurityResult.prototype.clearErrorsList = function() {
  return this.setErrorsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.ShodanLocation.prototype.toObject = function(opt_includeInstance) {
  return proto.service.ShodanLocation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.ShodanLocation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ShodanLocation.toObject = function(includeInstance, msg) {
  var f, obj = {
city: jspb.Message.getFieldWithDefault(msg, 1, ""),
countryName: jspb.Message.getFieldWithDefault(msg, 2, ""),
latitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
longitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.ShodanLocation}
 */
proto.service.ShodanLocation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.ShodanLocation;
  return proto.service.ShodanLocation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.ShodanLocation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.ShodanLocation}
 */
proto.service.ShodanLocation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCity(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountryName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setLatitude(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setLongitude(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.ShodanLocation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.ShodanLocation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.ShodanLocation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ShodanLocation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCity();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCountryName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLatitude();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getLongitude();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
};


/**
 * optional string city = 1;
 * @return {string}
 */
proto.service.ShodanLocation.prototype.getCity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ShodanLocation} returns this
 */
proto.service.ShodanLocation.prototype.setCity = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string country_name = 2;
 * @return {string}
 */
proto.service.ShodanLocation.prototype.getCountryName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ShodanLocation} returns this
 */
proto.service.ShodanLocation.prototype.setCountryName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional float latitude = 3;
 * @return {number}
 */
proto.service.ShodanLocation.prototype.getLatitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.service.ShodanLocation} returns this
 */
proto.service.ShodanLocation.prototype.setLatitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float longitude = 4;
 * @return {number}
 */
proto.service.ShodanLocation.prototype.getLongitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.service.ShodanLocation} returns this
 */
proto.service.ShodanLocation.prototype.setLongitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.ShodanSSL.prototype.toObject = function(opt_includeInstance) {
  return proto.service.ShodanSSL.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.ShodanSSL} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ShodanSSL.toObject = function(includeInstance, msg) {
  var f, obj = {
issuer: jspb.Message.getFieldWithDefault(msg, 1, ""),
subject: jspb.Message.getFieldWithDefault(msg, 2, ""),
expires: (f = msg.getExpires()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
notAfter: (f = msg.getNotAfter()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.ShodanSSL}
 */
proto.service.ShodanSSL.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.ShodanSSL;
  return proto.service.ShodanSSL.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.ShodanSSL} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.ShodanSSL}
 */
proto.service.ShodanSSL.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIssuer(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubject(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpires(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setNotAfter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.ShodanSSL.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.ShodanSSL.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.ShodanSSL} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ShodanSSL.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIssuer();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSubject();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getExpires();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getNotAfter();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string issuer = 1;
 * @return {string}
 */
proto.service.ShodanSSL.prototype.getIssuer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ShodanSSL} returns this
 */
proto.service.ShodanSSL.prototype.setIssuer = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string subject = 2;
 * @return {string}
 */
proto.service.ShodanSSL.prototype.getSubject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ShodanSSL} returns this
 */
proto.service.ShodanSSL.prototype.setSubject = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp expires = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.service.ShodanSSL.prototype.getExpires = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.service.ShodanSSL} returns this
*/
proto.service.ShodanSSL.prototype.setExpires = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.ShodanSSL} returns this
 */
proto.service.ShodanSSL.prototype.clearExpires = function() {
  return this.setExpires(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.ShodanSSL.prototype.hasExpires = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp not_after = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.service.ShodanSSL.prototype.getNotAfter = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.service.ShodanSSL} returns this
*/
proto.service.ShodanSSL.prototype.setNotAfter = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.ShodanSSL} returns this
 */
proto.service.ShodanSSL.prototype.clearNotAfter = function() {
  return this.setNotAfter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.ShodanSSL.prototype.hasNotAfter = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.ShodanMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.service.ShodanMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.ShodanMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ShodanMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
module: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.ShodanMetadata}
 */
proto.service.ShodanMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.ShodanMetadata;
  return proto.service.ShodanMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.ShodanMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.ShodanMetadata}
 */
proto.service.ShodanMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setModule(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.ShodanMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.ShodanMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.ShodanMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ShodanMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModule();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string module = 1;
 * @return {string}
 */
proto.service.ShodanMetadata.prototype.getModule = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ShodanMetadata} returns this
 */
proto.service.ShodanMetadata.prototype.setModule = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.service.ShodanHost.repeatedFields_ = [3,6,9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.ShodanHost.prototype.toObject = function(opt_includeInstance) {
  return proto.service.ShodanHost.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.ShodanHost} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ShodanHost.toObject = function(includeInstance, msg) {
  var f, obj = {
ip: jspb.Message.getFieldWithDefault(msg, 1, ""),
port: jspb.Message.getFieldWithDefault(msg, 2, 0),
hostnamesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
os: jspb.Message.getFieldWithDefault(msg, 4, ""),
banner: jspb.Message.getFieldWithDefault(msg, 5, ""),
tagsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
location: (f = msg.getLocation()) && proto.service.ShodanLocation.toObject(includeInstance, f),
ssl: (f = msg.getSsl()) && proto.service.ShodanSSL.toObject(includeInstance, f),
domainsList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
asn: jspb.Message.getFieldWithDefault(msg, 10, ""),
org: jspb.Message.getFieldWithDefault(msg, 11, ""),
isp: jspb.Message.getFieldWithDefault(msg, 12, ""),
timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
shodanMeta: (f = msg.getShodanMeta()) && proto.service.ShodanMetadata.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.ShodanHost}
 */
proto.service.ShodanHost.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.ShodanHost;
  return proto.service.ShodanHost.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.ShodanHost} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.ShodanHost}
 */
proto.service.ShodanHost.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIp(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPort(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addHostnames(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOs(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setBanner(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    case 7:
      var value = new proto.service.ShodanLocation;
      reader.readMessage(value,proto.service.ShodanLocation.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 8:
      var value = new proto.service.ShodanSSL;
      reader.readMessage(value,proto.service.ShodanSSL.deserializeBinaryFromReader);
      msg.setSsl(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addDomains(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setAsn(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrg(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setIsp(value);
      break;
    case 13:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 14:
      var value = new proto.service.ShodanMetadata;
      reader.readMessage(value,proto.service.ShodanMetadata.deserializeBinaryFromReader);
      msg.setShodanMeta(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.ShodanHost.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.ShodanHost.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.ShodanHost} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ShodanHost.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIp();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPort();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getHostnamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getOs();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getBanner();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.service.ShodanLocation.serializeBinaryToWriter
    );
  }
  f = message.getSsl();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.service.ShodanSSL.serializeBinaryToWriter
    );
  }
  f = message.getDomainsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
  f = message.getAsn();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getOrg();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getIsp();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getShodanMeta();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.service.ShodanMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string ip = 1;
 * @return {string}
 */
proto.service.ShodanHost.prototype.getIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ShodanHost} returns this
 */
proto.service.ShodanHost.prototype.setIp = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 port = 2;
 * @return {number}
 */
proto.service.ShodanHost.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.service.ShodanHost} returns this
 */
proto.service.ShodanHost.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated string hostnames = 3;
 * @return {!Array<string>}
 */
proto.service.ShodanHost.prototype.getHostnamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.service.ShodanHost} returns this
 */
proto.service.ShodanHost.prototype.setHostnamesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.service.ShodanHost} returns this
 */
proto.service.ShodanHost.prototype.addHostnames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.service.ShodanHost} returns this
 */
proto.service.ShodanHost.prototype.clearHostnamesList = function() {
  return this.setHostnamesList([]);
};


/**
 * optional string os = 4;
 * @return {string}
 */
proto.service.ShodanHost.prototype.getOs = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ShodanHost} returns this
 */
proto.service.ShodanHost.prototype.setOs = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string banner = 5;
 * @return {string}
 */
proto.service.ShodanHost.prototype.getBanner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ShodanHost} returns this
 */
proto.service.ShodanHost.prototype.setBanner = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated string tags = 6;
 * @return {!Array<string>}
 */
proto.service.ShodanHost.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.service.ShodanHost} returns this
 */
proto.service.ShodanHost.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.service.ShodanHost} returns this
 */
proto.service.ShodanHost.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.service.ShodanHost} returns this
 */
proto.service.ShodanHost.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * optional ShodanLocation location = 7;
 * @return {?proto.service.ShodanLocation}
 */
proto.service.ShodanHost.prototype.getLocation = function() {
  return /** @type{?proto.service.ShodanLocation} */ (
    jspb.Message.getWrapperField(this, proto.service.ShodanLocation, 7));
};


/**
 * @param {?proto.service.ShodanLocation|undefined} value
 * @return {!proto.service.ShodanHost} returns this
*/
proto.service.ShodanHost.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.ShodanHost} returns this
 */
proto.service.ShodanHost.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.ShodanHost.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional ShodanSSL ssl = 8;
 * @return {?proto.service.ShodanSSL}
 */
proto.service.ShodanHost.prototype.getSsl = function() {
  return /** @type{?proto.service.ShodanSSL} */ (
    jspb.Message.getWrapperField(this, proto.service.ShodanSSL, 8));
};


/**
 * @param {?proto.service.ShodanSSL|undefined} value
 * @return {!proto.service.ShodanHost} returns this
*/
proto.service.ShodanHost.prototype.setSsl = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.ShodanHost} returns this
 */
proto.service.ShodanHost.prototype.clearSsl = function() {
  return this.setSsl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.ShodanHost.prototype.hasSsl = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated string domains = 9;
 * @return {!Array<string>}
 */
proto.service.ShodanHost.prototype.getDomainsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.service.ShodanHost} returns this
 */
proto.service.ShodanHost.prototype.setDomainsList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.service.ShodanHost} returns this
 */
proto.service.ShodanHost.prototype.addDomains = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.service.ShodanHost} returns this
 */
proto.service.ShodanHost.prototype.clearDomainsList = function() {
  return this.setDomainsList([]);
};


/**
 * optional string asn = 10;
 * @return {string}
 */
proto.service.ShodanHost.prototype.getAsn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ShodanHost} returns this
 */
proto.service.ShodanHost.prototype.setAsn = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string org = 11;
 * @return {string}
 */
proto.service.ShodanHost.prototype.getOrg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ShodanHost} returns this
 */
proto.service.ShodanHost.prototype.setOrg = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string isp = 12;
 * @return {string}
 */
proto.service.ShodanHost.prototype.getIsp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.ShodanHost} returns this
 */
proto.service.ShodanHost.prototype.setIsp = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional google.protobuf.Timestamp timestamp = 13;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.service.ShodanHost.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 13));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.service.ShodanHost} returns this
*/
proto.service.ShodanHost.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.ShodanHost} returns this
 */
proto.service.ShodanHost.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.ShodanHost.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional ShodanMetadata shodan_meta = 14;
 * @return {?proto.service.ShodanMetadata}
 */
proto.service.ShodanHost.prototype.getShodanMeta = function() {
  return /** @type{?proto.service.ShodanMetadata} */ (
    jspb.Message.getWrapperField(this, proto.service.ShodanMetadata, 14));
};


/**
 * @param {?proto.service.ShodanMetadata|undefined} value
 * @return {!proto.service.ShodanHost} returns this
*/
proto.service.ShodanHost.prototype.setShodanMeta = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.ShodanHost} returns this
 */
proto.service.ShodanHost.prototype.clearShodanMeta = function() {
  return this.setShodanMeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.ShodanHost.prototype.hasShodanMeta = function() {
  return jspb.Message.getField(this, 14) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.service.ShodanSecurityResult.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.ShodanSecurityResult.prototype.toObject = function(opt_includeInstance) {
  return proto.service.ShodanSecurityResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.ShodanSecurityResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ShodanSecurityResult.toObject = function(includeInstance, msg) {
  var f, obj = {
hostsList: jspb.Message.toObjectList(msg.getHostsList(),
    proto.service.ShodanHost.toObject, includeInstance),
errorsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.ShodanSecurityResult}
 */
proto.service.ShodanSecurityResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.ShodanSecurityResult;
  return proto.service.ShodanSecurityResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.ShodanSecurityResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.ShodanSecurityResult}
 */
proto.service.ShodanSecurityResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.service.ShodanHost;
      reader.readMessage(value,proto.service.ShodanHost.deserializeBinaryFromReader);
      msg.addHosts(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addErrors(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.ShodanSecurityResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.ShodanSecurityResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.ShodanSecurityResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.ShodanSecurityResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHostsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.service.ShodanHost.serializeBinaryToWriter
    );
  }
  f = message.getErrorsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * repeated ShodanHost hosts = 1;
 * @return {!Array<!proto.service.ShodanHost>}
 */
proto.service.ShodanSecurityResult.prototype.getHostsList = function() {
  return /** @type{!Array<!proto.service.ShodanHost>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.service.ShodanHost, 1));
};


/**
 * @param {!Array<!proto.service.ShodanHost>} value
 * @return {!proto.service.ShodanSecurityResult} returns this
*/
proto.service.ShodanSecurityResult.prototype.setHostsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.service.ShodanHost=} opt_value
 * @param {number=} opt_index
 * @return {!proto.service.ShodanHost}
 */
proto.service.ShodanSecurityResult.prototype.addHosts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.service.ShodanHost, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.service.ShodanSecurityResult} returns this
 */
proto.service.ShodanSecurityResult.prototype.clearHostsList = function() {
  return this.setHostsList([]);
};


/**
 * repeated string errors = 2;
 * @return {!Array<string>}
 */
proto.service.ShodanSecurityResult.prototype.getErrorsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.service.ShodanSecurityResult} returns this
 */
proto.service.ShodanSecurityResult.prototype.setErrorsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.service.ShodanSecurityResult} returns this
 */
proto.service.ShodanSecurityResult.prototype.addErrors = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.service.ShodanSecurityResult} returns this
 */
proto.service.ShodanSecurityResult.prototype.clearErrorsList = function() {
  return this.setErrorsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.service.OTXGeneralInfo.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.OTXGeneralInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.service.OTXGeneralInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.OTXGeneralInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.OTXGeneralInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
pulseCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
pulsesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.OTXGeneralInfo}
 */
proto.service.OTXGeneralInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.OTXGeneralInfo;
  return proto.service.OTXGeneralInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.OTXGeneralInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.OTXGeneralInfo}
 */
proto.service.OTXGeneralInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPulseCount(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addPulses(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.OTXGeneralInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.OTXGeneralInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.OTXGeneralInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.OTXGeneralInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPulseCount();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPulsesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional int32 pulse_count = 1;
 * @return {number}
 */
proto.service.OTXGeneralInfo.prototype.getPulseCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.service.OTXGeneralInfo} returns this
 */
proto.service.OTXGeneralInfo.prototype.setPulseCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated string pulses = 2;
 * @return {!Array<string>}
 */
proto.service.OTXGeneralInfo.prototype.getPulsesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.service.OTXGeneralInfo} returns this
 */
proto.service.OTXGeneralInfo.prototype.setPulsesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.service.OTXGeneralInfo} returns this
 */
proto.service.OTXGeneralInfo.prototype.addPulses = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.service.OTXGeneralInfo} returns this
 */
proto.service.OTXGeneralInfo.prototype.clearPulsesList = function() {
  return this.setPulsesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.OTXMalware.prototype.toObject = function(opt_includeInstance) {
  return proto.service.OTXMalware.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.OTXMalware} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.OTXMalware.toObject = function(includeInstance, msg) {
  var f, obj = {
hash: jspb.Message.getFieldWithDefault(msg, 1, ""),
datetime: (f = msg.getDatetime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.OTXMalware}
 */
proto.service.OTXMalware.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.OTXMalware;
  return proto.service.OTXMalware.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.OTXMalware} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.OTXMalware}
 */
proto.service.OTXMalware.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHash(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDatetime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.OTXMalware.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.OTXMalware.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.OTXMalware} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.OTXMalware.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDatetime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string hash = 1;
 * @return {string}
 */
proto.service.OTXMalware.prototype.getHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.OTXMalware} returns this
 */
proto.service.OTXMalware.prototype.setHash = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp datetime = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.service.OTXMalware.prototype.getDatetime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.service.OTXMalware} returns this
*/
proto.service.OTXMalware.prototype.setDatetime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.OTXMalware} returns this
 */
proto.service.OTXMalware.prototype.clearDatetime = function() {
  return this.setDatetime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.OTXMalware.prototype.hasDatetime = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.OTXURL.prototype.toObject = function(opt_includeInstance) {
  return proto.service.OTXURL.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.OTXURL} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.OTXURL.toObject = function(includeInstance, msg) {
  var f, obj = {
url: jspb.Message.getFieldWithDefault(msg, 1, ""),
datetime: (f = msg.getDatetime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.OTXURL}
 */
proto.service.OTXURL.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.OTXURL;
  return proto.service.OTXURL.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.OTXURL} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.OTXURL}
 */
proto.service.OTXURL.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDatetime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.OTXURL.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.OTXURL.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.OTXURL} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.OTXURL.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDatetime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.service.OTXURL.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.OTXURL} returns this
 */
proto.service.OTXURL.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp datetime = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.service.OTXURL.prototype.getDatetime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.service.OTXURL} returns this
*/
proto.service.OTXURL.prototype.setDatetime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.OTXURL} returns this
 */
proto.service.OTXURL.prototype.clearDatetime = function() {
  return this.setDatetime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.OTXURL.prototype.hasDatetime = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.OTXPassiveDNS.prototype.toObject = function(opt_includeInstance) {
  return proto.service.OTXPassiveDNS.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.OTXPassiveDNS} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.OTXPassiveDNS.toObject = function(includeInstance, msg) {
  var f, obj = {
address: jspb.Message.getFieldWithDefault(msg, 1, ""),
hostname: jspb.Message.getFieldWithDefault(msg, 2, ""),
record: jspb.Message.getFieldWithDefault(msg, 3, ""),
datetime: (f = msg.getDatetime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.OTXPassiveDNS}
 */
proto.service.OTXPassiveDNS.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.OTXPassiveDNS;
  return proto.service.OTXPassiveDNS.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.OTXPassiveDNS} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.OTXPassiveDNS}
 */
proto.service.OTXPassiveDNS.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setHostname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRecord(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDatetime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.OTXPassiveDNS.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.OTXPassiveDNS.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.OTXPassiveDNS} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.OTXPassiveDNS.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHostname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRecord();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDatetime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.service.OTXPassiveDNS.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.OTXPassiveDNS} returns this
 */
proto.service.OTXPassiveDNS.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string hostname = 2;
 * @return {string}
 */
proto.service.OTXPassiveDNS.prototype.getHostname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.OTXPassiveDNS} returns this
 */
proto.service.OTXPassiveDNS.prototype.setHostname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string record = 3;
 * @return {string}
 */
proto.service.OTXPassiveDNS.prototype.getRecord = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.OTXPassiveDNS} returns this
 */
proto.service.OTXPassiveDNS.prototype.setRecord = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp datetime = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.service.OTXPassiveDNS.prototype.getDatetime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.service.OTXPassiveDNS} returns this
*/
proto.service.OTXPassiveDNS.prototype.setDatetime = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.OTXPassiveDNS} returns this
 */
proto.service.OTXPassiveDNS.prototype.clearDatetime = function() {
  return this.setDatetime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.OTXPassiveDNS.prototype.hasDatetime = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.service.OTXSecurityResult.repeatedFields_ = [2,3,4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.OTXSecurityResult.prototype.toObject = function(opt_includeInstance) {
  return proto.service.OTXSecurityResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.OTXSecurityResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.OTXSecurityResult.toObject = function(includeInstance, msg) {
  var f, obj = {
generalInfo: (f = msg.getGeneralInfo()) && proto.service.OTXGeneralInfo.toObject(includeInstance, f),
malwareList: jspb.Message.toObjectList(msg.getMalwareList(),
    proto.service.OTXMalware.toObject, includeInstance),
urlsList: jspb.Message.toObjectList(msg.getUrlsList(),
    proto.service.OTXURL.toObject, includeInstance),
passiveDnsList: jspb.Message.toObjectList(msg.getPassiveDnsList(),
    proto.service.OTXPassiveDNS.toObject, includeInstance),
errorsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.OTXSecurityResult}
 */
proto.service.OTXSecurityResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.OTXSecurityResult;
  return proto.service.OTXSecurityResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.OTXSecurityResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.OTXSecurityResult}
 */
proto.service.OTXSecurityResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.service.OTXGeneralInfo;
      reader.readMessage(value,proto.service.OTXGeneralInfo.deserializeBinaryFromReader);
      msg.setGeneralInfo(value);
      break;
    case 2:
      var value = new proto.service.OTXMalware;
      reader.readMessage(value,proto.service.OTXMalware.deserializeBinaryFromReader);
      msg.addMalware(value);
      break;
    case 3:
      var value = new proto.service.OTXURL;
      reader.readMessage(value,proto.service.OTXURL.deserializeBinaryFromReader);
      msg.addUrls(value);
      break;
    case 4:
      var value = new proto.service.OTXPassiveDNS;
      reader.readMessage(value,proto.service.OTXPassiveDNS.deserializeBinaryFromReader);
      msg.addPassiveDns(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addErrors(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.OTXSecurityResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.OTXSecurityResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.OTXSecurityResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.OTXSecurityResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGeneralInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.service.OTXGeneralInfo.serializeBinaryToWriter
    );
  }
  f = message.getMalwareList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.service.OTXMalware.serializeBinaryToWriter
    );
  }
  f = message.getUrlsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.service.OTXURL.serializeBinaryToWriter
    );
  }
  f = message.getPassiveDnsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.service.OTXPassiveDNS.serializeBinaryToWriter
    );
  }
  f = message.getErrorsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
};


/**
 * optional OTXGeneralInfo general_info = 1;
 * @return {?proto.service.OTXGeneralInfo}
 */
proto.service.OTXSecurityResult.prototype.getGeneralInfo = function() {
  return /** @type{?proto.service.OTXGeneralInfo} */ (
    jspb.Message.getWrapperField(this, proto.service.OTXGeneralInfo, 1));
};


/**
 * @param {?proto.service.OTXGeneralInfo|undefined} value
 * @return {!proto.service.OTXSecurityResult} returns this
*/
proto.service.OTXSecurityResult.prototype.setGeneralInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.OTXSecurityResult} returns this
 */
proto.service.OTXSecurityResult.prototype.clearGeneralInfo = function() {
  return this.setGeneralInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.OTXSecurityResult.prototype.hasGeneralInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated OTXMalware malware = 2;
 * @return {!Array<!proto.service.OTXMalware>}
 */
proto.service.OTXSecurityResult.prototype.getMalwareList = function() {
  return /** @type{!Array<!proto.service.OTXMalware>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.service.OTXMalware, 2));
};


/**
 * @param {!Array<!proto.service.OTXMalware>} value
 * @return {!proto.service.OTXSecurityResult} returns this
*/
proto.service.OTXSecurityResult.prototype.setMalwareList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.service.OTXMalware=} opt_value
 * @param {number=} opt_index
 * @return {!proto.service.OTXMalware}
 */
proto.service.OTXSecurityResult.prototype.addMalware = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.service.OTXMalware, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.service.OTXSecurityResult} returns this
 */
proto.service.OTXSecurityResult.prototype.clearMalwareList = function() {
  return this.setMalwareList([]);
};


/**
 * repeated OTXURL urls = 3;
 * @return {!Array<!proto.service.OTXURL>}
 */
proto.service.OTXSecurityResult.prototype.getUrlsList = function() {
  return /** @type{!Array<!proto.service.OTXURL>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.service.OTXURL, 3));
};


/**
 * @param {!Array<!proto.service.OTXURL>} value
 * @return {!proto.service.OTXSecurityResult} returns this
*/
proto.service.OTXSecurityResult.prototype.setUrlsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.service.OTXURL=} opt_value
 * @param {number=} opt_index
 * @return {!proto.service.OTXURL}
 */
proto.service.OTXSecurityResult.prototype.addUrls = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.service.OTXURL, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.service.OTXSecurityResult} returns this
 */
proto.service.OTXSecurityResult.prototype.clearUrlsList = function() {
  return this.setUrlsList([]);
};


/**
 * repeated OTXPassiveDNS passive_dns = 4;
 * @return {!Array<!proto.service.OTXPassiveDNS>}
 */
proto.service.OTXSecurityResult.prototype.getPassiveDnsList = function() {
  return /** @type{!Array<!proto.service.OTXPassiveDNS>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.service.OTXPassiveDNS, 4));
};


/**
 * @param {!Array<!proto.service.OTXPassiveDNS>} value
 * @return {!proto.service.OTXSecurityResult} returns this
*/
proto.service.OTXSecurityResult.prototype.setPassiveDnsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.service.OTXPassiveDNS=} opt_value
 * @param {number=} opt_index
 * @return {!proto.service.OTXPassiveDNS}
 */
proto.service.OTXSecurityResult.prototype.addPassiveDns = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.service.OTXPassiveDNS, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.service.OTXSecurityResult} returns this
 */
proto.service.OTXSecurityResult.prototype.clearPassiveDnsList = function() {
  return this.setPassiveDnsList([]);
};


/**
 * repeated string errors = 5;
 * @return {!Array<string>}
 */
proto.service.OTXSecurityResult.prototype.getErrorsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.service.OTXSecurityResult} returns this
 */
proto.service.OTXSecurityResult.prototype.setErrorsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.service.OTXSecurityResult} returns this
 */
proto.service.OTXSecurityResult.prototype.addErrors = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.service.OTXSecurityResult} returns this
 */
proto.service.OTXSecurityResult.prototype.clearErrorsList = function() {
  return this.setErrorsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.service.WhoisSecurityResult.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.WhoisSecurityResult.prototype.toObject = function(opt_includeInstance) {
  return proto.service.WhoisSecurityResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.WhoisSecurityResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.WhoisSecurityResult.toObject = function(includeInstance, msg) {
  var f, obj = {
domain: jspb.Message.getFieldWithDefault(msg, 1, ""),
registrar: jspb.Message.getFieldWithDefault(msg, 2, ""),
creationDate: (f = msg.getCreationDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
expiryDate: (f = msg.getExpiryDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
registrantName: jspb.Message.getFieldWithDefault(msg, 5, ""),
errorsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.WhoisSecurityResult}
 */
proto.service.WhoisSecurityResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.WhoisSecurityResult;
  return proto.service.WhoisSecurityResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.WhoisSecurityResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.WhoisSecurityResult}
 */
proto.service.WhoisSecurityResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegistrar(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreationDate(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpiryDate(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegistrantName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addErrors(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.WhoisSecurityResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.WhoisSecurityResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.WhoisSecurityResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.WhoisSecurityResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRegistrar();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCreationDate();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getExpiryDate();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getRegistrantName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getErrorsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
};


/**
 * optional string domain = 1;
 * @return {string}
 */
proto.service.WhoisSecurityResult.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.WhoisSecurityResult} returns this
 */
proto.service.WhoisSecurityResult.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string registrar = 2;
 * @return {string}
 */
proto.service.WhoisSecurityResult.prototype.getRegistrar = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.WhoisSecurityResult} returns this
 */
proto.service.WhoisSecurityResult.prototype.setRegistrar = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp creation_date = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.service.WhoisSecurityResult.prototype.getCreationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.service.WhoisSecurityResult} returns this
*/
proto.service.WhoisSecurityResult.prototype.setCreationDate = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.WhoisSecurityResult} returns this
 */
proto.service.WhoisSecurityResult.prototype.clearCreationDate = function() {
  return this.setCreationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.WhoisSecurityResult.prototype.hasCreationDate = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp expiry_date = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.service.WhoisSecurityResult.prototype.getExpiryDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.service.WhoisSecurityResult} returns this
*/
proto.service.WhoisSecurityResult.prototype.setExpiryDate = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.WhoisSecurityResult} returns this
 */
proto.service.WhoisSecurityResult.prototype.clearExpiryDate = function() {
  return this.setExpiryDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.WhoisSecurityResult.prototype.hasExpiryDate = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string registrant_name = 5;
 * @return {string}
 */
proto.service.WhoisSecurityResult.prototype.getRegistrantName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.WhoisSecurityResult} returns this
 */
proto.service.WhoisSecurityResult.prototype.setRegistrantName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated string errors = 6;
 * @return {!Array<string>}
 */
proto.service.WhoisSecurityResult.prototype.getErrorsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.service.WhoisSecurityResult} returns this
 */
proto.service.WhoisSecurityResult.prototype.setErrorsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.service.WhoisSecurityResult} returns this
 */
proto.service.WhoisSecurityResult.prototype.addErrors = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.service.WhoisSecurityResult} returns this
 */
proto.service.WhoisSecurityResult.prototype.clearErrorsList = function() {
  return this.setErrorsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.service.AbuseChIOC.repeatedFields_ = [7,8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.AbuseChIOC.prototype.toObject = function(opt_includeInstance) {
  return proto.service.AbuseChIOC.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.AbuseChIOC} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.AbuseChIOC.toObject = function(includeInstance, msg) {
  var f, obj = {
iocType: jspb.Message.getFieldWithDefault(msg, 1, ""),
iocValue: jspb.Message.getFieldWithDefault(msg, 2, ""),
threatType: jspb.Message.getFieldWithDefault(msg, 3, ""),
confidence: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
firstSeen: (f = msg.getFirstSeen()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
lastSeen: (f = msg.getLastSeen()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
malwareAliasList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
tagsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.AbuseChIOC}
 */
proto.service.AbuseChIOC.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.AbuseChIOC;
  return proto.service.AbuseChIOC.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.AbuseChIOC} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.AbuseChIOC}
 */
proto.service.AbuseChIOC.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIocType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIocValue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setThreatType(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setConfidence(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFirstSeen(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastSeen(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addMalwareAlias(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.AbuseChIOC.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.AbuseChIOC.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.AbuseChIOC} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.AbuseChIOC.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIocType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIocValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getThreatType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getConfidence();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getFirstSeen();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLastSeen();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getMalwareAliasList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
};


/**
 * optional string ioc_type = 1;
 * @return {string}
 */
proto.service.AbuseChIOC.prototype.getIocType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.AbuseChIOC} returns this
 */
proto.service.AbuseChIOC.prototype.setIocType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string ioc_value = 2;
 * @return {string}
 */
proto.service.AbuseChIOC.prototype.getIocValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.AbuseChIOC} returns this
 */
proto.service.AbuseChIOC.prototype.setIocValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string threat_type = 3;
 * @return {string}
 */
proto.service.AbuseChIOC.prototype.getThreatType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.service.AbuseChIOC} returns this
 */
proto.service.AbuseChIOC.prototype.setThreatType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional float confidence = 4;
 * @return {number}
 */
proto.service.AbuseChIOC.prototype.getConfidence = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.service.AbuseChIOC} returns this
 */
proto.service.AbuseChIOC.prototype.setConfidence = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp first_seen = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.service.AbuseChIOC.prototype.getFirstSeen = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.service.AbuseChIOC} returns this
*/
proto.service.AbuseChIOC.prototype.setFirstSeen = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.AbuseChIOC} returns this
 */
proto.service.AbuseChIOC.prototype.clearFirstSeen = function() {
  return this.setFirstSeen(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.AbuseChIOC.prototype.hasFirstSeen = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Timestamp last_seen = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.service.AbuseChIOC.prototype.getLastSeen = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.service.AbuseChIOC} returns this
*/
proto.service.AbuseChIOC.prototype.setLastSeen = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.service.AbuseChIOC} returns this
 */
proto.service.AbuseChIOC.prototype.clearLastSeen = function() {
  return this.setLastSeen(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.service.AbuseChIOC.prototype.hasLastSeen = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated string malware_alias = 7;
 * @return {!Array<string>}
 */
proto.service.AbuseChIOC.prototype.getMalwareAliasList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.service.AbuseChIOC} returns this
 */
proto.service.AbuseChIOC.prototype.setMalwareAliasList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.service.AbuseChIOC} returns this
 */
proto.service.AbuseChIOC.prototype.addMalwareAlias = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.service.AbuseChIOC} returns this
 */
proto.service.AbuseChIOC.prototype.clearMalwareAliasList = function() {
  return this.setMalwareAliasList([]);
};


/**
 * repeated string tags = 8;
 * @return {!Array<string>}
 */
proto.service.AbuseChIOC.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.service.AbuseChIOC} returns this
 */
proto.service.AbuseChIOC.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.service.AbuseChIOC} returns this
 */
proto.service.AbuseChIOC.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.service.AbuseChIOC} returns this
 */
proto.service.AbuseChIOC.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.service.AbuseChSecurityResult.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.service.AbuseChSecurityResult.prototype.toObject = function(opt_includeInstance) {
  return proto.service.AbuseChSecurityResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.service.AbuseChSecurityResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.AbuseChSecurityResult.toObject = function(includeInstance, msg) {
  var f, obj = {
iocsList: jspb.Message.toObjectList(msg.getIocsList(),
    proto.service.AbuseChIOC.toObject, includeInstance),
errorsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.AbuseChSecurityResult}
 */
proto.service.AbuseChSecurityResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.AbuseChSecurityResult;
  return proto.service.AbuseChSecurityResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.AbuseChSecurityResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.AbuseChSecurityResult}
 */
proto.service.AbuseChSecurityResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.service.AbuseChIOC;
      reader.readMessage(value,proto.service.AbuseChIOC.deserializeBinaryFromReader);
      msg.addIocs(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addErrors(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.service.AbuseChSecurityResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.service.AbuseChSecurityResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.AbuseChSecurityResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.service.AbuseChSecurityResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIocsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.service.AbuseChIOC.serializeBinaryToWriter
    );
  }
  f = message.getErrorsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * repeated AbuseChIOC iocs = 1;
 * @return {!Array<!proto.service.AbuseChIOC>}
 */
proto.service.AbuseChSecurityResult.prototype.getIocsList = function() {
  return /** @type{!Array<!proto.service.AbuseChIOC>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.service.AbuseChIOC, 1));
};


/**
 * @param {!Array<!proto.service.AbuseChIOC>} value
 * @return {!proto.service.AbuseChSecurityResult} returns this
*/
proto.service.AbuseChSecurityResult.prototype.setIocsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.service.AbuseChIOC=} opt_value
 * @param {number=} opt_index
 * @return {!proto.service.AbuseChIOC}
 */
proto.service.AbuseChSecurityResult.prototype.addIocs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.service.AbuseChIOC, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.service.AbuseChSecurityResult} returns this
 */
proto.service.AbuseChSecurityResult.prototype.clearIocsList = function() {
  return this.setIocsList([]);
};


/**
 * repeated string errors = 2;
 * @return {!Array<string>}
 */
proto.service.AbuseChSecurityResult.prototype.getErrorsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.service.AbuseChSecurityResult} returns this
 */
proto.service.AbuseChSecurityResult.prototype.setErrorsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.service.AbuseChSecurityResult} returns this
 */
proto.service.AbuseChSecurityResult.prototype.addErrors = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.service.AbuseChSecurityResult} returns this
 */
proto.service.AbuseChSecurityResult.prototype.clearErrorsList = function() {
  return this.setErrorsList([]);
};


goog.object.extend(exports, proto.service);

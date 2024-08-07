// source: feast/registry/RegistryServer.proto
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

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var feast_core_Registry_pb = require('../../feast/core/Registry_pb.js');
goog.object.extend(proto, feast_core_Registry_pb);
var feast_core_Entity_pb = require('../../feast/core/Entity_pb.js');
goog.object.extend(proto, feast_core_Entity_pb);
var feast_core_DataSource_pb = require('../../feast/core/DataSource_pb.js');
goog.object.extend(proto, feast_core_DataSource_pb);
var feast_core_FeatureView_pb = require('../../feast/core/FeatureView_pb.js');
goog.object.extend(proto, feast_core_FeatureView_pb);
var feast_core_StreamFeatureView_pb = require('../../feast/core/StreamFeatureView_pb.js');
goog.object.extend(proto, feast_core_StreamFeatureView_pb);
var feast_core_OnDemandFeatureView_pb = require('../../feast/core/OnDemandFeatureView_pb.js');
goog.object.extend(proto, feast_core_OnDemandFeatureView_pb);
var feast_core_FeatureService_pb = require('../../feast/core/FeatureService_pb.js');
goog.object.extend(proto, feast_core_FeatureService_pb);
var feast_core_SavedDataset_pb = require('../../feast/core/SavedDataset_pb.js');
goog.object.extend(proto, feast_core_SavedDataset_pb);
var feast_core_ValidationProfile_pb = require('../../feast/core/ValidationProfile_pb.js');
goog.object.extend(proto, feast_core_ValidationProfile_pb);
var feast_core_InfraObject_pb = require('../../feast/core/InfraObject_pb.js');
goog.object.extend(proto, feast_core_InfraObject_pb);
goog.exportSymbol('proto.feast.registry.ApplyDataSourceRequest', null, global);
goog.exportSymbol('proto.feast.registry.ApplyEntityRequest', null, global);
goog.exportSymbol('proto.feast.registry.ApplyFeatureServiceRequest', null, global);
goog.exportSymbol('proto.feast.registry.ApplyFeatureViewRequest', null, global);
goog.exportSymbol('proto.feast.registry.ApplyFeatureViewRequest.BaseFeatureViewCase', null, global);
goog.exportSymbol('proto.feast.registry.ApplyMaterializationRequest', null, global);
goog.exportSymbol('proto.feast.registry.ApplySavedDatasetRequest', null, global);
goog.exportSymbol('proto.feast.registry.ApplyValidationReferenceRequest', null, global);
goog.exportSymbol('proto.feast.registry.DeleteDataSourceRequest', null, global);
goog.exportSymbol('proto.feast.registry.DeleteEntityRequest', null, global);
goog.exportSymbol('proto.feast.registry.DeleteFeatureServiceRequest', null, global);
goog.exportSymbol('proto.feast.registry.DeleteFeatureViewRequest', null, global);
goog.exportSymbol('proto.feast.registry.DeleteSavedDatasetRequest', null, global);
goog.exportSymbol('proto.feast.registry.DeleteValidationReferenceRequest', null, global);
goog.exportSymbol('proto.feast.registry.GetDataSourceRequest', null, global);
goog.exportSymbol('proto.feast.registry.GetEntityRequest', null, global);
goog.exportSymbol('proto.feast.registry.GetFeatureServiceRequest', null, global);
goog.exportSymbol('proto.feast.registry.GetFeatureViewRequest', null, global);
goog.exportSymbol('proto.feast.registry.GetInfraRequest', null, global);
goog.exportSymbol('proto.feast.registry.GetOnDemandFeatureViewRequest', null, global);
goog.exportSymbol('proto.feast.registry.GetSavedDatasetRequest', null, global);
goog.exportSymbol('proto.feast.registry.GetStreamFeatureViewRequest', null, global);
goog.exportSymbol('proto.feast.registry.GetValidationReferenceRequest', null, global);
goog.exportSymbol('proto.feast.registry.ListDataSourcesRequest', null, global);
goog.exportSymbol('proto.feast.registry.ListDataSourcesResponse', null, global);
goog.exportSymbol('proto.feast.registry.ListEntitiesRequest', null, global);
goog.exportSymbol('proto.feast.registry.ListEntitiesResponse', null, global);
goog.exportSymbol('proto.feast.registry.ListFeatureServicesRequest', null, global);
goog.exportSymbol('proto.feast.registry.ListFeatureServicesResponse', null, global);
goog.exportSymbol('proto.feast.registry.ListFeatureViewsRequest', null, global);
goog.exportSymbol('proto.feast.registry.ListFeatureViewsResponse', null, global);
goog.exportSymbol('proto.feast.registry.ListOnDemandFeatureViewsRequest', null, global);
goog.exportSymbol('proto.feast.registry.ListOnDemandFeatureViewsResponse', null, global);
goog.exportSymbol('proto.feast.registry.ListProjectMetadataRequest', null, global);
goog.exportSymbol('proto.feast.registry.ListProjectMetadataResponse', null, global);
goog.exportSymbol('proto.feast.registry.ListSavedDatasetsRequest', null, global);
goog.exportSymbol('proto.feast.registry.ListSavedDatasetsResponse', null, global);
goog.exportSymbol('proto.feast.registry.ListStreamFeatureViewsRequest', null, global);
goog.exportSymbol('proto.feast.registry.ListStreamFeatureViewsResponse', null, global);
goog.exportSymbol('proto.feast.registry.ListValidationReferencesRequest', null, global);
goog.exportSymbol('proto.feast.registry.ListValidationReferencesResponse', null, global);
goog.exportSymbol('proto.feast.registry.RefreshRequest', null, global);
goog.exportSymbol('proto.feast.registry.UpdateInfraRequest', null, global);
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
proto.feast.registry.RefreshRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.feast.registry.RefreshRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.feast.registry.RefreshRequest.displayName = 'proto.feast.registry.RefreshRequest';
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
proto.feast.registry.UpdateInfraRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.feast.registry.UpdateInfraRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.feast.registry.UpdateInfraRequest.displayName = 'proto.feast.registry.UpdateInfraRequest';
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
proto.feast.registry.GetInfraRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.feast.registry.GetInfraRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.feast.registry.GetInfraRequest.displayName = 'proto.feast.registry.GetInfraRequest';
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
proto.feast.registry.ListProjectMetadataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.feast.registry.ListProjectMetadataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.feast.registry.ListProjectMetadataRequest.displayName = 'proto.feast.registry.ListProjectMetadataRequest';
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
proto.feast.registry.ListProjectMetadataResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.feast.registry.ListProjectMetadataResponse.repeatedFields_, null);
};
goog.inherits(proto.feast.registry.ListProjectMetadataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.feast.registry.ListProjectMetadataResponse.displayName = 'proto.feast.registry.ListProjectMetadataResponse';
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
proto.feast.registry.ApplyMaterializationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.feast.registry.ApplyMaterializationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.feast.registry.ApplyMaterializationRequest.displayName = 'proto.feast.registry.ApplyMaterializationRequest';
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
proto.feast.registry.ApplyEntityRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.feast.registry.ApplyEntityRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.feast.registry.ApplyEntityRequest.displayName = 'proto.feast.registry.ApplyEntityRequest';
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
proto.feast.registry.GetEntityRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.feast.registry.GetEntityRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.feast.registry.GetEntityRequest.displayName = 'proto.feast.registry.GetEntityRequest';
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
proto.feast.registry.ListEntitiesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.feast.registry.ListEntitiesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.feast.registry.ListEntitiesRequest.displayName = 'proto.feast.registry.ListEntitiesRequest';
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
proto.feast.registry.ListEntitiesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.feast.registry.ListEntitiesResponse.repeatedFields_, null);
};
goog.inherits(proto.feast.registry.ListEntitiesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.feast.registry.ListEntitiesResponse.displayName = 'proto.feast.registry.ListEntitiesResponse';
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
proto.feast.registry.DeleteEntityRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.feast.registry.DeleteEntityRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.feast.registry.DeleteEntityRequest.displayName = 'proto.feast.registry.DeleteEntityRequest';
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
proto.feast.registry.ApplyDataSourceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.feast.registry.ApplyDataSourceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.feast.registry.ApplyDataSourceRequest.displayName = 'proto.feast.registry.ApplyDataSourceRequest';
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
proto.feast.registry.GetDataSourceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.feast.registry.GetDataSourceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.feast.registry.GetDataSourceRequest.displayName = 'proto.feast.registry.GetDataSourceRequest';
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
proto.feast.registry.ListDataSourcesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.feast.registry.ListDataSourcesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.feast.registry.ListDataSourcesRequest.displayName = 'proto.feast.registry.ListDataSourcesRequest';
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
proto.feast.registry.ListDataSourcesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.feast.registry.ListDataSourcesResponse.repeatedFields_, null);
};
goog.inherits(proto.feast.registry.ListDataSourcesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.feast.registry.ListDataSourcesResponse.displayName = 'proto.feast.registry.ListDataSourcesResponse';
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
proto.feast.registry.DeleteDataSourceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.feast.registry.DeleteDataSourceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.feast.registry.DeleteDataSourceRequest.displayName = 'proto.feast.registry.DeleteDataSourceRequest';
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
proto.feast.registry.ApplyFeatureViewRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.feast.registry.ApplyFeatureViewRequest.oneofGroups_);
};
goog.inherits(proto.feast.registry.ApplyFeatureViewRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.feast.registry.ApplyFeatureViewRequest.displayName = 'proto.feast.registry.ApplyFeatureViewRequest';
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
proto.feast.registry.GetFeatureViewRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.feast.registry.GetFeatureViewRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.feast.registry.GetFeatureViewRequest.displayName = 'proto.feast.registry.GetFeatureViewRequest';
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
proto.feast.registry.ListFeatureViewsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.feast.registry.ListFeatureViewsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.feast.registry.ListFeatureViewsRequest.displayName = 'proto.feast.registry.ListFeatureViewsRequest';
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
proto.feast.registry.ListFeatureViewsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.feast.registry.ListFeatureViewsResponse.repeatedFields_, null);
};
goog.inherits(proto.feast.registry.ListFeatureViewsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.feast.registry.ListFeatureViewsResponse.displayName = 'proto.feast.registry.ListFeatureViewsResponse';
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
proto.feast.registry.DeleteFeatureViewRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.feast.registry.DeleteFeatureViewRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.feast.registry.DeleteFeatureViewRequest.displayName = 'proto.feast.registry.DeleteFeatureViewRequest';
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
proto.feast.registry.GetStreamFeatureViewRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.feast.registry.GetStreamFeatureViewRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.feast.registry.GetStreamFeatureViewRequest.displayName = 'proto.feast.registry.GetStreamFeatureViewRequest';
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
proto.feast.registry.ListStreamFeatureViewsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.feast.registry.ListStreamFeatureViewsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.feast.registry.ListStreamFeatureViewsRequest.displayName = 'proto.feast.registry.ListStreamFeatureViewsRequest';
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
proto.feast.registry.ListStreamFeatureViewsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.feast.registry.ListStreamFeatureViewsResponse.repeatedFields_, null);
};
goog.inherits(proto.feast.registry.ListStreamFeatureViewsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.feast.registry.ListStreamFeatureViewsResponse.displayName = 'proto.feast.registry.ListStreamFeatureViewsResponse';
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
proto.feast.registry.GetOnDemandFeatureViewRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.feast.registry.GetOnDemandFeatureViewRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.feast.registry.GetOnDemandFeatureViewRequest.displayName = 'proto.feast.registry.GetOnDemandFeatureViewRequest';
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
proto.feast.registry.ListOnDemandFeatureViewsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.feast.registry.ListOnDemandFeatureViewsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.feast.registry.ListOnDemandFeatureViewsRequest.displayName = 'proto.feast.registry.ListOnDemandFeatureViewsRequest';
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
proto.feast.registry.ListOnDemandFeatureViewsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.feast.registry.ListOnDemandFeatureViewsResponse.repeatedFields_, null);
};
goog.inherits(proto.feast.registry.ListOnDemandFeatureViewsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.feast.registry.ListOnDemandFeatureViewsResponse.displayName = 'proto.feast.registry.ListOnDemandFeatureViewsResponse';
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
proto.feast.registry.ApplyFeatureServiceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.feast.registry.ApplyFeatureServiceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.feast.registry.ApplyFeatureServiceRequest.displayName = 'proto.feast.registry.ApplyFeatureServiceRequest';
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
proto.feast.registry.GetFeatureServiceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.feast.registry.GetFeatureServiceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.feast.registry.GetFeatureServiceRequest.displayName = 'proto.feast.registry.GetFeatureServiceRequest';
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
proto.feast.registry.ListFeatureServicesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.feast.registry.ListFeatureServicesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.feast.registry.ListFeatureServicesRequest.displayName = 'proto.feast.registry.ListFeatureServicesRequest';
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
proto.feast.registry.ListFeatureServicesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.feast.registry.ListFeatureServicesResponse.repeatedFields_, null);
};
goog.inherits(proto.feast.registry.ListFeatureServicesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.feast.registry.ListFeatureServicesResponse.displayName = 'proto.feast.registry.ListFeatureServicesResponse';
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
proto.feast.registry.DeleteFeatureServiceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.feast.registry.DeleteFeatureServiceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.feast.registry.DeleteFeatureServiceRequest.displayName = 'proto.feast.registry.DeleteFeatureServiceRequest';
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
proto.feast.registry.ApplySavedDatasetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.feast.registry.ApplySavedDatasetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.feast.registry.ApplySavedDatasetRequest.displayName = 'proto.feast.registry.ApplySavedDatasetRequest';
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
proto.feast.registry.GetSavedDatasetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.feast.registry.GetSavedDatasetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.feast.registry.GetSavedDatasetRequest.displayName = 'proto.feast.registry.GetSavedDatasetRequest';
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
proto.feast.registry.ListSavedDatasetsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.feast.registry.ListSavedDatasetsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.feast.registry.ListSavedDatasetsRequest.displayName = 'proto.feast.registry.ListSavedDatasetsRequest';
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
proto.feast.registry.ListSavedDatasetsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.feast.registry.ListSavedDatasetsResponse.repeatedFields_, null);
};
goog.inherits(proto.feast.registry.ListSavedDatasetsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.feast.registry.ListSavedDatasetsResponse.displayName = 'proto.feast.registry.ListSavedDatasetsResponse';
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
proto.feast.registry.DeleteSavedDatasetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.feast.registry.DeleteSavedDatasetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.feast.registry.DeleteSavedDatasetRequest.displayName = 'proto.feast.registry.DeleteSavedDatasetRequest';
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
proto.feast.registry.ApplyValidationReferenceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.feast.registry.ApplyValidationReferenceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.feast.registry.ApplyValidationReferenceRequest.displayName = 'proto.feast.registry.ApplyValidationReferenceRequest';
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
proto.feast.registry.GetValidationReferenceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.feast.registry.GetValidationReferenceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.feast.registry.GetValidationReferenceRequest.displayName = 'proto.feast.registry.GetValidationReferenceRequest';
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
proto.feast.registry.ListValidationReferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.feast.registry.ListValidationReferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.feast.registry.ListValidationReferencesRequest.displayName = 'proto.feast.registry.ListValidationReferencesRequest';
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
proto.feast.registry.ListValidationReferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.feast.registry.ListValidationReferencesResponse.repeatedFields_, null);
};
goog.inherits(proto.feast.registry.ListValidationReferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.feast.registry.ListValidationReferencesResponse.displayName = 'proto.feast.registry.ListValidationReferencesResponse';
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
proto.feast.registry.DeleteValidationReferenceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.feast.registry.DeleteValidationReferenceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.feast.registry.DeleteValidationReferenceRequest.displayName = 'proto.feast.registry.DeleteValidationReferenceRequest';
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
proto.feast.registry.RefreshRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.feast.registry.RefreshRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.feast.registry.RefreshRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.RefreshRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    project: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.feast.registry.RefreshRequest}
 */
proto.feast.registry.RefreshRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.feast.registry.RefreshRequest;
  return proto.feast.registry.RefreshRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.feast.registry.RefreshRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.feast.registry.RefreshRequest}
 */
proto.feast.registry.RefreshRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProject(value);
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
proto.feast.registry.RefreshRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.feast.registry.RefreshRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.feast.registry.RefreshRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.RefreshRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProject();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string project = 1;
 * @return {string}
 */
proto.feast.registry.RefreshRequest.prototype.getProject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.feast.registry.RefreshRequest} returns this
 */
proto.feast.registry.RefreshRequest.prototype.setProject = function(value) {
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
proto.feast.registry.UpdateInfraRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.feast.registry.UpdateInfraRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.feast.registry.UpdateInfraRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.UpdateInfraRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    infra: (f = msg.getInfra()) && feast_core_InfraObject_pb.Infra.toObject(includeInstance, f),
    project: jspb.Message.getFieldWithDefault(msg, 2, ""),
    commit: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.feast.registry.UpdateInfraRequest}
 */
proto.feast.registry.UpdateInfraRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.feast.registry.UpdateInfraRequest;
  return proto.feast.registry.UpdateInfraRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.feast.registry.UpdateInfraRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.feast.registry.UpdateInfraRequest}
 */
proto.feast.registry.UpdateInfraRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new feast_core_InfraObject_pb.Infra;
      reader.readMessage(value,feast_core_InfraObject_pb.Infra.deserializeBinaryFromReader);
      msg.setInfra(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProject(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCommit(value);
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
proto.feast.registry.UpdateInfraRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.feast.registry.UpdateInfraRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.feast.registry.UpdateInfraRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.UpdateInfraRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfra();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      feast_core_InfraObject_pb.Infra.serializeBinaryToWriter
    );
  }
  f = message.getProject();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCommit();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional feast.core.Infra infra = 1;
 * @return {?proto.feast.core.Infra}
 */
proto.feast.registry.UpdateInfraRequest.prototype.getInfra = function() {
  return /** @type{?proto.feast.core.Infra} */ (
    jspb.Message.getWrapperField(this, feast_core_InfraObject_pb.Infra, 1));
};


/**
 * @param {?proto.feast.core.Infra|undefined} value
 * @return {!proto.feast.registry.UpdateInfraRequest} returns this
*/
proto.feast.registry.UpdateInfraRequest.prototype.setInfra = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.feast.registry.UpdateInfraRequest} returns this
 */
proto.feast.registry.UpdateInfraRequest.prototype.clearInfra = function() {
  return this.setInfra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.feast.registry.UpdateInfraRequest.prototype.hasInfra = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string project = 2;
 * @return {string}
 */
proto.feast.registry.UpdateInfraRequest.prototype.getProject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.feast.registry.UpdateInfraRequest} returns this
 */
proto.feast.registry.UpdateInfraRequest.prototype.setProject = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool commit = 3;
 * @return {boolean}
 */
proto.feast.registry.UpdateInfraRequest.prototype.getCommit = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.feast.registry.UpdateInfraRequest} returns this
 */
proto.feast.registry.UpdateInfraRequest.prototype.setCommit = function(value) {
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
proto.feast.registry.GetInfraRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.feast.registry.GetInfraRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.feast.registry.GetInfraRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.GetInfraRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    project: jspb.Message.getFieldWithDefault(msg, 1, ""),
    allowCache: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.feast.registry.GetInfraRequest}
 */
proto.feast.registry.GetInfraRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.feast.registry.GetInfraRequest;
  return proto.feast.registry.GetInfraRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.feast.registry.GetInfraRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.feast.registry.GetInfraRequest}
 */
proto.feast.registry.GetInfraRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProject(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowCache(value);
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
proto.feast.registry.GetInfraRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.feast.registry.GetInfraRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.feast.registry.GetInfraRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.GetInfraRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProject();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAllowCache();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string project = 1;
 * @return {string}
 */
proto.feast.registry.GetInfraRequest.prototype.getProject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.feast.registry.GetInfraRequest} returns this
 */
proto.feast.registry.GetInfraRequest.prototype.setProject = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool allow_cache = 2;
 * @return {boolean}
 */
proto.feast.registry.GetInfraRequest.prototype.getAllowCache = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.feast.registry.GetInfraRequest} returns this
 */
proto.feast.registry.GetInfraRequest.prototype.setAllowCache = function(value) {
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
proto.feast.registry.ListProjectMetadataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.feast.registry.ListProjectMetadataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.feast.registry.ListProjectMetadataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.ListProjectMetadataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    project: jspb.Message.getFieldWithDefault(msg, 1, ""),
    allowCache: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.feast.registry.ListProjectMetadataRequest}
 */
proto.feast.registry.ListProjectMetadataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.feast.registry.ListProjectMetadataRequest;
  return proto.feast.registry.ListProjectMetadataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.feast.registry.ListProjectMetadataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.feast.registry.ListProjectMetadataRequest}
 */
proto.feast.registry.ListProjectMetadataRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProject(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowCache(value);
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
proto.feast.registry.ListProjectMetadataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.feast.registry.ListProjectMetadataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.feast.registry.ListProjectMetadataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.ListProjectMetadataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProject();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAllowCache();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string project = 1;
 * @return {string}
 */
proto.feast.registry.ListProjectMetadataRequest.prototype.getProject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.feast.registry.ListProjectMetadataRequest} returns this
 */
proto.feast.registry.ListProjectMetadataRequest.prototype.setProject = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool allow_cache = 2;
 * @return {boolean}
 */
proto.feast.registry.ListProjectMetadataRequest.prototype.getAllowCache = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.feast.registry.ListProjectMetadataRequest} returns this
 */
proto.feast.registry.ListProjectMetadataRequest.prototype.setAllowCache = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.feast.registry.ListProjectMetadataResponse.repeatedFields_ = [1];



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
proto.feast.registry.ListProjectMetadataResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.feast.registry.ListProjectMetadataResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.feast.registry.ListProjectMetadataResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.ListProjectMetadataResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectMetadataList: jspb.Message.toObjectList(msg.getProjectMetadataList(),
    feast_core_Registry_pb.ProjectMetadata.toObject, includeInstance)
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
 * @return {!proto.feast.registry.ListProjectMetadataResponse}
 */
proto.feast.registry.ListProjectMetadataResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.feast.registry.ListProjectMetadataResponse;
  return proto.feast.registry.ListProjectMetadataResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.feast.registry.ListProjectMetadataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.feast.registry.ListProjectMetadataResponse}
 */
proto.feast.registry.ListProjectMetadataResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new feast_core_Registry_pb.ProjectMetadata;
      reader.readMessage(value,feast_core_Registry_pb.ProjectMetadata.deserializeBinaryFromReader);
      msg.addProjectMetadata(value);
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
proto.feast.registry.ListProjectMetadataResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.feast.registry.ListProjectMetadataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.feast.registry.ListProjectMetadataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.ListProjectMetadataResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectMetadataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      feast_core_Registry_pb.ProjectMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * repeated feast.core.ProjectMetadata project_metadata = 1;
 * @return {!Array<!proto.feast.core.ProjectMetadata>}
 */
proto.feast.registry.ListProjectMetadataResponse.prototype.getProjectMetadataList = function() {
  return /** @type{!Array<!proto.feast.core.ProjectMetadata>} */ (
    jspb.Message.getRepeatedWrapperField(this, feast_core_Registry_pb.ProjectMetadata, 1));
};


/**
 * @param {!Array<!proto.feast.core.ProjectMetadata>} value
 * @return {!proto.feast.registry.ListProjectMetadataResponse} returns this
*/
proto.feast.registry.ListProjectMetadataResponse.prototype.setProjectMetadataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.feast.core.ProjectMetadata=} opt_value
 * @param {number=} opt_index
 * @return {!proto.feast.core.ProjectMetadata}
 */
proto.feast.registry.ListProjectMetadataResponse.prototype.addProjectMetadata = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.feast.core.ProjectMetadata, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.feast.registry.ListProjectMetadataResponse} returns this
 */
proto.feast.registry.ListProjectMetadataResponse.prototype.clearProjectMetadataList = function() {
  return this.setProjectMetadataList([]);
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
proto.feast.registry.ApplyMaterializationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.feast.registry.ApplyMaterializationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.feast.registry.ApplyMaterializationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.ApplyMaterializationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    featureView: (f = msg.getFeatureView()) && feast_core_FeatureView_pb.FeatureView.toObject(includeInstance, f),
    project: jspb.Message.getFieldWithDefault(msg, 2, ""),
    startDate: (f = msg.getStartDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    endDate: (f = msg.getEndDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    commit: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
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
 * @return {!proto.feast.registry.ApplyMaterializationRequest}
 */
proto.feast.registry.ApplyMaterializationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.feast.registry.ApplyMaterializationRequest;
  return proto.feast.registry.ApplyMaterializationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.feast.registry.ApplyMaterializationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.feast.registry.ApplyMaterializationRequest}
 */
proto.feast.registry.ApplyMaterializationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new feast_core_FeatureView_pb.FeatureView;
      reader.readMessage(value,feast_core_FeatureView_pb.FeatureView.deserializeBinaryFromReader);
      msg.setFeatureView(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProject(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartDate(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndDate(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCommit(value);
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
proto.feast.registry.ApplyMaterializationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.feast.registry.ApplyMaterializationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.feast.registry.ApplyMaterializationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.ApplyMaterializationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFeatureView();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      feast_core_FeatureView_pb.FeatureView.serializeBinaryToWriter
    );
  }
  f = message.getProject();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStartDate();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEndDate();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCommit();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional feast.core.FeatureView feature_view = 1;
 * @return {?proto.feast.core.FeatureView}
 */
proto.feast.registry.ApplyMaterializationRequest.prototype.getFeatureView = function() {
  return /** @type{?proto.feast.core.FeatureView} */ (
    jspb.Message.getWrapperField(this, feast_core_FeatureView_pb.FeatureView, 1));
};


/**
 * @param {?proto.feast.core.FeatureView|undefined} value
 * @return {!proto.feast.registry.ApplyMaterializationRequest} returns this
*/
proto.feast.registry.ApplyMaterializationRequest.prototype.setFeatureView = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.feast.registry.ApplyMaterializationRequest} returns this
 */
proto.feast.registry.ApplyMaterializationRequest.prototype.clearFeatureView = function() {
  return this.setFeatureView(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.feast.registry.ApplyMaterializationRequest.prototype.hasFeatureView = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string project = 2;
 * @return {string}
 */
proto.feast.registry.ApplyMaterializationRequest.prototype.getProject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.feast.registry.ApplyMaterializationRequest} returns this
 */
proto.feast.registry.ApplyMaterializationRequest.prototype.setProject = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp start_date = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.feast.registry.ApplyMaterializationRequest.prototype.getStartDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.feast.registry.ApplyMaterializationRequest} returns this
*/
proto.feast.registry.ApplyMaterializationRequest.prototype.setStartDate = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.feast.registry.ApplyMaterializationRequest} returns this
 */
proto.feast.registry.ApplyMaterializationRequest.prototype.clearStartDate = function() {
  return this.setStartDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.feast.registry.ApplyMaterializationRequest.prototype.hasStartDate = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp end_date = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.feast.registry.ApplyMaterializationRequest.prototype.getEndDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.feast.registry.ApplyMaterializationRequest} returns this
*/
proto.feast.registry.ApplyMaterializationRequest.prototype.setEndDate = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.feast.registry.ApplyMaterializationRequest} returns this
 */
proto.feast.registry.ApplyMaterializationRequest.prototype.clearEndDate = function() {
  return this.setEndDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.feast.registry.ApplyMaterializationRequest.prototype.hasEndDate = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool commit = 5;
 * @return {boolean}
 */
proto.feast.registry.ApplyMaterializationRequest.prototype.getCommit = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.feast.registry.ApplyMaterializationRequest} returns this
 */
proto.feast.registry.ApplyMaterializationRequest.prototype.setCommit = function(value) {
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
proto.feast.registry.ApplyEntityRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.feast.registry.ApplyEntityRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.feast.registry.ApplyEntityRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.ApplyEntityRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && feast_core_Entity_pb.Entity.toObject(includeInstance, f),
    project: jspb.Message.getFieldWithDefault(msg, 2, ""),
    commit: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.feast.registry.ApplyEntityRequest}
 */
proto.feast.registry.ApplyEntityRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.feast.registry.ApplyEntityRequest;
  return proto.feast.registry.ApplyEntityRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.feast.registry.ApplyEntityRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.feast.registry.ApplyEntityRequest}
 */
proto.feast.registry.ApplyEntityRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new feast_core_Entity_pb.Entity;
      reader.readMessage(value,feast_core_Entity_pb.Entity.deserializeBinaryFromReader);
      msg.setEntity(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProject(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCommit(value);
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
proto.feast.registry.ApplyEntityRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.feast.registry.ApplyEntityRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.feast.registry.ApplyEntityRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.ApplyEntityRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      feast_core_Entity_pb.Entity.serializeBinaryToWriter
    );
  }
  f = message.getProject();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCommit();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional feast.core.Entity entity = 1;
 * @return {?proto.feast.core.Entity}
 */
proto.feast.registry.ApplyEntityRequest.prototype.getEntity = function() {
  return /** @type{?proto.feast.core.Entity} */ (
    jspb.Message.getWrapperField(this, feast_core_Entity_pb.Entity, 1));
};


/**
 * @param {?proto.feast.core.Entity|undefined} value
 * @return {!proto.feast.registry.ApplyEntityRequest} returns this
*/
proto.feast.registry.ApplyEntityRequest.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.feast.registry.ApplyEntityRequest} returns this
 */
proto.feast.registry.ApplyEntityRequest.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.feast.registry.ApplyEntityRequest.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string project = 2;
 * @return {string}
 */
proto.feast.registry.ApplyEntityRequest.prototype.getProject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.feast.registry.ApplyEntityRequest} returns this
 */
proto.feast.registry.ApplyEntityRequest.prototype.setProject = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool commit = 3;
 * @return {boolean}
 */
proto.feast.registry.ApplyEntityRequest.prototype.getCommit = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.feast.registry.ApplyEntityRequest} returns this
 */
proto.feast.registry.ApplyEntityRequest.prototype.setCommit = function(value) {
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
proto.feast.registry.GetEntityRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.feast.registry.GetEntityRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.feast.registry.GetEntityRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.GetEntityRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    project: jspb.Message.getFieldWithDefault(msg, 2, ""),
    allowCache: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.feast.registry.GetEntityRequest}
 */
proto.feast.registry.GetEntityRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.feast.registry.GetEntityRequest;
  return proto.feast.registry.GetEntityRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.feast.registry.GetEntityRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.feast.registry.GetEntityRequest}
 */
proto.feast.registry.GetEntityRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProject(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowCache(value);
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
proto.feast.registry.GetEntityRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.feast.registry.GetEntityRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.feast.registry.GetEntityRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.GetEntityRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProject();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAllowCache();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.feast.registry.GetEntityRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.feast.registry.GetEntityRequest} returns this
 */
proto.feast.registry.GetEntityRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string project = 2;
 * @return {string}
 */
proto.feast.registry.GetEntityRequest.prototype.getProject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.feast.registry.GetEntityRequest} returns this
 */
proto.feast.registry.GetEntityRequest.prototype.setProject = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool allow_cache = 3;
 * @return {boolean}
 */
proto.feast.registry.GetEntityRequest.prototype.getAllowCache = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.feast.registry.GetEntityRequest} returns this
 */
proto.feast.registry.GetEntityRequest.prototype.setAllowCache = function(value) {
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
proto.feast.registry.ListEntitiesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.feast.registry.ListEntitiesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.feast.registry.ListEntitiesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.ListEntitiesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    project: jspb.Message.getFieldWithDefault(msg, 1, ""),
    allowCache: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    tagsMap: (f = msg.getTagsMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.feast.registry.ListEntitiesRequest}
 */
proto.feast.registry.ListEntitiesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.feast.registry.ListEntitiesRequest;
  return proto.feast.registry.ListEntitiesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.feast.registry.ListEntitiesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.feast.registry.ListEntitiesRequest}
 */
proto.feast.registry.ListEntitiesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProject(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowCache(value);
      break;
    case 3:
      var value = msg.getTagsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
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
proto.feast.registry.ListEntitiesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.feast.registry.ListEntitiesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.feast.registry.ListEntitiesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.ListEntitiesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProject();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAllowCache();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getTagsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string project = 1;
 * @return {string}
 */
proto.feast.registry.ListEntitiesRequest.prototype.getProject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.feast.registry.ListEntitiesRequest} returns this
 */
proto.feast.registry.ListEntitiesRequest.prototype.setProject = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool allow_cache = 2;
 * @return {boolean}
 */
proto.feast.registry.ListEntitiesRequest.prototype.getAllowCache = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.feast.registry.ListEntitiesRequest} returns this
 */
proto.feast.registry.ListEntitiesRequest.prototype.setAllowCache = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * map<string, string> tags = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.feast.registry.ListEntitiesRequest.prototype.getTagsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.feast.registry.ListEntitiesRequest} returns this
 */
proto.feast.registry.ListEntitiesRequest.prototype.clearTagsMap = function() {
  this.getTagsMap().clear();
  return this;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.feast.registry.ListEntitiesResponse.repeatedFields_ = [1];



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
proto.feast.registry.ListEntitiesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.feast.registry.ListEntitiesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.feast.registry.ListEntitiesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.ListEntitiesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    entitiesList: jspb.Message.toObjectList(msg.getEntitiesList(),
    feast_core_Entity_pb.Entity.toObject, includeInstance)
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
 * @return {!proto.feast.registry.ListEntitiesResponse}
 */
proto.feast.registry.ListEntitiesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.feast.registry.ListEntitiesResponse;
  return proto.feast.registry.ListEntitiesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.feast.registry.ListEntitiesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.feast.registry.ListEntitiesResponse}
 */
proto.feast.registry.ListEntitiesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new feast_core_Entity_pb.Entity;
      reader.readMessage(value,feast_core_Entity_pb.Entity.deserializeBinaryFromReader);
      msg.addEntities(value);
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
proto.feast.registry.ListEntitiesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.feast.registry.ListEntitiesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.feast.registry.ListEntitiesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.ListEntitiesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      feast_core_Entity_pb.Entity.serializeBinaryToWriter
    );
  }
};


/**
 * repeated feast.core.Entity entities = 1;
 * @return {!Array<!proto.feast.core.Entity>}
 */
proto.feast.registry.ListEntitiesResponse.prototype.getEntitiesList = function() {
  return /** @type{!Array<!proto.feast.core.Entity>} */ (
    jspb.Message.getRepeatedWrapperField(this, feast_core_Entity_pb.Entity, 1));
};


/**
 * @param {!Array<!proto.feast.core.Entity>} value
 * @return {!proto.feast.registry.ListEntitiesResponse} returns this
*/
proto.feast.registry.ListEntitiesResponse.prototype.setEntitiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.feast.core.Entity=} opt_value
 * @param {number=} opt_index
 * @return {!proto.feast.core.Entity}
 */
proto.feast.registry.ListEntitiesResponse.prototype.addEntities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.feast.core.Entity, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.feast.registry.ListEntitiesResponse} returns this
 */
proto.feast.registry.ListEntitiesResponse.prototype.clearEntitiesList = function() {
  return this.setEntitiesList([]);
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
proto.feast.registry.DeleteEntityRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.feast.registry.DeleteEntityRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.feast.registry.DeleteEntityRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.DeleteEntityRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    project: jspb.Message.getFieldWithDefault(msg, 2, ""),
    commit: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.feast.registry.DeleteEntityRequest}
 */
proto.feast.registry.DeleteEntityRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.feast.registry.DeleteEntityRequest;
  return proto.feast.registry.DeleteEntityRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.feast.registry.DeleteEntityRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.feast.registry.DeleteEntityRequest}
 */
proto.feast.registry.DeleteEntityRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProject(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCommit(value);
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
proto.feast.registry.DeleteEntityRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.feast.registry.DeleteEntityRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.feast.registry.DeleteEntityRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.DeleteEntityRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProject();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCommit();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.feast.registry.DeleteEntityRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.feast.registry.DeleteEntityRequest} returns this
 */
proto.feast.registry.DeleteEntityRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string project = 2;
 * @return {string}
 */
proto.feast.registry.DeleteEntityRequest.prototype.getProject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.feast.registry.DeleteEntityRequest} returns this
 */
proto.feast.registry.DeleteEntityRequest.prototype.setProject = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool commit = 3;
 * @return {boolean}
 */
proto.feast.registry.DeleteEntityRequest.prototype.getCommit = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.feast.registry.DeleteEntityRequest} returns this
 */
proto.feast.registry.DeleteEntityRequest.prototype.setCommit = function(value) {
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
proto.feast.registry.ApplyDataSourceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.feast.registry.ApplyDataSourceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.feast.registry.ApplyDataSourceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.ApplyDataSourceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataSource: (f = msg.getDataSource()) && feast_core_DataSource_pb.DataSource.toObject(includeInstance, f),
    project: jspb.Message.getFieldWithDefault(msg, 2, ""),
    commit: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.feast.registry.ApplyDataSourceRequest}
 */
proto.feast.registry.ApplyDataSourceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.feast.registry.ApplyDataSourceRequest;
  return proto.feast.registry.ApplyDataSourceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.feast.registry.ApplyDataSourceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.feast.registry.ApplyDataSourceRequest}
 */
proto.feast.registry.ApplyDataSourceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new feast_core_DataSource_pb.DataSource;
      reader.readMessage(value,feast_core_DataSource_pb.DataSource.deserializeBinaryFromReader);
      msg.setDataSource(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProject(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCommit(value);
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
proto.feast.registry.ApplyDataSourceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.feast.registry.ApplyDataSourceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.feast.registry.ApplyDataSourceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.ApplyDataSourceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataSource();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      feast_core_DataSource_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getProject();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCommit();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional feast.core.DataSource data_source = 1;
 * @return {?proto.feast.core.DataSource}
 */
proto.feast.registry.ApplyDataSourceRequest.prototype.getDataSource = function() {
  return /** @type{?proto.feast.core.DataSource} */ (
    jspb.Message.getWrapperField(this, feast_core_DataSource_pb.DataSource, 1));
};


/**
 * @param {?proto.feast.core.DataSource|undefined} value
 * @return {!proto.feast.registry.ApplyDataSourceRequest} returns this
*/
proto.feast.registry.ApplyDataSourceRequest.prototype.setDataSource = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.feast.registry.ApplyDataSourceRequest} returns this
 */
proto.feast.registry.ApplyDataSourceRequest.prototype.clearDataSource = function() {
  return this.setDataSource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.feast.registry.ApplyDataSourceRequest.prototype.hasDataSource = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string project = 2;
 * @return {string}
 */
proto.feast.registry.ApplyDataSourceRequest.prototype.getProject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.feast.registry.ApplyDataSourceRequest} returns this
 */
proto.feast.registry.ApplyDataSourceRequest.prototype.setProject = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool commit = 3;
 * @return {boolean}
 */
proto.feast.registry.ApplyDataSourceRequest.prototype.getCommit = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.feast.registry.ApplyDataSourceRequest} returns this
 */
proto.feast.registry.ApplyDataSourceRequest.prototype.setCommit = function(value) {
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
proto.feast.registry.GetDataSourceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.feast.registry.GetDataSourceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.feast.registry.GetDataSourceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.GetDataSourceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    project: jspb.Message.getFieldWithDefault(msg, 2, ""),
    allowCache: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.feast.registry.GetDataSourceRequest}
 */
proto.feast.registry.GetDataSourceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.feast.registry.GetDataSourceRequest;
  return proto.feast.registry.GetDataSourceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.feast.registry.GetDataSourceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.feast.registry.GetDataSourceRequest}
 */
proto.feast.registry.GetDataSourceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProject(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowCache(value);
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
proto.feast.registry.GetDataSourceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.feast.registry.GetDataSourceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.feast.registry.GetDataSourceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.GetDataSourceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProject();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAllowCache();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.feast.registry.GetDataSourceRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.feast.registry.GetDataSourceRequest} returns this
 */
proto.feast.registry.GetDataSourceRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string project = 2;
 * @return {string}
 */
proto.feast.registry.GetDataSourceRequest.prototype.getProject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.feast.registry.GetDataSourceRequest} returns this
 */
proto.feast.registry.GetDataSourceRequest.prototype.setProject = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool allow_cache = 3;
 * @return {boolean}
 */
proto.feast.registry.GetDataSourceRequest.prototype.getAllowCache = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.feast.registry.GetDataSourceRequest} returns this
 */
proto.feast.registry.GetDataSourceRequest.prototype.setAllowCache = function(value) {
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
proto.feast.registry.ListDataSourcesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.feast.registry.ListDataSourcesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.feast.registry.ListDataSourcesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.ListDataSourcesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    project: jspb.Message.getFieldWithDefault(msg, 1, ""),
    allowCache: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    tagsMap: (f = msg.getTagsMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.feast.registry.ListDataSourcesRequest}
 */
proto.feast.registry.ListDataSourcesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.feast.registry.ListDataSourcesRequest;
  return proto.feast.registry.ListDataSourcesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.feast.registry.ListDataSourcesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.feast.registry.ListDataSourcesRequest}
 */
proto.feast.registry.ListDataSourcesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProject(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowCache(value);
      break;
    case 3:
      var value = msg.getTagsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
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
proto.feast.registry.ListDataSourcesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.feast.registry.ListDataSourcesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.feast.registry.ListDataSourcesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.ListDataSourcesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProject();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAllowCache();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getTagsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string project = 1;
 * @return {string}
 */
proto.feast.registry.ListDataSourcesRequest.prototype.getProject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.feast.registry.ListDataSourcesRequest} returns this
 */
proto.feast.registry.ListDataSourcesRequest.prototype.setProject = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool allow_cache = 2;
 * @return {boolean}
 */
proto.feast.registry.ListDataSourcesRequest.prototype.getAllowCache = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.feast.registry.ListDataSourcesRequest} returns this
 */
proto.feast.registry.ListDataSourcesRequest.prototype.setAllowCache = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * map<string, string> tags = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.feast.registry.ListDataSourcesRequest.prototype.getTagsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.feast.registry.ListDataSourcesRequest} returns this
 */
proto.feast.registry.ListDataSourcesRequest.prototype.clearTagsMap = function() {
  this.getTagsMap().clear();
  return this;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.feast.registry.ListDataSourcesResponse.repeatedFields_ = [1];



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
proto.feast.registry.ListDataSourcesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.feast.registry.ListDataSourcesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.feast.registry.ListDataSourcesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.ListDataSourcesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataSourcesList: jspb.Message.toObjectList(msg.getDataSourcesList(),
    feast_core_DataSource_pb.DataSource.toObject, includeInstance)
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
 * @return {!proto.feast.registry.ListDataSourcesResponse}
 */
proto.feast.registry.ListDataSourcesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.feast.registry.ListDataSourcesResponse;
  return proto.feast.registry.ListDataSourcesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.feast.registry.ListDataSourcesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.feast.registry.ListDataSourcesResponse}
 */
proto.feast.registry.ListDataSourcesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new feast_core_DataSource_pb.DataSource;
      reader.readMessage(value,feast_core_DataSource_pb.DataSource.deserializeBinaryFromReader);
      msg.addDataSources(value);
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
proto.feast.registry.ListDataSourcesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.feast.registry.ListDataSourcesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.feast.registry.ListDataSourcesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.ListDataSourcesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataSourcesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      feast_core_DataSource_pb.DataSource.serializeBinaryToWriter
    );
  }
};


/**
 * repeated feast.core.DataSource data_sources = 1;
 * @return {!Array<!proto.feast.core.DataSource>}
 */
proto.feast.registry.ListDataSourcesResponse.prototype.getDataSourcesList = function() {
  return /** @type{!Array<!proto.feast.core.DataSource>} */ (
    jspb.Message.getRepeatedWrapperField(this, feast_core_DataSource_pb.DataSource, 1));
};


/**
 * @param {!Array<!proto.feast.core.DataSource>} value
 * @return {!proto.feast.registry.ListDataSourcesResponse} returns this
*/
proto.feast.registry.ListDataSourcesResponse.prototype.setDataSourcesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.feast.core.DataSource=} opt_value
 * @param {number=} opt_index
 * @return {!proto.feast.core.DataSource}
 */
proto.feast.registry.ListDataSourcesResponse.prototype.addDataSources = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.feast.core.DataSource, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.feast.registry.ListDataSourcesResponse} returns this
 */
proto.feast.registry.ListDataSourcesResponse.prototype.clearDataSourcesList = function() {
  return this.setDataSourcesList([]);
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
proto.feast.registry.DeleteDataSourceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.feast.registry.DeleteDataSourceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.feast.registry.DeleteDataSourceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.DeleteDataSourceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    project: jspb.Message.getFieldWithDefault(msg, 2, ""),
    commit: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.feast.registry.DeleteDataSourceRequest}
 */
proto.feast.registry.DeleteDataSourceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.feast.registry.DeleteDataSourceRequest;
  return proto.feast.registry.DeleteDataSourceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.feast.registry.DeleteDataSourceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.feast.registry.DeleteDataSourceRequest}
 */
proto.feast.registry.DeleteDataSourceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProject(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCommit(value);
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
proto.feast.registry.DeleteDataSourceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.feast.registry.DeleteDataSourceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.feast.registry.DeleteDataSourceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.DeleteDataSourceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProject();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCommit();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.feast.registry.DeleteDataSourceRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.feast.registry.DeleteDataSourceRequest} returns this
 */
proto.feast.registry.DeleteDataSourceRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string project = 2;
 * @return {string}
 */
proto.feast.registry.DeleteDataSourceRequest.prototype.getProject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.feast.registry.DeleteDataSourceRequest} returns this
 */
proto.feast.registry.DeleteDataSourceRequest.prototype.setProject = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool commit = 3;
 * @return {boolean}
 */
proto.feast.registry.DeleteDataSourceRequest.prototype.getCommit = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.feast.registry.DeleteDataSourceRequest} returns this
 */
proto.feast.registry.DeleteDataSourceRequest.prototype.setCommit = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.feast.registry.ApplyFeatureViewRequest.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.feast.registry.ApplyFeatureViewRequest.BaseFeatureViewCase = {
  BASE_FEATURE_VIEW_NOT_SET: 0,
  FEATURE_VIEW: 1,
  ON_DEMAND_FEATURE_VIEW: 2,
  STREAM_FEATURE_VIEW: 3
};

/**
 * @return {proto.feast.registry.ApplyFeatureViewRequest.BaseFeatureViewCase}
 */
proto.feast.registry.ApplyFeatureViewRequest.prototype.getBaseFeatureViewCase = function() {
  return /** @type {proto.feast.registry.ApplyFeatureViewRequest.BaseFeatureViewCase} */(jspb.Message.computeOneofCase(this, proto.feast.registry.ApplyFeatureViewRequest.oneofGroups_[0]));
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
proto.feast.registry.ApplyFeatureViewRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.feast.registry.ApplyFeatureViewRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.feast.registry.ApplyFeatureViewRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.ApplyFeatureViewRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    featureView: (f = msg.getFeatureView()) && feast_core_FeatureView_pb.FeatureView.toObject(includeInstance, f),
    onDemandFeatureView: (f = msg.getOnDemandFeatureView()) && feast_core_OnDemandFeatureView_pb.OnDemandFeatureView.toObject(includeInstance, f),
    streamFeatureView: (f = msg.getStreamFeatureView()) && feast_core_StreamFeatureView_pb.StreamFeatureView.toObject(includeInstance, f),
    project: jspb.Message.getFieldWithDefault(msg, 4, ""),
    commit: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
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
 * @return {!proto.feast.registry.ApplyFeatureViewRequest}
 */
proto.feast.registry.ApplyFeatureViewRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.feast.registry.ApplyFeatureViewRequest;
  return proto.feast.registry.ApplyFeatureViewRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.feast.registry.ApplyFeatureViewRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.feast.registry.ApplyFeatureViewRequest}
 */
proto.feast.registry.ApplyFeatureViewRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new feast_core_FeatureView_pb.FeatureView;
      reader.readMessage(value,feast_core_FeatureView_pb.FeatureView.deserializeBinaryFromReader);
      msg.setFeatureView(value);
      break;
    case 2:
      var value = new feast_core_OnDemandFeatureView_pb.OnDemandFeatureView;
      reader.readMessage(value,feast_core_OnDemandFeatureView_pb.OnDemandFeatureView.deserializeBinaryFromReader);
      msg.setOnDemandFeatureView(value);
      break;
    case 3:
      var value = new feast_core_StreamFeatureView_pb.StreamFeatureView;
      reader.readMessage(value,feast_core_StreamFeatureView_pb.StreamFeatureView.deserializeBinaryFromReader);
      msg.setStreamFeatureView(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setProject(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCommit(value);
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
proto.feast.registry.ApplyFeatureViewRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.feast.registry.ApplyFeatureViewRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.feast.registry.ApplyFeatureViewRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.ApplyFeatureViewRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFeatureView();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      feast_core_FeatureView_pb.FeatureView.serializeBinaryToWriter
    );
  }
  f = message.getOnDemandFeatureView();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      feast_core_OnDemandFeatureView_pb.OnDemandFeatureView.serializeBinaryToWriter
    );
  }
  f = message.getStreamFeatureView();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      feast_core_StreamFeatureView_pb.StreamFeatureView.serializeBinaryToWriter
    );
  }
  f = message.getProject();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCommit();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional feast.core.FeatureView feature_view = 1;
 * @return {?proto.feast.core.FeatureView}
 */
proto.feast.registry.ApplyFeatureViewRequest.prototype.getFeatureView = function() {
  return /** @type{?proto.feast.core.FeatureView} */ (
    jspb.Message.getWrapperField(this, feast_core_FeatureView_pb.FeatureView, 1));
};


/**
 * @param {?proto.feast.core.FeatureView|undefined} value
 * @return {!proto.feast.registry.ApplyFeatureViewRequest} returns this
*/
proto.feast.registry.ApplyFeatureViewRequest.prototype.setFeatureView = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.feast.registry.ApplyFeatureViewRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.feast.registry.ApplyFeatureViewRequest} returns this
 */
proto.feast.registry.ApplyFeatureViewRequest.prototype.clearFeatureView = function() {
  return this.setFeatureView(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.feast.registry.ApplyFeatureViewRequest.prototype.hasFeatureView = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional feast.core.OnDemandFeatureView on_demand_feature_view = 2;
 * @return {?proto.feast.core.OnDemandFeatureView}
 */
proto.feast.registry.ApplyFeatureViewRequest.prototype.getOnDemandFeatureView = function() {
  return /** @type{?proto.feast.core.OnDemandFeatureView} */ (
    jspb.Message.getWrapperField(this, feast_core_OnDemandFeatureView_pb.OnDemandFeatureView, 2));
};


/**
 * @param {?proto.feast.core.OnDemandFeatureView|undefined} value
 * @return {!proto.feast.registry.ApplyFeatureViewRequest} returns this
*/
proto.feast.registry.ApplyFeatureViewRequest.prototype.setOnDemandFeatureView = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.feast.registry.ApplyFeatureViewRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.feast.registry.ApplyFeatureViewRequest} returns this
 */
proto.feast.registry.ApplyFeatureViewRequest.prototype.clearOnDemandFeatureView = function() {
  return this.setOnDemandFeatureView(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.feast.registry.ApplyFeatureViewRequest.prototype.hasOnDemandFeatureView = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional feast.core.StreamFeatureView stream_feature_view = 3;
 * @return {?proto.feast.core.StreamFeatureView}
 */
proto.feast.registry.ApplyFeatureViewRequest.prototype.getStreamFeatureView = function() {
  return /** @type{?proto.feast.core.StreamFeatureView} */ (
    jspb.Message.getWrapperField(this, feast_core_StreamFeatureView_pb.StreamFeatureView, 3));
};


/**
 * @param {?proto.feast.core.StreamFeatureView|undefined} value
 * @return {!proto.feast.registry.ApplyFeatureViewRequest} returns this
*/
proto.feast.registry.ApplyFeatureViewRequest.prototype.setStreamFeatureView = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.feast.registry.ApplyFeatureViewRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.feast.registry.ApplyFeatureViewRequest} returns this
 */
proto.feast.registry.ApplyFeatureViewRequest.prototype.clearStreamFeatureView = function() {
  return this.setStreamFeatureView(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.feast.registry.ApplyFeatureViewRequest.prototype.hasStreamFeatureView = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string project = 4;
 * @return {string}
 */
proto.feast.registry.ApplyFeatureViewRequest.prototype.getProject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.feast.registry.ApplyFeatureViewRequest} returns this
 */
proto.feast.registry.ApplyFeatureViewRequest.prototype.setProject = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool commit = 5;
 * @return {boolean}
 */
proto.feast.registry.ApplyFeatureViewRequest.prototype.getCommit = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.feast.registry.ApplyFeatureViewRequest} returns this
 */
proto.feast.registry.ApplyFeatureViewRequest.prototype.setCommit = function(value) {
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
proto.feast.registry.GetFeatureViewRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.feast.registry.GetFeatureViewRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.feast.registry.GetFeatureViewRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.GetFeatureViewRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    project: jspb.Message.getFieldWithDefault(msg, 2, ""),
    allowCache: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.feast.registry.GetFeatureViewRequest}
 */
proto.feast.registry.GetFeatureViewRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.feast.registry.GetFeatureViewRequest;
  return proto.feast.registry.GetFeatureViewRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.feast.registry.GetFeatureViewRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.feast.registry.GetFeatureViewRequest}
 */
proto.feast.registry.GetFeatureViewRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProject(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowCache(value);
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
proto.feast.registry.GetFeatureViewRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.feast.registry.GetFeatureViewRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.feast.registry.GetFeatureViewRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.GetFeatureViewRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProject();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAllowCache();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.feast.registry.GetFeatureViewRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.feast.registry.GetFeatureViewRequest} returns this
 */
proto.feast.registry.GetFeatureViewRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string project = 2;
 * @return {string}
 */
proto.feast.registry.GetFeatureViewRequest.prototype.getProject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.feast.registry.GetFeatureViewRequest} returns this
 */
proto.feast.registry.GetFeatureViewRequest.prototype.setProject = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool allow_cache = 3;
 * @return {boolean}
 */
proto.feast.registry.GetFeatureViewRequest.prototype.getAllowCache = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.feast.registry.GetFeatureViewRequest} returns this
 */
proto.feast.registry.GetFeatureViewRequest.prototype.setAllowCache = function(value) {
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
proto.feast.registry.ListFeatureViewsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.feast.registry.ListFeatureViewsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.feast.registry.ListFeatureViewsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.ListFeatureViewsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    project: jspb.Message.getFieldWithDefault(msg, 1, ""),
    allowCache: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    tagsMap: (f = msg.getTagsMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.feast.registry.ListFeatureViewsRequest}
 */
proto.feast.registry.ListFeatureViewsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.feast.registry.ListFeatureViewsRequest;
  return proto.feast.registry.ListFeatureViewsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.feast.registry.ListFeatureViewsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.feast.registry.ListFeatureViewsRequest}
 */
proto.feast.registry.ListFeatureViewsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProject(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowCache(value);
      break;
    case 3:
      var value = msg.getTagsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
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
proto.feast.registry.ListFeatureViewsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.feast.registry.ListFeatureViewsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.feast.registry.ListFeatureViewsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.ListFeatureViewsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProject();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAllowCache();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getTagsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string project = 1;
 * @return {string}
 */
proto.feast.registry.ListFeatureViewsRequest.prototype.getProject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.feast.registry.ListFeatureViewsRequest} returns this
 */
proto.feast.registry.ListFeatureViewsRequest.prototype.setProject = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool allow_cache = 2;
 * @return {boolean}
 */
proto.feast.registry.ListFeatureViewsRequest.prototype.getAllowCache = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.feast.registry.ListFeatureViewsRequest} returns this
 */
proto.feast.registry.ListFeatureViewsRequest.prototype.setAllowCache = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * map<string, string> tags = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.feast.registry.ListFeatureViewsRequest.prototype.getTagsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.feast.registry.ListFeatureViewsRequest} returns this
 */
proto.feast.registry.ListFeatureViewsRequest.prototype.clearTagsMap = function() {
  this.getTagsMap().clear();
  return this;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.feast.registry.ListFeatureViewsResponse.repeatedFields_ = [1];



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
proto.feast.registry.ListFeatureViewsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.feast.registry.ListFeatureViewsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.feast.registry.ListFeatureViewsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.ListFeatureViewsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    featureViewsList: jspb.Message.toObjectList(msg.getFeatureViewsList(),
    feast_core_FeatureView_pb.FeatureView.toObject, includeInstance)
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
 * @return {!proto.feast.registry.ListFeatureViewsResponse}
 */
proto.feast.registry.ListFeatureViewsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.feast.registry.ListFeatureViewsResponse;
  return proto.feast.registry.ListFeatureViewsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.feast.registry.ListFeatureViewsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.feast.registry.ListFeatureViewsResponse}
 */
proto.feast.registry.ListFeatureViewsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new feast_core_FeatureView_pb.FeatureView;
      reader.readMessage(value,feast_core_FeatureView_pb.FeatureView.deserializeBinaryFromReader);
      msg.addFeatureViews(value);
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
proto.feast.registry.ListFeatureViewsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.feast.registry.ListFeatureViewsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.feast.registry.ListFeatureViewsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.ListFeatureViewsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFeatureViewsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      feast_core_FeatureView_pb.FeatureView.serializeBinaryToWriter
    );
  }
};


/**
 * repeated feast.core.FeatureView feature_views = 1;
 * @return {!Array<!proto.feast.core.FeatureView>}
 */
proto.feast.registry.ListFeatureViewsResponse.prototype.getFeatureViewsList = function() {
  return /** @type{!Array<!proto.feast.core.FeatureView>} */ (
    jspb.Message.getRepeatedWrapperField(this, feast_core_FeatureView_pb.FeatureView, 1));
};


/**
 * @param {!Array<!proto.feast.core.FeatureView>} value
 * @return {!proto.feast.registry.ListFeatureViewsResponse} returns this
*/
proto.feast.registry.ListFeatureViewsResponse.prototype.setFeatureViewsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.feast.core.FeatureView=} opt_value
 * @param {number=} opt_index
 * @return {!proto.feast.core.FeatureView}
 */
proto.feast.registry.ListFeatureViewsResponse.prototype.addFeatureViews = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.feast.core.FeatureView, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.feast.registry.ListFeatureViewsResponse} returns this
 */
proto.feast.registry.ListFeatureViewsResponse.prototype.clearFeatureViewsList = function() {
  return this.setFeatureViewsList([]);
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
proto.feast.registry.DeleteFeatureViewRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.feast.registry.DeleteFeatureViewRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.feast.registry.DeleteFeatureViewRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.DeleteFeatureViewRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    project: jspb.Message.getFieldWithDefault(msg, 2, ""),
    commit: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.feast.registry.DeleteFeatureViewRequest}
 */
proto.feast.registry.DeleteFeatureViewRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.feast.registry.DeleteFeatureViewRequest;
  return proto.feast.registry.DeleteFeatureViewRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.feast.registry.DeleteFeatureViewRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.feast.registry.DeleteFeatureViewRequest}
 */
proto.feast.registry.DeleteFeatureViewRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProject(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCommit(value);
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
proto.feast.registry.DeleteFeatureViewRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.feast.registry.DeleteFeatureViewRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.feast.registry.DeleteFeatureViewRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.DeleteFeatureViewRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProject();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCommit();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.feast.registry.DeleteFeatureViewRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.feast.registry.DeleteFeatureViewRequest} returns this
 */
proto.feast.registry.DeleteFeatureViewRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string project = 2;
 * @return {string}
 */
proto.feast.registry.DeleteFeatureViewRequest.prototype.getProject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.feast.registry.DeleteFeatureViewRequest} returns this
 */
proto.feast.registry.DeleteFeatureViewRequest.prototype.setProject = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool commit = 3;
 * @return {boolean}
 */
proto.feast.registry.DeleteFeatureViewRequest.prototype.getCommit = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.feast.registry.DeleteFeatureViewRequest} returns this
 */
proto.feast.registry.DeleteFeatureViewRequest.prototype.setCommit = function(value) {
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
proto.feast.registry.GetStreamFeatureViewRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.feast.registry.GetStreamFeatureViewRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.feast.registry.GetStreamFeatureViewRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.GetStreamFeatureViewRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    project: jspb.Message.getFieldWithDefault(msg, 2, ""),
    allowCache: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.feast.registry.GetStreamFeatureViewRequest}
 */
proto.feast.registry.GetStreamFeatureViewRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.feast.registry.GetStreamFeatureViewRequest;
  return proto.feast.registry.GetStreamFeatureViewRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.feast.registry.GetStreamFeatureViewRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.feast.registry.GetStreamFeatureViewRequest}
 */
proto.feast.registry.GetStreamFeatureViewRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProject(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowCache(value);
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
proto.feast.registry.GetStreamFeatureViewRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.feast.registry.GetStreamFeatureViewRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.feast.registry.GetStreamFeatureViewRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.GetStreamFeatureViewRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProject();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAllowCache();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.feast.registry.GetStreamFeatureViewRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.feast.registry.GetStreamFeatureViewRequest} returns this
 */
proto.feast.registry.GetStreamFeatureViewRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string project = 2;
 * @return {string}
 */
proto.feast.registry.GetStreamFeatureViewRequest.prototype.getProject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.feast.registry.GetStreamFeatureViewRequest} returns this
 */
proto.feast.registry.GetStreamFeatureViewRequest.prototype.setProject = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool allow_cache = 3;
 * @return {boolean}
 */
proto.feast.registry.GetStreamFeatureViewRequest.prototype.getAllowCache = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.feast.registry.GetStreamFeatureViewRequest} returns this
 */
proto.feast.registry.GetStreamFeatureViewRequest.prototype.setAllowCache = function(value) {
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
proto.feast.registry.ListStreamFeatureViewsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.feast.registry.ListStreamFeatureViewsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.feast.registry.ListStreamFeatureViewsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.ListStreamFeatureViewsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    project: jspb.Message.getFieldWithDefault(msg, 1, ""),
    allowCache: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    tagsMap: (f = msg.getTagsMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.feast.registry.ListStreamFeatureViewsRequest}
 */
proto.feast.registry.ListStreamFeatureViewsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.feast.registry.ListStreamFeatureViewsRequest;
  return proto.feast.registry.ListStreamFeatureViewsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.feast.registry.ListStreamFeatureViewsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.feast.registry.ListStreamFeatureViewsRequest}
 */
proto.feast.registry.ListStreamFeatureViewsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProject(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowCache(value);
      break;
    case 3:
      var value = msg.getTagsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
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
proto.feast.registry.ListStreamFeatureViewsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.feast.registry.ListStreamFeatureViewsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.feast.registry.ListStreamFeatureViewsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.ListStreamFeatureViewsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProject();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAllowCache();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getTagsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string project = 1;
 * @return {string}
 */
proto.feast.registry.ListStreamFeatureViewsRequest.prototype.getProject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.feast.registry.ListStreamFeatureViewsRequest} returns this
 */
proto.feast.registry.ListStreamFeatureViewsRequest.prototype.setProject = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool allow_cache = 2;
 * @return {boolean}
 */
proto.feast.registry.ListStreamFeatureViewsRequest.prototype.getAllowCache = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.feast.registry.ListStreamFeatureViewsRequest} returns this
 */
proto.feast.registry.ListStreamFeatureViewsRequest.prototype.setAllowCache = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * map<string, string> tags = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.feast.registry.ListStreamFeatureViewsRequest.prototype.getTagsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.feast.registry.ListStreamFeatureViewsRequest} returns this
 */
proto.feast.registry.ListStreamFeatureViewsRequest.prototype.clearTagsMap = function() {
  this.getTagsMap().clear();
  return this;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.feast.registry.ListStreamFeatureViewsResponse.repeatedFields_ = [1];



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
proto.feast.registry.ListStreamFeatureViewsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.feast.registry.ListStreamFeatureViewsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.feast.registry.ListStreamFeatureViewsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.ListStreamFeatureViewsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    streamFeatureViewsList: jspb.Message.toObjectList(msg.getStreamFeatureViewsList(),
    feast_core_StreamFeatureView_pb.StreamFeatureView.toObject, includeInstance)
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
 * @return {!proto.feast.registry.ListStreamFeatureViewsResponse}
 */
proto.feast.registry.ListStreamFeatureViewsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.feast.registry.ListStreamFeatureViewsResponse;
  return proto.feast.registry.ListStreamFeatureViewsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.feast.registry.ListStreamFeatureViewsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.feast.registry.ListStreamFeatureViewsResponse}
 */
proto.feast.registry.ListStreamFeatureViewsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new feast_core_StreamFeatureView_pb.StreamFeatureView;
      reader.readMessage(value,feast_core_StreamFeatureView_pb.StreamFeatureView.deserializeBinaryFromReader);
      msg.addStreamFeatureViews(value);
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
proto.feast.registry.ListStreamFeatureViewsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.feast.registry.ListStreamFeatureViewsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.feast.registry.ListStreamFeatureViewsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.ListStreamFeatureViewsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStreamFeatureViewsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      feast_core_StreamFeatureView_pb.StreamFeatureView.serializeBinaryToWriter
    );
  }
};


/**
 * repeated feast.core.StreamFeatureView stream_feature_views = 1;
 * @return {!Array<!proto.feast.core.StreamFeatureView>}
 */
proto.feast.registry.ListStreamFeatureViewsResponse.prototype.getStreamFeatureViewsList = function() {
  return /** @type{!Array<!proto.feast.core.StreamFeatureView>} */ (
    jspb.Message.getRepeatedWrapperField(this, feast_core_StreamFeatureView_pb.StreamFeatureView, 1));
};


/**
 * @param {!Array<!proto.feast.core.StreamFeatureView>} value
 * @return {!proto.feast.registry.ListStreamFeatureViewsResponse} returns this
*/
proto.feast.registry.ListStreamFeatureViewsResponse.prototype.setStreamFeatureViewsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.feast.core.StreamFeatureView=} opt_value
 * @param {number=} opt_index
 * @return {!proto.feast.core.StreamFeatureView}
 */
proto.feast.registry.ListStreamFeatureViewsResponse.prototype.addStreamFeatureViews = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.feast.core.StreamFeatureView, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.feast.registry.ListStreamFeatureViewsResponse} returns this
 */
proto.feast.registry.ListStreamFeatureViewsResponse.prototype.clearStreamFeatureViewsList = function() {
  return this.setStreamFeatureViewsList([]);
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
proto.feast.registry.GetOnDemandFeatureViewRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.feast.registry.GetOnDemandFeatureViewRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.feast.registry.GetOnDemandFeatureViewRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.GetOnDemandFeatureViewRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    project: jspb.Message.getFieldWithDefault(msg, 2, ""),
    allowCache: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.feast.registry.GetOnDemandFeatureViewRequest}
 */
proto.feast.registry.GetOnDemandFeatureViewRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.feast.registry.GetOnDemandFeatureViewRequest;
  return proto.feast.registry.GetOnDemandFeatureViewRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.feast.registry.GetOnDemandFeatureViewRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.feast.registry.GetOnDemandFeatureViewRequest}
 */
proto.feast.registry.GetOnDemandFeatureViewRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProject(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowCache(value);
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
proto.feast.registry.GetOnDemandFeatureViewRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.feast.registry.GetOnDemandFeatureViewRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.feast.registry.GetOnDemandFeatureViewRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.GetOnDemandFeatureViewRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProject();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAllowCache();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.feast.registry.GetOnDemandFeatureViewRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.feast.registry.GetOnDemandFeatureViewRequest} returns this
 */
proto.feast.registry.GetOnDemandFeatureViewRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string project = 2;
 * @return {string}
 */
proto.feast.registry.GetOnDemandFeatureViewRequest.prototype.getProject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.feast.registry.GetOnDemandFeatureViewRequest} returns this
 */
proto.feast.registry.GetOnDemandFeatureViewRequest.prototype.setProject = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool allow_cache = 3;
 * @return {boolean}
 */
proto.feast.registry.GetOnDemandFeatureViewRequest.prototype.getAllowCache = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.feast.registry.GetOnDemandFeatureViewRequest} returns this
 */
proto.feast.registry.GetOnDemandFeatureViewRequest.prototype.setAllowCache = function(value) {
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
proto.feast.registry.ListOnDemandFeatureViewsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.feast.registry.ListOnDemandFeatureViewsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.feast.registry.ListOnDemandFeatureViewsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.ListOnDemandFeatureViewsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    project: jspb.Message.getFieldWithDefault(msg, 1, ""),
    allowCache: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    tagsMap: (f = msg.getTagsMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.feast.registry.ListOnDemandFeatureViewsRequest}
 */
proto.feast.registry.ListOnDemandFeatureViewsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.feast.registry.ListOnDemandFeatureViewsRequest;
  return proto.feast.registry.ListOnDemandFeatureViewsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.feast.registry.ListOnDemandFeatureViewsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.feast.registry.ListOnDemandFeatureViewsRequest}
 */
proto.feast.registry.ListOnDemandFeatureViewsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProject(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowCache(value);
      break;
    case 3:
      var value = msg.getTagsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
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
proto.feast.registry.ListOnDemandFeatureViewsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.feast.registry.ListOnDemandFeatureViewsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.feast.registry.ListOnDemandFeatureViewsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.ListOnDemandFeatureViewsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProject();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAllowCache();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getTagsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string project = 1;
 * @return {string}
 */
proto.feast.registry.ListOnDemandFeatureViewsRequest.prototype.getProject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.feast.registry.ListOnDemandFeatureViewsRequest} returns this
 */
proto.feast.registry.ListOnDemandFeatureViewsRequest.prototype.setProject = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool allow_cache = 2;
 * @return {boolean}
 */
proto.feast.registry.ListOnDemandFeatureViewsRequest.prototype.getAllowCache = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.feast.registry.ListOnDemandFeatureViewsRequest} returns this
 */
proto.feast.registry.ListOnDemandFeatureViewsRequest.prototype.setAllowCache = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * map<string, string> tags = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.feast.registry.ListOnDemandFeatureViewsRequest.prototype.getTagsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.feast.registry.ListOnDemandFeatureViewsRequest} returns this
 */
proto.feast.registry.ListOnDemandFeatureViewsRequest.prototype.clearTagsMap = function() {
  this.getTagsMap().clear();
  return this;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.feast.registry.ListOnDemandFeatureViewsResponse.repeatedFields_ = [1];



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
proto.feast.registry.ListOnDemandFeatureViewsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.feast.registry.ListOnDemandFeatureViewsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.feast.registry.ListOnDemandFeatureViewsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.ListOnDemandFeatureViewsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    onDemandFeatureViewsList: jspb.Message.toObjectList(msg.getOnDemandFeatureViewsList(),
    feast_core_OnDemandFeatureView_pb.OnDemandFeatureView.toObject, includeInstance)
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
 * @return {!proto.feast.registry.ListOnDemandFeatureViewsResponse}
 */
proto.feast.registry.ListOnDemandFeatureViewsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.feast.registry.ListOnDemandFeatureViewsResponse;
  return proto.feast.registry.ListOnDemandFeatureViewsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.feast.registry.ListOnDemandFeatureViewsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.feast.registry.ListOnDemandFeatureViewsResponse}
 */
proto.feast.registry.ListOnDemandFeatureViewsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new feast_core_OnDemandFeatureView_pb.OnDemandFeatureView;
      reader.readMessage(value,feast_core_OnDemandFeatureView_pb.OnDemandFeatureView.deserializeBinaryFromReader);
      msg.addOnDemandFeatureViews(value);
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
proto.feast.registry.ListOnDemandFeatureViewsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.feast.registry.ListOnDemandFeatureViewsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.feast.registry.ListOnDemandFeatureViewsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.ListOnDemandFeatureViewsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOnDemandFeatureViewsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      feast_core_OnDemandFeatureView_pb.OnDemandFeatureView.serializeBinaryToWriter
    );
  }
};


/**
 * repeated feast.core.OnDemandFeatureView on_demand_feature_views = 1;
 * @return {!Array<!proto.feast.core.OnDemandFeatureView>}
 */
proto.feast.registry.ListOnDemandFeatureViewsResponse.prototype.getOnDemandFeatureViewsList = function() {
  return /** @type{!Array<!proto.feast.core.OnDemandFeatureView>} */ (
    jspb.Message.getRepeatedWrapperField(this, feast_core_OnDemandFeatureView_pb.OnDemandFeatureView, 1));
};


/**
 * @param {!Array<!proto.feast.core.OnDemandFeatureView>} value
 * @return {!proto.feast.registry.ListOnDemandFeatureViewsResponse} returns this
*/
proto.feast.registry.ListOnDemandFeatureViewsResponse.prototype.setOnDemandFeatureViewsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.feast.core.OnDemandFeatureView=} opt_value
 * @param {number=} opt_index
 * @return {!proto.feast.core.OnDemandFeatureView}
 */
proto.feast.registry.ListOnDemandFeatureViewsResponse.prototype.addOnDemandFeatureViews = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.feast.core.OnDemandFeatureView, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.feast.registry.ListOnDemandFeatureViewsResponse} returns this
 */
proto.feast.registry.ListOnDemandFeatureViewsResponse.prototype.clearOnDemandFeatureViewsList = function() {
  return this.setOnDemandFeatureViewsList([]);
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
proto.feast.registry.ApplyFeatureServiceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.feast.registry.ApplyFeatureServiceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.feast.registry.ApplyFeatureServiceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.ApplyFeatureServiceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    featureService: (f = msg.getFeatureService()) && feast_core_FeatureService_pb.FeatureService.toObject(includeInstance, f),
    project: jspb.Message.getFieldWithDefault(msg, 2, ""),
    commit: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.feast.registry.ApplyFeatureServiceRequest}
 */
proto.feast.registry.ApplyFeatureServiceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.feast.registry.ApplyFeatureServiceRequest;
  return proto.feast.registry.ApplyFeatureServiceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.feast.registry.ApplyFeatureServiceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.feast.registry.ApplyFeatureServiceRequest}
 */
proto.feast.registry.ApplyFeatureServiceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new feast_core_FeatureService_pb.FeatureService;
      reader.readMessage(value,feast_core_FeatureService_pb.FeatureService.deserializeBinaryFromReader);
      msg.setFeatureService(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProject(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCommit(value);
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
proto.feast.registry.ApplyFeatureServiceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.feast.registry.ApplyFeatureServiceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.feast.registry.ApplyFeatureServiceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.ApplyFeatureServiceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFeatureService();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      feast_core_FeatureService_pb.FeatureService.serializeBinaryToWriter
    );
  }
  f = message.getProject();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCommit();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional feast.core.FeatureService feature_service = 1;
 * @return {?proto.feast.core.FeatureService}
 */
proto.feast.registry.ApplyFeatureServiceRequest.prototype.getFeatureService = function() {
  return /** @type{?proto.feast.core.FeatureService} */ (
    jspb.Message.getWrapperField(this, feast_core_FeatureService_pb.FeatureService, 1));
};


/**
 * @param {?proto.feast.core.FeatureService|undefined} value
 * @return {!proto.feast.registry.ApplyFeatureServiceRequest} returns this
*/
proto.feast.registry.ApplyFeatureServiceRequest.prototype.setFeatureService = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.feast.registry.ApplyFeatureServiceRequest} returns this
 */
proto.feast.registry.ApplyFeatureServiceRequest.prototype.clearFeatureService = function() {
  return this.setFeatureService(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.feast.registry.ApplyFeatureServiceRequest.prototype.hasFeatureService = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string project = 2;
 * @return {string}
 */
proto.feast.registry.ApplyFeatureServiceRequest.prototype.getProject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.feast.registry.ApplyFeatureServiceRequest} returns this
 */
proto.feast.registry.ApplyFeatureServiceRequest.prototype.setProject = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool commit = 3;
 * @return {boolean}
 */
proto.feast.registry.ApplyFeatureServiceRequest.prototype.getCommit = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.feast.registry.ApplyFeatureServiceRequest} returns this
 */
proto.feast.registry.ApplyFeatureServiceRequest.prototype.setCommit = function(value) {
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
proto.feast.registry.GetFeatureServiceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.feast.registry.GetFeatureServiceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.feast.registry.GetFeatureServiceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.GetFeatureServiceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    project: jspb.Message.getFieldWithDefault(msg, 2, ""),
    allowCache: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.feast.registry.GetFeatureServiceRequest}
 */
proto.feast.registry.GetFeatureServiceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.feast.registry.GetFeatureServiceRequest;
  return proto.feast.registry.GetFeatureServiceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.feast.registry.GetFeatureServiceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.feast.registry.GetFeatureServiceRequest}
 */
proto.feast.registry.GetFeatureServiceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProject(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowCache(value);
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
proto.feast.registry.GetFeatureServiceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.feast.registry.GetFeatureServiceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.feast.registry.GetFeatureServiceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.GetFeatureServiceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProject();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAllowCache();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.feast.registry.GetFeatureServiceRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.feast.registry.GetFeatureServiceRequest} returns this
 */
proto.feast.registry.GetFeatureServiceRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string project = 2;
 * @return {string}
 */
proto.feast.registry.GetFeatureServiceRequest.prototype.getProject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.feast.registry.GetFeatureServiceRequest} returns this
 */
proto.feast.registry.GetFeatureServiceRequest.prototype.setProject = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool allow_cache = 3;
 * @return {boolean}
 */
proto.feast.registry.GetFeatureServiceRequest.prototype.getAllowCache = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.feast.registry.GetFeatureServiceRequest} returns this
 */
proto.feast.registry.GetFeatureServiceRequest.prototype.setAllowCache = function(value) {
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
proto.feast.registry.ListFeatureServicesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.feast.registry.ListFeatureServicesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.feast.registry.ListFeatureServicesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.ListFeatureServicesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    project: jspb.Message.getFieldWithDefault(msg, 1, ""),
    allowCache: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    tagsMap: (f = msg.getTagsMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.feast.registry.ListFeatureServicesRequest}
 */
proto.feast.registry.ListFeatureServicesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.feast.registry.ListFeatureServicesRequest;
  return proto.feast.registry.ListFeatureServicesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.feast.registry.ListFeatureServicesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.feast.registry.ListFeatureServicesRequest}
 */
proto.feast.registry.ListFeatureServicesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProject(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowCache(value);
      break;
    case 3:
      var value = msg.getTagsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
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
proto.feast.registry.ListFeatureServicesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.feast.registry.ListFeatureServicesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.feast.registry.ListFeatureServicesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.ListFeatureServicesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProject();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAllowCache();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getTagsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string project = 1;
 * @return {string}
 */
proto.feast.registry.ListFeatureServicesRequest.prototype.getProject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.feast.registry.ListFeatureServicesRequest} returns this
 */
proto.feast.registry.ListFeatureServicesRequest.prototype.setProject = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool allow_cache = 2;
 * @return {boolean}
 */
proto.feast.registry.ListFeatureServicesRequest.prototype.getAllowCache = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.feast.registry.ListFeatureServicesRequest} returns this
 */
proto.feast.registry.ListFeatureServicesRequest.prototype.setAllowCache = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * map<string, string> tags = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.feast.registry.ListFeatureServicesRequest.prototype.getTagsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.feast.registry.ListFeatureServicesRequest} returns this
 */
proto.feast.registry.ListFeatureServicesRequest.prototype.clearTagsMap = function() {
  this.getTagsMap().clear();
  return this;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.feast.registry.ListFeatureServicesResponse.repeatedFields_ = [1];



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
proto.feast.registry.ListFeatureServicesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.feast.registry.ListFeatureServicesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.feast.registry.ListFeatureServicesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.ListFeatureServicesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    featureServicesList: jspb.Message.toObjectList(msg.getFeatureServicesList(),
    feast_core_FeatureService_pb.FeatureService.toObject, includeInstance)
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
 * @return {!proto.feast.registry.ListFeatureServicesResponse}
 */
proto.feast.registry.ListFeatureServicesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.feast.registry.ListFeatureServicesResponse;
  return proto.feast.registry.ListFeatureServicesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.feast.registry.ListFeatureServicesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.feast.registry.ListFeatureServicesResponse}
 */
proto.feast.registry.ListFeatureServicesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new feast_core_FeatureService_pb.FeatureService;
      reader.readMessage(value,feast_core_FeatureService_pb.FeatureService.deserializeBinaryFromReader);
      msg.addFeatureServices(value);
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
proto.feast.registry.ListFeatureServicesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.feast.registry.ListFeatureServicesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.feast.registry.ListFeatureServicesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.ListFeatureServicesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFeatureServicesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      feast_core_FeatureService_pb.FeatureService.serializeBinaryToWriter
    );
  }
};


/**
 * repeated feast.core.FeatureService feature_services = 1;
 * @return {!Array<!proto.feast.core.FeatureService>}
 */
proto.feast.registry.ListFeatureServicesResponse.prototype.getFeatureServicesList = function() {
  return /** @type{!Array<!proto.feast.core.FeatureService>} */ (
    jspb.Message.getRepeatedWrapperField(this, feast_core_FeatureService_pb.FeatureService, 1));
};


/**
 * @param {!Array<!proto.feast.core.FeatureService>} value
 * @return {!proto.feast.registry.ListFeatureServicesResponse} returns this
*/
proto.feast.registry.ListFeatureServicesResponse.prototype.setFeatureServicesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.feast.core.FeatureService=} opt_value
 * @param {number=} opt_index
 * @return {!proto.feast.core.FeatureService}
 */
proto.feast.registry.ListFeatureServicesResponse.prototype.addFeatureServices = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.feast.core.FeatureService, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.feast.registry.ListFeatureServicesResponse} returns this
 */
proto.feast.registry.ListFeatureServicesResponse.prototype.clearFeatureServicesList = function() {
  return this.setFeatureServicesList([]);
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
proto.feast.registry.DeleteFeatureServiceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.feast.registry.DeleteFeatureServiceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.feast.registry.DeleteFeatureServiceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.DeleteFeatureServiceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    project: jspb.Message.getFieldWithDefault(msg, 2, ""),
    commit: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.feast.registry.DeleteFeatureServiceRequest}
 */
proto.feast.registry.DeleteFeatureServiceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.feast.registry.DeleteFeatureServiceRequest;
  return proto.feast.registry.DeleteFeatureServiceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.feast.registry.DeleteFeatureServiceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.feast.registry.DeleteFeatureServiceRequest}
 */
proto.feast.registry.DeleteFeatureServiceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProject(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCommit(value);
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
proto.feast.registry.DeleteFeatureServiceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.feast.registry.DeleteFeatureServiceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.feast.registry.DeleteFeatureServiceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.DeleteFeatureServiceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProject();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCommit();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.feast.registry.DeleteFeatureServiceRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.feast.registry.DeleteFeatureServiceRequest} returns this
 */
proto.feast.registry.DeleteFeatureServiceRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string project = 2;
 * @return {string}
 */
proto.feast.registry.DeleteFeatureServiceRequest.prototype.getProject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.feast.registry.DeleteFeatureServiceRequest} returns this
 */
proto.feast.registry.DeleteFeatureServiceRequest.prototype.setProject = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool commit = 3;
 * @return {boolean}
 */
proto.feast.registry.DeleteFeatureServiceRequest.prototype.getCommit = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.feast.registry.DeleteFeatureServiceRequest} returns this
 */
proto.feast.registry.DeleteFeatureServiceRequest.prototype.setCommit = function(value) {
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
proto.feast.registry.ApplySavedDatasetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.feast.registry.ApplySavedDatasetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.feast.registry.ApplySavedDatasetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.ApplySavedDatasetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    savedDataset: (f = msg.getSavedDataset()) && feast_core_SavedDataset_pb.SavedDataset.toObject(includeInstance, f),
    project: jspb.Message.getFieldWithDefault(msg, 2, ""),
    commit: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.feast.registry.ApplySavedDatasetRequest}
 */
proto.feast.registry.ApplySavedDatasetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.feast.registry.ApplySavedDatasetRequest;
  return proto.feast.registry.ApplySavedDatasetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.feast.registry.ApplySavedDatasetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.feast.registry.ApplySavedDatasetRequest}
 */
proto.feast.registry.ApplySavedDatasetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new feast_core_SavedDataset_pb.SavedDataset;
      reader.readMessage(value,feast_core_SavedDataset_pb.SavedDataset.deserializeBinaryFromReader);
      msg.setSavedDataset(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProject(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCommit(value);
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
proto.feast.registry.ApplySavedDatasetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.feast.registry.ApplySavedDatasetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.feast.registry.ApplySavedDatasetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.ApplySavedDatasetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSavedDataset();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      feast_core_SavedDataset_pb.SavedDataset.serializeBinaryToWriter
    );
  }
  f = message.getProject();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCommit();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional feast.core.SavedDataset saved_dataset = 1;
 * @return {?proto.feast.core.SavedDataset}
 */
proto.feast.registry.ApplySavedDatasetRequest.prototype.getSavedDataset = function() {
  return /** @type{?proto.feast.core.SavedDataset} */ (
    jspb.Message.getWrapperField(this, feast_core_SavedDataset_pb.SavedDataset, 1));
};


/**
 * @param {?proto.feast.core.SavedDataset|undefined} value
 * @return {!proto.feast.registry.ApplySavedDatasetRequest} returns this
*/
proto.feast.registry.ApplySavedDatasetRequest.prototype.setSavedDataset = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.feast.registry.ApplySavedDatasetRequest} returns this
 */
proto.feast.registry.ApplySavedDatasetRequest.prototype.clearSavedDataset = function() {
  return this.setSavedDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.feast.registry.ApplySavedDatasetRequest.prototype.hasSavedDataset = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string project = 2;
 * @return {string}
 */
proto.feast.registry.ApplySavedDatasetRequest.prototype.getProject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.feast.registry.ApplySavedDatasetRequest} returns this
 */
proto.feast.registry.ApplySavedDatasetRequest.prototype.setProject = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool commit = 3;
 * @return {boolean}
 */
proto.feast.registry.ApplySavedDatasetRequest.prototype.getCommit = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.feast.registry.ApplySavedDatasetRequest} returns this
 */
proto.feast.registry.ApplySavedDatasetRequest.prototype.setCommit = function(value) {
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
proto.feast.registry.GetSavedDatasetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.feast.registry.GetSavedDatasetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.feast.registry.GetSavedDatasetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.GetSavedDatasetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    project: jspb.Message.getFieldWithDefault(msg, 2, ""),
    allowCache: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.feast.registry.GetSavedDatasetRequest}
 */
proto.feast.registry.GetSavedDatasetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.feast.registry.GetSavedDatasetRequest;
  return proto.feast.registry.GetSavedDatasetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.feast.registry.GetSavedDatasetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.feast.registry.GetSavedDatasetRequest}
 */
proto.feast.registry.GetSavedDatasetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProject(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowCache(value);
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
proto.feast.registry.GetSavedDatasetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.feast.registry.GetSavedDatasetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.feast.registry.GetSavedDatasetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.GetSavedDatasetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProject();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAllowCache();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.feast.registry.GetSavedDatasetRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.feast.registry.GetSavedDatasetRequest} returns this
 */
proto.feast.registry.GetSavedDatasetRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string project = 2;
 * @return {string}
 */
proto.feast.registry.GetSavedDatasetRequest.prototype.getProject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.feast.registry.GetSavedDatasetRequest} returns this
 */
proto.feast.registry.GetSavedDatasetRequest.prototype.setProject = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool allow_cache = 3;
 * @return {boolean}
 */
proto.feast.registry.GetSavedDatasetRequest.prototype.getAllowCache = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.feast.registry.GetSavedDatasetRequest} returns this
 */
proto.feast.registry.GetSavedDatasetRequest.prototype.setAllowCache = function(value) {
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
proto.feast.registry.ListSavedDatasetsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.feast.registry.ListSavedDatasetsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.feast.registry.ListSavedDatasetsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.ListSavedDatasetsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    project: jspb.Message.getFieldWithDefault(msg, 1, ""),
    allowCache: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.feast.registry.ListSavedDatasetsRequest}
 */
proto.feast.registry.ListSavedDatasetsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.feast.registry.ListSavedDatasetsRequest;
  return proto.feast.registry.ListSavedDatasetsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.feast.registry.ListSavedDatasetsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.feast.registry.ListSavedDatasetsRequest}
 */
proto.feast.registry.ListSavedDatasetsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProject(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowCache(value);
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
proto.feast.registry.ListSavedDatasetsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.feast.registry.ListSavedDatasetsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.feast.registry.ListSavedDatasetsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.ListSavedDatasetsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProject();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAllowCache();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string project = 1;
 * @return {string}
 */
proto.feast.registry.ListSavedDatasetsRequest.prototype.getProject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.feast.registry.ListSavedDatasetsRequest} returns this
 */
proto.feast.registry.ListSavedDatasetsRequest.prototype.setProject = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool allow_cache = 2;
 * @return {boolean}
 */
proto.feast.registry.ListSavedDatasetsRequest.prototype.getAllowCache = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.feast.registry.ListSavedDatasetsRequest} returns this
 */
proto.feast.registry.ListSavedDatasetsRequest.prototype.setAllowCache = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.feast.registry.ListSavedDatasetsResponse.repeatedFields_ = [1];



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
proto.feast.registry.ListSavedDatasetsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.feast.registry.ListSavedDatasetsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.feast.registry.ListSavedDatasetsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.ListSavedDatasetsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    savedDatasetsList: jspb.Message.toObjectList(msg.getSavedDatasetsList(),
    feast_core_SavedDataset_pb.SavedDataset.toObject, includeInstance)
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
 * @return {!proto.feast.registry.ListSavedDatasetsResponse}
 */
proto.feast.registry.ListSavedDatasetsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.feast.registry.ListSavedDatasetsResponse;
  return proto.feast.registry.ListSavedDatasetsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.feast.registry.ListSavedDatasetsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.feast.registry.ListSavedDatasetsResponse}
 */
proto.feast.registry.ListSavedDatasetsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new feast_core_SavedDataset_pb.SavedDataset;
      reader.readMessage(value,feast_core_SavedDataset_pb.SavedDataset.deserializeBinaryFromReader);
      msg.addSavedDatasets(value);
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
proto.feast.registry.ListSavedDatasetsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.feast.registry.ListSavedDatasetsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.feast.registry.ListSavedDatasetsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.ListSavedDatasetsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSavedDatasetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      feast_core_SavedDataset_pb.SavedDataset.serializeBinaryToWriter
    );
  }
};


/**
 * repeated feast.core.SavedDataset saved_datasets = 1;
 * @return {!Array<!proto.feast.core.SavedDataset>}
 */
proto.feast.registry.ListSavedDatasetsResponse.prototype.getSavedDatasetsList = function() {
  return /** @type{!Array<!proto.feast.core.SavedDataset>} */ (
    jspb.Message.getRepeatedWrapperField(this, feast_core_SavedDataset_pb.SavedDataset, 1));
};


/**
 * @param {!Array<!proto.feast.core.SavedDataset>} value
 * @return {!proto.feast.registry.ListSavedDatasetsResponse} returns this
*/
proto.feast.registry.ListSavedDatasetsResponse.prototype.setSavedDatasetsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.feast.core.SavedDataset=} opt_value
 * @param {number=} opt_index
 * @return {!proto.feast.core.SavedDataset}
 */
proto.feast.registry.ListSavedDatasetsResponse.prototype.addSavedDatasets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.feast.core.SavedDataset, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.feast.registry.ListSavedDatasetsResponse} returns this
 */
proto.feast.registry.ListSavedDatasetsResponse.prototype.clearSavedDatasetsList = function() {
  return this.setSavedDatasetsList([]);
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
proto.feast.registry.DeleteSavedDatasetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.feast.registry.DeleteSavedDatasetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.feast.registry.DeleteSavedDatasetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.DeleteSavedDatasetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    project: jspb.Message.getFieldWithDefault(msg, 2, ""),
    commit: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.feast.registry.DeleteSavedDatasetRequest}
 */
proto.feast.registry.DeleteSavedDatasetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.feast.registry.DeleteSavedDatasetRequest;
  return proto.feast.registry.DeleteSavedDatasetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.feast.registry.DeleteSavedDatasetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.feast.registry.DeleteSavedDatasetRequest}
 */
proto.feast.registry.DeleteSavedDatasetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProject(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCommit(value);
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
proto.feast.registry.DeleteSavedDatasetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.feast.registry.DeleteSavedDatasetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.feast.registry.DeleteSavedDatasetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.DeleteSavedDatasetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProject();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCommit();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.feast.registry.DeleteSavedDatasetRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.feast.registry.DeleteSavedDatasetRequest} returns this
 */
proto.feast.registry.DeleteSavedDatasetRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string project = 2;
 * @return {string}
 */
proto.feast.registry.DeleteSavedDatasetRequest.prototype.getProject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.feast.registry.DeleteSavedDatasetRequest} returns this
 */
proto.feast.registry.DeleteSavedDatasetRequest.prototype.setProject = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool commit = 3;
 * @return {boolean}
 */
proto.feast.registry.DeleteSavedDatasetRequest.prototype.getCommit = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.feast.registry.DeleteSavedDatasetRequest} returns this
 */
proto.feast.registry.DeleteSavedDatasetRequest.prototype.setCommit = function(value) {
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
proto.feast.registry.ApplyValidationReferenceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.feast.registry.ApplyValidationReferenceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.feast.registry.ApplyValidationReferenceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.ApplyValidationReferenceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    validationReference: (f = msg.getValidationReference()) && feast_core_ValidationProfile_pb.ValidationReference.toObject(includeInstance, f),
    project: jspb.Message.getFieldWithDefault(msg, 2, ""),
    commit: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.feast.registry.ApplyValidationReferenceRequest}
 */
proto.feast.registry.ApplyValidationReferenceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.feast.registry.ApplyValidationReferenceRequest;
  return proto.feast.registry.ApplyValidationReferenceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.feast.registry.ApplyValidationReferenceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.feast.registry.ApplyValidationReferenceRequest}
 */
proto.feast.registry.ApplyValidationReferenceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new feast_core_ValidationProfile_pb.ValidationReference;
      reader.readMessage(value,feast_core_ValidationProfile_pb.ValidationReference.deserializeBinaryFromReader);
      msg.setValidationReference(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProject(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCommit(value);
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
proto.feast.registry.ApplyValidationReferenceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.feast.registry.ApplyValidationReferenceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.feast.registry.ApplyValidationReferenceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.ApplyValidationReferenceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValidationReference();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      feast_core_ValidationProfile_pb.ValidationReference.serializeBinaryToWriter
    );
  }
  f = message.getProject();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCommit();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional feast.core.ValidationReference validation_reference = 1;
 * @return {?proto.feast.core.ValidationReference}
 */
proto.feast.registry.ApplyValidationReferenceRequest.prototype.getValidationReference = function() {
  return /** @type{?proto.feast.core.ValidationReference} */ (
    jspb.Message.getWrapperField(this, feast_core_ValidationProfile_pb.ValidationReference, 1));
};


/**
 * @param {?proto.feast.core.ValidationReference|undefined} value
 * @return {!proto.feast.registry.ApplyValidationReferenceRequest} returns this
*/
proto.feast.registry.ApplyValidationReferenceRequest.prototype.setValidationReference = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.feast.registry.ApplyValidationReferenceRequest} returns this
 */
proto.feast.registry.ApplyValidationReferenceRequest.prototype.clearValidationReference = function() {
  return this.setValidationReference(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.feast.registry.ApplyValidationReferenceRequest.prototype.hasValidationReference = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string project = 2;
 * @return {string}
 */
proto.feast.registry.ApplyValidationReferenceRequest.prototype.getProject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.feast.registry.ApplyValidationReferenceRequest} returns this
 */
proto.feast.registry.ApplyValidationReferenceRequest.prototype.setProject = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool commit = 3;
 * @return {boolean}
 */
proto.feast.registry.ApplyValidationReferenceRequest.prototype.getCommit = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.feast.registry.ApplyValidationReferenceRequest} returns this
 */
proto.feast.registry.ApplyValidationReferenceRequest.prototype.setCommit = function(value) {
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
proto.feast.registry.GetValidationReferenceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.feast.registry.GetValidationReferenceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.feast.registry.GetValidationReferenceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.GetValidationReferenceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    project: jspb.Message.getFieldWithDefault(msg, 2, ""),
    allowCache: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.feast.registry.GetValidationReferenceRequest}
 */
proto.feast.registry.GetValidationReferenceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.feast.registry.GetValidationReferenceRequest;
  return proto.feast.registry.GetValidationReferenceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.feast.registry.GetValidationReferenceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.feast.registry.GetValidationReferenceRequest}
 */
proto.feast.registry.GetValidationReferenceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProject(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowCache(value);
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
proto.feast.registry.GetValidationReferenceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.feast.registry.GetValidationReferenceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.feast.registry.GetValidationReferenceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.GetValidationReferenceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProject();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAllowCache();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.feast.registry.GetValidationReferenceRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.feast.registry.GetValidationReferenceRequest} returns this
 */
proto.feast.registry.GetValidationReferenceRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string project = 2;
 * @return {string}
 */
proto.feast.registry.GetValidationReferenceRequest.prototype.getProject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.feast.registry.GetValidationReferenceRequest} returns this
 */
proto.feast.registry.GetValidationReferenceRequest.prototype.setProject = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool allow_cache = 3;
 * @return {boolean}
 */
proto.feast.registry.GetValidationReferenceRequest.prototype.getAllowCache = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.feast.registry.GetValidationReferenceRequest} returns this
 */
proto.feast.registry.GetValidationReferenceRequest.prototype.setAllowCache = function(value) {
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
proto.feast.registry.ListValidationReferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.feast.registry.ListValidationReferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.feast.registry.ListValidationReferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.ListValidationReferencesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    project: jspb.Message.getFieldWithDefault(msg, 1, ""),
    allowCache: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.feast.registry.ListValidationReferencesRequest}
 */
proto.feast.registry.ListValidationReferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.feast.registry.ListValidationReferencesRequest;
  return proto.feast.registry.ListValidationReferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.feast.registry.ListValidationReferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.feast.registry.ListValidationReferencesRequest}
 */
proto.feast.registry.ListValidationReferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProject(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowCache(value);
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
proto.feast.registry.ListValidationReferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.feast.registry.ListValidationReferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.feast.registry.ListValidationReferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.ListValidationReferencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProject();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAllowCache();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string project = 1;
 * @return {string}
 */
proto.feast.registry.ListValidationReferencesRequest.prototype.getProject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.feast.registry.ListValidationReferencesRequest} returns this
 */
proto.feast.registry.ListValidationReferencesRequest.prototype.setProject = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool allow_cache = 2;
 * @return {boolean}
 */
proto.feast.registry.ListValidationReferencesRequest.prototype.getAllowCache = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.feast.registry.ListValidationReferencesRequest} returns this
 */
proto.feast.registry.ListValidationReferencesRequest.prototype.setAllowCache = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.feast.registry.ListValidationReferencesResponse.repeatedFields_ = [1];



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
proto.feast.registry.ListValidationReferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.feast.registry.ListValidationReferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.feast.registry.ListValidationReferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.ListValidationReferencesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    validationReferencesList: jspb.Message.toObjectList(msg.getValidationReferencesList(),
    feast_core_ValidationProfile_pb.ValidationReference.toObject, includeInstance)
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
 * @return {!proto.feast.registry.ListValidationReferencesResponse}
 */
proto.feast.registry.ListValidationReferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.feast.registry.ListValidationReferencesResponse;
  return proto.feast.registry.ListValidationReferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.feast.registry.ListValidationReferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.feast.registry.ListValidationReferencesResponse}
 */
proto.feast.registry.ListValidationReferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new feast_core_ValidationProfile_pb.ValidationReference;
      reader.readMessage(value,feast_core_ValidationProfile_pb.ValidationReference.deserializeBinaryFromReader);
      msg.addValidationReferences(value);
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
proto.feast.registry.ListValidationReferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.feast.registry.ListValidationReferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.feast.registry.ListValidationReferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.ListValidationReferencesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValidationReferencesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      feast_core_ValidationProfile_pb.ValidationReference.serializeBinaryToWriter
    );
  }
};


/**
 * repeated feast.core.ValidationReference validation_references = 1;
 * @return {!Array<!proto.feast.core.ValidationReference>}
 */
proto.feast.registry.ListValidationReferencesResponse.prototype.getValidationReferencesList = function() {
  return /** @type{!Array<!proto.feast.core.ValidationReference>} */ (
    jspb.Message.getRepeatedWrapperField(this, feast_core_ValidationProfile_pb.ValidationReference, 1));
};


/**
 * @param {!Array<!proto.feast.core.ValidationReference>} value
 * @return {!proto.feast.registry.ListValidationReferencesResponse} returns this
*/
proto.feast.registry.ListValidationReferencesResponse.prototype.setValidationReferencesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.feast.core.ValidationReference=} opt_value
 * @param {number=} opt_index
 * @return {!proto.feast.core.ValidationReference}
 */
proto.feast.registry.ListValidationReferencesResponse.prototype.addValidationReferences = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.feast.core.ValidationReference, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.feast.registry.ListValidationReferencesResponse} returns this
 */
proto.feast.registry.ListValidationReferencesResponse.prototype.clearValidationReferencesList = function() {
  return this.setValidationReferencesList([]);
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
proto.feast.registry.DeleteValidationReferenceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.feast.registry.DeleteValidationReferenceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.feast.registry.DeleteValidationReferenceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.DeleteValidationReferenceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    project: jspb.Message.getFieldWithDefault(msg, 2, ""),
    commit: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.feast.registry.DeleteValidationReferenceRequest}
 */
proto.feast.registry.DeleteValidationReferenceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.feast.registry.DeleteValidationReferenceRequest;
  return proto.feast.registry.DeleteValidationReferenceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.feast.registry.DeleteValidationReferenceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.feast.registry.DeleteValidationReferenceRequest}
 */
proto.feast.registry.DeleteValidationReferenceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProject(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCommit(value);
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
proto.feast.registry.DeleteValidationReferenceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.feast.registry.DeleteValidationReferenceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.feast.registry.DeleteValidationReferenceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.feast.registry.DeleteValidationReferenceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProject();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCommit();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.feast.registry.DeleteValidationReferenceRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.feast.registry.DeleteValidationReferenceRequest} returns this
 */
proto.feast.registry.DeleteValidationReferenceRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string project = 2;
 * @return {string}
 */
proto.feast.registry.DeleteValidationReferenceRequest.prototype.getProject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.feast.registry.DeleteValidationReferenceRequest} returns this
 */
proto.feast.registry.DeleteValidationReferenceRequest.prototype.setProject = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool commit = 3;
 * @return {boolean}
 */
proto.feast.registry.DeleteValidationReferenceRequest.prototype.getCommit = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.feast.registry.DeleteValidationReferenceRequest} returns this
 */
proto.feast.registry.DeleteValidationReferenceRequest.prototype.setCommit = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


goog.object.extend(exports, proto.feast.registry);

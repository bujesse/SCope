/**
 * @fileoverview gRPC-Web generated client stub for scope
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.scope = require('./s_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.scope.MainClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.scope.MainPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.scope.MainClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.scope.MainClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.scope.CellColorByFeaturesRequest,
 *   !proto.scope.CellColorByFeaturesReply>}
 */
const methodInfo_Main_getCellColorByFeatures = new grpc.web.AbstractClientBase.MethodInfo(
  proto.scope.CellColorByFeaturesReply,
  /** @param {!proto.scope.CellColorByFeaturesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.scope.CellColorByFeaturesReply.deserializeBinary
);


/**
 * @param {!proto.scope.CellColorByFeaturesRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.scope.CellColorByFeaturesReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.scope.CellColorByFeaturesReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.scope.MainClient.prototype.getCellColorByFeatures =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/scope.Main/getCellColorByFeatures',
      request,
      metadata,
      methodInfo_Main_getCellColorByFeatures,
      callback);
};


/**
 * @param {!proto.scope.CellColorByFeaturesRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.scope.CellColorByFeaturesReply>}
 *     The XHR Node Readable Stream
 */
proto.scope.MainPromiseClient.prototype.getCellColorByFeatures =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getCellColorByFeatures(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.scope.CellAUCValuesByFeaturesRequest,
 *   !proto.scope.CellAUCValuesByFeaturesReply>}
 */
const methodInfo_Main_getCellAUCValuesByFeatures = new grpc.web.AbstractClientBase.MethodInfo(
  proto.scope.CellAUCValuesByFeaturesReply,
  /** @param {!proto.scope.CellAUCValuesByFeaturesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.scope.CellAUCValuesByFeaturesReply.deserializeBinary
);


/**
 * @param {!proto.scope.CellAUCValuesByFeaturesRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.scope.CellAUCValuesByFeaturesReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.scope.CellAUCValuesByFeaturesReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.scope.MainClient.prototype.getCellAUCValuesByFeatures =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/scope.Main/getCellAUCValuesByFeatures',
      request,
      metadata,
      methodInfo_Main_getCellAUCValuesByFeatures,
      callback);
};


/**
 * @param {!proto.scope.CellAUCValuesByFeaturesRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.scope.CellAUCValuesByFeaturesReply>}
 *     The XHR Node Readable Stream
 */
proto.scope.MainPromiseClient.prototype.getCellAUCValuesByFeatures =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getCellAUCValuesByFeatures(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.scope.CellMetaDataRequest,
 *   !proto.scope.CellMetaDataReply>}
 */
const methodInfo_Main_getCellMetaData = new grpc.web.AbstractClientBase.MethodInfo(
  proto.scope.CellMetaDataReply,
  /** @param {!proto.scope.CellMetaDataRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.scope.CellMetaDataReply.deserializeBinary
);


/**
 * @param {!proto.scope.CellMetaDataRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.scope.CellMetaDataReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.scope.CellMetaDataReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.scope.MainClient.prototype.getCellMetaData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/scope.Main/getCellMetaData',
      request,
      metadata,
      methodInfo_Main_getCellMetaData,
      callback);
};


/**
 * @param {!proto.scope.CellMetaDataRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.scope.CellMetaDataReply>}
 *     The XHR Node Readable Stream
 */
proto.scope.MainPromiseClient.prototype.getCellMetaData =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getCellMetaData(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.scope.FeatureRequest,
 *   !proto.scope.FeatureReply>}
 */
const methodInfo_Main_getFeatures = new grpc.web.AbstractClientBase.MethodInfo(
  proto.scope.FeatureReply,
  /** @param {!proto.scope.FeatureRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.scope.FeatureReply.deserializeBinary
);


/**
 * @param {!proto.scope.FeatureRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.scope.FeatureReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.scope.FeatureReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.scope.MainClient.prototype.getFeatures =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/scope.Main/getFeatures',
      request,
      metadata,
      methodInfo_Main_getFeatures,
      callback);
};


/**
 * @param {!proto.scope.FeatureRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.scope.FeatureReply>}
 *     The XHR Node Readable Stream
 */
proto.scope.MainPromiseClient.prototype.getFeatures =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getFeatures(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.scope.CoordinatesRequest,
 *   !proto.scope.CoordinatesReply>}
 */
const methodInfo_Main_getCoordinates = new grpc.web.AbstractClientBase.MethodInfo(
  proto.scope.CoordinatesReply,
  /** @param {!proto.scope.CoordinatesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.scope.CoordinatesReply.deserializeBinary
);


/**
 * @param {!proto.scope.CoordinatesRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.scope.CoordinatesReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.scope.CoordinatesReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.scope.MainClient.prototype.getCoordinates =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/scope.Main/getCoordinates',
      request,
      metadata,
      methodInfo_Main_getCoordinates,
      callback);
};


/**
 * @param {!proto.scope.CoordinatesRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.scope.CoordinatesReply>}
 *     The XHR Node Readable Stream
 */
proto.scope.MainPromiseClient.prototype.getCoordinates =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getCoordinates(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.scope.RegulonMetaDataRequest,
 *   !proto.scope.RegulonMetaDataReply>}
 */
const methodInfo_Main_getRegulonMetaData = new grpc.web.AbstractClientBase.MethodInfo(
  proto.scope.RegulonMetaDataReply,
  /** @param {!proto.scope.RegulonMetaDataRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.scope.RegulonMetaDataReply.deserializeBinary
);


/**
 * @param {!proto.scope.RegulonMetaDataRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.scope.RegulonMetaDataReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.scope.RegulonMetaDataReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.scope.MainClient.prototype.getRegulonMetaData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/scope.Main/getRegulonMetaData',
      request,
      metadata,
      methodInfo_Main_getRegulonMetaData,
      callback);
};


/**
 * @param {!proto.scope.RegulonMetaDataRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.scope.RegulonMetaDataReply>}
 *     The XHR Node Readable Stream
 */
proto.scope.MainPromiseClient.prototype.getRegulonMetaData =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getRegulonMetaData(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.scope.MarkerGenesRequest,
 *   !proto.scope.MarkerGenesReply>}
 */
const methodInfo_Main_getMarkerGenes = new grpc.web.AbstractClientBase.MethodInfo(
  proto.scope.MarkerGenesReply,
  /** @param {!proto.scope.MarkerGenesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.scope.MarkerGenesReply.deserializeBinary
);


/**
 * @param {!proto.scope.MarkerGenesRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.scope.MarkerGenesReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.scope.MarkerGenesReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.scope.MainClient.prototype.getMarkerGenes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/scope.Main/getMarkerGenes',
      request,
      metadata,
      methodInfo_Main_getMarkerGenes,
      callback);
};


/**
 * @param {!proto.scope.MarkerGenesRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.scope.MarkerGenesReply>}
 *     The XHR Node Readable Stream
 */
proto.scope.MainPromiseClient.prototype.getMarkerGenes =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getMarkerGenes(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.scope.MyLoomsRequest,
 *   !proto.scope.MyLoomsReply>}
 */
const methodInfo_Main_getMyLooms = new grpc.web.AbstractClientBase.MethodInfo(
  proto.scope.MyLoomsReply,
  /** @param {!proto.scope.MyLoomsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.scope.MyLoomsReply.deserializeBinary
);


/**
 * @param {!proto.scope.MyLoomsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.scope.MyLoomsReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.scope.MyLoomsReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.scope.MainClient.prototype.getMyLooms =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/scope.Main/getMyLooms',
      request,
      metadata,
      methodInfo_Main_getMyLooms,
      callback);
};


/**
 * @param {!proto.scope.MyLoomsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.scope.MyLoomsReply>}
 *     The XHR Node Readable Stream
 */
proto.scope.MainPromiseClient.prototype.getMyLooms =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getMyLooms(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.scope.TranslateLassoSelectionRequest,
 *   !proto.scope.TranslateLassoSelectionReply>}
 */
const methodInfo_Main_translateLassoSelection = new grpc.web.AbstractClientBase.MethodInfo(
  proto.scope.TranslateLassoSelectionReply,
  /** @param {!proto.scope.TranslateLassoSelectionRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.scope.TranslateLassoSelectionReply.deserializeBinary
);


/**
 * @param {!proto.scope.TranslateLassoSelectionRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.scope.TranslateLassoSelectionReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.scope.TranslateLassoSelectionReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.scope.MainClient.prototype.translateLassoSelection =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/scope.Main/translateLassoSelection',
      request,
      metadata,
      methodInfo_Main_translateLassoSelection,
      callback);
};


/**
 * @param {!proto.scope.TranslateLassoSelectionRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.scope.TranslateLassoSelectionReply>}
 *     The XHR Node Readable Stream
 */
proto.scope.MainPromiseClient.prototype.translateLassoSelection =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.translateLassoSelection(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.scope.CellIDsRequest,
 *   !proto.scope.CellIDsReply>}
 */
const methodInfo_Main_getCellIDs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.scope.CellIDsReply,
  /** @param {!proto.scope.CellIDsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.scope.CellIDsReply.deserializeBinary
);


/**
 * @param {!proto.scope.CellIDsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.scope.CellIDsReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.scope.CellIDsReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.scope.MainClient.prototype.getCellIDs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/scope.Main/getCellIDs',
      request,
      metadata,
      methodInfo_Main_getCellIDs,
      callback);
};


/**
 * @param {!proto.scope.CellIDsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.scope.CellIDsReply>}
 *     The XHR Node Readable Stream
 */
proto.scope.MainPromiseClient.prototype.getCellIDs =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getCellIDs(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.scope.GeneSetEnrichmentRequest,
 *   !proto.scope.GeneSetEnrichmentReply>}
 */
const methodInfo_Main_doGeneSetEnrichment = new grpc.web.AbstractClientBase.MethodInfo(
  proto.scope.GeneSetEnrichmentReply,
  /** @param {!proto.scope.GeneSetEnrichmentRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.scope.GeneSetEnrichmentReply.deserializeBinary
);


/**
 * @param {!proto.scope.GeneSetEnrichmentRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.scope.GeneSetEnrichmentReply>}
 *     The XHR Node Readable Stream
 */
proto.scope.MainClient.prototype.doGeneSetEnrichment =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/scope.Main/doGeneSetEnrichment',
      request,
      metadata,
      methodInfo_Main_doGeneSetEnrichment);
};


/**
 * @param {!proto.scope.GeneSetEnrichmentRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.scope.GeneSetEnrichmentReply>}
 *     The XHR Node Readable Stream
 */
proto.scope.MainPromiseClient.prototype.doGeneSetEnrichment =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/scope.Main/doGeneSetEnrichment',
      request,
      metadata,
      methodInfo_Main_doGeneSetEnrichment);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.scope.VmaxRequest,
 *   !proto.scope.VmaxReply>}
 */
const methodInfo_Main_getVmax = new grpc.web.AbstractClientBase.MethodInfo(
  proto.scope.VmaxReply,
  /** @param {!proto.scope.VmaxRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.scope.VmaxReply.deserializeBinary
);


/**
 * @param {!proto.scope.VmaxRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.scope.VmaxReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.scope.VmaxReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.scope.MainClient.prototype.getVmax =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/scope.Main/getVmax',
      request,
      metadata,
      methodInfo_Main_getVmax,
      callback);
};


/**
 * @param {!proto.scope.VmaxRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.scope.VmaxReply>}
 *     The XHR Node Readable Stream
 */
proto.scope.MainPromiseClient.prototype.getVmax =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getVmax(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.scope.UUIDRequest,
 *   !proto.scope.UUIDReply>}
 */
const methodInfo_Main_getUUID = new grpc.web.AbstractClientBase.MethodInfo(
  proto.scope.UUIDReply,
  /** @param {!proto.scope.UUIDRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.scope.UUIDReply.deserializeBinary
);


/**
 * @param {!proto.scope.UUIDRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.scope.UUIDReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.scope.UUIDReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.scope.MainClient.prototype.getUUID =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/scope.Main/getUUID',
      request,
      metadata,
      methodInfo_Main_getUUID,
      callback);
};


/**
 * @param {!proto.scope.UUIDRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.scope.UUIDReply>}
 *     The XHR Node Readable Stream
 */
proto.scope.MainPromiseClient.prototype.getUUID =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getUUID(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.scope.RemainingUUIDTimeRequest,
 *   !proto.scope.RemainingUUIDTimeReply>}
 */
const methodInfo_Main_getRemainingUUIDTime = new grpc.web.AbstractClientBase.MethodInfo(
  proto.scope.RemainingUUIDTimeReply,
  /** @param {!proto.scope.RemainingUUIDTimeRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.scope.RemainingUUIDTimeReply.deserializeBinary
);


/**
 * @param {!proto.scope.RemainingUUIDTimeRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.scope.RemainingUUIDTimeReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.scope.RemainingUUIDTimeReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.scope.MainClient.prototype.getRemainingUUIDTime =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/scope.Main/getRemainingUUIDTime',
      request,
      metadata,
      methodInfo_Main_getRemainingUUIDTime,
      callback);
};


/**
 * @param {!proto.scope.RemainingUUIDTimeRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.scope.RemainingUUIDTimeReply>}
 *     The XHR Node Readable Stream
 */
proto.scope.MainPromiseClient.prototype.getRemainingUUIDTime =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getRemainingUUIDTime(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.scope.LoomUploadedRequest,
 *   !proto.scope.LoomUploadedReply>}
 */
const methodInfo_Main_loomUploaded = new grpc.web.AbstractClientBase.MethodInfo(
  proto.scope.LoomUploadedReply,
  /** @param {!proto.scope.LoomUploadedRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.scope.LoomUploadedReply.deserializeBinary
);


/**
 * @param {!proto.scope.LoomUploadedRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.scope.LoomUploadedReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.scope.LoomUploadedReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.scope.MainClient.prototype.loomUploaded =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/scope.Main/loomUploaded',
      request,
      metadata,
      methodInfo_Main_loomUploaded,
      callback);
};


/**
 * @param {!proto.scope.LoomUploadedRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.scope.LoomUploadedReply>}
 *     The XHR Node Readable Stream
 */
proto.scope.MainPromiseClient.prototype.loomUploaded =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.loomUploaded(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.scope.MyGeneSetsRequest,
 *   !proto.scope.MyGeneSetsReply>}
 */
const methodInfo_Main_getMyGeneSets = new grpc.web.AbstractClientBase.MethodInfo(
  proto.scope.MyGeneSetsReply,
  /** @param {!proto.scope.MyGeneSetsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.scope.MyGeneSetsReply.deserializeBinary
);


/**
 * @param {!proto.scope.MyGeneSetsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.scope.MyGeneSetsReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.scope.MyGeneSetsReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.scope.MainClient.prototype.getMyGeneSets =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/scope.Main/getMyGeneSets',
      request,
      metadata,
      methodInfo_Main_getMyGeneSets,
      callback);
};


/**
 * @param {!proto.scope.MyGeneSetsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.scope.MyGeneSetsReply>}
 *     The XHR Node Readable Stream
 */
proto.scope.MainPromiseClient.prototype.getMyGeneSets =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getMyGeneSets(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.scope.DeleteUserFileRequest,
 *   !proto.scope.DeleteUserFileReply>}
 */
const methodInfo_Main_deleteUserFile = new grpc.web.AbstractClientBase.MethodInfo(
  proto.scope.DeleteUserFileReply,
  /** @param {!proto.scope.DeleteUserFileRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.scope.DeleteUserFileReply.deserializeBinary
);


/**
 * @param {!proto.scope.DeleteUserFileRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.scope.DeleteUserFileReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.scope.DeleteUserFileReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.scope.MainClient.prototype.deleteUserFile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/scope.Main/deleteUserFile',
      request,
      metadata,
      methodInfo_Main_deleteUserFile,
      callback);
};


/**
 * @param {!proto.scope.DeleteUserFileRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.scope.DeleteUserFileReply>}
 *     The XHR Node Readable Stream
 */
proto.scope.MainPromiseClient.prototype.deleteUserFile =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteUserFile(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.scope.DownloadSubLoomRequest,
 *   !proto.scope.DownloadSubLoomReply>}
 */
const methodInfo_Main_downloadSubLoom = new grpc.web.AbstractClientBase.MethodInfo(
  proto.scope.DownloadSubLoomReply,
  /** @param {!proto.scope.DownloadSubLoomRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.scope.DownloadSubLoomReply.deserializeBinary
);


/**
 * @param {!proto.scope.DownloadSubLoomRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.scope.DownloadSubLoomReply>}
 *     The XHR Node Readable Stream
 */
proto.scope.MainClient.prototype.downloadSubLoom =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/scope.Main/downloadSubLoom',
      request,
      metadata,
      methodInfo_Main_downloadSubLoom);
};


/**
 * @param {!proto.scope.DownloadSubLoomRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.scope.DownloadSubLoomReply>}
 *     The XHR Node Readable Stream
 */
proto.scope.MainPromiseClient.prototype.downloadSubLoom =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/scope.Main/downloadSubLoom',
      request,
      metadata,
      methodInfo_Main_downloadSubLoom);
};


module.exports = proto.scope;


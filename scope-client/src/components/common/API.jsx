class API {
	constructor() {
		this.GBC = require("grpc-bus-websocket-client");
		this.GBCConnection = new this.GBC("ws://localhost:8081/", 'src/proto/s.proto', { scope: { Main: 'localhost:50052' } }).connect();

		this.loomFiles = [];
		this.activeLoom = null;
		this.activeLoomChangeListeners = [];

		this.features = {
			'gene': {
				0: {type: 'gene', value: ''},
				1: {type: 'gene', value: ''},
				2: {type: 'gene', value: ''}
			},
			'regulon': {
				0: {type: 'regulon', value: ''},
				1: {type: 'regulon', value: ''},
				2: {type: 'regulon', value: ''}
			},
		};
		this.thresholds = [0, 0, 0];
		this.featureChangeListeners = [];

		this.settings = {
			hasLogTransform: true,
			hasCpmNormalization: true
		}
		this.settingsChangeListeners = [];

		this.viewerTool = 's-zoom';
		this.viewerToolChangeListeners = [];

		this.viewerSelections = [];
		this.viewerSelectionsChangeListeners = [];
	}

	getConnection() {
		return this.GBCConnection;
	}


	getActiveLoom() {
		return this.activeLoom;
	}

	getActiveLoomMetadata() {
		return this.loomFiles[this.activeLoom];
	}

	setLoomFiles(files) {		
		this.loomFiles = {};
		Object.keys(files).map((i) => {
			let file = files[i];
			this.loomFiles[file.loomFilePath] = file;
		});
		console.log(this.loomFiles);
	}

	setActiveLoom(loom) {
		this.activeLoom = loom;
		let file = this.loomFiles[this.activeLoom];
		this.activeLoomChangeListeners.forEach((listener) => {
			listener(this.activeLoom, file);
		})
	}

	onActiveLoomChange(listener) {
		this.activeLoomChangeListeners.push(listener);
	}

	removeActiveLoomChange(listener) {
		let i = this.activeLoomChangeListeners.indexOf(listener);
		if (i > -1) {
			this.activeLoomChangeListeners.splice(i, 1);
		}
	}



	getActiveFeatures(type) {
		return this.features[type];
	}

	setActiveFeature(featureId, featureType, featureValue) {
		let threshold = 0;
		if (featureType == 'regulon') {			
			let file = this.loomFiles[this.activeLoom];
			if (file.fileMetaData.hasRegulonsAUC) {
				file.regulonMetaData.regulons.map((reg) => {
					if (reg.name == featureValue) {
						threshold = reg.autoThresholds[0].threshold;
						console.log('set threshold', featureValue, threshold)
					}
				})
			}			
		}
		this.features[featureType][featureId] = { type: featureType, value: featureValue, threshold: threshold }
		this.featureChangeListeners.forEach((listener) => {
			listener(this.features[featureType], featureId);
		})
	}

	onActiveFeaturesChange(listener) {
		this.featureChangeListeners.push(listener);
	}

	removeActiveFeaturesChange(listener) {
		let i = this.featureChangeListeners.indexOf(listener);
		if (i > -1) {
			this.featureChangeListeners.splice(i, 1);
		}
	}

	getThresholds() {
		return this.thresholds;
	}

	setThresholds(thresholds) {
		this.thresholds = thresholds;
	}

	getSettings() {
		return this.settings;
	}

	setSetting(key, value) {
		this.settings[key] = value;
		this.settingsChangeListeners.forEach((listener) => {
			listener(this.settings);
		})
	}

	onSettingsChange(listener) {
		this.settingsChangeListeners.push(listener);
	}
	
	removeSettingsChange(listener) {
		let i = this.settingsChangeListeners.indexOf(listener)
		if (i > -1) {
			this.settingsChangeListeners.splice(i, 1);
		}
	};
	
	getViewerTool() {
		return this.viewerTool;
	}

	setViewerTool(tool) {
		this.viewerTool = tool;
		this.viewerToolChangeListeners.forEach((listener) => {
			listener(this.viewerTool);
		})
	}

	onViewerToolChange(listener) {
		this.viewerToolChangeListeners.push(listener);
	}

	removeViewerToolChange(listener) {
		let i = this.viewerToolChangeListeners.indexOf(listener)
		if (i > -1) {
			this.viewerToolChangeListeners.splice(i, 1);
		}
	};
	

	getViewerSelections() {
		return this.viewerSelections;
	}

	addViewerSelection(selection) {
		this.viewerSelections.push(selection);
		this.viewerSelectionsChangeListeners.forEach((listener) => {
			listener(this.viewerSelections);
		});
	}

	toggleLassoSelection(index) {
		this.viewerSelections[index].selected = !this.viewerSelections[index].selected;
		this.viewerSelectionsChangeListeners.forEach((listener) => {
			listener(this.viewerSelections);
		});
	}

	removeViewerSelection(index) {
		this.viewerSelections.splice(index, 1);
		this.viewerSelectionsChangeListeners.forEach((listener) => {
			listener(this.viewerSelections);
		});
	}

	onViewerSelectionsChange(listener) {
		this.viewerSelectionsChangeListeners.push(listener);
	}

	removeViewerSelectionsChange(listener) {
		let i = this.viewerSelectionsChangeListeners.indexOf(listener)
		if (i > -1) {
			this.viewerSelectionsChangeListeners.splice(i, 1);
		}
	};

	clearViewerSelections() {
		this.viewerSelections = [];
	}

}

export let BackendAPI = new API();
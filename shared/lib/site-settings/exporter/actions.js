/**
 * Internal dependencies
 */
import {
	TOGGLE_EXPORTER_ADVANCED_SETTINGS,
	TOGGLE_EXPORTER_SECTION
} from '../action-types';

/**
 * Toggle the visibility of the Advanced Settings panel
 * @param  {Number}          siteId Site ID
 * @return {Function}        Action thunk
 */
export function toggleAdvancedSettings() {
	return {
		type: TOGGLE_EXPORTER_ADVANCED_SETTINGS
	};
}

/**
 * Returns an action object to be used in signalling that a network request for
 * Publicize connections has been received.
 *
 * @param  {Number} siteId Site ID
 * @param  {Object} data   API response
 * @return {Object}        Action object
 */
export function toggleSection( section ) {
	return {
		type: TOGGLE_EXPORTER_SECTION,
		section
	};
}

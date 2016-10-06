/**
 * @author https://github.com/acvetkov
 * @overview Chrome Api Promise wrapper
 */

export const api = {
    tabs: {
        /**
         * Wrapper for chrome.tabs.query
         * @param {Object} criteria
         * @returns {Promise}
         */
        query(criteria) {
            return new Promise((resolve, reject) => {
                chrome.tabs.query(criteria, tabs => {
                    if (chrome.runtime.lastError) {
                        reject(chrome.runtime.lastError);
                    } else {
                        resolve(tabs);
                    }
                });
            });
        }
    }
};

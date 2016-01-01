import _ from 'lodash';

export default {

    props: [],

    /**
     * Cache property
     * @param {Object} object
     * @param {String} namespace
     * @param {String} property
     */
    cache: function (object, namespace, property) {
        this.props.push({object, namespace, property});
    },

    /**
     * Flush property value
     */
    flush: function () {
        this.props.forEach(prop => {
            _.set(prop.object, `${prop.namespace}.${prop.property}`, undefined);
        });
    }
};

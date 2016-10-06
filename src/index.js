/**
 * @author https://github.com/acvetkov
 * @overview Entry point
 */

import extensionsApi from './extensions';
import plugins from './plugins';

extensionsApi.plugins = plugins;

export default extensionsApi;

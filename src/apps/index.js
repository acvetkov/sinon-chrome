/**
 * @author https://github.com/acvetkov
 * @overview Apps entry point
 */

import config from '../../config/stable-api-apps.json';
import Api from '../api';

export default new Api(config).create();

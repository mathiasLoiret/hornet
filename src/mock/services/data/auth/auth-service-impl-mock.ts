import { Logger } from "hornet-js-logger/src/logger";
import { AuthService } from "src/services/data/auth/auth-service";
import { ServiceSecure } from "hornet-js-core/src/services/service-secure";
import { Response } from "superagent";
import { Promise } from "hornet-js-utils/src/promise-api";

const logger: Logger = Logger.getLogger("tYo.mock.services.data.auth.auth-service-mock-impl");

/**
 * Liste des utilisateurs en mode bouchon
 * @type {any[]}
 */
const users = [
    {
        "name": "test",
        "roles": [{"id": 2, "name": "tYo_USER"}]
    },
    {
        "name": "admin",
        "roles": [{"id": 1, "name": "tYo_ADMIN"}, {"id": 2, "name": "tYo_USER"}]
    }
];

function findByUsername(username) {
    for (let i = 0, len = users.length; i < len; i++) {
        let user = users[ i ];
        if (user.name === username) {
            return user;
        }
    }
    return null;
}

/**
 * Implementation des services pour l'authentification
 * @class
 * @implements {AuthService}
 * @extends {ServiceApi}
 */
export class AuthServiceDataMockImpl extends AuthService {

    /**
     * recherche de l'identité
     * @param {object} data
     */
    auth(data): Promise<any> {
        logger.trace("SERVICES MOCK - auth", data);
        let user = findByUsername(data.login);
        return Promise.resolve(user);
    }

}

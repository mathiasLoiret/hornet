import { Logger } from "hornet-js-logger/src/logger";

const logger: Logger = Logger.getLogger("tYo.mock.routes");


/**
 * Liste des utilisateurs en mode bouchon
 * @type {any[]}
 */
let users = [
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
    for (var i = 0, len = users.length; i < len; i++) {
        var user = users[i];
        if (user.name === username) {
            return user;
        }
    }
    return null;
}

export class BouchonRoutes {

    static build(router) {

        router.post("/utilisateurs/auth", function() {
            var user = findByUsername(this.req.body.login);
            this.res.json({
                "hasTechnicalError": false,
                "hasBusinessError": false,
                "status": 200,
                "url": "url",
                "errors": [],
                "data":user});
        });

        router.post("/contact/envoyer", function() {
            this.res.json({
                "hasTechnicalError": false,
                "hasBusinessError": false,
                "status": 200,
                "url": "url",
                "errors": [],
                "data":{
                    message: "Courriel envoyé"
                }});
        });

    }
}


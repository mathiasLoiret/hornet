import { Logger } from "hornet-js-logger/src/logger";
import { RouteActionService } from "hornet-js-core/src/routes/abstract-routes";
import { ContactService } from "src/services/page/cnt/contact-service-page";
import { Promise } from "hornet-js-utils/src/promise-api";

const logger: Logger = Logger.getLogger("tYo.actions.cnt.gen-cnt-actions");

/**
 * Appel le service distant pour réaliser l"envoi de la demande de contact.
 */
export class Send extends RouteActionService<any, ContactService> {
    execute(): Promise<any> {
        logger.trace("ACTION Send - Appel API : ContactApi.send - Dispatch CONTACT_SENT");

        if (this.req.body) {
            return this.getService().envoyer(this.req.body);
        }
    }
}

// This files contains resolvers for account specific operations

// CUSTOM LIBS

// SERVICES
import { AccountsService } from '../../services/accounting/AccountsService';

// Initializing the service used for handling accounting operations
var accountsService = new AccountsService();

/**
 * @returns Whether login was successfull or not
 * @param email The email associated with the Twitter account to be logged into
 * @param userName The username of the user of the Twitter account
 * @param password The password to the Twitter account
 */
export async function resolveUserLogin(email: string, userName: string, password: string): Promise<boolean> {
    // Logging into the given account
    return accountsService.login(email, userName, password)
    .then(res => {
        // If error
        if(res.error) throw res.error        
        // if no error
        else return res.success
    });
}
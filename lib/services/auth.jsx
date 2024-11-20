import { Account, Avatars, Databases, ID, Query } from 'react-native-appwrite';
import { client, config } from '../appwrite';

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export async function loginUser(email, password) {
    try {
        const session = await account.createEmailPasswordSession(email, password)

        return session;
    } catch (error) {
        throw new Error(error);
    }
}

export async function logoutUser() {
    try {
        const result = await account.deleteSessions()
    } catch (error) {
        throw new Error(error);
    }
}

export async function registerUser(first_name, last_name, email, password) {

    username = first_name + "_" + last_name
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )

        if (!newAccount) throw Error;

        const avatar = avatars.getInitials(first_name)

        await loginUser(email, password)

        const newUser = await databases.createDocument(
            config.databaseId,
            config.usersCollectionId,
            ID.unique(),
            {
                user_id: newAccount.$id,
                email,
                first_name,
                last_name,
                avatar
            }
        )

        return newUser;
    } catch (error) {
        throw new Error(error);
    }
}

export async function getUser() {
    try {
        const currentAccount = await account.get();

        if (!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(
            config.databaseId,
            config.usersCollectionId,
            [Query.equal('user_id', currentAccount.$id)]
        )

        if (!currentUser) throw Error;

        return currentUser.documents[0]
    } catch(error) {
        throw new Error(error);
    }
}
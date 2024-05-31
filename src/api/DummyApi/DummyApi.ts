import { FetchError } from 'ofetch';

const apiFetch = $fetch.create({
    baseURL: 'https://dummyjson.com',
});

interface LoginFieldsErrors {
    message?: string;
}

export class LoginError extends Error {
    fieldsErrors: LoginFieldsErrors;

    constructor(message: string, opts?: LoginFieldsErrors) {
        super(message);

        this.fieldsErrors = opts ?? {};
    }
}

const DummyApi = {
    async login(email: string, password: string): Promise<string> {
        try {
            const response: any = await apiFetch('/auth/login', {
                method: 'POST',
                body: {
                    username: email,
                    password,
                },
            });

            return response.token;
        } catch (e) {
            if (e instanceof FetchError) {
                throw new LoginError(e.message, {
                    message: e.data.message,
                });
            }

            throw new Error();
        }
    },
};

export default DummyApi;

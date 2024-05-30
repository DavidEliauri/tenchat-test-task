const apiFetch = $fetch.create({
    baseURL: 'https://dummyjson.com',
});

const DummyApi = {
    async login(email: string, password: string) {
        const response = await apiFetch('/auth/login', {
            method: 'POST',
            body: {
                username: email,
                password,
            },
        });

        console.log(response);
    },
};

export default DummyApi;

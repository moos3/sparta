// web/src/services/api.js
import { UserServiceClient } from './proto/service_grpc_web_pb';
import { CreateUserRequest, GetUserRequest, UpdateUserRequest, DeleteUserRequest, ListUsersRequest, InviteUserRequest, ValidateInviteRequest } from './proto/service_pb';

const client = new UserServiceClient('http://localhost:8080', null, null);

// Get API key from local storage or prompt user
const getApiKey = () => {
    let apiKey = localStorage.getItem('api_key');
    if (!apiKey) {
        apiKey = prompt('Please enter your API key:');
        if (apiKey) {
            localStorage.setItem('api_key', apiKey);
        } else {
            return 'test-api-key-1234567890'; // Fallback for testing
        }
    }
    return apiKey;
};

export const createUser = (email, name) => {
    return new Promise((resolve, reject) => {
        const request = new CreateUserRequest();
        request.setEmail(email);
        request.setName(name);

        client.createUser(request, { 'x-api-key': getApiKey() }, (err, response) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(response.toObject());
        });
    });
};

export const getUser = (userId) => {
    return new Promise((resolve, reject) => {
        const request = new GetUserRequest();
        request.setUserId(userId);

        client.getUser(request, { 'x-api-key': getApiKey() }, (err, response) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(response.toObject());
        });
    });
};

export const updateUser = (userId, email, name) => {
    return new Promise((resolve, reject) => {
        const request = new UpdateUserRequest();
        request.setUserId(userId);
        request.setEmail(email);
        request.setName(name);

        client.updateUser(request, { 'x-api-key': getApiKey() }, (err, response) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(response.toObject());
        });
    });
};

export const deleteUser = (userId) => {
    return new Promise((resolve, reject) => {
        const request = new DeleteUserRequest();
        request.setUserId(userId);

        client.deleteUser(request, { 'x-api-key': getApiKey() }, (err, response) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(response.toObject());
        });
    });
};

export const listUsers = () => {
    return new Promise((resolve, reject) => {
        const request = new ListUsersRequest();
        client.listUsers(request, { 'x-api-key': getApiKey() }, (err, response) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(response.toObject().usersList);
        });
    });
};

export const inviteUser = (email) => {
    return new Promise((resolve, reject) => {
        const request = new InviteUserRequest();
        request.setEmail(email);

        client.inviteUser(request, { 'x-api-key': getApiKey() }, (err, response) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(response.toObject());
        });
    });
};

export const validateInvite = (token) => {
    return new Promise((resolve, reject) => {
        const request = new ValidateInviteRequest();
        request.setToken(token);

        client.validateInvite(request, { 'x-api-key': getApiKey() }, (err, response) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(response.toObject());
        });
    });
};
import {getInput} from "@actions/core";

export const githubToken = getInput('github-token');
export const refreshToken = getInput('refresh-token');
export const clientId = getInput('client-id');
export const clientSecret = getInput('client-secret');
export const forcePush = getInput('force-push');

import {context, getOctokit} from "@actions/github";
import {githubToken} from "./config";

const sha = context.payload.pull_request?.head.sha ?? context.sha;
const octokit = getOctokit(githubToken);

export const report = async (result: string) =>
  octokit
    .checks
    .create({
      ...context.repo,
      head_sha: sha,
      name: 'Google Script',
      conclusion: 'success',
      external_id: 'google-script-action',
      output: {
        title: 'Google Script Result',
        summary: 'Push successful',
        text: `.\n${result}`,
      },
      actions: [{
        label: "Deploy",
        identifier: "google-script-deploy",
        description: "Deploy to google script"
      }]
    });

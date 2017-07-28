const _ = require('lodash');
const config = require('../nconf').get('dispatcher').github;
const GithubApi = require('github');
const limit = require('promise-limit')(5);
const path = require('path');
const render = require('./renderer');

const github = new GithubApi();

function createIssue(owner, repo, title, body, labels) {
    github.authenticate(config.authentication);

    return github.issues.create({
        owner,
        repo,
        title,
        body,
        labels,
    });
}

function onError(err) {
    console.error(err);
}

function dispatch(ad) {
    const rendered = render(ad, 'markdown');
    const labels = _.compact([].concat(config.labels, ad.tags));
    
    return limit(() => createIssue(config.repoOwner, config.repoName, rendered.title, rendered.body, labels).catch(onError));
}

module.exports = dispatch;

var ComponentRegistry = require('./../../../core/ComponentRegistry');

ComponentRegistry
    .add('github.pull_requests',                 require('./PullRequests.jsx'))
    .add('github.user_badge',                    require('./UserBadge.jsx'))
    .add('github.repository_contributors_stats', require('./RepositoryContributorsStats.jsx'))
    .add('github.branches',                      require('./Branches.jsx'))
;
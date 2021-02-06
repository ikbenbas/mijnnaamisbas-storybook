module.exports = {
    // extends: ['@commitlint/config-conventional'],
    rules: {
        // 'jira-issue-empty-rule': [2, 'always'],
        // 'jira-subject-empty-rule': [2, 'always'],
    },
    parserPreset: {
        parserOpts: {
            headerPattern: /^\[([A-Z]+-\d+)\]\s(.+)$/,
            headerCorrespondence: ['issue', 'subject'],
        },
    },
    plugins: [
        {
            rules: {
                'jira-issue-empty-rule': ({ issue }) => {
                    return [
                        issue !== null,
                        `Issue number can not be empty, format must be "[ISSUE-01] Subject"`,
                    ];
                },
                'jira-subject-empty-rule': ({ subject }) => {
                    return [
                        subject !== null,
                        `Subject number can not be empty, format must be "[ISSUE-01] Subject`,
                    ];
                },
            },
        },
    ],
};

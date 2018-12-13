﻿
require.config({
    baseUrl: "js",
    paths: {
        jquery: "lib/jQuery/dist/jquery.min",
        knockout: "lib/knockout/dist/knockout.debug",
        dataService: "services/ds",
        jqcloud: 'lib/jqcloud2/dist/jqcloud',
        text: "lib/text/text",
        postman: 'services/postman'

    },
    shim: {
        // set default deps
        'jqcloud': ['jquery']
    }
});

// register components
require(['knockout'], function (ko) {

    ko.components.register("question-list",
        {
            viewModel: { require: 'components/QuestionList/questionList' },
            template: { require: 'text!components/QuestionList/questionListView.html' }
        });

    ko.components.register("question",
        {
            viewModel: { require: 'components/Question/question' },
            template: { require: 'text!components/Question/questionView.html' }
        });
    ko.components.register("Cloud", {
        viewModel: { require: 'components/Cloud/wordCloud' },
        template: { require: 'text!components/Cloud/wordCloudView.html' }
    });
    ko.components.register("userPage", {
        viewModel: { require: 'components/User/user' },
        template: { require: 'text!components/User/userView.html' }
    });
});

require(['knockout', 'app/questions', 'jqcloud'], function (ko, questionVm) {
    ko.applyBindings(questionVm);
});
var getUserRepos = function(user) {
    var apiURL = "https://api.github.com/users/octocat/repos";

    fetch(apiURL).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    });
};

getUserRepos();